import React, { useState } from 'react';
import { Calculator, Users, ShieldAlert, Sparkles, Check, ShoppingBag, Heart, Sun, CloudRain } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { PRODUCTS } from '../data/brandData';

export default function DosageCalculator() {
  const [adults, setAdults] = useState(2);
  const [kids, setKids] = useState(1);
  const [hasInfant, setHasInfant] = useState(false);
  const [season, setSeason] = useState('winter'); // 'summer' | 'winter'
  const { addToCart, setIsCartOpen } = useCart();

  // Dosage math based on authentic FAQ
  // Adult: Summer = 1 tbsp 3x/week = 3 tbsp/wk (~1.5 oz/wk). Winter = 1 tbsp/day = 7 tbsp/wk (~3.5 oz/wk)
  // Kid (1+): Summer = 1 tsp 3x/week = 1 tbsp/wk (~0.5 oz/wk). Winter = 1 tsp/day = 2.3 tbsp/wk (~1.2 oz/wk)
  // Infant: Cheeky Tart Cherry 1/2 tsp/day

  const monthlyOzAdult = season === 'winter' ? 14 : 6;
  const monthlyOzKid = season === 'winter' ? 5 : 2;
  const monthlyOzInfant = hasInfant ? 3 : 0;

  const totalMonthlyOz = (adults * monthlyOzAdult) + (kids * monthlyOzKid) + monthlyOzInfant;
  
  // Recommended bottles
  const recommended16ozBottles = Math.max(1, Math.ceil(totalMonthlyOz / 16.5));
  
  // Recommendation logic:
  // If infant: Cheeky Tart Cherry is mandatory
  // Adults & kids: Sassy Cinnamon or Bold Ginger
  const primaryFlavors = hasInfant 
    ? ["Cheeky Tart Cherry (Vegan & Toddler Safe)", "Sassy Cinnamon (Family Favorite)"]
    : ["Sassy Cinnamon (Warm Spices)", "Bold Ginger (Foodie Kick)"];

  const handleAddFamilyBundle = () => {
    const cherry = PRODUCTS.find(p => p.id === 'cheeky-tart-cherry');
    const cinnamon = PRODUCTS.find(p => p.id === 'sassy-cinnamon');
    
    if (hasInfant && cherry) {
      addToCart(cherry, '16.5 fl oz', 1);
    }
    if (cinnamon) {
      addToCart(cinnamon, '16.5 fl oz', hasInfant ? 1 : recommended16ozBottles);
    }
    setIsCartOpen(true);
  };

  return (
    <section className="py-20 bg-cream-100 border-y border-cream-200 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-elderberry-900/5 text-elderberry-800 text-xs font-bold uppercase tracking-widest">
            <Calculator className="w-3.5 h-3.5 text-brandHoney" />
            <span>Holistic Practitioner Dosage Guide</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-elderberry-950">
            Family Serving & Synergy Calculator
          </h2>
          <p className="text-xs sm:text-sm text-elderberry-900/75 leading-relaxed">
            Not sure how much syrup your household needs? Calculate personalized daily tablespoons, monthly supply, and safe formulations for each age group.
          </p>
        </div>

        {/* Interactive Calculator Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-cream-300 shadow-soft-float grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Season Selector */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-elderberry-800 block">
                Current Wellness Season:
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setSeason('winter')}
                  className={`p-3 rounded-2xl border text-left flex items-center space-x-3 transition-all cursor-pointer ${
                    season === 'winter'
                      ? 'bg-elderberry-950 text-white border-elderberry-950 shadow-md'
                      : 'bg-cream-50 text-elderberry-900 border-cream-200 hover:bg-cream-100'
                  }`}
                >
                  <CloudRain className={`w-5 h-5 ${season === 'winter' ? 'text-brandHoney' : 'text-elderberry-600'}`} />
                  <div>
                    <span className="block text-xs font-bold">Cold & Germ Season</span>
                    <span className="block text-[10px] opacity-75">Daily crowd exposure & school</span>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setSeason('summer')}
                  className={`p-3 rounded-2xl border text-left flex items-center space-x-3 transition-all cursor-pointer ${
                    season === 'summer'
                      ? 'bg-elderberry-950 text-white border-elderberry-950 shadow-md'
                      : 'bg-cream-50 text-elderberry-900 border-cream-200 hover:bg-cream-100'
                  }`}
                >
                  <Sun className={`w-5 h-5 ${season === 'summer' ? 'text-brandHoney' : 'text-elderberry-600'}`} />
                  <div>
                    <span className="block text-xs font-bold">Warm Weather Maintenance</span>
                    <span className="block text-[10px] opacity-75">2-3 times per week support</span>
                  </div>
                </button>
              </div>
            </div>

            {/* Household Members Counter */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {/* Adults */}
              <div className="p-4 bg-cream-50 rounded-2xl border border-cream-200 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-elderberry-950 block">Adults (18+)</span>
                  <span className="text-[10px] text-elderberry-600 block">1 tbsp daily</span>
                </div>
                <div className="flex items-center space-x-3">
                  <button 
                    onClick={() => setAdults(Math.max(1, adults - 1))}
                    className="w-7 h-7 rounded-full bg-white border border-cream-300 text-xs font-bold hover:bg-cream-100 cursor-pointer"
                  >
                    -
                  </button>
                  <span className="text-sm font-bold text-elderberry-950 w-4 text-center">{adults}</span>
                  <button 
                    onClick={() => setAdults(adults + 1)}
                    className="w-7 h-7 rounded-full bg-white border border-cream-300 text-xs font-bold hover:bg-cream-100 cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Kids 1-12 */}
              <div className="p-4 bg-cream-50 rounded-2xl border border-cream-200 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-elderberry-950 block">Kids (Ages 1–12)</span>
                  <span className="text-[10px] text-elderberry-600 block">1 tsp daily</span>
                </div>
                <div className="flex items-center space-x-3">
                  <button 
                    onClick={() => setKids(Math.max(0, kids - 1))}
                    className="w-7 h-7 rounded-full bg-white border border-cream-300 text-xs font-bold hover:bg-cream-100 cursor-pointer"
                  >
                    -
                  </button>
                  <span className="text-sm font-bold text-elderberry-950 w-4 text-center">{kids}</span>
                  <button 
                    onClick={() => setKids(kids + 1)}
                    className="w-7 h-7 rounded-full bg-white border border-cream-300 text-xs font-bold hover:bg-cream-100 cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Toddler / Infant under 1 check */}
            <div className="p-4 bg-brandCherry-light/50 rounded-2xl border border-brandCherry/20 flex items-start space-x-3">
              <input
                type="checkbox"
                id="infant-check"
                checked={hasInfant}
                onChange={(e) => setHasInfant(e.target.checked)}
                className="mt-1 w-4 h-4 rounded text-brandCherry focus:ring-brandCherry cursor-pointer"
              />
              <label htmlFor="infant-check" className="text-xs text-elderberry-900 cursor-pointer">
                <strong>We have a toddler or baby under 1 year eating solids</strong>
                <span className="block text-[11px] text-elderberry-700 mt-0.5">
                  Babies under 1 must not consume honey. We will automatically assign our <strong>Cheeky Tart Cherry</strong> flavor, which is 100% vegan and sweetened solely with pure local maple syrup.
                </span>
              </label>
            </div>

          </div>

          {/* Results Column */}
          <div className="lg:col-span-5 bg-elderberry-950 text-cream-100 rounded-3xl p-6 sm:p-8 space-y-5 shadow-xl">
            <span className="text-[10px] uppercase font-bold tracking-widest text-brandHoney block">
              Estimated Monthly Needs
            </span>

            <div>
              <div className="flex items-baseline space-x-2">
                <span className="font-serif text-4xl font-bold text-white">
                  {recommended16ozBottles}x
                </span>
                <span className="text-sm text-cream-300 font-medium">
                  Value Bottles (16.5 fl oz) / month
                </span>
              </div>
              <p className="text-[11px] text-cream-400 mt-1">
                Provides approx. ~{totalMonthlyOz} total fluid ounces of clean immune support for {adults + kids + (hasInfant ? 1 : 0)} people.
              </p>
            </div>

            <div className="pt-3 border-t border-white/10 space-y-2">
              <span className="text-xs font-bold text-white block">
                Recommended Flavor Allocation:
              </span>
              <ul className="text-xs text-cream-200 space-y-1.5">
                {primaryFlavors.map((flv, idx) => (
                  <li key={idx} className="flex items-center space-x-2">
                    <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                    <span>{flv}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={handleAddFamilyBundle}
                className="w-full py-3.5 px-6 rounded-full bg-brandHoney text-elderberry-950 font-bold text-xs uppercase tracking-wider hover:bg-amber-300 transition-all shadow-elevated flex items-center justify-center space-x-2 cursor-pointer group"
              >
                <ShoppingBag className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>Add Family Monthly Supply</span>
              </button>
              <span className="block text-[10px] text-center text-cream-400 mt-2">
                Qualifies for FREE Shipping ($50+ orders ship free)
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

