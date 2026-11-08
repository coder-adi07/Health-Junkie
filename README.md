# Health Junkie — Premium Website Redesign

> **Immunity Handcrafted Without The Junk.**  
> A complete, luxury DTC e-commerce website redesign concept for **Health Junkie**, a natural food and wellness startup founded by **Nicole Lazar** (former NASA engineer and Board Certified Holistic Health Practitioner, Cleveland, OH).

---

## 🌟 Overview & Brand Integrity

This project is a bespoke digital flagship redesign for **Health Junkie** (`heyhealthjunkie.com`), inspired by modern luxury e-commerce storytelling (such as *Vieve*), while strictly adhering to authentic product recipes, certifications, and brand heritage:

- **100% Sambucus Nigra:** Handcrafted in small batches in Cleveland, Ohio with European black elderberries.
- **Unrefined Sweeteners Only:** Sweetened exclusively with raw local Ohio wildflower honey or pure local maple syrup.
- **50% to 90% Less Sugar:** 1g to 2g sugar per serving vs. 4g+ high-fructose corn syrup in leading pharmacy brands (Sambucol).
- **Zero Additives:** 0g refined sugar, 0 preservatives (no potassium sorbate or sodium benzoate), 0 lab citric acid, non-irradiated.

---

## ✨ Key Features & Interactive Architecture

### 1. Cinematic 3D Hero Experience
- **Interactive 3D Perspective Tilt:** Responds in real-time to mouse positioning across the canvas with up to 18° 3D rotational tilt (`perspective: 1200px`, `rotateX`, `rotateY`, `scale3d`).
- **Dynamic Specular Light Glare:** Real-time glass light reflection highlight gliding across the bottle surface based on cursor angle.
- **Dynamic Ground Counter-Shadow:** Realistic counter-projected shadow grounded beneath the bottle.
- **Gyroscopic Idle Floating:** Smooth 3D rotational oscillation when cursor leaves the stage.
- **Multi-plane Parallax Depth:** Floating info badges at `translateZ(50px)` for true spatial separation.
- **Real-Time Flavor Switcher:** Seamlessly preview Cheeky Tart Cherry, Sassy Cinnamon, and Bold Ginger with color-synchronized background glows.

### 2. Creative Scroll Experience (*Vieve-Inspired*)
- Dynamic color-morphing flavor section (Ruby Cherry, Terracotta Cinnamon, Golden Ginger).
- Floating botanical tags revealing real culinary spices and ingredients.
- Live Sugar Comparison Meter comparing Health Junkie against commercial syrup brands.

### 3. Interactive Syrup Matchmaker Quiz
- 3-step interactive finder pairing user lifestyle and taste preferences with the ideal syrup.
- Features the original 2048px high-resolution flatlay banner from `heyhealthjunkie.com` in the background with an elegant glassmorphism overlay.

### 4. Holistic Dosage & Family Serving Calculator
- Personalized serving planner for adults, kids, and infants.
- Built-in pediatric safety alert: automatically warns parents that honey is unsafe for infants under 1 year, and recommends the maple-syrup-based **Cheeky Tart Cherry**.

### 5. Transparent Quality Deck vs. "Big Supplement" Brands
- Detailed side-by-side transparency matrix comparing Health Junkie against drugstore brands.
- Three enlarged, refined authentic pillar badge cards.

### 6. Wellness Mixology & Editorial Recipe Hub
- Authentic seasonal mocktails, mulled ciders, and wellness tonics.
- 1-click modal with step-by-step preparation and paired syrup quick-shop.

### 7. Modern DTC E-Commerce Cart & Standalone Product Pages
- Slide-out Cart Drawer with dynamic $50 Free Shipping progress meter.
- Promo code applicator (`WELCOME10` for 10% off).
- Standalone luxury product page (`ProductDetailView.jsx`) with multi-angle galleries, subscription options (15% off), and dosage accordions.
- Interactive Midwest Retail Store Locator (Heinen's, Buehler's, Cleveland Clinic Farmers Market, Nature's Oasis).

---

## 🛠️ Tech Stack

- **Framework:** React 18 + Vite 6
- **Styling:** Tailwind CSS (Custom theme matching `heyhealthjunkie.com`)
- **Typography:** `"Helvetica Neue", Helvetica, Arial, sans-serif` (Strict brand fidelity)
- **Icons:** Lucide React + Custom SVG Badges
- **State Management:** React Context API (`CartContext`)

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/coder-adi07/Health-Junkie.git

# Navigate to directory
cd Health-Junkie

# Install dependencies
npm install

# Start development server
npm run dev
```

### Production Build & Preview

```bash
# Build optimized production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 📜 Brand Notice & Source of Truth

All trademarks, logos, and product photographs are the property of **Health Junkie** and founder **Nicole Lazar**. Designed as a high-fidelity redesign concept.
