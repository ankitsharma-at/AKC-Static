import React, { useState } from 'react';
import { faqs } from '../../data/faqs';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([0]); // First item open by default

  const toggleItem = (id: number) => {
    if (openItems.includes(id)) {
      setOpenItems(openItems.filter(item => item !== id));
    } else {
      setOpenItems([...openItems, id]);
    }
  };

  return (
    <section id="faq" className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Find answers to common questions about our courses and platform.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={faq.id} 
              className={`border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 ${
                openItems.includes(faq.id) ? 'shadow-md' : ''
              }`}
            >
              <button
                className="flex items-center justify-between w-full px-6 py-4 text-left focus:outline-none"
                onClick={() => toggleItem(faq.id)}
              >
                <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                {openItems.includes(faq.id) ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openItems.includes(faq.id) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-4 text-gray-600">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 p-8 bg-white rounded-xl shadow-md">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Still have questions?</h3>
          <p className="text-gray-600 mb-6">
            If you couldn't find the answer to your question, feel free to reach out to our support team.
          </p>
          <a 
            href="#contact" 
            className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-300"
          >
            Contact Us
          </a>
        </div>

        {/* Supabase Integration Comment */}
        {/* 
          Supabase Integration:
          - Store FAQ data in Supabase database
          - Add FAQ search functionality
          - Implement FAQ voting/rating system
          - Track which FAQs are most viewed
        */}
      </div>
    </section>
  );
};

export default FAQ;