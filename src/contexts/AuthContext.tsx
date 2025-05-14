import React, { createContext, useContext, useState, useEffect } from 'react';
import { Session, User } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/components/ui/use-toast';
import { useNavigate, useLocation } from 'react-router-dom';

type AuthContextType = {
  session: Session | null;
  user: User | null;
  profile: any | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, fullName: string) => Promise<void>;
  signOut: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Set up auth state listener FIRST
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, newSession) => {
        console.log("Auth state changed", _event, newSession?.user?.email);
        setSession(newSession);
        setUser(newSession?.user ?? null);
        
        if (newSession?.user) {
          // Fetch the user profile in a separate call
          setTimeout(() => {
            fetchUserProfile(newSession.user.id);
          }, 0);
          
          // Auto-redirect to customer panel when user logs in
          if (_event === 'SIGNED_IN') {
            toast({
              title: "Sign in successful",
              description: "Welcome to your customer panel!",
              duration: 3000,
            });
            setTimeout(() => {
              navigate('/customer-panel');
            }, 500);
          }
        } else {
          setProfile(null);
          
          // Auto-redirect to login page when user logs out
          if (_event === 'SIGNED_OUT') {
            navigate('/auth/login');
          }
        }
      }
    );

    // THEN check for existing session
    supabase.auth.getSession().then(({ data: { session: currentSession } }) => {
      console.log("Got existing session", currentSession?.user?.email);
      setSession(currentSession);
      setUser(currentSession?.user ?? null);
      
      if (currentSession?.user) {
        fetchUserProfile(currentSession.user.id);
        
        // Redirect to customer panel if already logged in
        // Only redirect if we're on a public page
        const publicPages = ['/', '/auth/login', '/auth/register', '/auth/reset-password'];
        if (publicPages.includes(location.pathname)) {
          navigate('/customer-panel');
        }
      }
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, [navigate, location.pathname]);

  const fetchUserProfile = async (userId: string) => {
    try {
      console.log("Fetching user profile for", userId);
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .maybeSingle();

      if (error) {
        console.error('Error fetching user profile:', error);
        return;
      }

      console.log("Profile data:", data);
      setProfile(data);
    } catch (error) {
      console.error('Error fetching user profile:', error);
    }
  };

  const signIn = async (email: string, password: string) => {
    try {
      console.log("Signing in with", email);
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        // Handle email confirmation error specially
        if (error.message.includes('Email not confirmed')) {
          toast({
            title: "Email not verified",
            description: "Please check your email and click the verification link to confirm your account.",
            variant: "destructive",
          });
          throw error;
        }
        
        toast({
          title: "Sign in failed",
          description: error.message,
          variant: "destructive",
        });
        throw error;
      }

      if (data.session) {
        console.log("Sign in successful");
        toast({
          title: "Sign in successful",
          description: "Welcome back!",
          duration: 3000,
        });
        
        // Explicitly navigate to customer panel with a delay to ensure state updates
        setTimeout(() => {
          navigate('/customer-panel');
        }, 500);
      } else {
        console.log("No session returned after sign in");
        toast({
          title: "Sign in issue",
          description: "Authentication succeeded but no session was created.",
          variant: "destructive",
        });
      }
    } catch (error: any) {
      console.error('Sign in error:', error);
      throw error;
    }
  };

  const signUp = async (email: string, password: string, fullName: string) => {
    try {
      console.log("Signing up with", email);
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
          },
          emailRedirectTo: window.location.origin + '/auth/verification',
        },
      });

      if (error) {
        toast({
          title: "Sign up failed",
          description: error.message,
          variant: "destructive",
        });
        throw error;
      }

      if (data.user) {
        toast({
          title: "Account created",
          description: "Please check your email to verify your account.",
          duration: 5000,
        });
        navigate('/auth/verification');
      } else {
        toast({
          title: "Sign up issue",
          description: "Account created but verification email could not be sent.",
          variant: "destructive",
        });
      }
    } catch (error: any) {
      console.error('Sign up error:', error);
      throw error;
    }
  };

  const resetPassword = async (email: string) => {
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: window.location.origin + '/auth/update-password',
      });

      if (error) {
        toast({
          title: "Password reset failed",
          description: error.message,
          variant: "destructive",
        });
        throw error;
      }

      toast({
        title: "Password reset email sent",
        description: "Please check your email for password reset instructions.",
        duration: 5000,
      });
    } catch (error: any) {
      console.error('Password reset error:', error);
      throw error;
    }
  };

  const signOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      
      if (error) {
        toast({
          title: "Sign out failed",
          description: error.message,
          variant: "destructive",
        });
        throw error;
      }
      
      toast({
        title: "Signed out",
        description: "You have been signed out successfully.",
      });
      
      navigate('/auth/login');
    } catch (error: any) {
      console.error('Sign out error:', error);
    }
  };

  const value = {
    session,
    user,
    profile,
    loading,
    signIn,
    signUp,
    signOut,
    resetPassword,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
