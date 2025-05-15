
import { supabase } from "@/integrations/supabase/client";
import { User } from "@supabase/supabase-js";

export const checkAdminStatus = async (userId: string | undefined): Promise<boolean> => {
  if (!userId) return false;
  
  try {
    // Call the is_admin RPC function with proper type handling
    const { data, error } = await supabase.rpc('is_admin', {
      user_id: userId 
    } as { user_id: string }); // Explicitly type the parameter object
    
    if (error) {
      console.error("Error checking admin status via RPC:", error);
      // Fallback to direct query if RPC isn't available yet
      const { data: adminData, error: adminError } = await supabase
        .from('admin_users')
        .select('id')
        .eq('user_id', userId)
        .maybeSingle();
      
      if (adminError) {
        console.error("Error checking admin status:", adminError);
        return false;
      }
      
      return !!adminData;
    }
    
    return !!data;
  } catch (error) {
    console.error("Unexpected error checking admin status:", error);
    return false;
  }
};

export const createAdminUser = async (userEmail: string): Promise<{success: boolean, message: string}> => {
  try {
    // First get the user ID from the email
    const { data: userData, error: userError } = await supabase
      .from('profiles')
      .select('id')
      .eq('email', userEmail)
      .maybeSingle(); // Use maybeSingle to avoid errors when no record is found
    
    if (userError || !userData) {
      return { 
        success: false, 
        message: userError?.message || "User not found with that email" 
      };
    }
    
    // Now add them to the admin_users table
    const { error } = await supabase
      .from('admin_users')
      .insert({ user_id: userData.id });
    
    if (error) {
      if (error.code === '23505') { // Unique violation
        return { success: false, message: "This user is already an admin" };
      }
      return { success: false, message: error.message };
    }
    
    return { success: true, message: "Admin user added successfully" };
  } catch (error: any) {
    return { success: false, message: error.message || "An unexpected error occurred" };
  }
};
