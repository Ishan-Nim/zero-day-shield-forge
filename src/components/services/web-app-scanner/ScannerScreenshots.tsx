
import React from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const ScannerScreenshots: React.FC = () => {
  return (
    <section className="py-16 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Scanner in Action</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="space-y-4">
              <AspectRatio ratio={16/9} className="bg-gray-100 rounded-lg overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">
                <img 
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" 
                  alt="Web App Scanner Dashboard" 
                  className="w-full h-full object-cover"
                />
              </AspectRatio>
              <p className="text-sm text-center text-gray-600 dark:text-gray-400">
                Intuitive dashboard showing vulnerability scan results and statistics.
              </p>
            </div>
            <div className="space-y-4">
              <AspectRatio ratio={16/9} className="bg-gray-100 rounded-lg overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">
                <img 
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6" 
                  alt="Vulnerability Details View" 
                  className="w-full h-full object-cover"
                />
              </AspectRatio>
              <p className="text-sm text-center text-gray-600 dark:text-gray-400">
                Detailed vulnerability analysis with code-level insights.
              </p>
            </div>
          </div>
          
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="space-y-4">
              <AspectRatio ratio={16/9} className="bg-gray-100 rounded-lg overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" 
                  alt="Scan Configuration Screen" 
                  className="w-full h-full object-cover"
                />
              </AspectRatio>
              <p className="text-sm text-center text-gray-600 dark:text-gray-400">
                Easy-to-use scan configuration interface with advanced options.
              </p>
            </div>
            <div className="space-y-4">
              <AspectRatio ratio={16/9} className="bg-gray-100 rounded-lg overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">
                <img 
                  src="https://images.unsplash.com/photo-1473091534298-04dcbce3278c" 
                  alt="Security Report Generation" 
                  className="w-full h-full object-cover"
                />
              </AspectRatio>
              <p className="text-sm text-center text-gray-600 dark:text-gray-400">
                Comprehensive security reports with actionable insights.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScannerScreenshots;
