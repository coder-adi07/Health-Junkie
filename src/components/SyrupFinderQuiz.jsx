import React, { useState } from 'react';
import { Sparkles, Check, ArrowRight, RotateCcw, Heart, ShoppingBag, ShieldCheck } from 'lucide-react';
import { PRODUCTS } from '../data/brandData';
import { useCart } from '../context/CartContext';

const QUESTIONS = [
  {
    id: 1,
    title: "Who will be enjoying this syrup primarily?",
    options: [
      { label: "My whole family with young kids / toddlers", score: { cherry: 3, cinnamon: 2, ginger: 0, sampler: 1 } },
      { label: "Myself & active adults looking for vitality", score: { cherry: 1, cinnamon: 2, ginger: 3, sampler: 2 } },
      { label: "Foodie & cocktail / mocktail lovers", score: { cherry: 2, cinnamon: 1, ginger: 3, sampler: 2 } },
      { label: "Looking for the ultimate wellness gift", score: { cherry: 1, cinnamon: 1, ginger: 1, sampler: 4 } }
    ]
  },
  {
    id: 2,
    title: "What is your flavor & sweetness preference?",
    options: [
      { label: "Delicate sweet-tart with lowest sugar (100% Vegan)", score: { cherry: 4, cinnamon: 0, ginger: 0, sampler: 1 } },
      { label: "Warm aromatic bakery spices (Ceylon cinnamon, clove, honey)", score: { cherry: 0, cinnamon: 4, ginger: 1, sampler: 1 } },
      { label: "Zesty, invigorating ginger punch that warms the throat", score: { cherry: 0, cinnamon: 1, ginger: 4, sampler: 1 } },
      { label: "I want to taste and experience every variety!", score: { cherry: 1, cinnamon: 1, ginger: 1, sampler: 4 } }
    ]
  },
  {
    id: 3,
    title: "How do you prefer to take your daily elderberry?",
    options: [
      { label: "Straight from a shotglass or daily morning spoon", score: { cherry: 2, cinnamon: 3, ginger: 2, sampler: 2 } },
      { label: "Mixed into fizzy sparkling water for refreshing mocktails", score: { cherry: 3, cinnamon: 1, ginger: 3, sampler: 2 } },
      { label: "Stirred into hot apple cider or comforting herbal tea", score: { cherry: 0, cinnamon: 4, ginger: 2, sampler: 2 } },
      { label: "Drizzled over yogurt, oatmeal, pancakes, or waffles", score: { cherry: 3, cinnamon: 3, ginger: 1, sampler: 2 } }
    ]
  }
];

