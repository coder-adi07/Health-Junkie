import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, Check, ArrowRight, Shield, Flame, Droplet, Heart, Plus, ShoppingBag, Eye, Award } from 'lucide-react';
import { PRODUCTS } from '../data/brandData';
import { useCart } from '../context/CartContext';

const FLAVORS = [
  {
    index: 0,
    id: "cheeky-tart-cherry",
    name: "Cheeky Tart Cherry",
    tagline: "Antioxidant Duo • 100% Vegan • Toddler Friendly",
    accent: "#9E1C38",
    accentBg: "bg-brandCherry",
    accentBorder: "border-brandCherry",
    themeBg: "bg-gradient-to-br from-[#2D0B14] via-[#1F060D] to-[#120307]",
    cardGlow: "rgba(158, 28, 56, 0.4)",
    bottleImg: "/assets/cherry-bottle.png",
    flatlayImg: "/assets/cherry-flatlay.png",
    mocktailImg: "/assets/cherry-mocktail.jpg",
    sweetener: "Pure Local Maple Syrup",
    sweetenerNote: "Zero honey — 100% vegan and safe for toddlers under 1 eating solids.",
    sugarAmount: "1.0g",
    sugarPercent: 12,
    sugarComparison: "90% less sugar than Sambucol",
    badge: "Vegan & 1g Sugar",
    floatingBotanicals: [
      { text: "🍒 Organic Montmorency Cherries", pos: "top-10 -left-6 sm:-left-12" },
      { text: "🍁 Pure Midwest Maple Syrup", pos: "bottom-24 -left-4 sm:-left-8" },
      { text: "🫐 Whole Sambucus Nigra Berries", pos: "top-20 -right-6 sm:-right-12" },
      { text: "🍋 Fresh Organic Lemon Juice", pos: "bottom-16 -right-4 sm:-right-8" }
    ],
    flavorNotes: ["Bright Tart Cherry", "Deep European Elderberry", "Silky Maple Finish"],
    ingredients: [
      { name: "Organic Sambucus Nigra", desc: "Immune defense powerhouse" },
      { name: "Organic Tart Cherry Juice", desc: "Anthocyanins & sleep support" },
      { name: "Pure Local Maple Syrup", desc: "Low-glycemic natural sweetener" },
      { name: "Organic Lemon Juice", desc: "Citrus brightness & freshness" }
    ],
    recommendedRecipe: "Cheeky Tart Cherry Lemon Mocktail",
    recipeLink: "#recipes"
  },
  {
    index: 1,
    id: "sassy-cinnamon",
    name: "Sassy Cinnamon",
    tagline: "Warm Ceylon Spices • Nicole's Personal Favorite",
    accent: "#B04C28",
    accentBg: "bg-brandCinnamon",
    accentBorder: "border-brandCinnamon",
    themeBg: "bg-gradient-to-br from-[#30140A] via-[#210D06] to-[#140803]",
    cardGlow: "rgba(176, 76, 40, 0.4)",
    bottleImg: "/assets/cinnamon-bottle.png",
    flatlayImg: "/assets/cinnamon-flatlay.png",
    mocktailImg: "/assets/cinnamon-mocktail.jpg",
    sweetener: "Raw Local Ohio Honey",
    sweetenerNote: "Unheated, unfiltered raw honey rich in natural local pollens and soothing enzymes.",
    sugarAmount: "2.0g",
    sugarPercent: 22,
    sugarComparison: "50% less sugar than leading brands",
    badge: "Founder's Favorite",
    floatingBotanicals: [
      { text: "🌿 Organic Ceylon Cinnamon", pos: "top-10 -left-6 sm:-left-12" },
      { text: "🍯 Raw Local Ohio Honey", pos: "bottom-24 -left-4 sm:-left-8" },
      { text: "✨ Aromatic Whole Cloves", pos: "top-20 -right-6 sm:-right-12" },
      { text: "🌰 Organic Nutmeg & Fresh Ginger", pos: "bottom-16 -right-4 sm:-right-8" }
    ],
    flavorNotes: ["Ceylon Cinnamon", "Aromatic Whole Clove", "Nutmeg & Fresh Ginger", "Raw Ohio Wildflower Honey"],
    ingredients: [
      { name: "Organic Sambucus Nigra", desc: "High potency elderberries" },
      { name: "Raw Local Ohio Honey", desc: "Unpasteurized natural sweetness" },
      { name: "Ceylon Cinnamon", desc: "Warm metabolism & circulation support" },
      { name: "Whole Cloves & Nutmeg", desc: "Antimicrobial warming aromatics" }
    ],
    recommendedRecipe: "Mulled Sassy Cider (As seen on TV)",
    recipeLink: "#recipes"
  },
  {
    index: 2,
    id: "bold-ginger",
    name: "Bold Ginger",
    tagline: "Invigorating Spice • Foodie Favorite • Zesty Throat Relief",
    accent: "#C67E28",
    accentBg: "bg-brandGinger",
    accentBorder: "border-brandGinger",
    themeBg: "bg-gradient-to-br from-[#331D07] via-[#241304] to-[#150A02]",
    cardGlow: "rgba(198, 126, 40, 0.4)",
    bottleImg: "/assets/ginger-bottle.png",
    flatlayImg: "/assets/ginger-flatlay.png",
    mocktailImg: "/assets/ginger-mocktail.jpg",
    sweetener: "Raw Local Ohio Honey",
    sweetenerNote: "Paired with fresh pressed organic ginger root for an active immune stimulation.",
    sugarAmount: "2.0g",
    sugarPercent: 22,
    sugarComparison: "50% less sugar than leading brands",
    badge: "Foodie Favorite",
    floatingBotanicals: [
      { text: "⚡ Fresh Pressed Organic Ginger", pos: "top-10 -left-6 sm:-left-12" },
      { text: "🍯 Raw Wildflower Honey", pos: "bottom-24 -left-4 sm:-left-8" },
      { text: "🫐 Whole Sambucus Nigra", pos: "top-20 -right-6 sm:-right-12" },
      { text: "🌿 Warm Ceylon Spice Blend", pos: "bottom-16 -right-4 sm:-right-8" }
    ],
    flavorNotes: ["Fresh Pressed Ginger Bite", "Warming Heat", "Deep Elderberry", "Golden Honey"],
    ingredients: [
      { name: "Organic Sambucus Nigra", desc: "Handcrafted small batch extract" },
      { name: "Organic Fresh Ginger Root", desc: "Active gingerols for soothing relief" },
      { name: "Raw Local Ohio Honey", desc: "Throat-coating enzyme goodness" },
      { name: "Organic Ceylon Spices", desc: "Harmonizing spicy finish" }
    ],
    recommendedRecipe: "Bold Ginger Orange Sparkler",
    recipeLink: "#recipes"
  }
];

