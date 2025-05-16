
import React from 'react';
import { FileText } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface DeliveryProps {
  orderId: string;
}

const CustomerDeliveries: React.FC<DeliveryProps> = ({ orderId }) => {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <FileText className="h-6 w-6 text-green-500" />
            <CardTitle className="text-lg">Sample File</CardTitle>
          </div>
          <CardDescription>
            Example static content
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-muted p-3 rounded-md font-mono text-sm">
            Sample static content for demonstration purposes
          </div>
        </CardContent>
        <CardFooter className="border-t pt-4 text-sm text-muted-foreground">
          <p>This is a static example with no database connection.</p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CustomerDeliveries;
