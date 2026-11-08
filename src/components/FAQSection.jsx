import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Sparkles, MessageCircle } from 'lucide-react';
import { FAQS } from '../data/brandData';

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Usage & Dosage', 'Ingredients & Sourcing', 'Family & Safety', 'Orders & Shipping'];

  const filteredFaqs = selectedCategory === 'All'
    ? FAQS
    : FAQS.filter(f => f.category === selectedCategory);

  return (
    <section id="faq" className="py-20 lg:py-28 bg-cream-100 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-elderberry-900/5 text-elderberry-800 text-xs font-bold uppercase tracking-widest">
            <HelpCircle className="w-3.5 h-3.5 text-brandHoney" />
            <span>Got Questions? We Have Answers</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-elderberry-950">
            Frequently Asked Questions
          </h2>

          <p className="text-sm sm:text-base text-elderberry-900/75 max-w-xl mx-auto">
            Everything you need to know about dosage, kids, diabetic options, Sambucol comparisons, and our Cleveland small-batch process.
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 pt-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-elderberry-950 text-white shadow-sm'
                    : 'bg-white text-elderberry-900/70 hover:bg-cream-200 border border-cream-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIdx === idx;

            return (
              <div 
                key={idx}
                className="bg-white rounded-2xl border border-cream-300/80 shadow-sm overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-cream-50/50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-base sm:text-lg font-bold text-elderberry-950">
                    {faq.q}
                  </span>
                  <div className={`p-1.5 rounded-full bg-cream-100 text-elderberry-900 transition-transform duration-200 flex-shrink-0 ${isOpen ? 'rotate-180 bg-elderberry-950 text-white' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 pt-1 text-xs sm:text-sm text-elderberry-900/80 leading-relaxed border-t border-cream-200/60 bg-cream-50/30">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Note */}
        <div className="mt-12 text-center p-6 bg-white/80 rounded-2xl border border-cream-300 max-w-xl mx-auto space-y-2">
          <p className="text-xs text-elderberry-900/80">
            Have a question that isn't answered here?
          </p>
          <a 
            href="mailto:hello@heyhealthjunkie.com"
            className="text-xs font-bold text-elderberry-950 underline hover:text-elderberry-700 inline-flex items-center space-x-1"
          >
            <MessageCircle className="w-3.5 h-3.5 mr-1" />
            <span>Email Nicole directly at hello@heyhealthjunkie.com</span>
          </a>
        </div>

      </div>
    </section>
  );
}

