import React from 'react';
import { X, Clock, GlassWater, ShoppingBag, Check, Sparkles, Share2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { PRODUCTS } from '../data/brandData';

export default function RecipeModal() {
  const { activeRecipeModal, setActiveRecipeModal, setActiveModalProduct } = useCart();

  if (!activeRecipeModal) return null;

  const recipe = activeRecipeModal;
  const matchedProduct = PRODUCTS.find(p => 
    recipe.syrupUsed.toLowerCase().includes(p.flavor.toLowerCase()) || 
    p.title.toLowerCase().includes(recipe.syrupUsed.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        onClick={() => setActiveRecipeModal(null)}
        className="fixed inset-0 bg-elderberry-950/70 backdrop-blur-md transition-opacity"
      />

      {/* Modal Dialog */}
      <div className="relative min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="relative bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden border border-cream-300 animate-in zoom-in-95 duration-200">
          
          {/* Close button */}
          <button
            onClick={() => setActiveRecipeModal(null)}
            className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-cream-100 hover:bg-cream-200 text-elderberry-900 transition-colors cursor-pointer"
            aria-label="Close recipe modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Hero Image */}
          <div className="relative aspect-[16/9] bg-cream-100 overflow-hidden">
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-elderberry-950/80 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-6 right-6 text-white space-y-1">
              <span className="text-[10px] uppercase font-bold tracking-widest text-brandHoney block">
                {recipe.difficulty} • Serves {recipe.servings}
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold">
                {recipe.title}
              </h2>
            </div>
          </div>

          <div className="p-6 sm:p-8 space-y-6 text-left">
            
            <p className="text-xs sm:text-sm text-elderberry-900/80 leading-relaxed italic">
              "{recipe.description}"
            </p>

            {/* Ingredients Checklist */}
            <div className="space-y-3 bg-cream-50 p-5 rounded-2xl border border-cream-200">
              <div className="flex items-center justify-between">
                <span className="font-bold text-xs uppercase tracking-wider text-elderberry-950">
                  Ingredients:
                </span>
                <span className="text-[11px] text-elderberry-500 font-semibold">
                  Featuring {recipe.syrupUsed}
                </span>
              </div>
              <ul className="space-y-2 text-xs text-elderberry-800">
                {recipe.ingredients.map((ing, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{ing}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Step by step Directions */}
            <div className="space-y-3">
              <span className="font-bold text-xs uppercase tracking-wider text-elderberry-950 block">
                Directions:
              </span>
              <ol className="space-y-2.5 text-xs sm:text-sm text-elderberry-800">
                {recipe.instructions.map((step, sIdx) => (
                  <li key={sIdx} className="flex items-start space-x-3">
                    <span className="w-5 h-5 rounded-full bg-elderberry-900 text-white text-[11px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                      {sIdx + 1}
                    </span>
                    <span className="leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Social Share Callout from authentic page */}
            <div className="p-3.5 bg-cream-100 rounded-xl text-xs text-elderberry-700 flex items-center justify-between">
              <span>Capture & share your creation! Tag <strong>@HeyHealthJunkie</strong> on Instagram</span>
              <Share2 className="w-4 h-4 text-elderberry-900 flex-shrink-0" />
            </div>

            {/* Bottom: Shop the Syrup CTA */}
            {matchedProduct && (
              <div className="pt-2 border-t border-cream-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center space-x-3">
                  <img 
                    src={matchedProduct.images.bottle} 
                    alt={matchedProduct.title}
                    className="w-12 h-12 object-contain bg-cream-50 rounded-xl p-1 border border-cream-200" 
                  />
                  <div>
                    <span className="text-[10px] uppercase font-bold text-elderberry-500 block">Required Syrup</span>
                    <span className="text-xs font-bold text-elderberry-950 block">{matchedProduct.title}</span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setActiveRecipeModal(null);
                    setActiveModalProduct(matchedProduct);
                  }}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-elderberry-950 text-white text-xs font-bold uppercase tracking-wider hover:bg-elderberry-800 transition-colors flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <ShoppingBag className="w-3.5 h-3.5 text-brandHoney" />
                  <span>Shop This Syrup</span>
                </button>
              </div>
            )}

          </div>

        </div>
      </div>
    </div>
  );
}

