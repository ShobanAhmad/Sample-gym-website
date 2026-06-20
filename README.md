# Premium Gym & Fitness Sales Demo Website (Iron Pulse Performance Lab)

A premium, high-converting, results-focused single-page sales demonstration and portfolio website designed to present to gym, boutique fitness studio, MMA box, and CrossFit box owners during sales pitch presentations. 

This template double-functions as a silent sales pitch: **"This is what your gym's website should look like to drive sign-ups, schedule classes, and secure memberships online."**

---

## ⚡ Sales Pitch Rebrand Suite (Dynamic Customization)

To make sales presentations incredibly simple, we built an integrated, real-time **Sales Pitch Dashboard** in the right-hand margin. During live video pitches or in-person meetings, sales representatives can:
1. **Instantly Modify Name/Copy**: Key in the prospect's actual fitness business name, and watch the entire site, logo, headings, checkouts, and copy update immediately in real-time.
2. **Re-color in One Tap**: Switch between **Electric Lime**, **Energy Orange**, **Crimson Fury**, and **Cyber Cyan** accent systems to match the client's corporate branding.
3. **Load Curated Niche Templates**: In one click, load pre-scaffolded presets:
   - **Hardcore Barbell Temple** (High contrast red theme)
   - **Premium Boutique Studio** (Restorative cyber cyan theme)
   - **CrossFit Athletic Box** (Vibrant energetic electric lime theme)
   - **Combat & Striking Boxing Club** (Intense ringside orange theme)

---

## 🔥 Key Visual Highlights & Active Conversions

The application features 12 structural modules explicitly structured around customer psychological conversions:
- **Cinematic Hero Display**: Responsive wide-viewport structure with motivational typographic contrast, live membership count trackers, and key credentials.
- **Before / After interactive Slider**: A highly-polished, touch-drag comparative slider allowing visual comparison of fat-loss, muscle-gain, and body recomposition progress.
- **Biometric Program cards**: Details target specializations with expandable cards revealing calorie outputs, suitability ranges, and progress guides.
- **Interactive Timetable/Calendar**: Clean weekly scheduler where prospects filter sessions by Day (Mon-Sun) and Disciplines (Strength, HIIT, CrossFit...) before clicking "Book Pass" to pre-fill their reservation.
- **Price Grid & Billing Toggle**: Monthly vs. Annual subscription toggles calculating a 20% savings margin with prominent visual highlighting on the "Pro" conversion tier.
- **Asymmetric Photo Gallery**: Modern asymmetrical grid of facility workouts with a built-in interactive click Lightbox to scroll through high-res spaces.
- **Lead Capture Funnel**: High-converting Trial signup with client-side regex input validation, preferred schedule drop-downs, and a custom completed success screen offering generated booking codes.
- **Interactive Maps & Contacts**: Custom-styled layout including geographic GPS indicators, interactive coordinates zoom, and quick tel/WhatsApp actions.

---

## 🛠️ Technical Specifications

- **Framework**: React 19 + TypeScript (Module resolution)
- **Bundler & Tooling**: Vite 6, Tailwind CSS v4, ESBuild
- **Animation Engine**: `motion` (imported natively from `motion/react` as mandated)
- **Icons Layout**: `lucide-react` (Optimized SVG indices)
- **Deployment & Scaling**: Designed to compile to clean, compressed assets under `dist/` with absolute compatibility for standard static deployment pipelines (GitHub Pages, Netlify, Cloud Run, Vercel).

---

## 🚀 Development & Build Pipelines

### 1. Boot up development server
Install background dependencies and launch Vite development stage listening on port `3000`:
```bash
npm install
npm run dev
```

### 2. Lint and Validate Syntax
Run TypeScript typing diagnostics:
```bash
npm run lint
```

### 3. Production Compilation asset bundle
Produces optimized, compressed, production-ready static assets in `/dist`:
```bash
npm run build
```
