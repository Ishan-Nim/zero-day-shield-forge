
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useSearchParams, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { MailCheck, Loader2 } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';

const Verification = () => {
  const [isActivating, setIsActivating] = useState(false);
  const [verificationStatus, setVerificationStatus] = useState<'pending' | 'success' | 'error'>('pending');
  const { toast } = useToast();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [searchParams] = useSearchParams();
  const location = useLocation();

  // Process both URL hash and query parameters for authentication tokens
  useEffect(() => {
    const processAuth = async () => {
      setIsActivating(true);
      
      try {
        // Extract tokens from URL hash (Supabase can use hash-based auth in some flows)
        const hashParams = new URLSearchParams(location.hash.replace('#', ''));
        const accessToken = hashParams.get('access_token');
        const refreshToken = hashParams.get('refresh_token');
        const type = hashParams.get('type') || searchParams.get('type');
        const token = searchParams.get('token');
        
        console.log("Auth detection:", { 
          hasAccessToken: !!accessToken, 
          hasRefreshToken: !!refreshToken, 
          type, 
          hasToken: !!token,
          hash: location.hash.length > 0
        });

        // Handle hash-based authentication (common in some Supabase redirects)
        if (accessToken && refreshToken) {
          await handleHashAuthentication(accessToken, refreshToken);
          return;
        }
        
        // Handle standard email verification link
        if ((type === 'email_confirmation' || type === 'signup') && token) {
          await handleEmailVerification(token);
          return;
        }
        
        // If we have a hash but couldn't extract tokens, try to process it as a direct auth response
        if (location.hash.length > 1 && location.hash.includes('access_token')) {
          const currentHash = location.hash.substring(1);
          console.log("Attempting to process hash directly:", currentHash.substring(0, 20) + "...");
          
          // Try to extract the session from the URL
          const { data, error } = await supabase.auth.getSession();
          
          if (data?.session) {
            console.log("Session found after hash processing");
            setVerificationStatus('success');
            toast({
              title: "Authentication successful",
              description: "You have been successfully authenticated.",
            });
            
            setTimeout(() => {
              navigate('/customer-panel');
            }, 1500);
            return;
          }
          
          if (error) {
            console.error("Hash processing error:", error);
          }
        }
      } catch (error) {
        console.error('Auth processing error:', error);
        setVerificationStatus('error');
        toast({
          title: "Authentication error",
          description: "There was a problem with the authentication process.",
          variant: "destructive",
        });
      } finally {
        setIsActivating(false);
      }
    };

    // Only try to process auth if we're not already authenticated
    if (!user && (location.hash || searchParams.size > 0)) {
      processAuth();
    }
  }, [location.hash, searchParams, user, navigate, toast]);

  // Check if user is already authenticated
  useEffect(() => {
    if (user) {
      console.log("User already authenticated, redirecting to customer panel");
      navigate('/customer-panel');
    }
  }, [user, navigate]);

  const handleHashAuthentication = async (accessToken: string, refreshToken: string) => {
    try {
      console.log("Setting session with tokens");
      const { data, error } = await supabase.auth.setSession({
        access_token: accessToken,
        refresh_token: refreshToken
      });

      if (error) {
        console.error('Session setup error:', error);
        setVerificationStatus('error');
        toast({
          title: "Authentication failed",
          description: error.message,
          variant: "destructive",
        });
      } else {
        console.log("Session set successfully:", !!data.session);
        setVerificationStatus('success');
        toast({
          title: "Authentication successful",
          description: "You have been successfully authenticated.",
        });
        
        // Small delay before redirecting
        setTimeout(() => {
          navigate('/customer-panel');
        }, 1500);
      }
    } catch (error) {
      console.error('Authentication error:', error);
      setVerificationStatus('error');
      toast({
        title: "Authentication error",
        description: "There was a problem with the authentication process.",
        variant: "destructive",
      });
    } finally {
      setIsActivating(false);
    }
  };

  const handleEmailVerification = async (token: string) => {
    try {
      // Try with signup confirmation type first
      console.log("Verifying OTP with token");
      let verifyResult = await supabase.auth.verifyOtp({
        token_hash: token,
        type: 'signup'
      });

      // If that fails, try with email change type
      if (verifyResult.error) {
        console.log('First verification attempt failed, trying alternate type');
        verifyResult = await supabase.auth.verifyOtp({
          token_hash: token,
          type: 'email_change'
        });
      }

      if (verifyResult.error) {
        console.error('Email verification error:', verifyResult.error);
        setVerificationStatus('error');
        toast({
          title: "Verification failed",
          description: verifyResult.error.message,
          variant: "destructive",
        });
      } else {
        console.log("Verification successful");
        setVerificationStatus('success');
        toast({
          title: "Email verified",
          description: "Your email has been successfully verified.",
        });
        
        // Small delay before redirecting
        setTimeout(() => {
          navigate('/customer-panel');
        }, 1500);
      }
    } catch (error) {
      console.error('Verification error:', error);
      setVerificationStatus('error');
      toast({
        title: "Verification error",
        description: "There was a problem verifying your email.",
        variant: "destructive",
      });
    }
  };

  const handleManualActivation = async () => {
    setIsActivating(true);
    try {
      // Check if the user is already logged in
      const { data: { session } } = await supabase.auth.getSession();
      
      if (session) {
        // If session exists, we consider the user activated
        toast({
          title: "Account activated",
          description: "You are now logged in.",
        });
        navigate('/customer-panel');
      } else {
        // If no session, redirect to login
        toast({
          title: "Please log in",
          description: "Your account has been created. Please log in to continue.",
        });
        navigate('/auth/login');
      }
    } catch (error) {
      toast({
        title: "Activation failed",
        description: "There was an issue activating your account. Please try logging in.",
        variant: "destructive",
      });
    } finally {
      setIsActivating(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-2 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-cyber-primary/10">
            <MailCheck className="h-6 w-6 text-cyber-primary" />
          </div>
          <CardTitle className="text-2xl font-bold">Account Created</CardTitle>
          <CardDescription>
            {verificationStatus === 'success' 
              ? "Your email has been verified successfully!" 
              : verificationStatus === 'error'
                ? "We couldn't verify your email. Please try again."
                : "Your account has been created successfully."}
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          {verificationStatus === 'success' ? (
            <p className="mb-4 text-gray-600">
              You will be redirected to your dashboard shortly.
            </p>
          ) : (
            <>
              <p className="mb-4 text-gray-600">
                {verificationStatus === 'error' 
                  ? "There was a problem verifying your email. Please try logging in or contact support."
                  : "Click the button below to activate your account and access your security dashboard."}
              </p>
              <Button 
                onClick={handleManualActivation} 
                className="w-full"
                disabled={isActivating}
              >
                {isActivating ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Activating...
                  </>
                ) : "Continue to Dashboard"}
              </Button>
            </>
          )}
        </CardContent>
        <CardFooter className="flex justify-center">
          <Link to="/auth/login">
            <Button variant="outline">Return to login</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Verification;
