# Hero Section Deep Analysis

## 📋 Overview

The hero section is currently implemented using the `Hero.tsx` component, which is actively rendered in `App.tsx` at line 52.

---

## 🎯 Active Component: `Hero.tsx`

**File Location:** `src/components/Hero.tsx`

**Usage:** Imported and used in `src/App.tsx` (line 52)

---

## 📐 Dimensions & Sizing

### Section Container Dimensions

```tsx
<section
  className="relative isolate pt-[var(--header-h,64px)] min-h-[calc(100svh-var(--header-h,64px))] md:min-h-[720px] lg:min-h-[820px] overflow-visible w-full"
>
```

**Breakdown:**

- **Mobile (< 768px):**
  - Padding top: `64px` (header height)
  - Min height: `calc(100svh - 64px)` (full viewport minus header)

- **Tablet (md: ≥ 768px):**
  - Min height: `720px`

- **Desktop (lg: ≥ 1024px):**
  - Min height: `820px`

- **Width:** `100%` (full width)
- **Overflow:** `visible` (allows images to extend beyond boundaries)

### Header/NavBar Height

- **NavBar:** `64px` (h-16) - sticky positioned at top
- **CSS Variable:** `--header-h: 64px` defined in `globals.css:10`

---

## 🖼️ Images & Visual Elements

### Desktop Images (md and up - `hidden md:block`)

#### Left Image: Adult Illustration

```tsx
<img
  src={adultPng}  // src/assets/hero/adult.png
  className="fixed bottom-0 z-[1] w-[32vw] max-w-[480px] min-w-[280px]"
  style={{ left: 'calc(0% - 4vw)', maxWidth: '480px' }}
/>
```

**Dimensions:**

- **Width:** `32vw` (32% of viewport width)
- **Max width:** `480px`
- **Min width:** `280px`
- **Position:** `fixed` at bottom
- **Horizontal position:** `left: calc(0% - 4vw)` (extends 4vw beyond left edge)
- **Z-index:** `1`
- **Object fit:** `contain` (maintains aspect ratio)

#### Right Image: Family Illustration

```tsx
<img
  src={familyPng}  // src/assets/hero/family.png
  className="fixed bottom-0 z-[1] w-[34vw] max-w-[520px] min-w-[300px]"
  style={{ right: 'calc(0% - 4vw)', maxWidth: '520px' }}
/>
```

**Dimensions:**

- **Width:** `34vw` (34% of viewport width)
- **Max width:** `520px`
- **Min width:** `300px`
- **Position:** `fixed` at bottom
- **Horizontal position:** `right: calc(0% - 4vw)` (extends 4vw beyond right edge)
- **Z-index:** `1`
- **Object fit:** `contain`

### Mobile Image (`md:hidden`)

```tsx
<div className="md:hidden relative mx-auto mt-4 aspect-[3/4] w-[72%] z-[1]">
  <img src={adultPng} className="absolute inset-0 h-full w-full object-contain" />
</div>
```

**Dimensions:**

- **Width:** `72%` of container
- **Aspect ratio:** `3:4` (portrait)
- **Position:** Centered horizontally (`mx-auto`)
- **Margin top:** `1rem` (mt-4)
- **Z-index:** `1`

**Note:** Only shows the adult image on mobile, not the family image.

---

## 📝 Content Section

### Container

```tsx
<div className="relative z-[2] mx-auto max-w-7xl px-4 sm:px-6">
  <div className="mx-auto max-w-3xl pt-6 md:pt-10 lg:pt-12 text-center">
```

**Dimensions:**

- **Max width:** `1280px` (max-w-7xl)
- **Inner content max width:** `768px` (max-w-3xl)
- **Padding:** `1rem` (px-4) on mobile, `1.5rem` (px-6) on sm+
- **Padding top:**
  - Mobile: `1.5rem` (pt-6)
  - Tablet: `2.5rem` (pt-10)
  - Desktop: `3rem` (pt-12)
