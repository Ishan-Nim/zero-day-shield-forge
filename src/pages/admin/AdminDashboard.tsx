
import React from 'react';
import { 
  AlertCircle
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import AdminPanelLayout from '@/components/AdminPanelLayout';

const AdminDashboard: React.FC = () => {
  return (
    <AdminPanelLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        
        <Card>
          <CardHeader>
            <CardTitle>Static Admin Dashboard</CardTitle>
            <CardDescription>
              This is a static version of the admin dashboard
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center justify-center py-8">
              <AlertCircle className="h-10 w-10 text-muted-foreground mb-3" />
              <p className="text-center text-muted-foreground">
                This is a static site. Admin functionality is not available.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminPanelLayout>
  );
};

export default AdminDashboard;
