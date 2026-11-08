import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, Sparkles, ShieldCheck, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function CartDrawer() {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    cartCount,
    subtotal,
    discountCode,
    discountAmount,
    finalTotal,
    applyDiscount,
    freeShippingThreshold,
    freeShippingRemaining,
    shippingProgress
  } = useCart();

  const [inputCode, setInputCode] = useState('');
  const [promoMessage, setPromoMessage] = useState(null);
  const [checkingOut, setCheckingOut] = useState(false);

  if (!isCartOpen) return null;

  const handleApplyPromo = (e) => {
    e.preventDefault();
    if (!inputCode) return;
    const res = applyDiscount(inputCode);
    setPromoMessage(res.message);
  };

  const handleCheckout = () => {
    setCheckingOut(true);
    setTimeout(() => {
      setCheckingOut(false);
      alert("Demonstration Checkout: Health Junkie concept store order simulated successfully! Real orders can be placed at heyhealthjunkie.com.");
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        onClick={() => setIsCartOpen(false)}
        className="absolute inset-0 bg-elderberry-950/60 backdrop-blur-sm transition-opacity duration-300"
      />

      {/* Slide-over panel */}
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-300">
          
          {/* Header */}
          <div className="p-5 border-b border-cream-200 bg-cream-50 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <ShoppingBag className="w-5 h-5 text-elderberry-900" />
              <h2 className="font-serif text-lg font-bold text-elderberry-950">
                Your Shopping Bag ({cartCount})
              </h2>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 rounded-full hover:bg-cream-200 text-elderberry-700 transition-colors cursor-pointer"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Indicator */}
          <div className="bg-cream-100 p-4 border-b border-cream-200 space-y-2">
            <div className="flex items-center justify-between text-xs font-semibold">
              <span className="text-elderberry-950">
                {freeShippingRemaining > 0 
                  ? `Add $${freeShippingRemaining.toFixed(2)} more for FREE Shipping!` 
                  : `🎉 You've unlocked FREE Shipping!`}
              </span>
              <span className="text-elderberry-600 font-bold">
                {Math.round(shippingProgress)}%
              </span>
            </div>
            <div className="w-full bg-cream-300 h-2 rounded-full overflow-hidden">
              <div 
                className="h-full bg-brandCherry rounded-full transition-all duration-500"
                style={{ width: `${shippingProgress}%` }}
              />
            </div>
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-5 divide-y divide-cream-200">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                <div className="w-16 h-16 rounded-full bg-cream-100 flex items-center justify-center text-elderberry-400">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-lg font-bold text-elderberry-950">
                  Your bag is empty
                </h3>
                <p className="text-xs text-elderberry-700 max-w-xs">
                  Boost your family's immune defenses with our handcrafted, low-sugar syrups.
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="px-6 py-2.5 rounded-full bg-elderberry-950 text-white text-xs font-bold uppercase tracking-wider hover:bg-elderberry-800 transition-colors"
                >
                  Start Shopping
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div key={item.id} className="py-4 flex space-x-4">
                  {/* Thumbnail */}
                  <div className="w-20 h-20 bg-cream-50 rounded-2xl p-2 flex items-center justify-center border border-cream-200 flex-shrink-0">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-serif font-bold text-sm text-elderberry-950 leading-tight">
                          {item.title}
                        </h4>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-elderberry-400 hover:text-rose-600 transition-colors p-1"
                          title="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <span className="text-xs text-elderberry-600 font-medium block mt-0.5">
                        Size: {item.size}
                      </span>
                    </div>

                    {/* Quantity controls and price */}
                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center space-x-2 border border-cream-300 rounded-lg px-2 py-1 bg-white">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="text-elderberry-600 hover:text-elderberry-950 p-0.5 cursor-pointer"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-bold text-elderberry-950 px-1.5">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="text-elderberry-600 hover:text-elderberry-950 p-0.5 cursor-pointer"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <span className="font-serif font-bold text-sm text-elderberry-950">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Checkout Summary */}
          {cart.length > 0 && (
            <div className="p-5 border-t border-cream-200 bg-cream-50 space-y-4">
              
              {/* Promo Code Form */}
              <form onSubmit={handleApplyPromo} className="flex gap-2">
                <input
                  type="text"
                  placeholder="Promo code (try WELCOME10)"
                  value={inputCode}
                  onChange={(e) => setInputCode(e.target.value)}
                  className="flex-1 px-3 py-2 text-xs rounded-xl border border-cream-300 bg-white uppercase placeholder:normal-case focus:outline-none focus:ring-1 focus:ring-elderberry-950"
                />
                <button
                  type="submit"
                  className="px-3.5 py-2 rounded-xl bg-elderberry-900 text-white text-xs font-bold hover:bg-elderberry-800 transition-colors cursor-pointer"
                >
                  Apply
                </button>
              </form>
              {promoMessage && (
                <p className="text-[11px] font-medium text-emerald-700 -mt-2">
                  {promoMessage}
                </p>
              )}

              {/* Subtotal & Discount */}
              <div className="space-y-1.5 text-xs text-elderberry-800">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-elderberry-950">${subtotal.toFixed(2)}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-700 font-medium">
                    <span>Discount ({discountCode})</span>
                    <span>-${discountAmount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Estimated Shipping</span>
                  <span className="font-semibold">
                    {freeShippingRemaining === 0 ? (
                      <span className="text-emerald-700 font-bold uppercase">FREE</span>
                    ) : (
                      "$5.95 (Orders over $50 ship FREE)"
                    )}
                  </span>
                </div>
                <div className="flex justify-between pt-2 border-t border-cream-200 text-base font-serif font-bold text-elderberry-950">
                  <span>Total</span>
                  <span>${(finalTotal + (freeShippingRemaining === 0 ? 0 : 5.95)).toFixed(2)}</span>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                onClick={handleCheckout}
                disabled={checkingOut}
                className="w-full py-4 rounded-full bg-elderberry-950 text-white font-bold text-xs uppercase tracking-wider hover:bg-elderberry-800 transition-all shadow-elevated flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-50"
              >
                {checkingOut ? (
                  <span>Processing Demo Checkout...</span>
                ) : (
                  <>
                    <span>Proceed to Checkout</span>
                    <ArrowRight className="w-4 h-4 text-brandHoney" />
                  </>
                )}
              </button>

              <div className="flex items-center justify-center space-x-2 text-[10px] text-elderberry-500">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Secure Demo Store • Real Store at heyhealthjunkie.com</span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

