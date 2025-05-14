
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="container container-padding mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="gradient-text">Ready to Level Up Your Security?</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Get in touch with our team of security experts to discuss how we can help protect your business.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="cyber-card p-8">
            <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name</label>
                  <Input id="name" placeholder="Enter your full name" className="w-full" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
                  <Input id="email" type="email" placeholder="Enter your email" className="w-full" />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                <Input id="subject" placeholder="Enter message subject" className="w-full" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <Textarea id="message" placeholder="How can we help you?" className="w-full min-h-[150px]" />
              </div>
              <Button type="submit" className="bg-cyber-primary hover:bg-cyber-accent text-white w-full flex items-center justify-center">
                Send Message
                <Send className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </div>
          
          <div>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Have questions or need more information? Reach out to us directly through any of these channels.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-cyber-primary/10 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-cyber-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <a href="mailto:contact@zerodayltd.com" className="text-cyber-primary hover:underline">contact@zerodayltd.com</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-cyber-primary/10 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-cyber-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <a href="tel:+94123456789" className="text-cyber-primary hover:underline">+94 12 345 6789</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-cyber-primary/10 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-cyber-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Office Location</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Mangala Road, Beliatta,<br />Sri Lanka
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="p-6 bg-cyber-primary/5 dark:bg-cyber-primary/10 rounded-lg border-l-4 border-cyber-primary">
                <h4 className="font-semibold text-xl mb-3">Business Hours</h4>
                <div className="grid grid-cols-2 gap-2">
                  <div>Monday - Friday:</div>
                  <div>9:00 AM - 5:00 PM</div>
                  <div>Saturday:</div>
                  <div>10:00 AM - 2:00 PM</div>
                  <div>Sunday:</div>
                  <div>Closed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
