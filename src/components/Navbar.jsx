import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, ArrowRight, MapPin, Sparkles, ChevronRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Navbar({ onOpenStoreLocator, onNavigateHome }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile curtain is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  // Clean, concise menu links that stay strictly on ONE line on desktop
  const navLinks = [
    { name: "Shop", href: "#shop" },
    { name: "Flavors", href: "#flavors" },
    { name: "Ingredients", href: "#ingredients" },
    { name: "Why Us", href: "#why-health-junkie" },
    { name: "Our Story", href: "#our-story" },
    { name: "Recipes", href: "#recipes" },
    { name: "FAQ", href: "#faq" }
  ];

  const handleLinkClick = (href) => {
    setMobileMenuOpen(false);
    if (onNavigateHome) onNavigateHome();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (onNavigateHome) onNavigateHome();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-cream-50/95 backdrop-blur-md shadow-soft-float py-2.5 sm:py-3 border-b border-cream-200' 
        : 'bg-cream-100/90 backdrop-blur-sm py-3 sm:py-4 border-b border-cream-200/50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between flex-nowrap gap-4">
          
          {/* Brand Logo - 100% Original from Main Website */}
          <a 
            href="#" 
            onClick={handleLogoClick}
            className="flex items-center flex-shrink-0 py-0.5 group"
          >
            <img 
              src="/assets/logo.png" 
              alt="Health Junkie" 
              className="h-8 sm:h-10 md:h-11 w-auto max-w-[130px] sm:max-w-[160px] md:max-w-[180px] object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </a>

          {/* Desktop Navigation Links - STRICTLY ON ONE SINGLE LINE */}
          <nav className="hidden lg:flex items-center flex-nowrap space-x-5 xl:space-x-7 flex-shrink-0">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="text-xs uppercase tracking-wider font-bold whitespace-nowrap text-elderberry-900/80 hover:text-elderberry-700 transition-colors relative py-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-elderberry-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Right Action Icons & Bag */}
          <div className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0 flex-nowrap">
            
            {/* Store Finder pill (hidden on small mobile, visible on tablet+) */}
            <button 
              type="button"
              onClick={onOpenStoreLocator} 
              className="hidden sm:inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-brandSage-light text-brandSage text-xs font-semibold hover:bg-brandSage/15 transition-colors cursor-pointer whitespace-nowrap"
            >
              <MapPin className="w-3.5 h-3.5 text-brandSage flex-shrink-0" />
              <span>In Heinen's & 50+ Stores</span>
            </button>

            {/* Shopping Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 sm:px-3.5 sm:py-2 rounded-full bg-elderberry-900 text-cream-100 hover:bg-elderberry-800 transition-all shadow-md group flex items-center space-x-1.5 cursor-pointer flex-shrink-0"
              aria-label="View shopping bag"
            >
              <ShoppingBag className="w-4 h-4 text-brandHoney group-hover:scale-110 transition-transform" />
              <span className="hidden sm:inline text-xs font-semibold tracking-wider">BAG</span>
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-brandCherry text-white text-[10px] sm:text-[11px] font-bold w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center shadow-sm animate-bounce">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Three-Line Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2 rounded-xl transition-all cursor-pointer flex-shrink-0 ${
                mobileMenuOpen 
                  ? 'bg-elderberry-950 text-brandHoney shadow-md' 
                  : 'text-elderberry-900 hover:bg-cream-200/80'
              }`}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE HALF-SCREEN CURTAIN DROPDOWN - BI-DIRECTIONAL SMOOTH GLIDE */}
      <div 
        className={`lg:hidden fixed inset-0 top-[56px] sm:top-[68px] z-50 transition-all duration-500 ease-in-out ${
          mobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        
        {/* Half-Screen Curtain Panel: Glides down smoothly on open, and glides back up smoothly on close */}
        <div 
          className={`relative z-10 w-full bg-gradient-to-b from-[#632045] via-[#4F1735] to-[#3D0F28] text-cream-100 border-b-4 border-brandHoney/80 shadow-[0_25px_50px_rgba(40,10,25,0.6)] p-6 sm:p-8 backdrop-blur-md transition-all duration-500 ease-in-out ${
            mobileMenuOpen 
              ? 'translate-y-0 opacity-100 shadow-2xl' 
              : '-translate-y-full opacity-0'
          }`}
        >
          <div className="max-w-md mx-auto space-y-5">
            
            {/* Curtain Header Label */}
            <div className="flex items-center justify-between border-b border-white/15 pb-3">
              <span className="text-[11px] uppercase font-bold tracking-widest text-brandHoney flex items-center space-x-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Health Junkie Menu</span>
              </span>
              <span className="text-[10px] text-cream-200/80 font-medium">
                Cleveland Small Batch
              </span>
            </div>

            {/* Menu Links in 2 Columns for Clean Fit */}
            <div className="grid grid-cols-2 gap-2.5">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  type="button"
                  onClick={() => handleLinkClick(link.href)}
                  className="text-left flex items-center space-x-2 py-2.5 px-3 rounded-xl bg-white/10 hover:bg-white/20 active:scale-95 text-xs sm:text-sm font-bold text-cream-100 hover:text-brandHoney transition-all cursor-pointer border border-white/10"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-brandHoney flex-shrink-0"></span>
                  <span className="truncate">{link.name}</span>
                </button>
              ))}
            </div>

            {/* Action Buttons inside Curtain */}
            <div className="pt-2 border-t border-white/15 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenStoreLocator) onOpenStoreLocator();
                }}
                className="w-full flex items-center justify-center space-x-1.5 py-2.5 px-3 rounded-xl bg-white/15 hover:bg-white/25 text-cream-100 text-xs font-semibold border border-white/15 cursor-pointer"
              >
                <MapPin className="w-3.5 h-3.5 text-brandHoney" />
                <span>Find in Heinen's Stores</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsCartOpen(true);
                }}
                className="w-full flex items-center justify-center space-x-1.5 py-2.5 px-3 rounded-full bg-brandHoney text-elderberry-950 font-bold text-xs uppercase tracking-wider shadow-md hover:bg-amber-300 transition-colors cursor-pointer"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>View Cart ({cartCount})</span>
              </button>
            </div>

          </div>
        </div>

        {/* Dimmed Dark Backdrop on Remaining Screen with Smooth Fade in/out */}
        <div 
          onClick={() => setMobileMenuOpen(false)}
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ease-in-out cursor-pointer ${
            mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        />

      </div>
    </header>
  );
}
