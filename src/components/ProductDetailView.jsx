import React, { useState } from 'react';
import { 
  ArrowLeft, Star, Check, ShieldCheck, ShoppingBag, Plus, Minus, 
  Heart, Sparkles, Truck, RefreshCw, AlertCircle, ChevronDown, ChevronUp, Share2 
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { PRODUCTS, RECIPES } from '../data/brandData';

export default function ProductDetailView({ product, onBack, onSelectProduct }) {
  const { addToCart, setIsCartOpen } = useCart();
  const [selectedSizeIdx, setSelectedSizeIdx] = useState(1); // default to best value 16.5 oz
  const [quantity, setQuantity] = useState(1);
  const [activeImageKey, setActiveImageKey] = useState('bottle');
  const [purchaseType, setPurchaseType] = useState('one-time'); // 'one-time' | 'subscribe'
  const [activeAccordion, setActiveAccordion] = useState('dosage');

  if (!product) return null;

  const currentSize = product.sizes[selectedSizeIdx] || product.sizes[0];
  const unitPrice = purchaseType === 'subscribe' ? currentSize.price * 0.85 : currentSize.price;
  const totalPrice = unitPrice * quantity;

  // Gallery items
  const gallery = [
    { key: 'bottle', label: 'Bottle Shot', src: product.images.bottle },
    product.images.flatlay && { key: 'flatlay', label: 'Ingredients Flatlay', src: product.images.flatlay },
    product.images.lifestyle && { key: 'lifestyle', label: 'Mocktail Ritual', src: product.images.lifestyle },
    product.images.nutrition && { key: 'nutrition', label: 'Nutrition Facts Label', src: product.images.nutrition },
    product.images.recipe && { key: 'recipe', label: 'Serving Idea', src: product.images.recipe },
  ].filter(Boolean);

  const currentImg = product.images[activeImageKey] || product.images.bottle;
  const related = PRODUCTS.filter(p => p.id !== product.id).slice(0, 3);
  const matchedRecipe = RECIPES.find(r => 
    r.syrupUsed.toLowerCase().includes(product.flavor.toLowerCase()) || 
    product.title.toLowerCase().includes(r.syrupUsed.toLowerCase())
  );

  const handleAddToCart = () => {
    addToCart(product, currentSize, quantity);
  };

  return (
    <div className="min-h-screen bg-cream-50 pt-6 pb-24 text-elderberry-950">
      
      {/* Top Breadcrumb & Back Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <button
          onClick={onBack}
          className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-elderberry-700 hover:text-elderberry-950 transition-colors cursor-pointer group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Homepage & All Products</span>
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Visual Gallery & Sticky Image Showcase */}
          <div className="lg:col-span-6 space-y-5 lg:sticky lg:top-24">
            
            {/* Primary Image Viewport */}
            <div className="relative aspect-square bg-white rounded-3xl p-8 sm:p-12 flex items-center justify-center border border-cream-300 shadow-soft-float overflow-hidden">
              <span className="absolute top-5 left-5 z-10 px-3.5 py-1.5 rounded-full bg-elderberry-950 text-white text-[11px] uppercase font-bold tracking-wider shadow-md">
                {product.badge}
              </span>

              <img
                src={currentImg}
                alt={product.title}
                className="w-full h-full object-contain transition-all duration-300 hover:scale-105"
              />
            </div>

            {/* Gallery Thumbnails */}
            {gallery.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {gallery.map((g) => (
                  <button
                    key={g.key}
                    onClick={() => setActiveImageKey(g.key)}
                    className={`w-20 h-20 rounded-2xl p-2 bg-white border transition-all cursor-pointer flex-shrink-0 flex items-center justify-center ${
                      activeImageKey === g.key
                        ? 'border-elderberry-950 ring-2 ring-elderberry-950/20 shadow-md'
                        : 'border-cream-300 hover:border-elderberry-600'
                    }`}
                  >
                    <img src={g.src} alt={g.label} className="w-full h-full object-contain" />
                  </button>
                ))}
              </div>
            )}

            {/* Trust Badges Card */}
            <div className="grid grid-cols-3 gap-3 pt-2 text-center text-xs">
              <div className="p-3.5 bg-white rounded-2xl border border-cream-200 shadow-sm">
                <ShieldCheck className="w-5 h-5 text-emerald-600 mx-auto mb-1" />
                <span className="font-bold text-elderberry-950 block text-[11px]">100% Clean</span>
                <span className="text-[10px] text-elderberry-600">No Preservatives</span>
              </div>
              <div className="p-3.5 bg-white rounded-2xl border border-cream-200 shadow-sm">
                <Truck className="w-5 h-5 text-brandHoney mx-auto mb-1" />
                <span className="font-bold text-elderberry-950 block text-[11px]">Free Shipping</span>
                <span className="text-[10px] text-elderberry-600">On Orders Over $50</span>
              </div>
              <div className="p-3.5 bg-white rounded-2xl border border-cream-200 shadow-sm">
                <Heart className="w-5 h-5 text-brandCherry mx-auto mb-1" />
                <span className="font-bold text-elderberry-950 block text-[11px]">Handcrafted</span>
                <span className="text-[10px] text-elderberry-600">Cleveland, OH</span>
              </div>
            </div>

          </div>

          {/* Right Column: Purchasing Experience & Deep Specifications */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            {/* Header info */}
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-elderberry-500">
                <span>{product.flavor}</span>
                <span>•</span>
                <span>{product.category}</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-elderberry-950 leading-tight">
                {product.title}
              </h1>

              {/* Reviews & Social Proof */}
              <div className="flex items-center space-x-3 pt-1">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500" />
                  ))}
                </div>
                <span className="text-xs font-bold text-elderberry-950">{product.rating}</span>
                <span className="text-xs text-elderberry-500">• {product.reviewsCount} verified reviews</span>
                <span className="text-xs text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full font-semibold">
                  In Stock & Ready to Ship
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-elderberry-900/80 leading-relaxed font-normal">
              {product.fullDesc}
            </p>

            {/* Size Selector */}
            {product.sizes.length > 1 && (
              <div className="space-y-2.5 pt-2">
                <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-elderberry-900">
                  <span>Choose Bottle Size:</span>
                  <span className="text-elderberry-500 font-normal">Selected: {currentSize.size}</span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {product.sizes.map((s, sIdx) => {
                    const isSelected = selectedSizeIdx === sIdx;
                    return (
                      <button
                        key={s.size}
                        type="button"
                        onClick={() => setSelectedSizeIdx(sIdx)}
                        className={`p-4 rounded-2xl border text-left transition-all cursor-pointer relative ${
                          isSelected
                            ? 'bg-elderberry-950 text-white border-elderberry-950 shadow-md font-bold'
                            : 'bg-white text-elderberry-950 border-cream-300 hover:bg-cream-100'
                        }`}
                      >
                        {s.popular && (
                          <span className="absolute -top-2.5 right-3 bg-brandHoney text-elderberry-950 text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm">
                            BEST VALUE
                          </span>
                        )}
                        <span className="block text-sm font-bold">{s.size}</span>
                        <div className="flex items-baseline space-x-1.5 mt-1">
                          <span className="text-lg font-serif font-bold">${s.price.toFixed(2)}</span>
                          <span className={`text-[11px] ${isSelected ? 'text-cream-300' : 'text-elderberry-500'}`}>
                            ({s.value})
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* One-Time vs Subscribe & Save 15% Selector */}
            <div className="space-y-2.5 pt-2">
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setPurchaseType('one-time')}
                  className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
                    purchaseType === 'one-time'
                      ? 'border-elderberry-950 bg-white ring-2 ring-elderberry-950/20 shadow-sm'
                      : 'border-cream-300 bg-white/70 hover:bg-white text-elderberry-800'
                  }`}
                >
                  <span className="block text-xs font-bold text-elderberry-950">One-Time Delivery</span>
                  <span className="block text-sm font-serif font-bold text-elderberry-950 mt-0.5">
                    ${currentSize.price.toFixed(2)}
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setPurchaseType('subscribe')}
                  className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer relative ${
                    purchaseType === 'subscribe'
                      ? 'border-emerald-600 bg-emerald-50/50 ring-2 ring-emerald-600/20 shadow-sm'
                      : 'border-cream-300 bg-white/70 hover:bg-white text-elderberry-800'
                  }`}
                >
                  <span className="absolute -top-2.5 right-3 bg-emerald-600 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full">
                    SAVE 15%
                  </span>
                  <span className="block text-xs font-bold text-emerald-900">Subscribe & Save 15%</span>
                  <span className="block text-sm font-serif font-bold text-emerald-950 mt-0.5">
                    ${(currentSize.price * 0.85).toFixed(2)} / month
                  </span>
                </button>
              </div>
            </div>

            {/* Quantity Stepper & Add to Cart */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <div className="flex items-center space-x-3 border border-cream-300 rounded-full px-4 py-3 bg-white w-full sm:w-auto justify-between sm:justify-start">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="text-elderberry-600 hover:text-elderberry-950 p-1 cursor-pointer"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="text-sm font-bold text-elderberry-950 px-3">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="text-elderberry-600 hover:text-elderberry-950 p-1 cursor-pointer"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                className="w-full sm:flex-1 py-4 px-8 rounded-full bg-elderberry-950 text-white font-bold text-xs uppercase tracking-wider hover:bg-elderberry-800 transition-all shadow-elevated flex items-center justify-center space-x-2 cursor-pointer group"
              >
                <ShoppingBag className="w-4 h-4 text-brandHoney group-hover:scale-110 transition-transform" />
                <span>Add to Bag • ${totalPrice.toFixed(2)}</span>
              </button>
            </div>

            {/* Highlights checklist */}
            <div className="p-4 bg-white rounded-2xl border border-cream-200 space-y-2 text-xs text-elderberry-800">
              {product.highlights.map((hl, hIdx) => (
                <div key={hIdx} className="flex items-center space-x-2.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span>{hl}</span>
                </div>
              ))}
            </div>

            {/* Expandable Accordions: Dosage, Ingredients, Storage */}
            <div className="border-t border-cream-300 pt-4 space-y-3">
              
              {/* Dosage Accordion */}
              <div className="bg-white rounded-2xl border border-cream-200 overflow-hidden">
                <button
                  type="button"
                  onClick={() => setActiveAccordion(activeAccordion === 'dosage' ? '' : 'dosage')}
                  className="w-full p-4 text-left flex items-center justify-between text-xs font-bold uppercase tracking-wider text-elderberry-950 hover:bg-cream-50 cursor-pointer"
                >
                  <span>Suggested Dosage & Use</span>
                  {activeAccordion === 'dosage' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                {activeAccordion === 'dosage' && (
                  <div className="p-4 pt-1 text-xs text-elderberry-800/80 leading-relaxed space-y-2 border-t border-cream-100">
                    <p><strong>Daily Wellness:</strong> Adults take 1 tablespoon daily. Children over 1 take 1 teaspoon daily.</p>
                    <p><strong>Intensive Support:</strong> When exposed to germs or feeling run down, take every 3-4 hours.</p>
                    <p><strong>Serving Ideas:</strong> Sip straight from a shotglass, stir into seltzer for a mocktail, or add to hot tea.</p>
                  </div>
                )}
              </div>

              {/* Ingredients Accordion */}
              <div className="bg-white rounded-2xl border border-cream-200 overflow-hidden">
                <button
                  type="button"
                  onClick={() => setActiveAccordion(activeAccordion === 'ingredients' ? '' : 'ingredients')}
                  className="w-full p-4 text-left flex items-center justify-between text-xs font-bold uppercase tracking-wider text-elderberry-950 hover:bg-cream-50 cursor-pointer"
                >
                  <span>100% Clean Ingredients List</span>
                  {activeAccordion === 'ingredients' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                {activeAccordion === 'ingredients' && (
                  <div className="p-4 pt-1 text-xs text-elderberry-800/80 leading-relaxed space-y-2 border-t border-cream-100">
                    <p className="font-semibold text-elderberry-950">{product.ingredients.join(', ')}.</p>
                    <p className="text-[11px] text-emerald-800">
                      ✓ No high fructose corn syrup • No citric acid • No xanthan gum • No synthetic preservatives.
                    </p>
                  </div>
                )}
              </div>

              {/* Storage Accordion */}
              <div className="bg-white rounded-2xl border border-cream-200 overflow-hidden">
                <button
                  type="button"
                  onClick={() => setActiveAccordion(activeAccordion === 'storage' ? '' : 'storage')}
                  className="w-full p-4 text-left flex items-center justify-between text-xs font-bold uppercase tracking-wider text-elderberry-950 hover:bg-cream-50 cursor-pointer"
                >
                  <span>Storage & Freshness Guidance</span>
                  {activeAccordion === 'storage' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                {activeAccordion === 'storage' && (
                  <div className="p-4 pt-1 text-xs text-elderberry-800/80 leading-relaxed space-y-1.5 border-t border-cream-100">
                    <p>Because our syrup is 100% natural and free of chemical stabilizers, <strong>please refrigerate after opening</strong>.</p>
                    <p>Unopened bottles have a shelf life of up to 1 year when stored in a cool, dark pantry. Once opened, enjoy within 2-3 months.</p>
                  </div>
                )}
              </div>

            </div>

            {/* Related Mixology Pairing */}
            {matchedRecipe && (
              <div className="p-5 bg-cream-100 rounded-3xl border border-cream-300 flex items-center justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-brandHoney-dark block">
                    Signature Pairing Recipe
                  </span>
                  <h4 className="font-serif font-bold text-sm text-elderberry-950">
                    {matchedRecipe.title}
                  </h4>
                  <p className="text-xs text-elderberry-700 line-clamp-1">
                    {matchedRecipe.description}
                  </p>
                </div>
                <img 
                  src={matchedRecipe.image} 
                  alt={matchedRecipe.title} 
                  className="w-16 h-16 rounded-2xl object-cover border border-cream-200 flex-shrink-0"
                />
              </div>
            )}

          </div>

        </div>

        {/* Related Products Carousel */}
        <div className="mt-20 pt-12 border-t border-cream-300">
          <div className="space-y-2 mb-8 text-center sm:text-left">
            <span className="text-xs uppercase font-bold tracking-widest text-elderberry-500">
              Explore More From Health Junkie
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-elderberry-950">
              You May Also Love
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {related.map((rel) => (
              <div
                key={rel.id}
                onClick={() => {
                  onSelectProduct(rel);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-white rounded-3xl p-6 border border-cream-300 shadow-soft-float hover:shadow-elevated transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div className="aspect-square bg-cream-50 rounded-2xl p-4 flex items-center justify-center mb-4">
                  <img src={rel.images.bottle} alt={rel.title} className="w-full h-full object-contain group-hover:scale-105 transition-transform" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-elderberry-500">{rel.flavor}</span>
                  <h4 className="font-serif font-bold text-base text-elderberry-950 group-hover:text-elderberry-700">{rel.title}</h4>
                  <span className="font-serif font-bold text-sm text-elderberry-950 block">${rel.sizes[0].price.toFixed(2)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Mobile Sticky Quick Buy Bar */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 bg-white/95 backdrop-blur-md border-t border-cream-200 p-3.5 z-40 shadow-2xl flex items-center justify-between gap-3">
        <div className="flex items-center space-x-2.5">
          <img src={product.images.bottle} alt={product.title} className="w-10 h-10 object-contain bg-cream-50 rounded-lg p-0.5 border border-cream-200" />
          <div>
            <span className="font-serif font-bold text-xs text-elderberry-950 block truncate max-w-[140px]">{product.title}</span>
            <span className="font-bold text-xs text-elderberry-900">${unitPrice.toFixed(2)} ({currentSize.size})</span>
          </div>
        </div>

        <button
          onClick={handleAddToCart}
          className="py-2.5 px-5 rounded-full bg-elderberry-950 text-white font-bold text-xs uppercase tracking-wider hover:bg-elderberry-800 transition-colors shadow-md flex items-center space-x-1.5"
        >
          <ShoppingBag className="w-3.5 h-3.5 text-brandHoney" />
          <span>Add to Bag</span>
        </button>
      </div>

    </div>
  );
}

