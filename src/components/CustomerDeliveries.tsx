
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertCircle } from 'lucide-react';

const CustomerDeliveries = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Deliveries</CardTitle>
        <CardDescription>Your recent deliveries</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center justify-center py-8">
          <AlertCircle className="h-10 w-10 text-muted-foreground mb-3" />
          <p className="text-center text-muted-foreground">
            This is a static site. Delivery information is not available.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default CustomerDeliveries;
