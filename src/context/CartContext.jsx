import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('hj_cart');
      return saved ? JSON.parse(saved) : [
        // Seed with a starter item for instant demonstration
        {
          id: 'cheeky-tart-cherry-16.5-fl-oz',
          productId: 'cheeky-tart-cherry',
          title: 'Cheeky Tart Cherry Elderberry Syrup',
          size: '16.5 fl oz',
          price: 24.00,
          quantity: 1,
          image: '/assets/cherry-bottle.png',
          badge: 'Vegan & Low Sugar'
        }
      ];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeModalProduct, setActiveModalProduct] = useState(null);
  const [activeRecipeModal, setActiveRecipeModal] = useState(null);
  const [discountCode, setDiscountCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [toastMessage, setToastMessage] = useState(null);

  useEffect(() => {
    try {
      localStorage.setItem('hj_cart', JSON.stringify(cart));
    } catch (e) {
      console.error(e);
    }
  }, [cart]);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const addToCart = (product, selectedSize, quantity = 1) => {
    const sizeName = typeof selectedSize === 'object' ? selectedSize.size : (selectedSize || product.sizes[0].size);
    const sizePrice = typeof selectedSize === 'object' ? selectedSize.price : (product.sizes.find(s => s.size === sizeName)?.price || product.sizes[0].price);
    const cartItemId = `${product.id}-${sizeName.replace(/\s+/g, '-').toLowerCase()}`;

    setCart(prev => {
      const existing = prev.find(item => item.id === cartItemId);
      if (existing) {
        return prev.map(item => item.id === cartItemId ? { ...item, quantity: item.quantity + quantity } : item);
      }
      return [
        ...prev,
        {
          id: cartItemId,
          productId: product.id,
          title: product.title,
          size: sizeName,
          price: sizePrice,
          quantity: quantity,
          image: product.images.bottle,
          badge: product.badge
        }
      ];
    });

    showToast(`Added ${quantity}x ${product.title} (${sizeName}) to cart!`);
    setIsCartOpen(true);
  };

  const updateQuantity = (cartItemId, delta) => {
    setCart(prev => {
      return prev.map(item => {
        if (item.id === cartItemId) {
          const newQty = item.quantity + delta;
          return newQty > 0 ? { ...item, quantity: newQty } : null;
        }
        return item;
      }).filter(Boolean);
    });
  };

  const removeFromCart = (cartItemId) => {
    setCart(prev => prev.filter(item => item.id !== cartItemId));
  };

  const applyDiscount = (code) => {
    const clean = code.trim().toUpperCase();
    if (clean === 'WELCOME10' || clean === 'CLEAN10' || clean === 'NICOLE') {
      setDiscountPercent(10);
      setDiscountCode(clean);
      showToast('10% discount promo code applied!');
      return { success: true, message: '10% discount applied!' };
    } else if (clean === 'FREE50') {
      setDiscountPercent(15);
      setDiscountCode(clean);
      showToast('15% VIP discount applied!');
      return { success: true, message: '15% VIP discount applied!' };
    } else {
      return { success: false, message: 'Invalid promo code. Try WELCOME10' };
    }
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discountAmount = (subtotal * discountPercent) / 100;
  const finalTotal = Math.max(0, subtotal - discountAmount);
  const freeShippingThreshold = 50.00;
  const freeShippingRemaining = Math.max(0, freeShippingThreshold - subtotal);
  const shippingProgress = Math.min(100, (subtotal / freeShippingThreshold) * 100);

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      updateQuantity,
      removeFromCart,
      cartCount,
      subtotal,
      discountCode,
      discountPercent,
      discountAmount,
      finalTotal,
      applyDiscount,
      freeShippingThreshold,
      freeShippingRemaining,
      shippingProgress,
      isCartOpen,
      setIsCartOpen,
      activeModalProduct,
      setActiveModalProduct,
      activeRecipeModal,
      setActiveRecipeModal,
      toastMessage
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

