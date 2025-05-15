
import React, { useState, useEffect } from 'react';
import { Shield, Zap, Code, Lock, FileText, Check } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { useCart } from '@/components/ShoppingCart';

// Icon mapping for products
const iconMap: Record<string, any> = {
  'Web App Scanner Basic': Shield,
  'Web App Scanner Pro': Shield,
  'Penetration Testing Package': Zap,
  'Security Audit': FileText,
  'Security Plugin Development': Code,
  'Data Protection Service': Lock,
};

const Store: React.FC = () => {
  const { toast } = useToast();
  const { addToCart } = useCart();
  const [products, setProducts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('all');
  
  // Fetch products from the database
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data, error } = await supabase
          .from('products')
          .select('*')
          .eq('active', true)
          .order('price');
        
        if (error) throw error;
        
        setProducts(data || []);
      } catch (error: any) {
        console.error('Error fetching products:', error);
        toast({
          title: 'Error loading products',
          description: error.message,
          variant: 'destructive',
        });
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchProducts();
  }, []);
  
  // Get icon component for a product
  const getIconForProduct = (productName: string) => {
    const IconComponent = iconMap[productName] || Shield;
    return <IconComponent className="h-6 w-6 text-cyber-primary" />;
  };
  
  // Filter products based on active tab
  const filteredProducts = activeTab === 'all'
    ? products
    : activeTab === 'subscriptions'
      ? products.filter(p => p.is_subscription)
      : products.filter(p => !p.is_subscription);
  
  return (
    <>
      <SEO
        title="Store - Zeroday Security Solutions"
        description="Browse and purchase our cybersecurity products and services for your business."
        keywords="cybersecurity products, security services, web app scanner, penetration testing, security audit"
      />
      
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="mb-8 text-center">
              <h1 className="text-4xl font-bold mb-4">Security Products & Services</h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Discover our comprehensive range of cybersecurity solutions designed to protect your digital assets.
              </p>
            </div>
            
            <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="mb-8">
              <div className="flex justify-center">
                <TabsList>
                  <TabsTrigger value="all">All Products</TabsTrigger>
                  <TabsTrigger value="subscriptions">Subscriptions</TabsTrigger>
                  <TabsTrigger value="onetime">One-time Services</TabsTrigger>
                </TabsList>
              </div>
            </Tabs>
            
            {isLoading ? (
              <div className="flex justify-center items-center h-64">
                <p>Loading products...</p>
              </div>
            ) : filteredProducts.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <Shield className="h-16 w-16 text-gray-300 mb-4" />
                <h3 className="text-2xl font-semibold mb-2">No products found</h3>
                <p className="text-gray-500 max-w-md">
                  We couldn't find any products in this category. Please check back later or browse other categories.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product) => (
                  <Card key={product.id} className="overflow-hidden flex flex-col h-full">
                    <CardHeader>
                      <div className="flex items-center mb-3">
                        <div className="bg-cyber-primary/10 p-3 rounded-full mr-3">
                          {getIconForProduct(product.name)}
                        </div>
                        <CardTitle>{product.name}</CardTitle>
                      </div>
                      <CardDescription className="line-clamp-2">{product.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <div className="text-3xl font-bold mb-6">
                        ${product.price}
                        {product.is_subscription && (
                          <span className="text-sm font-normal text-muted-foreground">/month</span>
                        )}
                      </div>
                      
                      {product.features ? (
                        <ul className="space-y-2 mb-6">
                          {product.features.map((feature: string, index: number) => (
                            <li key={index} className="flex items-start">
                              <Check className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <div className="h-20"></div> /* Placeholder height for products without features */
                      )}
                    </CardContent>
                    <CardFooter>
                      <Button 
                        className="w-full" 
                        onClick={() => addToCart(product)}
                      >
                        Add to Cart
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Store;
