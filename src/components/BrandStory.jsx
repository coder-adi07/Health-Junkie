import React, { useState } from 'react';
import { Heart, Sparkles, MapPin, Quote, ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';
import { BRAND_INFO } from '../data/brandData';

export default function BrandStory() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="our-story" className="py-20 lg:py-28 bg-cream-50 relative overflow-hidden">
      
      {/* Background accents */}
      <div className="absolute top-1/2 -left-20 w-96 h-96 rounded-full bg-brandHoney/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Story Editorial Collage */}
          <div className="lg:col-span-5 relative space-y-6">
            
            {/* Primary Image: Real Hero Trio / Kitchen Lifestyle */}
            <div className="relative rounded-3xl overflow-hidden shadow-elevated border-4 border-white aspect-[4/5] bg-elderberry-950">
              <img
                src="/assets/hero-trio.jpg"
                alt="Health Junkie Handcrafted Syrups in Cleveland, Ohio"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-elderberry-950/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <span className="text-[10px] uppercase font-bold tracking-widest text-brandHoney block">
                  Cleveland, Ohio • Handcrafted
                </span>
                <p className="font-serif text-lg font-bold">
                  "Nourishing families with true, uncompromised wellness from the inside out."
                </p>
              </div>
            </div>

            {/* Overlapping Floating Credential Card */}
            <div className="bg-white/95 backdrop-blur-md rounded-2xl p-5 border border-cream-300 shadow-xl max-w-sm mx-auto -mt-12 relative z-20 space-y-2">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-elderberry-900 text-brandHoney flex items-center justify-center font-bold text-sm">
                  NL
                </div>
                <div>
                  <h4 className="font-serif font-bold text-base text-elderberry-950">Nicole Lazar</h4>
                  <p className="text-[11px] text-elderberry-600 font-semibold">Founder & Holistic Health Practitioner</p>
                </div>
              </div>
              <p className="text-xs text-elderberry-800/80 italic">
                Former NASA engineer applying technical precision and botanical holistic science to clean wellness.
              </p>
            </div>

          </div>

          {/* Right Column: Authentic Editorial Narrative */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-elderberry-900/5 text-elderberry-800 text-xs font-bold uppercase tracking-widest">
              <Heart className="w-3.5 h-3.5 text-brandCherry" />
              <span>Meet Our Founder • Nicole's Story</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-elderberry-950 leading-tight">
              From NASA Engineering to Handcrafted <br />
              <span className="italic font-display font-normal text-elderberry-700">
                Holistic Elderberry Medicine.
              </span>
            </h2>

            {/* Story Paragraphs based on authentic copy */}
            <div className="space-y-4 text-sm sm:text-base text-elderberry-900/80 leading-relaxed font-normal">
              <p>
                <strong>In 2016, an ill friend visited while I was pregnant.</strong> Knowing I was particularly susceptible, I did everything I could to boost my immune system: lots of kale in green smoothies, extra vitamin C, and I also took the plunge to try something new: <em>Elderberry Syrup</em>.
              </p>

              <p>
                Searching store shelves, I was shocked and frustrated that virtually every commercial elderberry product was loaded with processed glucose syrup, synthetic preservatives, and artificial additives. With a background as an engineer (who worked with NASA) and a Board Certified Holistic Health Practitioner, I knew families deserved something far more wholesome.
              </p>

              <p className="bg-white/80 border-l-4 border-brandHoney p-4 rounded-r-2xl text-elderberry-950 font-serif italic text-base">
                "I got to work in my home kitchen, crafting a clean elixir sweetened only with raw Ohio honey and pure maple syrup. Soon, my go-to recipe became popular with friends, family, and friends of friends."
              </p>

              {isExpanded && (
                <div className="space-y-4 pt-2 animate-in fade-in duration-300">
                  <p>
                    Seeing an undeniable need for wholesome elderberry syrup without junk fillers, I launched Health Junkie into Cleveland farmers markets and partnered with The Central Kitchen food incubator.
                  </p>
                  <p>
                    Today, Health Junkie is proudly featured across the Midwest in over 50 regional grocery stores (including Heinen's and Buehler's) and shipped to health-conscious families across the entire nation.
                  </p>
                  <p className="text-xs text-elderberry-600 bg-cream-100 p-3.5 rounded-xl border border-cream-200">
                    <strong>A personal note from Nicole:</strong> "To get personal, I love my kids and husband more than anything, I thrive on sunshine, and if I’ve got some free time (admittedly rare as a mom to energetic preschool and kindergarten boys) you can usually find me experimenting with new recipes or reading a fantasy novel."
                  </p>
                </div>
              )}
            </div>

            {/* Expand / Collapse Button & Shop CTA */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="px-5 py-2.5 rounded-full border border-elderberry-900 text-elderberry-900 text-xs font-bold uppercase tracking-wider hover:bg-elderberry-900 hover:text-white transition-colors flex items-center space-x-2 cursor-pointer"
              >
                <span>{isExpanded ? "Show Less" : "Read Full Story"}</span>
                {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
              </button>

              <a
                href="#shop"
                className="px-6 py-2.5 rounded-full bg-elderberry-950 text-white text-xs font-bold uppercase tracking-wider hover:bg-elderberry-800 transition-colors flex items-center space-x-2"
              >
                <span>Taste Nicole's Recipes</span>
                <ArrowRight className="w-3.5 h-3.5 text-brandHoney" />
              </a>
            </div>

            {/* Credibility badges */}
            <div className="pt-4 border-t border-cream-300/80 flex flex-wrap items-center gap-6 text-xs text-elderberry-700">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-brandCherry" />
                <span>Handcrafted in Cleveland, OH</span>
              </div>
              <div className="flex items-center space-x-2">
                <Sparkles className="w-4 h-4 text-brandHoney" />
                <span>Sold in Heinen's & 50+ Retailers</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

