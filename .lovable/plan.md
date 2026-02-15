
# S.M. Trade International — Premium Website Upgrade

## What Will Change

The existing website already has the right structure (TopBar, Navbar, Hero, About, Services, Products, Clients, Contact, Footer, WhatsApp). This upgrade focuses on making it look more **premium, minimal, and elegant** — plus adding the missing **"Customization Process"** section and improving **SEO**.

---

## 1. SEO Improvements (index.html)
- Update page title to "S.M. Trade International | Premium Customized Corporate Gifts"
- Update meta description, og:title, og:description with proper business keywords
- Add Bengali language support meta tag

## 2. Hero Section Upgrade
- Update headline to: "Premium Customized Corporate Gifts & Promotional Products"
- Update subtext to: "We customize your brand identity with quality, precision and professionalism."
- Change second button from "Contact Us" to "View Products" (links to #products)
- Add subtle fade-in animation on load
- Add a soft gradient overlay for more depth

## 3. About Section Polish
- Add slightly more elegant card styling with softer shadows
- Keep existing stats but refine the visual presentation

## 4. Product Categories Section (New — replaces current Services)
- Rename current "Services" to **"Product Categories"** with 4 cards:
  - Corporate Gift Items (Tie, Crystal, Pen, Key Ring)
  - Office Accessories (Wooden Tissue Box, Desk Organizer, Pen Holder)
  - Leather Products (Executive File, Document Folder)
  - Customized Glass & Crystal
- Each card gets a relevant icon and short description

## 5. New Section: "Our Customization Process"
- A new section added between Product Categories and the Product Gallery
- 5-step horizontal/vertical timeline:
  1. Requirement Discussion
  2. Design Approval
  3. Sample Production
  4. Bulk Production
  5. Delivery
- Clean numbered steps with icons and connecting lines
- Bilingual translations added

## 6. Product Gallery — Minor Polish
- Keep existing lightbox and category filter
- Add smoother hover animations with soft shadows

## 7. Clients Section — Minor Polish
- Keep existing layout, add subtle card hover effects

## 8. Contact Section — Minor Polish
- Refine form styling with softer borders and shadows
- Keep all existing contact info and WhatsApp button

## 9. Footer & WhatsApp Float
- No major changes needed — already well structured

## 10. Animations & Visual Polish
- Add fade-in keyframes to `tailwind.config.ts`
- Apply `animate-fade-in` to major sections for smooth scroll appearance
- Softer shadows across all cards (`shadow-sm` to `shadow-md` transitions)

## 11. Language Context Updates
- Add translations for:
  - New "Product Categories" section titles and descriptions
  - "Our Customization Process" section (all 5 steps)
  - Updated hero text

---

## Technical Details

### Files to modify:
1. **index.html** — SEO meta tags
2. **src/contexts/LanguageContext.tsx** — Add ~20 new translation keys
3. **src/components/HeroSection.tsx** — Updated text, second button target, fade animation
4. **src/components/ServicesSection.tsx** — Rename to Product Categories with new content
5. **src/components/ProductsSection.tsx** — Minor hover/shadow polish
6. **src/pages/Index.tsx** — Add new ProcessSection between Services and Products

### New file to create:
7. **src/components/ProcessSection.tsx** — 5-step customization process timeline

### Files with minor tweaks:
8. **tailwind.config.ts** — Add fade-in keyframe animation
9. **src/components/AboutSection.tsx** — Softer shadow styling
10. **src/components/ClientsSection.tsx** — Subtle hover refinement
11. **src/components/ContactSection.tsx** — Form styling polish
