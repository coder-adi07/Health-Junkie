import React, { useState } from 'react';
import { X, MapPin, Search, Navigation, Phone, ExternalLink, Sparkles, Store } from 'lucide-react';

const STORES = [
  {
    name: "Heinen's Grocery Store — Downtown Cleveland",
    category: "Grocery Partner",
    address: "900 Euclid Ave, Cleveland, OH 44115",
    city: "Cleveland, OH",
    department: "Wellness & Supplement Department",
    phone: "(216) 302-3020",
    notes: "Top-selling local elderberry syrup line"
  },
  {
    name: "Heinen's Grocery Store — Rocky River",
    category: "Grocery Partner",
    address: "19219 Detroit Rd, Rocky River, OH 44116",
    city: "Rocky River, OH",
    department: "Natural Living & Supplements",
    phone: "(440) 331-3830",
    notes: "Carries all 3 flavors & seasonal sampler packs"
  },
  {
    name: "Heinen's Grocery Store — Chagrin Falls",
    category: "Grocery Partner",
    address: "402 Center St, Chagrin Falls, OH 44022",
    city: "Chagrin Falls, OH",
    department: "Wellness Department",
    phone: "(440) 247-4600",
    notes: "Featured in local artisan products section"
  },
  {
    name: "Heinen's Grocery Store — Glenview (Chicago Region)",
    category: "Grocery Partner",
    address: "1020 Waukegan Rd, Glenview, IL 60025",
    city: "Glenview, IL",
    department: "Holistic Health Aisle",
    phone: "(847) 657-9000",
    notes: "Midwest regional expansion location"
  },
  {
    name: "Buehler's Fresh Foods — Medina River Styx",
    category: "Grocery Partner",
    address: "3626 Medina Rd, Medina, OH 44256",
    city: "Medina, OH",
    department: "Health & Nutrition Aisle",
    phone: "(330) 725-0535",
    notes: "Local Ohio handcrafted partner"
  },
  {
    name: "The Central Kitchen Food Incubator",
    category: "Production & Pickup Hub",
    address: "2800 Euclid Ave, Cleveland, OH 44115",
    city: "Cleveland, OH",
    department: "Commercial Craft Kitchen",
    phone: "(216) 245-8120",
    notes: "Home of our small-batch handcrafted facility"
  },
  {
    name: "Shaker Square Farmers Market",
    category: "Farmers Market",
    address: "Shaker Square, Cleveland, OH 44120",
    city: "Cleveland, OH",
    department: "Saturday Morning Market (Seasonal)",
    phone: "(216) 751-9220",
    notes: "Where Nicole originally debuted Health Junkie in 2018!"
  }
];

export default function StoreLocatorModal({ isOpen, onClose }) {
  const [searchQuery, setSearchQuery] = useState('');

  if (!isOpen) return null;

  const filteredStores = STORES.filter(s => 
    s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-elderberry-950/70 backdrop-blur-md transition-opacity"
      />

      {/* Modal Dialog */}
      <div className="relative min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="relative bg-white w-full max-w-3xl rounded-3xl shadow-2xl overflow-hidden border border-cream-300 animate-in zoom-in-95 duration-200">
          
          {/* Header */}
          <div className="p-6 sm:p-8 bg-elderberry-950 text-cream-100 flex items-start justify-between relative">
            <div className="space-y-2">
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-white/10 text-brandHoney text-xs font-bold uppercase tracking-wider">
                <Store className="w-3.5 h-3.5" />
                <span>50+ Retail Stockists Across the Midwest</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Find Health Junkie Near You
              </h2>
              <p className="text-xs text-cream-300 max-w-lg leading-relaxed">
                Featured on the shelves of <strong>Heinen's Grocery Stores</strong>, <strong>Buehler's Fresh Foods</strong>, and select holistic markets. Or order online with FREE shipping over $50!
              </p>
            </div>

            <button
              onClick={onClose}
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              aria-label="Close store locator"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Search bar */}
          <div className="p-6 border-b border-cream-200 bg-cream-50">
            <div className="relative">
              <Search className="w-4 h-4 text-elderberry-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by city, store name, or state (e.g. Cleveland, Rocky River, Chicago)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white border border-cream-300 text-xs sm:text-sm text-elderberry-950 focus:outline-none focus:ring-2 focus:ring-elderberry-950"
              />
            </div>
          </div>

          {/* Stores List */}
          <div className="p-6 max-h-[460px] overflow-y-auto divide-y divide-cream-200 space-y-4">
            {filteredStores.length === 0 ? (
              <div className="py-12 text-center text-xs text-elderberry-600 space-y-2">
                <p>No retail locations matched your search.</p>
                <p className="font-bold text-elderberry-950">Good news: We ship nationwide directly to your doorstep!</p>
              </div>
            ) : (
              filteredStores.map((store, idx) => (
                <div key={idx} className="pt-4 first:pt-0 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-md bg-brandSage-light text-brandSage">
                        {store.category}
                      </span>
                      <span className="text-xs text-elderberry-500 font-medium">
                        {store.city}
                      </span>
                    </div>

                    <h4 className="font-serif font-bold text-base text-elderberry-950">
                      {store.name}
                    </h4>

                    <p className="text-xs text-elderberry-700 flex items-center space-x-1.5">
                      <MapPin className="w-3.5 h-3.5 text-brandCherry flex-shrink-0" />
                      <span>{store.address}</span>
                    </p>

                    <p className="text-[11px] text-elderberry-500">
                      {store.department} • {store.notes}
                    </p>
                  </div>

                  <div className="flex items-center space-x-2 flex-shrink-0">
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(store.name + ' ' + store.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2 rounded-xl bg-cream-100 hover:bg-cream-200 text-elderberry-950 text-xs font-semibold flex items-center space-x-1.5 transition-colors"
                    >
                      <Navigation className="w-3.5 h-3.5 text-brandCherry" />
                      <span>Directions</span>
                    </a>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer note */}
          <div className="p-4 bg-cream-100 border-t border-cream-200 text-center text-xs text-elderberry-700">
            Don't live near a partner store? We pack and ship handcrafted bottles anywhere in the USA! Orders over $50 ship free.
          </div>

        </div>
      </div>
    </div>
  );
}

