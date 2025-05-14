
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "What services do you offer?",
      answer: "Zeroday delivers cybersecurity solutions, secure web/software development, DevSecOps, and custom property tracking systems."
    },
    {
      question: "Do you offer post-project support?",
      answer: "Yes! We offer ongoing support and updates after deployment."
    },
    {
      question: "Can I make changes mid-project?",
      answer: "Absolutely. We work in sprints and accept change requests through defined channels."
    },
    {
      question: "How is pricing determined?",
      answer: "Pricing is based on scope, complexity, and delivery timeline — always transparent."
    },
    {
      question: "Do you work with clients internationally?",
      answer: "Yes, we work with clients globally. We've successfully delivered projects for clients in Japan, Singapore, and many other countries."
    },
    {
      question: "How do you ensure the security of my data?",
      answer: "We follow industry best practices and compliance standards for data security, including encryption, access controls, and regular security audits."
    }
  ];

  return (
    <section id="faq" className="section-padding bg-slate-50 dark:bg-slate-900">
      <div className="container container-padding mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="gradient-text">Frequently Asked Questions</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Find answers to common questions about our services, process, and approach.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg font-medium hover:text-cyber-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 dark:text-gray-400">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
