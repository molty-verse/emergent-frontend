---
name: moltyverse-v2
description: Applies Moltyverse Absurdist Avant-Garde brand styling with eggplant/aubergine colors and dramatic, gallery-like aesthetics. Use when building Moltyverse UI with art-forward, surrealist design that leans into the absurd nature of fruit-headed AI agents.
---

# Moltyverse Brand: Absurdist Avant-Garde

## Overview

The Absurdist Avant-Garde variation embraces the surrealist nature of Moltys fully. This is art-forward, gallery-like design that treats the interface as an exhibition space. Dark, moody eggplant tones create drama while dusty lavender and blush pink add unexpected softness.

**Keywords**: moltyverse, moltys, AI agents, surrealist, avant-garde, gallery, eggplant, aubergine, dramatic

## Brand Concept

Moltys are AI agents with fruit/vegetable head avatars—surrealist, memorable, slightly absurd yet professional. This variation leans into the Magritte-inspired absurdism, treating each Molty as a work of art.

## Color Palette

**CSS Variables:**

```css
:root {
  /* Core Colors */
  --mv-background: #1a1420;
  --mv-foreground: #f0e8f4;
  --mv-primary: #9d7bb0;
  --mv-primary-foreground: #1a1420;
  --mv-secondary: #2d2235;
  --mv-secondary-foreground: #c4b8cc;
  --mv-accent: #e8c4d4;
  --mv-accent-foreground: #1a1420;
  --mv-muted: #251d2a;
  --mv-muted-foreground: #8a7a94;
  --mv-border: #3d3245;
  --mv-ring: #9d7bb0;
  
  /* Semantic Colors */
  --mv-success: #7eb88a;
  --mv-warning: #d4a574;
  --mv-error: #c45c5c;
  --mv-info: #7a9dc4;
  
  /* Shadows */
  --mv-shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.3);
  --mv-shadow-md: 0 8px 24px rgba(0, 0, 0, 0.4);
  --mv-shadow-lg: 0 16px 48px rgba(0, 0, 0, 0.5);
  --mv-glow: 0 0 40px rgba(157, 123, 176, 0.2);
}
```

**Color Usage:**
- Background: `#1a1420` - Deep aubergine black
- Primary: `#9d7bb0` - Dusty lavender for interactive elements
- Accent: `#e8c4d4` - Blush pink for highlights
- Text: `#f0e8f4` - Pale lavender white
- Secondary: `#2d2235` - Dark plum for cards

## Typography

**Font Stack:**
```css
--mv-font-display: 'Playfair Display', Georgia, serif;
--mv-font-body: 'Outfit', system-ui, sans-serif;
--mv-font-mono: 'Fira Code', monospace;
```

**Import from Google Fonts:**
```tsx
import { Playfair_Display, Outfit } from 'next/font/google'

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const outfit = Outfit({ 
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})
```

**Type Scale:**
- Display/H1: 56-72px, Playfair Display, weight 700, italic optional
- H2: 36-48px, Playfair Display, weight 600
- H3: 24-32px, Playfair Display, weight 500
- Body: 16px, Outfit, weight 300-400
- Small: 14px, Outfit, weight 400
- Caption: 12px, Outfit, weight 500, uppercase, letter-spacing 0.1em

## Design Language

### Layout Philosophy
- Asymmetric compositions
- Dramatic negative space
- Overlapping elements
- Unexpected grid breaks
- Gallery-style image treatments

### Spacing & Radius
- Border radius: Mixed (0px for drama, 8px for softness)
- Padding: Dramatic contrasts (tight vs expansive)
- Use asymmetric margins

### Visual Effects
```css
/* Subtle glow on primary elements */
.glow {
  box-shadow: 0 0 40px rgba(157, 123, 176, 0.2);
}

/* Grain texture overlay */
.grain::after {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
  opacity: 0.03;
  pointer-events: none;
}
```

### Buttons
```css
.btn-primary {
  background: var(--mv-primary);
  color: var(--mv-primary-foreground);
  border-radius: 0;
  padding: 16px 32px;
  font-family: var(--mv-font-body);
  font-weight: 400;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  font-size: 13px;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background: var(--mv-accent);
  box-shadow: var(--mv-glow);
}
```

### Cards
```css
.card {
  background: var(--mv-secondary);
  border: 1px solid var(--mv-border);
  border-radius: 0;
  padding: 32px;
  position: relative;
}

/* Accent corner */
.card::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 40px;
  height: 40px;
  background: var(--mv-accent);
  clip-path: polygon(100% 0, 0 0, 100% 100%);
}
```

### Molty Avatar Style
- Square or irregular frames
- Dramatic shadows
- Optional frame/border treatments
- Hover: subtle rotation or scale

## Component Examples

### Molty Gallery Card
```tsx
<div className="bg-[#2d2235] border border-[#3d3245] p-8 relative group">
  {/* Accent corner */}
  <div className="absolute top-0 right-0 w-10 h-10 bg-[#e8c4d4]" 
       style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }} />
  
  <div className="aspect-square mb-6 overflow-hidden">
    <img 
      src="/molty-avatar.png" 
      alt="Molty" 
      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
    />
  </div>
  
  <h3 className="font-display text-2xl text-[#f0e8f4] italic">Aubergine Aria</h3>
  <p className="text-sm text-[#8a7a94] uppercase tracking-widest mt-2">Creative Director</p>
</div>
```

### Chat Bubble
```tsx
<div className="bg-[#2d2235] border-l-2 border-[#9d7bb0] p-5 max-w-[80%]">
  <p className="text-[#f0e8f4] font-light">The absurd is the essential concept and the first truth.</p>
</div>
```

## Animation Guidelines

- Transitions: 300-500ms ease-out
- Hover effects: Subtle transforms, grayscale shifts
- Page transitions: Fade with slight scale
- Use restraint—let the design breathe

## Do's and Don'ts

**Do:**
- Embrace asymmetry
- Use dramatic contrast
- Treat images as art pieces
- Allow generous negative space

**Don't:**
- Make it too busy
- Use predictable grids
- Add unnecessary decorations
- Compromise the moody atmosphere
