
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { MailCheck, Loader2 } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';

const Verification = () => {
  const [isActivating, setIsActivating] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    // If user is already authenticated, redirect to dashboard
    if (user) {
      navigate('/customer-panel');
    }
  }, [user, navigate]);

  const handleManualActivation = async () => {
    setIsActivating(true);
    try {
      // We'll check if the user is already logged in
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
            Your account has been created successfully.
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <p className="mb-4 text-gray-600">
            Click the button below to activate your account and access your security dashboard.
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
