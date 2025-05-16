
// Static admin utility functions (no database connection)
export const checkAdminStatus = async (userId?: string): Promise<boolean> => {
  // In a static site, we'll just return false since there's no admin authentication
  return false;
};

export const createAdminUser = async (userEmail: string): Promise<{success: boolean, message: string}> => {
  // In a static site, we'll just return a static message
  return { 
    success: false, 
    message: "This is a static site. Admin functionality is not available." 
  };
};
