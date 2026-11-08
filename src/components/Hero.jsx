import React, { useState, useRef } from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Heart, Award, Star } from 'lucide-react';
import { PRODUCTS } from '../data/brandData';
import { useCart } from '../context/CartContext';

export default function Hero() {
  const [selectedFlavorIdx, setSelectedFlavorIdx] = useState(0);
  const [tilt, setTilt] = useState({ x: 0, y: 0, active: false, glareX: 50, glareY: 50 });
  const card3DRef = useRef(null);
  const { addToCart, setActiveModalProduct } = useCart();

  const handleMouseMove3D = (e) => {
    if (!card3DRef.current) return;
    const rect = card3DRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Smooth 3D tilt angles
    const rotateY = ((x - centerX) / centerX) * 18;
    const rotateX = -((y - centerY) / centerY) * 18;

    setTilt({
      x: rotateX,
      y: rotateY,
      active: true,
      glareX: (x / rect.width) * 100,
      glareY: (y / rect.height) * 100,
    });
  };

  const handleMouseLeave3D = () => {
    setTilt({ x: 0, y: 0, active: false, glareX: 50, glareY: 50 });
  };

  const heroFlavors = [
    {
      id: "cheeky-tart-cherry",
      name: "Cheeky Tart Cherry",
      badge: "Vegan & Low Sugar (1g)",
      color: "bg-brandCherry",
      border: "border-brandCherry",
      bottleImg: "/assets/cherry-bottle.png",
      glowColor: "rgba(158, 28, 56, 0.35)",
      note: "Sweetened with pure local maple syrup • 1g sugar",
      productId: "cheeky-tart-cherry"
    },
    {
      id: "sassy-cinnamon",
      name: "Sassy Cinnamon",
      badge: "Founder's Favorite",
      color: "bg-brandCinnamon",
      border: "border-brandCinnamon",
      bottleImg: "/assets/cinnamon-bottle.png",
      glowColor: "rgba(176, 76, 40, 0.35)",
      note: "Ceylon cinnamon, clove, ginger & raw local honey",
      productId: "sassy-cinnamon"
    },
    {
      id: "bold-ginger",
      name: "Bold Ginger",
      badge: "Foodie Favorite",
      color: "bg-brandGinger",
      border: "border-brandGinger",
      bottleImg: "/assets/ginger-bottle.png",
      glowColor: "rgba(198, 126, 40, 0.35)",
      note: "Antioxidant elderberry with spicy ginger kick",
      productId: "bold-ginger"
    },
    {
      id: "sampler-pack",
      name: "Sampler Trio Gift",
      badge: "Best Seller Set",
      color: "bg-elderberry-700",
      border: "border-elderberry-700",
      bottleImg: "/assets/sampler-trio-gift.png",
      glowColor: "rgba(110, 46, 87, 0.35)",
      note: "All 3 signature flavors + full-color recipe cards",
      productId: "sampler-pack"
    }
  ];

  const currentFlavor = heroFlavors[selectedFlavorIdx];
  const fullProduct = PRODUCTS.find(p => p.id === currentFlavor.productId);

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-cream-100 via-cream-200 to-cream-100 pt-8 pb-16">
      
      {/* Ambient background glows */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] sm:w-[750px] sm:h-[750px] rounded-full blur-[120px] pointer-events-none transition-all duration-700 opacity-60"
        style={{ background: currentFlavor.glowColor }}
      />
      <div className="absolute top-12 -left-20 w-80 h-80 rounded-full bg-brandHoney/20 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-96 h-96 rounded-full bg-elderberry-300/30 blur-[120px] pointer-events-none" />

      {/* Subtle organic floating SVG botanical silhouettes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-15">
        <svg className="absolute top-10 left-8 w-24 h-24 text-elderberry-900 animate-float-slow" viewBox="0 0 100 100" fill="currentColor">
          <circle cx="50" cy="50" r="14" />
          <circle cx="30" cy="40" r="10" />
          <circle cx="70" cy="40" r="10" />
          <circle cx="40" cy="68" r="11" />
          <circle cx="62" cy="66" r="11" />
          <path d="M50 20 Q48 5 50 2" stroke="currentColor" strokeWidth="3" fill="none" />
        </svg>
        <svg className="absolute bottom-20 right-12 w-28 h-28 text-brandCinnamon animate-float-reverse" viewBox="0 0 100 100" fill="currentColor">
          <circle cx="50" cy="50" r="15" />
          <circle cx="32" cy="38" r="11" />
          <circle cx="68" cy="38" r="11" />
          <circle cx="38" cy="65" r="12" />
          <circle cx="64" cy="65" r="12" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Brand Headline & Copy */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6 sm:space-y-7">
            
            {/* Top Credibility Tag */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-elderberry-900/5 border border-elderberry-900/10 backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-brandHoney animate-pulse" />
              <span className="text-xs uppercase tracking-widest font-bold text-elderberry-900">
                Cleveland Handcrafted • Holistic Health Formulated
              </span>
            </div>

            {/* Main Editorial Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight text-elderberry-950 leading-[1.08]">
              Immunity Handcrafted <br />
              <span className="text-elderberry-700">
                Without The Junk.
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-elderberry-900/80 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Formulated by Board Certified Holistic Health Practitioner <strong>Nicole Lazar</strong> (former NASA engineer) with 100% clean organic ingredients. Sweetened exclusively with raw local Ohio honey or pure maple syrup — with <strong>50% to 90% less sugar</strong> than leading drugstore brands.
            </p>

            {/* Key Quality Pillars Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-1">
              <div className="flex items-center space-x-2 bg-white/80 border border-cream-300/80 rounded-xl px-3 py-2 shadow-sm">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span className="text-xs font-semibold text-elderberry-950">0g Processed Sugar</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/80 border border-cream-300/80 rounded-xl px-3 py-2 shadow-sm">
                <Award className="w-4 h-4 text-brandHoney" />
                <span className="text-xs font-semibold text-elderberry-950">100% Sambucus Nigra</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/80 border border-cream-300/80 rounded-xl px-3 py-2 shadow-sm">
                <Heart className="w-4 h-4 text-brandCherry" />
                <span className="text-xs font-semibold text-elderberry-950">Kid & Family Friendly</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => {
                  if (fullProduct) addToCart(fullProduct, fullProduct.sizes[fullProduct.sizes.length - 1]);
                }}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-elderberry-950 text-white font-medium text-sm tracking-wider uppercase shadow-elevated hover:bg-elderberry-800 transition-all flex items-center justify-center space-x-3 group cursor-pointer"
              >
                <span>Add {currentFlavor.name}</span>
                <ArrowRight className="w-4 h-4 text-brandHoney group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#flavors"
                className="w-full sm:w-auto px-7 py-4 rounded-full bg-white/90 text-elderberry-950 border border-cream-300 font-semibold text-sm tracking-wide hover:bg-cream-100 transition-all text-center"
              >
                Explore All 3 Flavors
              </a>
            </div>

            {/* Social Proof / Trust Footnote */}
            <div className="pt-2 flex items-center justify-center lg:justify-start space-x-3 text-xs text-elderberry-800">
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <span><strong>90+ Five-Star Reviews</strong> • Featured at <strong>Heinen's</strong> Grocery Store</span>
            </div>
          </div>

          {/* Right Column: Hero Cinematic 3D Interactive Product Centerpiece */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            
            {/* 3D Interactive Stage Container */}
            <div 
              ref={card3DRef}
              onMouseMove={handleMouseMove3D}
              onMouseLeave={handleMouseLeave3D}
              style={{ perspective: '1200px' }}
              className="relative w-72 sm:w-84 md:w-96 flex items-center justify-center select-none py-6 cursor-grab active:cursor-grabbing"
            >
              
              {/* Product Badge Pill (Layered with 3D depth) */}
              <div 
                style={{
                  transform: tilt.active 
                    ? `translate3d(0, ${tilt.x * 0.5}px, 45px) rotateX(${tilt.x * 0.5}deg) rotateY(${tilt.y * 0.5}deg)` 
                    : undefined,
                  transition: tilt.active ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out'
                }}
                className="absolute -top-1 sm:top-3 left-1/2 -translate-x-1/2 z-30 whitespace-nowrap px-4 py-1.5 rounded-full bg-elderberry-950/90 text-cream-100 text-xs font-bold tracking-wide uppercase shadow-lg border border-white/20 backdrop-blur-md flex items-center space-x-1.5 pointer-events-none"
              >
                <Sparkles className="w-3.5 h-3.5 text-brandHoney" />
                <span>{currentFlavor.badge}</span>
              </div>

              {/* Main 3D Bottle Body with Gyroscopic Floating & Tilt */}
              <div 
                style={tilt.active ? {
                  transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(1.06, 1.06, 1.06)`,
                  transition: 'transform 0.12s cubic-bezier(0.2, 0.8, 0.2, 1)',
                  transformStyle: 'preserve-3d'
                } : {
                  transformStyle: 'preserve-3d'
                }}
                className={`relative group ${!tilt.active ? 'bottle-3d-idle' : ''} py-2`}
              >
                <img
                  key={currentFlavor.bottleImg}
                  src={currentFlavor.bottleImg}
                  alt={currentFlavor.name}
                  onClick={() => fullProduct && setActiveModalProduct(fullProduct)}
                  className="w-full h-auto max-h-[460px] sm:max-h-[520px] object-contain drop-shadow-[0_25px_35px_rgba(22,5,16,0.35)] transition-all duration-300"
                />

                {/* 3D Specular Light Glare (Glass Sheen reacting to mouse position) */}
                {tilt.active && (
                  <div 
                    className="absolute inset-0 pointer-events-none rounded-3xl mix-blend-overlay opacity-60 transition-opacity duration-300"
                    style={{
                      background: `radial-gradient(circle at ${tilt.glareX}% ${tilt.glareY}%, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.2) 35%, rgba(255,255,255,0) 70%)`
                    }}
                  />
                )}

                {/* Dynamic 3D Ground Shadow */}
                <div 
                  style={tilt.active ? {
                    transform: `translateX(${-tilt.y * 1.4}px) translateY(${tilt.x * 0.7}px) scale(${1 - Math.abs(tilt.x) * 0.008})`,
                    transition: 'transform 0.12s ease-out'
                  } : undefined}
                  className={`w-3/4 h-8 bg-elderberry-950/25 blur-xl rounded-full mx-auto -mt-6 ${!tilt.active ? 'shadow-3d-idle' : ''}`}
                />
              </div>

              {/* Floating Botanical Callout Card (Left) with 3D Parallax */}
              <div 
                style={{
                  transform: tilt.active 
                    ? `translate3d(${-tilt.y * 0.8}px, ${tilt.x * 0.4}px, 50px) rotateY(${-tilt.y * 0.3}deg)` 
                    : undefined,
                  transition: tilt.active ? 'transform 0.12s ease-out' : 'transform 0.6s ease-out'
                }}
                className="hidden sm:block absolute -left-8 top-1/3 bg-white/95 backdrop-blur-md border border-cream-300 rounded-2xl p-3 shadow-lg max-w-[170px] text-left transition-shadow hover:shadow-xl pointer-events-none z-20"
              >
                <span className="text-[10px] uppercase tracking-wider font-bold text-elderberry-600 block">Sweetened With</span>
                <span className="text-xs font-semibold text-elderberry-950 block mt-0.5">
                  {selectedFlavorIdx === 0 ? "Pure Local Maple" : "Raw Local Ohio Honey"}
                </span>
                <span className="text-[10px] text-emerald-700 font-medium block">0g Processed Sugar</span>
              </div>

              {/* Floating Botanical Callout Card (Right) with 3D Parallax */}
              <div 
                style={{
                  transform: tilt.active 
                    ? `translate3d(${tilt.y * 0.8}px, ${-tilt.x * 0.4}px, 50px) rotateY(${-tilt.y * 0.3}deg)` 
                    : undefined,
                  transition: tilt.active ? 'transform 0.12s ease-out' : 'transform 0.6s ease-out'
                }}
                className="hidden sm:block absolute -right-8 bottom-1/4 bg-white/95 backdrop-blur-md border border-cream-300 rounded-2xl p-3 shadow-lg max-w-[170px] text-left transition-shadow hover:shadow-xl pointer-events-none z-20"
              >
                <span className="text-[10px] uppercase tracking-wider font-bold text-elderberry-600 block">Sugar Meter</span>
                <span className="text-xs font-semibold text-elderberry-950 block mt-0.5">
                  {selectedFlavorIdx === 0 ? "Only 1g / tbsp" : "Only 2g / tbsp"}
                </span>
                <span className="text-[10px] text-elderberry-700 block">90% Less Than Sambucol</span>
              </div>
            </div>

            {/* Interactive Flavor Switcher Tabs */}
            <div className="mt-8 bg-white/90 backdrop-blur-md p-1.5 rounded-full border border-cream-300 shadow-md flex items-center space-x-1 sm:space-x-2">
              {heroFlavors.map((flavor, idx) => (
                <button
                  key={flavor.id}
                  onClick={() => setSelectedFlavorIdx(idx)}
                  className={`px-3 sm:px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 cursor-pointer ${
                    selectedFlavorIdx === idx
                      ? 'bg-elderberry-950 text-white shadow-md'
                      : 'text-elderberry-900/70 hover:text-elderberry-950 hover:bg-cream-100'
                  }`}
                >
                  <span className="flex items-center space-x-1.5">
                    <span className={`w-2 h-2 rounded-full ${flavor.color}`} />
                    <span className="hidden sm:inline">{flavor.name}</span>
                    <span className="sm:hidden">{flavor.name.split(' ')[0]}</span>
                  </span>
                </button>
              ))}
            </div>

            {/* Selected Flavor Tasting Note */}
            <p className="mt-3 text-xs text-elderberry-700 font-medium italic text-center">
              "{currentFlavor.note}"
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}

