import React from 'react';
import { GlassWater, Sparkles, Clock, Users, ArrowRight, ShoppingBag } from 'lucide-react';
import { RECIPES, PRODUCTS } from '../data/brandData';
import { useCart } from '../context/CartContext';

export default function RecipesSection() {
  const { setActiveRecipeModal, setActiveModalProduct } = useCart();

  return (
    <section id="recipes" className="py-20 lg:py-28 bg-cream-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brandHoney/15 text-brandHoney-dark text-xs font-bold uppercase tracking-widest">
              <GlassWater className="w-3.5 h-3.5 text-brandHoney" />
              <span>Wellness Mixology & Kitchen Inspiration</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-elderberry-950">
              Our Favorite Elderberry Recipes
            </h2>
            <p className="text-sm sm:text-base text-elderberry-900/70 max-w-xl">
              Turn your daily immune boost into a joyful culinary ritual. Handcrafted mocktails, soothing warm ciders, and kid-approved treats.
            </p>
          </div>

          <a 
            href="#newsletter"
            className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full border border-elderberry-950 text-elderberry-950 text-xs font-bold uppercase tracking-wider hover:bg-elderberry-950 hover:text-white transition-colors"
          >
            <span>Get Free Recipe PDF</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Recipes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {RECIPES.map((recipe) => (
            <div 
              key={recipe.id}
              className="bg-white rounded-3xl overflow-hidden border border-cream-300 shadow-soft-float hover:shadow-elevated transition-all duration-300 flex flex-col group"
            >
              {/* Recipe Image */}
              <div 
                onClick={() => setActiveRecipeModal(recipe)}
                className="relative aspect-[4/3] bg-cream-100 overflow-hidden cursor-pointer"
              >
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-elderberry-950/80 text-white text-[10px] uppercase font-bold tracking-wider backdrop-blur-sm">
                  {recipe.difficulty}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-elderberry-500 block">
                    Uses: {recipe.syrupUsed.split(' ')[0]} {recipe.syrupUsed.split(' ')[1]}
                  </span>
                  
                  <h3 
                    onClick={() => setActiveRecipeModal(recipe)}
                    className="font-serif text-lg font-bold text-elderberry-950 group-hover:text-elderberry-700 transition-colors cursor-pointer leading-snug line-clamp-1"
                  >
                    {recipe.title}
                  </h3>

                  <p className="text-xs text-elderberry-900/70 line-clamp-2 leading-relaxed">
                    {recipe.description}
                  </p>
                </div>

                {/* Key Ingredients Preview */}
                <div className="pt-2 border-t border-cream-200">
                  <span className="text-[10px] uppercase tracking-wider text-elderberry-400 font-semibold block mb-1">
                    Ingredients Snapshot
                  </span>
                  <ul className="text-[11px] text-elderberry-700 space-y-0.5">
                    {recipe.ingredients.slice(0, 3).map((ing, iIdx) => (
                      <li key={iIdx} className="truncate">• {ing}</li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="pt-2 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setActiveRecipeModal(recipe)}
                    className="flex-1 py-2 px-3 rounded-full border border-elderberry-900 text-elderberry-900 text-xs font-semibold hover:bg-elderberry-900 hover:text-white transition-colors cursor-pointer text-center"
                  >
                    View Recipe
                  </button>
                  
                  <button
                    onClick={() => {
                      const matched = PRODUCTS.find(p => recipe.syrupUsed.toLowerCase().includes(p.flavor.toLowerCase()) || p.title.toLowerCase().includes(recipe.syrupUsed.toLowerCase()));
                      if (matched) setActiveModalProduct(matched);
                    }}
                    className="p-2 rounded-full bg-cream-100 hover:bg-cream-200 text-elderberry-900 transition-colors cursor-pointer"
                    title="Shop Syrup for this recipe"
                  >
                    <ShoppingBag className="w-4 h-4 text-elderberry-700" />
                  </button>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

