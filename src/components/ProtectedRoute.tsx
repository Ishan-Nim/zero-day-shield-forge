
import React from 'react';

type ProtectedRouteProps = {
  children: React.ReactNode;
};

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  // In a static site, we just pass through the children without authentication
  return <>{children}</>;
};

export default ProtectedRoute;
