
import React from 'react';
import { Check } from 'lucide-react';
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table';

const pricingPlans = [
  {
    name: "Basic",
    price: "$200",
    period: "/month",
    description: "For small businesses with simple web applications",
    features: [
      "Up to 3 web applications",
      "Weekly scheduled scans",
      "OWASP Top 10 vulnerability detection",
      "Email reports",
      "Basic remediation guidance",
      "8x5 email support"
    ]
  },
  {
    name: "Professional",
    price: "$400",
    period: "/month",
    description: "For growing businesses with multiple web applications",
    features: [
      "Up to 10 web applications",
      "Daily scheduled scans",
      "Full vulnerability coverage",
      "Custom scan configurations",
      "Detailed remediation steps",
      "API access",
      "Integration with CI/CD pipelines",
      "24x7 email & chat support"
    ],
    highlighted: true
  },
  {
    name: "Enterprise",
    price: "$800",
    period: "/month",
    description: "For organizations with complex security needs",
    features: [
      "Unlimited web applications",
      "Continuous scanning",
      "Custom vulnerability rules",
      "Advanced authentication support",
      "Custom compliance reporting",
      "White-labeled reports",
      "Dedicated security engineer",
      "24x7 priority support"
    ]
  }
];

const ScannerPricing: React.FC = () => {
  return (
    <>
      <section className="py-16 bg-cyber-primary/5 dark:bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-center">Pricing Plans</h2>
            <p className="text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto">
              Choose the plan that best fits your organization's security needs and budget. All plans include our core scanning technology with varying levels of capabilities.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <Card key={index} className={`${plan.highlighted ? 'border-2 border-cyber-primary shadow-xl relative' : 'border border-gray-200 dark:border-gray-700'}`}>
                  {plan.highlighted && (
                    <div className="absolute -top-4 left-0 right-0 flex justify-center">
                      <span className="bg-cyber-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <CardHeader className={`pb-3 ${plan.highlighted ? 'pt-8' : 'pt-6'}`}>
                    <CardTitle className="text-xl font-bold">{plan.name}</CardTitle>
                    <div className="mt-3 flex items-baseline">
                      <span className="text-3xl font-bold">{plan.price}</span>
                      <span className="text-sm text-gray-500 font-normal ml-1">{plan.period}</span>
                    </div>
                    <CardDescription className="mt-2">{plan.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <Check className="h-5 w-5 text-cyber-accent mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button className={`w-full mt-6 ${plan.highlighted ? 'bg-cyber-primary hover:bg-cyber-accent' : 'bg-slate-700 hover:bg-slate-800'} transition-colors text-white py-2 px-4 rounded-md font-medium`}>
                      Choose Plan
                    </button>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-12 p-6 bg-white dark:bg-slate-900 rounded-lg border border-gray-200 dark:border-gray-700 max-w-3xl mx-auto">
              <h3 className="text-xl font-semibold mb-4 text-center">Need a Custom Plan?</h3>
              <p className="text-gray-600 dark:text-gray-400 text-center mb-6">
                We offer tailored solutions for organizations with specific requirements. Contact our sales team to discuss your needs.
              </p>
              <div className="flex justify-center">
                <button className="bg-cyber-primary hover:bg-cyber-accent transition-colors text-white py-2 px-6 rounded-md font-medium">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Plan Comparison</h2>
            
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-1/4">Feature</TableHead>
                    <TableHead>Basic</TableHead>
                    <TableHead>Professional</TableHead>
                    <TableHead>Enterprise</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Web Applications</TableCell>
                    <TableCell>3</TableCell>
                    <TableCell>10</TableCell>
                    <TableCell>Unlimited</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Scan Frequency</TableCell>
                    <TableCell>Weekly</TableCell>
                    <TableCell>Daily</TableCell>
                    <TableCell>Continuous</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">OWASP Top 10</TableCell>
                    <TableCell><Check className="h-5 w-5 text-cyber-accent" /></TableCell>
                    <TableCell><Check className="h-5 w-5 text-cyber-accent" /></TableCell>
                    <TableCell><Check className="h-5 w-5 text-cyber-accent" /></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Advanced Vulnerabilities</TableCell>
                    <TableCell>Limited</TableCell>
                    <TableCell><Check className="h-5 w-5 text-cyber-accent" /></TableCell>
                    <TableCell><Check className="h-5 w-5 text-cyber-accent" /></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Custom Rules</TableCell>
                    <TableCell>-</TableCell>
                    <TableCell>10 rules</TableCell>
                    <TableCell>Unlimited</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">API Access</TableCell>
                    <TableCell>-</TableCell>
                    <TableCell><Check className="h-5 w-5 text-cyber-accent" /></TableCell>
                    <TableCell><Check className="h-5 w-5 text-cyber-accent" /></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">CI/CD Integration</TableCell>
                    <TableCell>-</TableCell>
                    <TableCell><Check className="h-5 w-5 text-cyber-accent" /></TableCell>
                    <TableCell><Check className="h-5 w-5 text-cyber-accent" /></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Support</TableCell>
                    <TableCell>Email (8x5)</TableCell>
                    <TableCell>Email & Chat (24x7)</TableCell>
                    <TableCell>Priority Support (24x7)</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ScannerPricing;