- **Z-index:** `2` (above images)

### Heading (H1)

```tsx
<h1 className="font-semibold tracking-tight text-[color:var(--ink)] leading-tight text-[clamp(2rem,4.8vw,3.25rem)]">
  Finding Your Way Through the Maze, Together
</h1>
```

**Typography:**

- **Font:** Uses `font-roe` class (defined in globals.css - 'above-the-beyond' font)
- **Font weight:** `600` (semibold)
- **Letter spacing:** `-0.046em` (tight tracking from --letter-spacing-roe)
- **Line height:** `tight` (~1.25)
- **Font size:** `clamp(2rem, 4.8vw, 3.25rem)`
  - Minimum: `32px` (2rem)
  - Preferred: `4.8vw` (scales with viewport)
  - Maximum: `52px` (3.25rem)
- **Color:** `#1f1d1a` (--ink)

### Subtitle (Paragraph)

```tsx
<p className="mt-3 text-[color:var(--ink)]/80 leading-relaxed text-[clamp(1rem,1.5vw,1.125rem)] max-w-[52ch] mx-auto">
  Two gentle paths. Choose what fits today.
</p>
```

**Typography:**

- **Margin top:** `0.75rem` (mt-3)
- **Font size:** `clamp(1rem, 1.5vw, 1.125rem)`
  - Minimum: `16px`
  - Preferred: `1.5vw`
  - Maximum: `18px` (1.125rem)
- **Line height:** `relaxed` (~1.625)
- **Max width:** `52ch` (approximately 52 characters)
- **Color:** `rgba(31, 29, 26, 0.8)` (ink at 80% opacity)

### Action Buttons Container

```tsx
<div className="mt-6 flex flex-wrap items-center justify-center gap-3">
```

**Layout:**

- **Margin top:** `1.5rem` (mt-6)
- **Display:** Flex with wrap
- **Alignment:** Center (items-center, justify-center)
- **Gap:** `0.75rem` (gap-3)

#### Button 1: "For Families"

```tsx
<a href="/families" className="inline-flex items-center rounded-2xl bg-white/75 px-4 py-2 text-[color:var(--ink)] shadow-sm ring-1 ring-black/10 backdrop-blur transition hover:bg-white">
  For Families · Find guidance
</a>
```

**Styling:**

- **Background:** `rgba(255, 255, 255, 0.75)` (white at 75% opacity)
- **Hover background:** `white` (100% opacity)
- **Border radius:** `1rem` (rounded-2xl)
- **Padding:** `1rem 0.5rem` (px-4 py-2)
- **Border:** `1px solid rgba(0, 0, 0, 0.1)` (ring-1 ring-black/10)
- **Shadow:** `shadow-sm` (small shadow)
- **Backdrop blur:** Enabled
- **Transition:** Color/background transitions on hover

#### Button 2: "For Adults"

```tsx
<a href="/adults" className="inline-flex items-center rounded-2xl bg-white/75 px-4 py-2 text-[color:var(--ink)] shadow-sm ring-1 ring-black/10 backdrop-blur transition hover:bg-white">
  For Adults · Explore support
</a>
```

**Styling:** Same as Button 1

---

## 🎨 Background Styling

### Hero Gradient Background

```css
.hero-gradient {
  background:
    radial-gradient(1200px 600px at 15% 20%, rgba(217, 144, 98, 0.35), transparent 70%),
    radial-gradient(1400px 700px at 85% 30%, rgba(20, 84, 95, 0.35), transparent 70%),
    radial-gradient(900px 500px at 70% 85%, rgba(64, 33, 68, 0.28), transparent 70%),
    linear-gradient(#fbf8f2, #fbf8f2);
}
```

**Layers (from top to bottom):**

