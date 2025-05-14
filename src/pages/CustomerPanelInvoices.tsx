
import React from 'react';
import { FileText, Download, Search, ArrowUpDown } from 'lucide-react';
import CustomerPanelLayout from '@/components/CustomerPanelLayout';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

const CustomerPanelInvoices: React.FC = () => {
  const invoices = [
    { id: 'INV-001', date: 'May 15, 2023', amount: '$99.00', status: 'Paid', pdf: '#' },
    { id: 'INV-002', date: 'Apr 15, 2023', amount: '$99.00', status: 'Paid', pdf: '#' },
    { id: 'INV-003', date: 'Mar 15, 2023', amount: '$99.00', status: 'Paid', pdf: '#' },
    { id: 'INV-004', date: 'Feb 15, 2023', amount: '$99.00', status: 'Paid', pdf: '#' },
    { id: 'INV-005', date: 'Jan 15, 2023', amount: '$99.00', status: 'Paid', pdf: '#' },
    { id: 'INV-006', date: 'Dec 15, 2022', amount: '$99.00', status: 'Paid', pdf: '#' },
  ];
  
  return (
    <CustomerPanelLayout>
      <div className="space-y-6">
        <section>
          <h1 className="text-3xl font-bold mb-2">Billing & Invoices</h1>
          <p className="text-gray-600">View and download your past invoices.</p>
        </section>
        
        {/* Billing Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center space-x-4">
                <div className="bg-cyber-primary/10 p-3 rounded-full">
                  <FileText className="h-6 w-6 text-cyber-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Current Billing Period</p>
                  <p className="text-xl font-bold">May 15 - Jun 14, 2023</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center space-x-4">
                <div className="bg-cyber-primary/10 p-3 rounded-full">
                  <FileText className="h-6 w-6 text-cyber-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Next Invoice Amount</p>
                  <p className="text-xl font-bold">$99.00</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center space-x-4">
                <div className="bg-cyber-primary/10 p-3 rounded-full">
                  <FileText className="h-6 w-6 text-cyber-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Payment Method</p>
                  <p className="text-xl font-bold">Visa •••• 4242</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Invoices List */}
        <Card>
          <CardHeader>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <CardTitle>Invoices</CardTitle>
                <CardDescription>View and download your past invoices</CardDescription>
              </div>
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search invoices..."
                    className="pl-8 w-[200px]"
                  />
                </div>
                <Button variant="outline" size="sm">
                  <ArrowUpDown className="h-4 w-4 mr-2" />
                  Sort
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-4">Invoice</th>
                    <th className="text-left p-4">Date</th>
                    <th className="text-left p-4">Amount</th>
                    <th className="text-left p-4">Status</th>
                    <th className="text-right p-4">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {invoices.map((invoice) => (
                    <tr key={invoice.id} className="border-b hover:bg-muted/50">
                      <td className="p-4 font-medium">{invoice.id}</td>
                      <td className="p-4">{invoice.date}</td>
                      <td className="p-4">{invoice.amount}</td>
                      <td className="p-4">
                        <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                          {invoice.status}
                        </span>
                      </td>
                      <td className="p-4 text-right">
                        <Button variant="ghost" size="sm">
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </CustomerPanelLayout>
  );
};

export default CustomerPanelInvoices;
