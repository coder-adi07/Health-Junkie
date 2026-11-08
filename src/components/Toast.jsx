import React from 'react';
import { CheckCircle2, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Toast() {
  const { toastMessage } = useCart();

  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-5 fade-in duration-300">
      <div className="bg-elderberry-950 text-white px-5 py-3.5 rounded-2xl shadow-2xl border border-white/20 flex items-center space-x-3 max-w-sm">
        <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
        <span className="text-xs font-medium tracking-wide">
          {toastMessage}
        </span>
      </div>
    </div>
  );
}