1. **Radial gradient (top-left):** Orange/copper tone at 15% 20%
2. **Radial gradient (top-right):** Teal/blue tone at 85% 30%
3. **Radial gradient (bottom-right):** Purple tone at 70% 85%
4. **Base:** Linear gradient from `#fbf8f2` to `#fbf8f2` (solid warm cream)

**Position:**

- Absolute positioned, inset 0
- Z-index: -10 (behind everything)

### Additional Bottom Gradient

```tsx
<div className="pointer-events-none absolute inset-x-0 bottom-[-8%] h-[40%] -z-10 bg-gradient-to-t from-[rgba(80,50,40,0.25)] via-transparent to-transparent" />
```

**Styling:**

- **Position:** Absolute, spans full width (inset-x-0)
- **Vertical position:** Bottom at -8% (extends slightly below section)
- **Height:** 40% of section height
- **Gradient:** From dark brown at bottom to transparent at top
- **Z-index:** -10

---

## 📱 Responsive Breakpoints

### Mobile First Approach

- **Base:** < 768px (mobile)
- **md:** ≥ 768px (tablet)
- **lg:** ≥ 1024px (desktop)
- **sm:** ≥ 640px (used for padding adjustments)

### What Changes at Each Breakpoint

#### Mobile (< 768px)

- ✅ Single adult image shown (centered, 72% width, 3:4 aspect ratio)
- ✅ Full viewport height minus header
- ✅ Smaller padding (px-4)
- ❌ Family image hidden
- ❌ Fixed position images hidden

#### Tablet (≥ 768px, md)

- ✅ Both fixed images shown (left & right)
- ✅ Min height: 720px
- ✅ Larger padding (px-6)
- ✅ More padding top (pt-10)

#### Desktop (≥ 1024px, lg)

- ✅ Min height: 820px
- ✅ More padding top (pt-12)

---

## 🔍 What's Visible vs Hidden

### ✅ Currently Visible

1. **Hero section container** - Full width, responsive height
2. **Gradient background** - Multi-layer radial gradients
3. **Bottom gradient overlay** - Dark brown fade
4. **Desktop (≥768px):**
   - Left adult image (fixed, extends beyond left edge)
   - Right family image (fixed, extends beyond right edge)
5. **Mobile (<768px):**
   - Single centered adult image
6. **Center content:**
   - H1 heading
   - Subtitle paragraph
   - Two action buttons (Families & Adults)

### ❌ Currently Hidden/Not Used

1. **Other Hero Components:**
   - `HeroAlternative.tsx` - Alternative layout with different structure
   - `HeroGradient.tsx` - Different gradient-based layout
   - `HeroIllustration.tsx` - Uses Hero.svg (not used)
   - `HeroPill.tsx` - Pill component (not used)
   - `HeroGuideCurve.tsx` - SVG curve decoration (not used)

2. **CSS Classes in `index.css`:**
   - Hundreds of unused hero-related styles (`.hero-card-*`, `.hero-title-*`, etc.)
   - These appear to be from previous design iterations

3. **Assets Not Used:**
   - `src/assets/familycard.svg`
   - `src/assets/girlcard1.svg`
   - `src/assets/girl.png`
   - `src/assets/family.png` (different from hero/family.png)
   - `src/assets/Hero.svg` (referenced in HeroIllustration.tsx)
   - Most SVG assets in `src/assets/`

---

## 🎯 Z-Index Stacking Order

From back to front:

1. **-10:** Background gradients (`.hero-gradient`, bottom gradient)
2. **1:** Hero images (adult.png, family.png)
3. **2:** Content container (heading, subtitle, buttons)
4. **50:** NavBar (sticky header)

---

## 📊 Image File Locations

### Active Images

- `src/assets/hero/adult.png` - Used for left (desktop) and center (mobile)
- `src/assets/hero/family.png` - Used for right (desktop only)

### Note on Image Sizing

- Images use `object-contain` to maintain aspect ratio
- Actual pixel dimensions of images are unknown from code analysis
- Images scale responsively based on viewport width percentages

