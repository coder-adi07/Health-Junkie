import React, { useState, useEffect } from 'react';
import { Sparkles, Truck, ShieldCheck, Heart } from 'lucide-react';

const MESSAGES = [
  { icon: Truck, text: "FREE Nationwide Shipping on Orders Over $50" },
  { icon: Heart, text: "Handcrafted in Small Batches in Cleveland, Ohio" },
  { icon: ShieldCheck, text: "50-90% Less Sugar Than Sambucol — Formulated by a Holistic Health Practitioner" },
  { icon: Sparkles, text: "Use Code WELCOME10 for 10% Off Your First Order" }
];

export default function AnnouncementBar() {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % MESSAGES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const CurrentIcon = MESSAGES[currentIdx].icon;

  return (
    <aside aria-label="Store Announcements" className="bg-elderberry-900 text-cream-100 text-xs py-2 px-4 border-b border-elderberry-800 relative z-50 overflow-hidden">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="hidden md:flex items-center space-x-2 text-elderberry-300 font-medium tracking-wide">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>Cleveland, OH Small Batch Craft</span>
        </div>

        <div className="flex-1 flex items-center justify-center space-x-2 text-center transition-all duration-500 ease-in-out font-medium tracking-wide px-2 min-w-0">
          <CurrentIcon className="w-3.5 h-3.5 text-brandHoney flex-shrink-0" />
          <span className="truncate text-[11px] sm:text-xs">{MESSAGES[currentIdx].text}</span>
        </div>

        <div className="hidden md:flex items-center space-x-4 text-elderberry-300">
          <a href="#recipes" className="hover:text-white transition-colors">Free Recipe Book</a>
          <span>•</span>
          <a href="#why-health-junkie" className="hover:text-white transition-colors">Why Sambucus Nigra?</a>
        </div>
      </div>
    </aside>
  );
}

