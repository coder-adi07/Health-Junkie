import React from 'react';
import { Sparkles, ShieldCheck, CheckCircle2, Leaf, Heart, AlertCircle } from 'lucide-react';
import { INGREDIENTS_DATA } from '../data/brandData';

export default function IngredientsSection() {
  const purityExclusions = [
    { title: "No Processed Sugars", desc: "Zero glucose syrup, high-fructose corn syrup, or refined cane sugar." },
    { title: "No Preservatives", desc: "Zero potassium sorbate, sodium benzoate, or synthetic shelf stabilizers." },
    { title: "No Citric Acid / Gums", desc: "No lab-derived citric acid, thickeners, or xanthan gum fillers." },
    { title: "Non-Irradiated", desc: "100% whole Sambucus Nigra berries, never exposed to radiation." }
  ];

  return (
    <section id="ingredients" className="py-20 lg:py-28 bg-cream-50 relative overflow-hidden">
      
      {/* Decorative leaf / botanical accents */}
      <div className="absolute top-10 -right-20 w-80 h-80 rounded-full bg-brandSage-light blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-80 h-80 rounded-full bg-brandHoney/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brandSage-light text-brandSage text-xs font-bold uppercase tracking-widest">
            <Leaf className="w-3.5 h-3.5 text-brandSage" />
            <span>Purity Deck & Whole Superfoods</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-elderberry-950">
            Real Botanicals. Nothing To Hide.
          </h2>

          <p className="text-sm sm:text-base text-elderberry-900/75 leading-relaxed">
            Most commercial syrups hide high fructose corn syrup and synthetic preservatives behind "elderberry" branding. We craft ours with therapeutic European black elderberries and unheated natural sweeteners.
          </p>
        </div>

        {/* Botanical Ingredients Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {INGREDIENTS_DATA.map((ing, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-cream-300 shadow-soft-float hover:shadow-elevated transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-full bg-cream-200 text-elderberry-800 text-[10px] font-bold uppercase tracking-wider">
                    {ing.badge}
                  </span>
                  <span className="text-[11px] font-semibold text-elderberry-500">
                    {ing.role}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-bold text-elderberry-950 group-hover:text-elderberry-700 transition-colors">
                  {ing.name}
                </h3>

                <p className="text-[11px] font-mono text-elderberry-500 italic">
                  Botanical: {ing.latin}
                </p>

                <p className="text-xs sm:text-sm text-elderberry-900/70 leading-relaxed">
                  {ing.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-cream-200 flex items-center justify-between text-xs text-elderberry-600 font-medium">
                <span>Source: {ing.source}</span>
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              </div>
            </div>
          ))}
        </div>

        {/* The "What We Keep Out" Banner */}
        <div className="bg-gradient-to-r from-elderberry-950 via-elderberry-900 to-elderberry-950 rounded-3xl p-8 sm:p-12 text-cream-100 shadow-xl border border-elderberry-800">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-brandHoney block mb-2">
                Our Non-Negotiable Standard
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                What You'll Never Find In Health Junkie
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
              {purityExclusions.map((ex, eIdx) => (
                <div key={eIdx} className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm">
                  <div className="w-8 h-8 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center font-bold text-sm mb-3">
                    ✕
                  </div>
                  <h4 className="font-serif font-bold text-base text-white mb-1">
                    {ex.title}
                  </h4>
                  <p className="text-xs text-cream-300/80 leading-relaxed">
                    {ex.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-cream-300">
              <span className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Small Batch Handcrafted in Cleveland, Ohio</span>
              </span>
              <span className="hidden sm:inline">•</span>
              <span className="flex items-center space-x-1.5">
                <ShieldCheck className="w-4 h-4 text-brandHoney" />
                <span>Formulated by a Board Certified Holistic Health Practitioner</span>
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

