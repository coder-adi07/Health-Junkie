import React, { useState } from 'react';
import { Star, ShoppingBag, Eye, Sparkles, Check, Heart } from 'lucide-react';
import { PRODUCTS } from '../data/brandData';
import { useCart } from '../context/CartContext';

export default function ProductCatalog() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredCard, setHoveredCard] = useState(null);
  const { addToCart, setActiveModalProduct } = useCart();

  const categories = ['All', 'Syrup', 'Gift Set', 'Pantry'];

  const filteredProducts = activeCategory === 'All'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <section id="shop" className="py-20 lg:py-28 bg-cream-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-elderberry-900/5 border border-elderberry-900/10 text-xs font-bold uppercase tracking-widest text-elderberry-800">
              <Sparkles className="w-3.5 h-3.5 text-brandHoney" />
              <span>Small Batch Handcrafted Apothecary</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-elderberry-950">
              The Health Junkie Collection
            </h2>
            <p className="text-sm sm:text-base text-elderberry-900/70 max-w-xl">
              100% clean, non-GMO superfood formulations. Sweetened only with unheated raw Ohio honey or pure local maple syrup.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-elderberry-950 text-white shadow-md'
                    : 'bg-white/80 text-elderberry-900/70 hover:bg-white hover:text-elderberry-950 border border-cream-300'
                }`}
              >
                {cat === 'All' ? 'All Products' : cat === 'Syrup' ? 'Signature Syrups' : cat === 'Gift Set' ? 'Gift Sets' : 'Pantry & Snacks'}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => {
            const isHovered = hoveredCard === product.id;
            const primarySize = product.sizes[product.sizes.length - 1]; // default to best value or standard
            const minPrice = product.sizes[0].price;
            const maxPrice = product.sizes[product.sizes.length - 1].price;
            const priceString = product.sizes.length > 1 ? `$${minPrice.toFixed(2)} – $${maxPrice.toFixed(2)}` : `$${minPrice.toFixed(2)}`;

            return (
              <div
                key={product.id}
                onMouseEnter={() => setHoveredCard(product.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className="bg-white rounded-3xl overflow-hidden border border-cream-300/80 shadow-soft-float hover:shadow-elevated transition-all duration-300 flex flex-col group"
              >
                {/* Image Container with Badge */}
                <div className="relative aspect-[4/5] bg-cream-50 p-6 flex items-center justify-center overflow-hidden cursor-pointer">
                  
                  {/* Badge */}
                  <span className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-elderberry-950/90 text-white text-[10px] uppercase font-bold tracking-wider backdrop-blur-md">
                    {product.badge}
                  </span>

                  {/* Primary Product Image with hover swap */}
                  <img
                    src={isHovered && product.images.flatlay ? product.images.flatlay : product.images.bottle}
                    alt={product.title}
                    onClick={() => setActiveModalProduct(product)}
                    className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Quick Action Overlay on Hover */}
                  <div className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    <button
                      onClick={() => setActiveModalProduct(product)}
                      className="flex-1 py-2.5 px-3 rounded-full bg-white/95 text-elderberry-950 font-semibold text-xs shadow-md hover:bg-white flex items-center justify-center space-x-1.5 transition-all cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>View Details</span>
                    </button>
                    
                    <button
                      onClick={() => addToCart(product, primarySize)}
                      className="py-2.5 px-4 rounded-full bg-elderberry-950 text-white font-semibold text-xs shadow-md hover:bg-elderberry-800 flex items-center justify-center space-x-1.5 transition-all cursor-pointer"
                      title="Quick Add"
                    >
                      <ShoppingBag className="w-3.5 h-3.5 text-brandHoney" />
                      <span>Add</span>
                    </button>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    
                    {/* Category & Rating */}
                    <div className="flex items-center justify-between text-xs text-elderberry-700">
                      <span className="font-semibold uppercase tracking-wider text-elderberry-500">
                        {product.flavor}
                      </span>
                      <div className="flex items-center space-x-1">
                        <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                        <span className="font-bold text-elderberry-950">{product.rating}</span>
                        <span className="text-elderberry-400">({product.reviewsCount})</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 
                      onClick={() => setActiveModalProduct(product)}
                      className="font-serif text-xl font-bold text-elderberry-950 hover:text-elderberry-700 transition-colors cursor-pointer leading-snug line-clamp-1"
                    >
                      {product.title}
                    </h3>

                    {/* Short Description */}
                    <p className="text-xs text-elderberry-900/70 line-clamp-2 leading-relaxed">
                      {product.shortDesc}
                    </p>
                  </div>

                  {/* Highlights checklist */}
                  <div className="pt-2 border-t border-cream-200/80 space-y-1.5">
                    {product.highlights.slice(0, 2).map((hl, hIdx) => (
                      <div key={hIdx} className="flex items-center space-x-2 text-[11px] text-elderberry-800">
                        <Check className="w-3 h-3 text-emerald-600 flex-shrink-0" />
                        <span className="truncate">{hl}</span>
                      </div>
                    ))}
                  </div>

                  {/* Bottom: Price & Quick Action */}
                  <div className="pt-2 flex items-center justify-between">
                    <div>
                      <span className="text-lg font-serif font-bold text-elderberry-950">
                        {priceString}
                      </span>
                      {product.sizes.length > 1 && (
                        <span className="block text-[10px] text-elderberry-500 font-medium">
                          Available in 8.3 oz & 16.5 oz
                        </span>
                      )}
                    </div>

                    <button
                      onClick={() => setActiveModalProduct(product)}
                      className="px-4 py-2 rounded-full border border-elderberry-950 text-elderberry-950 font-semibold text-xs hover:bg-elderberry-950 hover:text-white transition-colors cursor-pointer"
                    >
                      Select Size
                    </button>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Banner: Handcrafted Purity Guarantee */}
        <div className="mt-16 p-8 rounded-3xl bg-elderberry-950 text-cream-100 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs uppercase tracking-widest font-bold text-brandHoney">
              Direct From Cleveland, Ohio
            </span>
            <h3 className="font-serif text-2xl font-bold text-white">
              Can't decide which syrup to begin with?
            </h3>
            <p className="text-xs sm:text-sm text-cream-200/80 max-w-xl">
              Try our bestselling <strong>Sampler Trio Gift Set</strong>. You get all three signature syrups (Cheeky Tart Cherry, Sassy Cinnamon, and Bold Ginger) plus full-color recipe cards.
            </p>
          </div>

          <button
            onClick={() => {
              const sampler = PRODUCTS.find(p => p.id === 'sampler-pack');
              if (sampler) setActiveModalProduct(sampler);
            }}
            className="px-6 py-3.5 rounded-full bg-brandHoney text-elderberry-950 font-bold text-xs uppercase tracking-wider hover:bg-amber-300 transition-all shadow-md whitespace-nowrap cursor-pointer"
          >
            Explore The Sampler Trio ($48.00)
          </button>
        </div>

      </div>
    </section>
  );
}