export default function ScrollExperience() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [selectedSize, setSelectedSize] = useState('16.5 fl oz');
  const [animating, setAnimating] = useState(false);
  const sectionRef = useRef(null);
  const { addToCart, setActiveModalProduct } = useCart();

  const currentFlavor = FLAVORS[activeIdx];
  const currentProduct = PRODUCTS.find(p => p.id === currentFlavor.id);

  // Switch flavor with brief smooth fade
  const handleFlavorChange = (idx) => {
    if (idx === activeIdx) return;
    setAnimating(true);
    setTimeout(() => {
      setActiveIdx(idx);
      setAnimating(false);
    }, 220);
  };

  const handleNextFlavor = () => {
    handleFlavorChange((activeIdx + 1) % FLAVORS.length);
  };

  const handlePrevFlavor = () => {
    handleFlavorChange((activeIdx - 1 + FLAVORS.length) % FLAVORS.length);
  };

  const activePrice = selectedSize === '16.5 fl oz' ? 24.00 : 15.00;

  return (
    <section 
      id="flavors"
      ref={sectionRef}
      className={`relative min-h-screen py-24 lg:py-32 transition-colors duration-700 text-cream-100 overflow-hidden ${currentFlavor.themeBg}`}
    >
      {/* Background ambient spotlight morphing with flavor */}
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] sm:w-[900px] sm:h-[900px] rounded-full blur-[140px] pointer-events-none transition-all duration-700 opacity-50"
        style={{ background: currentFlavor.accent }}
      />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-elderberry-950/80 blur-[100px] pointer-events-none" />

      {/* Floating Rotating Brand Seal Stamp (Vieve style) */}
      <div className="absolute top-8 right-8 hidden lg:block z-20 pointer-events-none opacity-40">
        <div className="relative w-28 h-28 flex items-center justify-center animate-spin-slow">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <path
              id="circlePath"
              d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
              fill="none"
            />
            <text className="text-[7.5px] font-bold uppercase tracking-widest fill-cream-200">
              <textPath href="#circlePath">
                ★ 100% ORGANIC SAMBUCUS NIGRA ★ HANDCRAFTED IN CLEVELAND OH ★
              </textPath>
            </text>
          </svg>
          <Award className="w-8 h-8 text-brandHoney absolute" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14 sm:mb-18">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-bold tracking-widest uppercase text-brandHoney backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Scroll & Taste • 3 Signature Syrups</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            Crafted For Every Palate, <br />
            <span className="italic font-normal font-display text-cream-200">
              Engineered For Pure Immunity.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-cream-200/80 max-w-xl mx-auto">
            From low-sugar tart cherry to soothing cinnamon and zesty foodie ginger. Experience the craft behind each bottle.
          </p>

          {/* Interactive Flavor Navigation Tabs (Vieve style pill toggle) */}
          <div className="pt-3 flex items-center justify-center">
            <div className="inline-flex bg-white/10 p-1.5 rounded-full border border-white/15 backdrop-blur-md shadow-2xl">
              {FLAVORS.map((f, i) => (
                <button
                  key={f.id}
                  onClick={() => handleFlavorChange(i)}
                  className={`px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer flex items-center space-x-2 ${
                    activeIdx === i
                      ? 'bg-white text-elderberry-950 shadow-lg scale-105 font-bold'
                      : 'text-cream-200/70 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span className={`w-2.5 h-2.5 rounded-full ${f.accentBg}`} />
                  <span>{f.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Central Stage: Vieve-Inspired 3-Column Presentation */}
        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center transition-all duration-300 ${animating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
          
          {/* Left Column: Flavor Story, Tasting Notes & Sugar Meter */}
          <div className="lg:col-span-4 space-y-6 text-left order-2 lg:order-1">
            
            {/* Tagline Card */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-md relative overflow-hidden">
              <div 
                className="absolute top-0 left-0 w-1.5 h-full transition-colors duration-500"
                style={{ background: currentFlavor.accent }}
              />
              <span className="text-[11px] font-bold tracking-wider uppercase text-brandHoney block mb-1">
                Flavor Profile 0{activeIdx + 1}
              </span>
              <h3 className="font-serif text-2xl font-bold text-white mb-2">
                {currentFlavor.name}
              </h3>
              <p className="text-xs sm:text-sm text-cream-200/80 leading-relaxed">
                {currentFlavor.tagline}
              </p>
            </div>

            {/* Tasting Notes */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-md">
              <span className="text-[11px] font-bold tracking-wider uppercase text-cream-300 block mb-3">
                Palate & Tasting Notes
              </span>
              <div className="flex flex-wrap gap-2">
                {currentFlavor.flavorNotes.map((note, nIdx) => (
                  <span 
                    key={nIdx}
                    className="px-3 py-1.5 rounded-xl bg-white/10 text-white text-xs font-medium border border-white/10"
                  >
                    {note}
                  </span>
                ))}
              </div>
            </div>

            {/* Interactive Sugar Comparison Meter */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-md space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold tracking-wider uppercase text-cream-300">
                  Sugar Comparison (per tbsp)
                </span>
                <span className="text-xs font-bold text-emerald-400">
                  {currentFlavor.sugarComparison}
                </span>
              </div>

              {/* Health Junkie bar */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-white">Health Junkie</span>
                  <span className="text-emerald-400 font-bold">{currentFlavor.sugarAmount}</span>
                </div>
                <div className="w-full bg-white/10 h-2.5 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-emerald-400 rounded-full transition-all duration-700"
                    style={{ width: `${currentFlavor.sugarPercent}%` }}
                  />
                </div>
              </div>

              {/* Sambucol bar */}
              <div className="space-y-1 opacity-70">
                <div className="flex justify-between text-xs">
                  <span className="text-cream-200">Leading Drugstore Brand (Sambucol)</span>
                  <span className="text-rose-400 font-medium">4.0g (Corn Syrup)</span>
                </div>
                <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                  <div className="h-full bg-rose-400/80 rounded-full w-[80%]" />
                </div>
              </div>

              <p className="text-[11px] text-cream-300/80 pt-1 leading-relaxed">
                Sweetened with <strong>{currentFlavor.sweetener}</strong>: {currentFlavor.sweetenerNote}
              </p>
            </div>

          </div>

          {/* Center Column: The Visual Bottle Centerpiece with Floating Botanical Badges (Vieve style) */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center relative order-1 lg:order-2 py-6">
            
            {/* Halo Glow */}
            <div 
              className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full blur-[90px] pointer-events-none transition-all duration-500 opacity-60"
              style={{ background: currentFlavor.accent }}
            />

            {/* Center Bottle Container with Floating Badges */}
            <div className="relative group cursor-pointer animate-float-slow w-full flex items-center justify-center">
              
              {/* Floating Botanical Badges Around Bottle (Vieve effect) */}
              {currentFlavor.floatingBotanicals.map((bot, bIdx) => (
                <div
                  key={bIdx}
                  className={`absolute ${bot.pos} z-20 px-3 py-1.5 rounded-full bg-elderberry-950/85 backdrop-blur-md border border-white/20 text-cream-100 text-[10px] sm:text-xs font-semibold shadow-lg whitespace-nowrap hidden sm:block animate-pulse-subtle`}
                  style={{ animationDelay: `${bIdx * 0.7}s` }}
                >
                  {bot.text}
                </div>
              ))}

              <img
                src={currentFlavor.bottleImg}
                alt={currentFlavor.name}
                onClick={() => currentProduct && setActiveModalProduct(currentProduct)}
                className="w-64 sm:w-80 lg:w-92 h-auto max-h-[500px] object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.6)] transform group-hover:scale-105 transition-transform duration-500"
              />

              {/* Bottle Ground Shadow */}
              <div className="absolute -bottom-4 w-2/3 h-6 bg-black/50 blur-xl rounded-full mx-auto"></div>
            </div>

            {/* Quick Navigation Arrows & Step Indicator */}
            <div className="flex items-center space-x-5 mt-8 z-10">
              <button
                onClick={handlePrevFlavor}
                className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer border border-white/15"
                aria-label="Previous flavor"
              >
                ←
              </button>
              <div className="flex items-center space-x-2">
                {FLAVORS.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    onClick={() => handleFlavorChange(dotIdx)}
                    className={`h-2 rounded-full transition-all cursor-pointer ${
                      activeIdx === dotIdx ? 'w-8 bg-brandHoney' : 'w-2 bg-white/30 hover:bg-white/50'
                    }`}
                    aria-label={`Go to flavor ${dotIdx + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={handleNextFlavor}
                className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer border border-white/15"
                aria-label="Next flavor"
              >
                →
              </button>
            </div>

          </div>

          {/* Right Column: 100% Clean Deck, Size Toggle & Direct Add-To-Cart */}
          <div className="lg:col-span-4 space-y-6 text-left order-3">
            
            {/* Ingredients Spotlight Card */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-md space-y-4">
              <span className="text-[11px] font-bold tracking-wider uppercase text-brandHoney block">
                100% Clean Ingredient Deck
              </span>

              <div className="space-y-3">
                {currentFlavor.ingredients.map((ing, iIdx) => (
                  <div key={iIdx} className="flex items-start space-x-3 text-xs">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-white block">{ing.name}</span>
                      <span className="text-cream-300/80">{ing.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Size Selector & Add to Cart Card */}
            <div className="bg-white/10 border border-white/15 rounded-3xl p-6 backdrop-blur-md space-y-5 shadow-2xl">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-bold tracking-wider uppercase text-cream-300 block">
                    Choose Bottle Size
                  </span>
                  <div className="flex items-baseline space-x-2 mt-0.5">
                    <span className="text-2xl font-serif font-bold text-white">
                      ${activePrice.toFixed(2)}
                    </span>
                    <span className="text-xs text-cream-300">
                      {selectedSize === '16.5 fl oz' ? '($1.45/oz • Best Value)' : '($1.80/oz)'}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => currentProduct && setActiveModalProduct(currentProduct)}
                  className="text-xs text-brandHoney underline hover:text-white transition-colors cursor-pointer flex items-center space-x-1"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Full Details</span>
                </button>
              </div>

              {/* Size Buttons */}
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setSelectedSize('8.3 fl oz')}
                  className={`p-3 rounded-2xl border text-center transition-all cursor-pointer ${
                    selectedSize === '8.3 fl oz'
                      ? 'bg-white text-elderberry-950 border-white shadow-md font-bold'
                      : 'bg-white/5 text-white border-white/15 hover:bg-white/10'
                  }`}
                >
                  <span className="block text-xs font-semibold">8.3 fl oz</span>
                  <span className="block text-[11px] opacity-80">$15.00</span>
                </button>

                <button
                  onClick={() => setSelectedSize('16.5 fl oz')}
                  className={`p-3 rounded-2xl border text-center relative transition-all cursor-pointer ${
                    selectedSize === '16.5 fl oz'
                      ? 'bg-white text-elderberry-950 border-white shadow-md font-bold'
                      : 'bg-white/5 text-white border-white/15 hover:bg-white/10'
                  }`}
                >
                  <span className="absolute -top-2 right-2 bg-brandHoney text-elderberry-950 text-[9px] font-bold px-1.5 py-0.5 rounded-full">
                    SAVE 20%
                  </span>
                  <span className="block text-xs font-semibold">16.5 fl oz</span>
                  <span className="block text-[11px] opacity-80">$24.00</span>
                </button>
              </div>

              {/* Quick Add Button */}
              <button
                onClick={() => {
                  if (currentProduct) {
                    addToCart(currentProduct, selectedSize, 1);
                  }
                }}
                className="w-full py-3.5 px-6 rounded-full bg-brandHoney text-elderberry-950 font-bold text-xs uppercase tracking-wider hover:bg-amber-300 transition-all shadow-elevated flex items-center justify-center space-x-2 cursor-pointer group"
              >
                <ShoppingBag className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>Add {currentFlavor.name} (${activePrice.toFixed(2)})</span>
              </button>

              <div className="flex items-center justify-center space-x-4 text-[11px] text-cream-300/80">
                <span>✓ Ships within 24 Hours</span>
                <span>•</span>
                <span>✓ Free over $50</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
