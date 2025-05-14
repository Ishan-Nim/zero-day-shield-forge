
import React, { createContext, useContext, useState } from 'react';
import { Session, User } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/components/ui/use-toast';

type AuthContextType = {
  session: Session | null;
  user: User | null;
  profile: any | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, fullName: string) => Promise<void>;
  signOut: () => Promise<void>;
};

// Create a mock user and session
const mockUser = {
  id: 'temp-user-id',
  email: 'temp@example.com',
  app_metadata: {},
  user_metadata: { full_name: 'Temporary User' },
  aud: 'authenticated',
  created_at: new Date().toISOString(),
} as User;

const mockSession = {
  access_token: 'mock-token',
  refresh_token: 'mock-refresh-token',
  user: mockUser,
  expires_in: 3600,
} as Session;

const mockProfile = {
  id: 'temp-user-id',
  full_name: 'Temporary User',
  avatar_url: null,
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Provide mock authentication state
  const [session] = useState<Session | null>(mockSession);
  const [user] = useState<User | null>(mockUser);
  const [profile] = useState<any | null>(mockProfile);
  const [loading] = useState(false);
  const { toast } = useToast();

  // Mock authentication functions that do nothing but show toast messages
  const signIn = async (email: string, password: string) => {
    toast({
      title: 'Mock sign in successful',
      description: 'Authentication is temporarily bypassed',
    });
  };

  const signUp = async (email: string, password: string, fullName: string) => {
    toast({
      title: 'Mock sign up successful',
      description: 'Authentication is temporarily bypassed',
    });
  };

  const signOut = async () => {
    toast({
      title: 'Mock sign out',
      description: 'Authentication is temporarily bypassed',
    });
  };

  const value = {
    session,
    user,
    profile,
    loading,
    signIn,
    signUp,
    signOut,
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
