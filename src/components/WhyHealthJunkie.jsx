import React from 'react';
import { Check, X, Shield, Sparkles, Heart, Award, ArrowRight } from 'lucide-react';
import { COMPARISON_MATRIX } from '../data/brandData';

export default function WhyHealthJunkie() {
  const threePillars = [
    {
      icon: "/assets/icon-clean.png",
      title: "100% Clean Ingredients",
      desc: "Every batch is made with certified organic, non-GMO Sambucus Nigra elderberries, local raw honey or local maple syrup, and whole culinary spices. Absolutely zero processed sugar or preservatives."
    },
    {
      icon: "/assets/icon-hhp.png",
      title: "Holistic Practitioner Formulated",
      desc: "Formulated by Nicole Lazar, a Board Certified Holistic Health Practitioner (and former NASA engineer). Designed to synthesize the deep cellular benefits of whole botanicals without synthetic extracts."
    },
    {
      icon: "/assets/icon-handcrafted.png",
      title: "Handcrafted With Love",
      desc: "We don't mass-produce in overseas mega-factories. Health Junkie is handcrafted with love in Cleveland, Ohio, bringing wholesome nutrition directly to families, schools, and grocery stores."
    }
  ];

  return (
    <section id="why-health-junkie" className="py-20 lg:py-28 bg-cream-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-elderberry-900/5 text-elderberry-800 text-xs font-bold uppercase tracking-widest">
            <Award className="w-3.5 h-3.5 text-brandHoney" />
            <span>The Health Junkie Difference</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-elderberry-950">
            Why Health Junkie Beats <br />
            <span className="italic font-display font-normal text-elderberry-700">
              The "Big Supplement" Brands.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-elderberry-900/75 leading-relaxed">
            When our founder was pregnant, she searched grocery aisles for an elderberry supplement and was appalled to find glucose syrup and chemical preservatives listed before actual berries. Here is how we changed the standard.
          </p>
        </div>

        {/* 3 Authentic Pillars Cards (With Original Icons from heyhealthjunkie.com) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {threePillars.map((pillar, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-cream-300 shadow-soft-float hover:shadow-elevated transition-all duration-300 text-center flex flex-col items-center space-y-6"
            >
              {/* Prominent, Refined & Marjito Image Badge */}
              <div className="w-full max-w-[220px] aspect-square rounded-2xl bg-cream-50/90 p-4 sm:p-5 flex items-center justify-center border border-cream-200/80 shadow-sm group">
                <img 
                  src={pillar.icon} 
                  alt={pillar.title} 
                  className="w-full h-full object-contain filter drop-shadow-sm transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-xl sm:text-2xl font-bold text-elderberry-950">
                  {pillar.title}
                </h3>

                <p className="text-sm text-elderberry-900/75 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* The Direct Comparison Matrix */}
        <div className="bg-white rounded-3xl border border-cream-300 shadow-soft-float overflow-hidden">
          <div className="p-6 sm:p-8 bg-elderberry-950 text-cream-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-brandHoney block mb-1">
                Transparency Report
              </span>
              <h3 className="font-serif text-2xl font-bold text-white">
                Health Junkie vs. Leading Supplement Brand (Sambucol)
              </h3>
            </div>
            <span className="px-3.5 py-1.5 rounded-full bg-white/10 text-brandHoney text-xs font-semibold whitespace-nowrap">
              Same Berry • 50-90% Less Sugar • 50% Lower Cost
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-cream-200 bg-cream-50/70 text-xs font-bold uppercase tracking-wider text-elderberry-900">
                  <th className="py-4 px-6">Evaluation Feature</th>
                  <th className="py-4 px-6 bg-brandSage-light/50 text-brandSage font-bold">
                    Health Junkie (Our Standard)
                  </th>
                  <th className="py-4 px-6 text-elderberry-600">
                    Sambucol
                  </th>
                  <th className="py-4 px-6 text-elderberry-600 hidden md:table-cell">
                    Typical Grocery Brand
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-cream-200 text-xs sm:text-sm">
                {COMPARISON_MATRIX.map((row, rIdx) => (
                  <tr key={rIdx} className="hover:bg-cream-50/50 transition-colors">
                    <td className="py-4 px-6 font-semibold text-elderberry-950">
                      {row.feature}
                    </td>
                    <td className="py-4 px-6 bg-brandSage-light/30 font-bold text-elderberry-950">
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs flex-shrink-0">
                          ✓
                        </div>
                        <span>{row.healthJunkie}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-elderberry-700">
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center font-bold text-xs flex-shrink-0">
                          ✕
                        </div>
                        <span>{row.sambucol}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-elderberry-600 hidden md:table-cell">
                      {row.groceryBrands}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Matrix Footnote */}
          <div className="p-6 bg-cream-50 border-t border-cream-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-elderberry-800">
            <p>
              *Data compiled directly from published nutrition facts and ingredient disclosures. Sambucol is a registered trademark of its respective owner.
            </p>
            <a 
              href="#shop" 
              className="font-bold text-elderberry-950 hover:text-elderberry-700 underline whitespace-nowrap flex items-center space-x-1"
            >
              <span>Shop The Healthier Choice</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

