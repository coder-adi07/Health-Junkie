import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/brandData';

export default function Testimonials() {
  const [activeIdx, setActiveIdx] = useState(0);

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  return (
    <section className="py-20 lg:py-28 bg-cream-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-elderberry-900/5 text-elderberry-800 text-xs font-bold uppercase tracking-widest">
            <Quote className="w-3.5 h-3.5 text-brandHoney" />
            <span>Real Stories From Real Families</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-elderberry-950">
            Loved By Families, Foodies, <br />
            <span className="italic font-display font-normal text-elderberry-700">
              And Picky Eaters Alike.
            </span>
          </h2>

          <div className="flex items-center justify-center space-x-2 pt-2">
            <div className="flex text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-500" />
              ))}
            </div>
            <span className="text-xs font-bold text-elderberry-950">5.0 Star Average</span>
            <span className="text-xs text-elderberry-500">• 90+ Genuine Verified Reviews</span>
          </div>
        </div>

        {/* Featured Testimonial Spotlight Carousel */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-cream-300 shadow-soft-float relative">
            <Quote className="w-12 h-12 text-elderberry-100 absolute top-8 right-8 pointer-events-none" />

            <div className="space-y-6">
              {/* Stars */}
              <div className="flex text-amber-500">
                {[...Array(TESTIMONIALS[activeIdx].rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-500" />
                ))}
              </div>

              {/* Quote */}
              <p className="font-serif text-xl sm:text-2xl text-elderberry-950 leading-relaxed italic">
                "{TESTIMONIALS[activeIdx].quote}"
              </p>

              {/* Author Info */}
              <div className="pt-4 border-t border-cream-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-elderberry-900 text-brandHoney font-bold flex items-center justify-center text-sm">
                    {TESTIMONIALS[activeIdx].name[0]}
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="font-bold text-elderberry-950 text-sm">
                        {TESTIMONIALS[activeIdx].name}
                      </span>
                      <span className="inline-flex items-center text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                        <CheckCircle2 className="w-3 h-3 mr-1" />
                        Verified Buyer
                      </span>
                    </div>
                    <span className="text-xs text-elderberry-600">
                      {TESTIMONIALS[activeIdx].location} • {TESTIMONIALS[activeIdx].role}
                    </span>
                  </div>
                </div>

                <div className="text-right sm:text-right">
                  <span className="text-[11px] uppercase tracking-wider text-elderberry-400 font-semibold block">
                    Product Enjoyed
                  </span>
                  <span className="text-xs font-bold text-elderberry-950">
                    {TESTIMONIALS[activeIdx].product}
                  </span>
                </div>
              </div>
            </div>

            {/* Navigation buttons */}
            <div className="flex items-center justify-between mt-8 pt-4 border-t border-cream-200/60">
              <div className="flex space-x-1.5">
                {TESTIMONIALS.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    onClick={() => setActiveIdx(dotIdx)}
                    className={`h-2 rounded-full transition-all cursor-pointer ${
                      activeIdx === dotIdx ? 'w-6 bg-elderberry-950' : 'w-2 bg-cream-300 hover:bg-cream-400'
                    }`}
                    aria-label={`Go to slide ${dotIdx + 1}`}
                  />
                ))}
              </div>

              <div className="flex space-x-2">
                <button
                  onClick={handlePrev}
                  className="p-2.5 rounded-full border border-cream-300 hover:bg-cream-100 text-elderberry-900 transition-colors cursor-pointer"
                  aria-label="Previous review"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-2.5 rounded-full border border-cream-300 hover:bg-cream-100 text-elderberry-900 transition-colors cursor-pointer"
                  aria-label="Next review"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Smaller Testimonial Cards for immediate scan */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.slice(0, 3).map((item, tIdx) => (
            <div key={tIdx} className="bg-white/80 p-6 rounded-2xl border border-cream-300 space-y-3">
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-500" />
                ))}
              </div>
              <p className="text-xs text-elderberry-900/80 italic leading-relaxed line-clamp-3">
                "{item.quote}"
              </p>
              <div className="pt-2 border-t border-cream-200 flex items-center justify-between text-xs">
                <span className="font-bold text-elderberry-950">{item.name}</span>
                <span className="text-[11px] text-elderberry-500">{item.location}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

