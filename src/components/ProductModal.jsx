import React, { useState } from 'react';
import { X, Star, Check, ShieldCheck, ShoppingBag, Plus, Minus, ArrowRight, Heart, Award, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { PRODUCTS } from '../data/brandData';

export default function ProductModal({ onOpenFullPage }) {
  const { activeModalProduct, setActiveModalProduct, addToCart } = useCart();
  const [selectedSizeIdx, setSelectedSizeIdx] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeImageKey, setActiveImageKey] = useState('bottle');

  if (!activeModalProduct) return null;

  const product = activeModalProduct;
  const currentSize = product.sizes[selectedSizeIdx] || product.sizes[0];
  const relatedProducts = PRODUCTS.filter(p => p.id !== product.id).slice(0, 3);

  const handleGoFullPage = () => {
    const prod = activeModalProduct;
    setActiveModalProduct(null);
    if (onOpenFullPage) onOpenFullPage(prod);
  };

  // Available images
  const imageGallery = [
    { key: 'bottle', label: 'Bottle', src: product.images.bottle },
    product.images.flatlay && { key: 'flatlay', label: 'Flatlay', src: product.images.flatlay },
    product.images.lifestyle && { key: 'lifestyle', label: 'Mocktail', src: product.images.lifestyle },
    product.images.nutrition && { key: 'nutrition', label: 'Nutrition Facts', src: product.images.nutrition },
  ].filter(Boolean);

  const currentImageSrc = product.images[activeImageKey] || product.images.bottle;

  const handleAddToCart = () => {
    addToCart(product, currentSize, quantity);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        onClick={() => setActiveModalProduct(null)}
        className="fixed inset-0 bg-elderberry-950/70 backdrop-blur-md transition-opacity"
      />

      {/* Modal Dialog */}
      <div className="relative min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="relative bg-white w-full max-w-4xl rounded-3xl shadow-2xl overflow-hidden border border-cream-300 animate-in zoom-in-95 duration-200">
          
          {/* Close button */}
          <button
            onClick={() => setActiveModalProduct(null)}
            className="absolute top-5 right-5 z-20 p-2.5 rounded-full bg-cream-100 hover:bg-cream-200 text-elderberry-900 transition-colors cursor-pointer"
            aria-label="Close product view"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 p-6 sm:p-10">
            
            {/* Left Column: Image Gallery */}
            <div className="md:col-span-6 space-y-4">
              <div className="relative aspect-square bg-cream-50 rounded-3xl p-6 flex items-center justify-center border border-cream-200 overflow-hidden">
                <span className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-elderberry-950 text-white text-[10px] uppercase font-bold tracking-wider">
                  {product.badge}
                </span>

                <img
                  src={currentImageSrc}
                  alt={product.title}
                  className="w-full h-full object-contain transition-all duration-300"
                />
              </div>

              {/* Gallery Thumbnails */}
              {imageGallery.length > 1 && (
                <div className="flex gap-3 overflow-x-auto pb-1">
                  {imageGallery.map((img) => (
                    <button
                      key={img.key}
                      onClick={() => setActiveImageKey(img.key)}
                      className={`w-16 h-16 rounded-2xl p-1 bg-cream-50 border transition-all cursor-pointer flex-shrink-0 ${
                        activeImageKey === img.key
                          ? 'border-elderberry-950 ring-2 ring-elderberry-950/20'
                          : 'border-cream-300 hover:border-elderberry-600'
                      }`}
                    >
                      <img 
                        src={img.src} 
                        alt={img.label} 
                        className="w-full h-full object-contain"
                      />
                    </button>
                  ))}
                </div>
              )}

              {/* Purity Check Snapshot */}
              <div className="p-4 bg-cream-50 rounded-2xl border border-cream-200 space-y-2 text-xs">
                <div className="flex items-center space-x-2 text-emerald-800 font-bold">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>The Health Junkie Clean Standard</span>
                </div>
                <p className="text-elderberry-800 text-[11px] leading-relaxed">
                  100% whole Sambucus Nigra elderberries. Handcrafted in Cleveland, Ohio with zero processed sugars, citric acid, or artificial preservatives.
                </p>
              </div>
            </div>

            {/* Right Column: Product Purchasing Details */}
            <div className="md:col-span-6 space-y-6 text-left">
              
              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-elderberry-500 block mb-1">
                  {product.flavor} • {product.category}
                </span>
                
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-elderberry-950 leading-tight">
                  {product.title}
                </h2>

                {/* Rating & Full Page View Link */}
                <div className="flex items-center justify-between mt-2 pt-1">
                  <div className="flex items-center space-x-2">
                    <div className="flex text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-500" />
                      ))}
                    </div>
                    <span className="text-xs font-bold text-elderberry-950">{product.rating}</span>
                    <span className="text-xs text-elderberry-500">({product.reviewsCount})</span>
                  </div>

                  {onOpenFullPage && (
                    <button
                      type="button"
                      onClick={handleGoFullPage}
                      className="text-xs font-bold text-elderberry-900 hover:text-brandCherry underline flex items-center space-x-1 cursor-pointer"
                    >
                      <span>Full Page View</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  )}
                </div>
              </div>

              {/* Price & Size Selector */}
              <div className="space-y-3 pt-2 border-t border-cream-200">
                <div className="flex items-baseline space-x-3">
                  <span className="font-serif text-3xl font-bold text-elderberry-950">
                    ${currentSize.price.toFixed(2)}
                  </span>
                  <span className="text-xs text-elderberry-500">
                    {currentSize.value}
                  </span>
                </div>

                {/* Size options */}
                {product.sizes.length > 1 && (
                  <div className="space-y-1.5">
                    <span className="text-xs font-bold uppercase tracking-wider text-elderberry-800 block">
                      Select Size:
                    </span>
                    <div className="grid grid-cols-2 gap-3">
                      {product.sizes.map((s, sIdx) => (
                        <button
                          key={s.size}
                          onClick={() => setSelectedSizeIdx(sIdx)}
                          className={`p-3 rounded-2xl border text-center transition-all cursor-pointer ${
                            selectedSizeIdx === sIdx
                              ? 'bg-elderberry-950 text-white border-elderberry-950 shadow-md font-bold'
                              : 'bg-white text-elderberry-900 border-cream-300 hover:bg-cream-100'
                          }`}
                        >
                          <span className="block text-xs font-semibold">{s.size}</span>
                          <span className="block text-[11px] opacity-80">${s.price.toFixed(2)} {s.note && `• ${s.note}`}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Description */}
              <div className="space-y-2 text-xs sm:text-sm text-elderberry-900/80 leading-relaxed">
                <p>{product.fullDesc}</p>
              </div>

              {/* Ingredients List */}
              <div className="space-y-2 bg-cream-50 p-4 rounded-2xl border border-cream-200 text-xs">
                <span className="font-bold text-elderberry-950 uppercase tracking-wider block">
                  Ingredients:
                </span>
                <p className="text-elderberry-800 leading-relaxed">
                  {product.ingredients.join(', ')}.
                </p>
              </div>

              {/* Highlights */}
              <div className="space-y-1.5 text-xs text-elderberry-800">
                {product.highlights.map((hl, hIdx) => (
                  <div key={hIdx} className="flex items-center space-x-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>

              {/* Quantity & Add to Cart */}
              <div className="pt-4 border-t border-cream-200 flex items-center space-x-4">
                <div className="flex items-center space-x-3 border border-cream-300 rounded-full px-3 py-2 bg-white">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="text-elderberry-600 hover:text-elderberry-950 p-1 cursor-pointer"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-xs font-bold text-elderberry-950 px-2">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="text-elderberry-600 hover:text-elderberry-950 p-1 cursor-pointer"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>

                <button
                  onClick={handleAddToCart}
                  className="flex-1 py-3.5 px-6 rounded-full bg-elderberry-950 text-white font-bold text-xs uppercase tracking-wider hover:bg-elderberry-800 transition-all shadow-elevated flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <ShoppingBag className="w-4 h-4 text-brandHoney" />
                  <span>Add to Bag • ${(currentSize.price * quantity).toFixed(2)}</span>
                </button>
              </div>

              {/* Related Products Switcher */}
              <div className="pt-4 border-t border-cream-200 space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-elderberry-400 block">
                  You Might Also Love:
                </span>
                <div className="flex gap-2">
                  {relatedProducts.map((rel) => (
                    <button
                      key={rel.id}
                      onClick={() => {
                        setActiveModalProduct(rel);
                        setSelectedSizeIdx(0);
                        setQuantity(1);
                        setActiveImageKey('bottle');
                      }}
                      className="px-3 py-1.5 rounded-xl bg-cream-100 hover:bg-cream-200 text-elderberry-950 text-xs font-semibold border border-cream-200 transition-colors cursor-pointer truncate max-w-[180px]"
                    >
                      {rel.title.split(' ')[0]} {rel.title.split(' ')[1]}
                    </button>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

