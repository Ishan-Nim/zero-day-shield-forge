
import React, { useEffect, useState } from 'react';
import { Key, FileText, Link as LinkIcon, Download } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/components/ui/use-toast';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from '@/components/ui/button';

interface DeliveryProps {
  orderId: string;
}

const CustomerDeliveries: React.FC<DeliveryProps> = ({ orderId }) => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [deliveries, setDeliveries] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDeliveries = async () => {
      if (!user || !orderId) return;

      try {
        const { data, error } = await supabase
          .from('order_deliveries')
          .select('*')
          .eq('order_id', orderId);

        if (error) throw error;
        setDeliveries(data || []);
      } catch (error: any) {
        console.error("Error fetching deliveries:", error);
        toast({
          title: "Error",
          description: "Failed to load order deliveries.",
          variant: "destructive"
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchDeliveries();
  }, [user, orderId]);

  if (isLoading) {
    return <div className="text-center py-4">Loading deliveries...</div>;
  }

  if (deliveries.length === 0) {
    return (
      <div className="text-center py-4 text-muted-foreground">
        No deliveries available for this order yet.
      </div>
    );
  }

  const renderDeliveryIcon = (type: string) => {
    switch (type) {
      case 'key':
        return <Key className="h-6 w-6 text-blue-500" />;
      case 'file':
        return <FileText className="h-6 w-6 text-green-500" />;
      case 'link':
        return <LinkIcon className="h-6 w-6 text-purple-500" />;
      default:
        return null;
    }
  };

  const renderDeliveryContent = (delivery: any) => {
    switch (delivery.delivery_type) {
      case 'key':
        return (
          <div className="bg-muted p-3 rounded-md font-mono text-sm">
            {delivery.content}
          </div>
        );
      case 'link':
        return (
          <div className="flex flex-col gap-2">
            <div className="bg-muted p-3 rounded-md font-mono text-sm break-all">
              {delivery.content}
            </div>
            <Button 
              variant="outline" 
              className="w-full sm:w-auto"
              onClick={() => window.open(delivery.content, '_blank')}
            >
              <Download className="h-4 w-4 mr-2" />
              Download
            </Button>
          </div>
        );
      case 'file':
        return (
          <div>
            <p className="mb-2">{delivery.content}</p>
            {/* Add file download logic here if implementing file storage */}
          </div>
        );
      default:
        return <p>{delivery.content}</p>;
    }
  };

  return (
    <div className="space-y-4">
      {deliveries.map((delivery) => (
        <Card key={delivery.id}>
          <CardHeader className="pb-2">
            <div className="flex items-center gap-2">
              {renderDeliveryIcon(delivery.delivery_type)}
              <CardTitle className="text-lg">
                {delivery.delivery_type === 'key' ? 'Activation Key' :
                 delivery.delivery_type === 'file' ? 'File Attachment' :
                 'Download Link'}
              </CardTitle>
            </div>
            <CardDescription>
              Delivered on {new Date(delivery.sent_at).toLocaleString()}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {renderDeliveryContent(delivery)}
          </CardContent>
          {delivery.notes && (
            <CardFooter className="border-t pt-4 text-sm text-muted-foreground">
              <p>{delivery.notes}</p>
            </CardFooter>
          )}
        </Card>
      ))}
    </div>
  );
};

export default CustomerDeliveries;