export default function SyrupFinderQuiz() {
  const [currentStep, setCurrentStep] = useState(0);
  const [scores, setScores] = useState({ cherry: 0, cinnamon: 0, ginger: 0, sampler: 0 });
  const [result, setResult] = useState(null);
  const { addToCart, setActiveModalProduct } = useCart();

  const handleSelectOption = (option) => {
    const newScores = {
      cherry: scores.cherry + option.score.cherry,
      cinnamon: scores.cinnamon + option.score.cinnamon,
      ginger: scores.ginger + option.score.ginger,
      sampler: scores.sampler + option.score.sampler,
    };
    setScores(newScores);

    if (currentStep < QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Determine winner
      let highestKey = 'cherry';
      let highestVal = -1;
      for (const [key, val] of Object.entries(newScores)) {
        if (val > highestVal) {
          highestVal = val;
          highestKey = key;
        }
      }

      const productMap = {
        cherry: 'cheeky-tart-cherry',
        cinnamon: 'sassy-cinnamon',
        ginger: 'bold-ginger',
        sampler: 'sampler-pack'
      };

      const matchedProd = PRODUCTS.find(p => p.id === productMap[highestKey]) || PRODUCTS[0];
      setResult(matchedProd);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setScores({ cherry: 0, cinnamon: 0, ginger: 0, sampler: 0 });
    setResult(null);
  };

  return (
    <section className="py-20 lg:py-24 bg-cream-100 relative overflow-hidden">
      {/* Background: Authentic heyhealthjunkie.com Hero Trio Flatlay (Crisp, High-Res 2048px & Clearly Visible) */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-85 pointer-events-none transition-opacity duration-500"
        style={{ backgroundImage: "url('/assets/hero-trio.jpg')" }}
      />
      {/* Soft luxury glaze that preserves all vivid colors (bottles, herbs, honey, lime) while maintaining readability */}
      <div className="absolute inset-0 bg-cream-100/40 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header with frosted glass contrast pills */}
        <div className="text-center space-y-3 mb-12">
          <div>
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-elderberry-900 border border-cream-300 shadow-sm text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-brandHoney" />
              <span>Interactive Syrup Matchmaker</span>
            </div>
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-elderberry-950 bg-white/90 backdrop-blur-md inline-block px-6 py-2 rounded-2xl border border-cream-300/70 shadow-sm">
              Find Your Family's Perfect Match
            </h2>
          </div>
          <div>
            <p className="text-xs sm:text-sm text-elderberry-950 font-medium max-w-lg mx-auto bg-white/90 backdrop-blur-md rounded-full py-1.5 px-5 border border-cream-200/80 shadow-sm inline-block">
              Answer 3 quick questions to discover which organic syrup formulation aligns best with your taste and wellness goals.
            </p>
          </div>
        </div>

        {/* Quiz Body */}
        <div className="bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-10 border border-cream-300/80 shadow-soft-float relative z-10">
          {!result ? (
            <div className="space-y-6">
              
              {/* Progress bar */}
              <div className="flex items-center justify-between text-xs text-elderberry-600 font-semibold mb-2">
                <span>Question 0{currentStep + 1} of 0{QUESTIONS.length}</span>
                <span>{Math.round(((currentStep + 1) / QUESTIONS.length) * 100)}% Complete</span>
              </div>
              <div className="w-full bg-cream-200 h-1.5 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-elderberry-900 rounded-full transition-all duration-300"
                  style={{ width: `${((currentStep + 1) / QUESTIONS.length) * 100}%` }}
                />
              </div>

              {/* Question Title */}
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-elderberry-950 pt-2">
                {QUESTIONS[currentStep].title}
              </h3>

              {/* Options */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                {QUESTIONS[currentStep].options.map((opt, oIdx) => (
                  <button
                    key={oIdx}
                    onClick={() => handleSelectOption(opt)}
                    className="p-4 sm:p-5 rounded-2xl border border-cream-300 hover:border-elderberry-900 bg-cream-50/50 hover:bg-cream-100 text-left text-xs sm:text-sm font-semibold text-elderberry-950 transition-all cursor-pointer flex items-center justify-between group hover:shadow-sm"
                  >
                    <span>{opt.label}</span>
                    <ArrowRight className="w-4 h-4 text-elderberry-400 group-hover:text-elderberry-950 group-hover:translate-x-1 transition-all flex-shrink-0 ml-2" />
                  </button>
                ))}
              </div>

            </div>
          ) : (
            /* Result Screen */
            <div className="space-y-6 text-center animate-in zoom-in-95 duration-300">
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
                <Check className="w-3.5 h-3.5" />
                <span>Your Ideal Match</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center text-left bg-cream-50 p-6 rounded-2xl border border-cream-200">
                <div className="sm:col-span-4 flex justify-center">
                  <img
                    src={result.images.bottle}
                    alt={result.title}
                    className="w-36 h-36 object-contain"
                  />
                </div>
                <div className="sm:col-span-8 space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-elderberry-500">
                    {result.flavor} • {result.badge}
                  </span>
                  <h4 className="font-serif text-2xl font-bold text-elderberry-950">
                    {result.title}
                  </h4>
                  <p className="text-xs text-elderberry-900/80 leading-relaxed">
                    {result.shortDesc}
                  </p>
                  <p className="text-xs font-semibold text-emerald-700">
                    ✓ {result.highlights[0]}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <button
                  onClick={() => addToCart(result, result.sizes[result.sizes.length - 1], 1)}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-elderberry-950 text-white font-bold text-xs uppercase tracking-wider hover:bg-elderberry-800 transition-all shadow-elevated flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <ShoppingBag className="w-4 h-4 text-brandHoney" />
                  <span>Add Match To Cart (${result.sizes[result.sizes.length - 1].price.toFixed(2)})</span>
                </button>

                <button
                  onClick={() => setActiveModalProduct(result)}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-full border border-cream-300 bg-white text-elderberry-950 font-semibold text-xs hover:bg-cream-100 transition-all cursor-pointer"
                >
                  View Details
                </button>

                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto px-4 py-3.5 text-xs text-elderberry-600 hover:text-elderberry-950 flex items-center justify-center space-x-1 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5 mr-1" />
                  <span>Retake Quiz</span>
                </button>
              </div>

            </div>
          )}
        </div>

      </div>
    </section>
  );
}

