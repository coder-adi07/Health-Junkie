import React, { useState } from 'react';
import { Mail, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const { applyDiscount } = useCart();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setSubmitted(true);
    applyDiscount('WELCOME10');
  };

  return (
    <section id="newsletter" className="py-20 bg-elderberry-950 text-cream-100 relative overflow-hidden">
      
      {/* Ambient background glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-elderberry-700/30 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-brandHoney/15 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
        
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-bold uppercase tracking-widest text-brandHoney">
          <Sparkles className="w-3.5 h-3.5" />
          <span>The Health Junkie Wellness Club</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
          Get Our Favorite Elderberry <br />
          <span className="italic font-display font-normal text-cream-200">
            Recipes & 10% Off Your First Order.
          </span>
        </h2>

        <p className="text-sm sm:text-base text-cream-200/80 max-w-xl mx-auto leading-relaxed">
          Sign up below to receive our favorite handcrafted elderberry mocktail, tea, and baking recipes straight to your inbox. (We pinky promise never to spam you or share your email.)
        </p>

        {submitted ? (
          <div className="p-6 bg-white/10 rounded-2xl border border-white/20 max-w-md mx-auto space-y-3 animate-in fade-in duration-300">
            <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
            <h3 className="font-serif text-xl font-bold text-white">You're On The List!</h3>
            <p className="text-xs text-cream-200">
              Check your inbox for the recipes! Your 10% discount promo code <strong>WELCOME10</strong> has been automatically unlocked for your cart.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Mail className="w-4 h-4 text-cream-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address..."
                className="w-full pl-11 pr-4 py-3.5 rounded-full bg-white/10 border border-white/20 text-white placeholder-cream-400 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brandHoney"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3.5 rounded-full bg-brandHoney text-elderberry-950 font-bold text-xs uppercase tracking-wider hover:bg-amber-300 transition-all shadow-elevated whitespace-nowrap cursor-pointer flex items-center justify-center space-x-1.5"
            >
              <span>Get Recipes</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>
        )}

        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-cream-300/70 pt-2">
          <span>✓ Instant PDF download</span>
          <span>•</span>
          <span>✓ 10% off coupon code</span>
          <span>•</span>
          <span>✓ Unsubscribe anytime</span>
        </div>

      </div>
    </section>
  );
}

