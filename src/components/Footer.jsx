import React from 'react';
import { Heart, MapPin, Mail, Phone, ShieldCheck } from 'lucide-react';
import { BRAND_INFO } from '../data/brandData';

export default function Footer({ onOpenStoreLocator }) {
  return (
    <footer id="store-locator" className="bg-elderberry-950 text-cream-200 border-t border-elderberry-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section: Brand Story & Retail Availability */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-elderberry-900/80">
          
          {/* Brand Info - Original Logo */}
          <div className="lg:col-span-4 space-y-4">
            <div className="inline-block bg-white px-3.5 py-1.5 rounded-xl shadow-sm">
              <img 
                src="/assets/logo.png" 
                alt="Health Junkie" 
                className="h-9 sm:h-10 w-auto max-w-[160px] object-contain"
              />
            </div>

            <p className="text-xs sm:text-sm text-cream-300/80 leading-relaxed max-w-sm">
              Handcrafted in Cleveland, Ohio with certified organic Sambucus Nigra elderberries, raw Ohio honey, and pure local maple syrup. Formulated by a Board Certified Holistic Health Practitioner.
            </p>

            <div className="flex items-center space-x-3 pt-2">
              <a
                href={BRAND_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/5 hover:bg-white/15 text-cream-100 transition-colors"
                aria-label="Follow Health Junkie on Instagram"
              >
                <svg className="w-4 h-4 text-brandHoney fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href={BRAND_INFO.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/5 hover:bg-white/15 text-cream-100 transition-colors"
                aria-label="Follow Health Junkie on Facebook"
              >
                <svg className="w-4 h-4 text-brandHoney fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <span className="text-xs text-cream-400 font-medium">@HeyHealthJunkie</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-widest text-brandHoney">
              Explore
            </h4>
            <ul className="space-y-2 text-xs text-cream-300">
              <li><a href="#shop" className="hover:text-white transition-colors">Signature Syrups</a></li>
              <li><a href="#flavors" className="hover:text-white transition-colors">Flavor Experience</a></li>
              <li><a href="#ingredients" className="hover:text-white transition-colors">Clean Ingredients</a></li>
              <li><a href="#why-health-junkie" className="hover:text-white transition-colors">Why Health Junkie</a></li>
              <li><a href="#our-story" className="hover:text-white transition-colors">Nicole's Story</a></li>
              <li><a href="#recipes" className="hover:text-white transition-colors">Mocktail Recipes</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Products & Gifting */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-widest text-brandHoney">
              Products
            </h4>
            <ul className="space-y-2 text-xs text-cream-300">
              <li><a href="#shop" className="hover:text-white transition-colors">Cheeky Tart Cherry (Vegan)</a></li>
              <li><a href="#shop" className="hover:text-white transition-colors">Sassy Cinnamon (Spiced)</a></li>
              <li><a href="#shop" className="hover:text-white transition-colors">Bold Ginger (Zesty)</a></li>
              <li><a href="#shop" className="hover:text-white transition-colors">Sampler Trio Gift Set</a></li>
              <li><a href="#shop" className="hover:text-white transition-colors">Organic Dried Elderberries (6oz)</a></li>
              <li><a href="#shop" className="hover:text-white transition-colors">Raw Honey Elderberry Straws</a></li>
            </ul>
          </div>

          {/* Retail Stores & Contact */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-widest text-brandHoney">
              Find In Store
            </h4>
            <p className="text-xs text-cream-300 leading-relaxed">
              Featured in over 50 regional grocery stores and markets across Ohio & the Midwest:
            </p>
            <div className="p-3 bg-white/5 rounded-xl border border-white/10 space-y-2 text-xs text-cream-200">
              <div className="flex items-center space-x-1.5 font-bold text-white">
                <MapPin className="w-3.5 h-3.5 text-brandCherry flex-shrink-0" />
                <span>Heinen's Grocery Store</span>
              </div>
              <p className="text-[11px] text-cream-400 pl-5">Available in Wellness & Supplement aisles throughout Cleveland & Chicago.</p>
              
              <button
                type="button"
                onClick={onOpenStoreLocator}
                className="w-full mt-1 py-1.5 px-3 rounded-lg bg-white/10 hover:bg-white/20 text-brandHoney text-xs font-semibold flex items-center justify-center space-x-1 transition-colors cursor-pointer"
              >
                <span>View All 50+ Store Locations</span>
                <span className="text-sm">→</span>
              </button>
            </div>

            <div className="pt-1 text-xs text-cream-400 space-y-1">
              <p>Email: <a href="mailto:hello@heyhealthjunkie.com" className="text-white hover:underline">hello@heyhealthjunkie.com</a></p>
              <p>Handcrafted in: Cleveland, OH 44102</p>
            </div>
          </div>

        </div>

        {/* Bottom Credits & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream-400">
          <div className="flex items-center space-x-2">
            <span>© {new Date().getFullYear()} Health Junkie LLC. All Rights Reserved.</span>
          </div>

          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Small Batch Handcrafted Quality</span>
            </span>
            <span>•</span>
            <span>Founder Nicole Lazar</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
