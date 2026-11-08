import React, { useState } from 'react';
import { CartProvider } from './context/CartContext';
import AnnouncementBar from './components/AnnouncementBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MarqueeTicker from './components/MarqueeTicker';
import ProductCatalog from './components/ProductCatalog';
import ScrollExperience from './components/ScrollExperience';
import SyrupFinderQuiz from './components/SyrupFinderQuiz';
import IngredientsSection from './components/IngredientsSection';
import DosageCalculator from './components/DosageCalculator';
import WhyHealthJunkie from './components/WhyHealthJunkie';
import BrandStory from './components/BrandStory';
import Testimonials from './components/Testimonials';
import RecipesSection from './components/RecipesSection';
import FAQSection from './components/FAQSection';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import ProductModal from './components/ProductModal';
import RecipeModal from './components/RecipeModal';
import StoreLocatorModal from './components/StoreLocatorModal';
import ProductDetailView from './components/ProductDetailView';
import Toast from './components/Toast';

export default function App() {
  const [storeLocatorOpen, setStoreLocatorOpen] = useState(false);
  const [standaloneProduct, setStandaloneProduct] = useState(null);

  const handleOpenProductPage = (product) => {
    setStandaloneProduct(product);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setStandaloneProduct(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col bg-cream-100 text-elderberry-950 font-sans antialiased selection:bg-elderberry-700 selection:text-white">
        {/* Section 01: Announcement Bar & Sticky Header */}
        <AnnouncementBar />
        <Navbar 
          onOpenStoreLocator={() => setStoreLocatorOpen(true)} 
          onNavigateHome={handleBackToHome}
        />

        {/* Main Content Area */}
        <main className="flex-1">
          {standaloneProduct ? (
            /* Standalone Luxury Product Detail Page (Section 05 Requirement) */
            <ProductDetailView 
              product={standaloneProduct} 
              onBack={handleBackToHome}
              onSelectProduct={handleOpenProductPage}
            />
          ) : (
            /* Full Homepage Experience */
            <>
              {/* Section 02: Cinematic Hero Section */}
              <Hero onOpenProductPage={handleOpenProductPage} />

              {/* Vieve-Style Animated Marquee Ticker */}
              <MarqueeTicker />

              {/* Section 03: Interactive Product Showcase */}
              <ProductCatalog onOpenProductPage={handleOpenProductPage} />

              {/* Section 04: Scroll-Driven Product Experience (Vieve-Inspired) */}
              <ScrollExperience onOpenProductPage={handleOpenProductPage} />

              {/* Interactive Syrup Matchmaker Quiz */}
              <SyrupFinderQuiz onOpenProductPage={handleOpenProductPage} />

              {/* Section 05: Ingredients & Natural Goodness */}
              <IngredientsSection />

              {/* Holistic Dosage & Family Serving Calculator */}
              <DosageCalculator />

              {/* Section 06: Why Health Junkie vs "Big Supplement" Brands */}
              <WhyHealthJunkie />

              {/* Section 07: Nicole's Brand Story */}
              <BrandStory />

              {/* Section 08: Customer Testimonials & Reviews */}
              <Testimonials />

              {/* Section 09: Recipes & Wellness Mixology */}
              <RecipesSection onOpenProductPage={handleOpenProductPage} />

              {/* Section 10: Frequently Asked Questions */}
              <FAQSection />

              {/* Section 11: Newsletter & Recipe Club */}
              <Newsletter />
            </>
          )}
        </main>

        {/* Section 12: Premium Footer */}
        <Footer onOpenStoreLocator={() => setStoreLocatorOpen(true)} />

        {/* Interactive Overlays & Modals */}
        <CartDrawer />
        <ProductModal onOpenFullPage={handleOpenProductPage} />
        <RecipeModal />
        <StoreLocatorModal 
          isOpen={storeLocatorOpen} 
          onClose={() => setStoreLocatorOpen(false)} 
        />
        <Toast />
      </div>
    </CartProvider>
  );
}
