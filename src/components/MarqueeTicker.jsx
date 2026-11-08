import React from 'react';
import { Sparkles, ShieldCheck, Heart, Award, Droplets, Leaf } from 'lucide-react';

export default function MarqueeTicker() {
  const items = [
    { text: "0g Processed Sugar", icon: ShieldCheck },
    { text: "100% Whole Sambucus Nigra", icon: Award },
    { text: "Sweetened With Raw Ohio Honey & Maple", icon: Droplets },
    { text: "50-90% Less Sugar Than Sambucol", icon: Sparkles },
    { text: "Holistic Health Practitioner Formulated", icon: Leaf },
    { text: "Handcrafted With Love in Cleveland, OH", icon: Heart },
    { text: "Featured in Heinen's & 50+ Retailers", icon: Award },
    { text: "Free Nationwide Shipping Over $50", icon: Sparkles },
  ];

  return (
    <div className="bg-elderberry-950 text-cream-100 py-3.5 border-y border-elderberry-800/80 overflow-hidden relative select-none">
      <div className="flex w-max animate-marquee space-x-8">
        {[...items, ...items].map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="flex items-center space-x-3 text-xs sm:text-sm font-bold tracking-widest uppercase text-cream-200">
              <Icon className="w-4 h-4 text-brandHoney flex-shrink-0" />
              <span>{item.text}</span>
              <span className="text-brandHoney/60 font-serif text-base">•</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