---

## 🎨 Color Palette Used

- **Ink (Text):** `#1f1d1a` (--ink)
- **Ink Muted:** `rgba(31, 29, 26, 0.8)` (80% opacity)
- **Background Base:** `#fbf8f2` (warm cream)
- **Button Background:** `rgba(255, 255, 255, 0.75)` (white at 75% opacity)
- **Gradient Colors:**
  - Copper: `rgba(217, 144, 98, 0.35)`
  - Teal: `rgba(20, 84, 95, 0.35)`
  - Purple: `rgba(64, 33, 68, 0.28)`
  - Bottom overlay: `rgba(80, 50, 40, 0.25)`

---

## ⚙️ Key CSS Classes Applied

### From Tailwind

- Layout: `relative`, `isolate`, `fixed`, `absolute`
- Spacing: `pt-*`, `px-*`, `mt-*`, `mb-*`, `gap-*`
- Sizing: `w-full`, `max-w-*`, `min-w-*`, `min-h-*`
- Flexbox: `flex`, `flex-wrap`, `items-center`, `justify-center`
- Typography: `font-semibold`, `tracking-tight`, `leading-tight`, `text-center`
- Responsive: `hidden`, `md:block`, `md:hidden`, `md:pt-*`, `lg:pt-*`
- Visual: `backdrop-blur`, `shadow-sm`, `ring-1`, `rounded-2xl`
- Overflow: `overflow-visible`

### Custom Classes

- `.hero-gradient` - Background gradient (defined in globals.css:324)
- `.hero-section` - Overflow handling (defined in globals.css:336)
- `.hero-image-left` - Left image positioning (defined in globals.css:341)
- `.hero-image-right` - Right image positioning (defined in globals.css:346)

---

## 🔧 Potential Issues & Observations

1. **Fixed Positioning Images:**
   - Images use `fixed` positioning, which means they stay in place during scroll
   - This might cause visual issues if users scroll the hero section

2. **Overflow Handling:**
   - Section has `overflow-visible` and CSS class `hero-section` for overflow handling
   - CSS rules in globals.css (lines 177-197) explicitly allow overflow
   - Images extend 4vw beyond viewport edges

3. **Mobile Experience:**
   - Only shows adult image, not family image
   - Family path might feel underrepresented on mobile

4. **Responsive Image Sizing:**
   - Images use viewport width (vw) units, which can be inconsistent
   - Min/max width constraints help but may cause layout shifts

5. **Unused Code:**
   - Large amount of unused hero CSS in `index.css` (~2000+ lines)
   - Multiple unused hero components
   - Consider cleanup to reduce bundle size

---

## 📋 Summary Checklist

### What's Working

- ✅ Responsive layout (mobile, tablet, desktop)
- ✅ Centered content with readable typography
- ✅ Two clear call-to-action buttons
- ✅ Gradient background with multiple color layers
- ✅ Images positioned to frame the content

### What Might Need Attention

- ⚠️ Fixed positioning might cause scroll issues
- ⚠️ Mobile only shows one image (adult)
- ⚠️ Large amount of unused CSS/components
- ⚠️ Images extend beyond viewport (intentional but may need refinement)

### Dimensions Summary

- **Section height:** 100svh-64px (mobile), 720px (tablet), 820px (desktop)
- **Left image:** 32vw (max 480px, min 280px)
- **Right image:** 34vw (max 520px, min 300px)
- **Mobile image:** 72% width, 3:4 aspect ratio
- **Content max-width:** 768px (max-w-3xl)

---

## 🎯 Recommendations

1. **Consider changing `fixed` to `absolute`** for hero images if scroll behavior is unexpected
2. **Add family image to mobile** if both paths should be equally represented
3. **Clean up unused CSS** in `index.css` to improve maintainability
4. **Consider using `picture` element** for responsive images if different images are needed per breakpoint
5. **Test overflow behavior** on various devices and viewport sizes
