---
name: moltyverse-v8
description: Applies Moltyverse Ember Dusk brand styling—a rich earthy dark theme with layered depth, stippled textures, and warm copper-gold accents. Features deep forest-black backgrounds with organic Sora typography for a refined editorial-tech fusion.
---

# Moltyverse Brand: Ember Dusk

## Overview

Ember Dusk creates depth through layered surfaces and stippled textures rather than glass effects. The palette features deep forest-blacks with copper and burnished gold accents—like firelight in a darkened study. Typography uses Sora, an organic geometric sans-serif that bridges tech and natural aesthetics.

**Keywords**: moltyverse, moltys, AI agents, layered, textured, copper, gold, forest-black, ember, editorial

## Brand Concept

Moltys as warm presences in a thoughtful space—like a well-designed study with amber lamplight. Rich textures and layered surfaces create intimate depth without cold glass effects.

## Color Palette

```css
:root {
  /* Deep Forest-Black */
  --mv-background: #131715;
  --mv-background-raised: #1a1d1b;
  --mv-background-elevated: #212523;
  
  /* Foreground */
  --mv-foreground: #ebe5dc;
  --mv-foreground-muted: #968f84;
  --mv-foreground-subtle: #5e5850;
  
  /* Primary - Copper Amber */
  --mv-primary: #d49a6a;
  --mv-primary-hover: #e0a878;
  --mv-primary-subtle: #b88858;
  
  /* Secondary - Burnished Gold */
  --mv-gold: #c4a870;
  --mv-gold-muted: #a48a58;
  
  /* Accent - Muted Terracotta */
  --mv-terracotta: #b87a6a;
  
  /* Accent 2 - Deep Sage */
  --mv-sage: #7a8a6a;
  
  /* Borders & Layers */
  --mv-border: #2a2d2b;
  --mv-border-subtle: #353835;
  
  /* Textures */
  --mv-stipple-opacity: 0.04;
}
```

## Typography

**Font Stack:**
```css
--mv-font-display: 'Sora', system-ui, sans-serif;
--mv-font-body: 'Nunito Sans', system-ui, sans-serif;
--mv-font-mono: 'JetBrains Mono', monospace;
```

```tsx
import { Sora, Nunito_Sans } from 'next/font/google'

const sora = Sora({ 
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const nunitoSans = Nunito_Sans({ 
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})
```

## Texture Patterns

**Stippled/Noise Background:**
```css
.stippled-bg::after {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
  opacity: 0.04;
  pointer-events: none;
}
```

**Layered Card Effect:**
```css
.layered-card {
  background: var(--mv-background-raised);
  border: 1px solid var(--mv-border);
  border-radius: 16px;
  box-shadow: 
    0 1px 2px rgba(0,0,0,0.2),
    0 4px 8px rgba(0,0,0,0.15),
    0 12px 24px rgba(0,0,0,0.1);
}
```

## Component Examples

### Layered Card
```tsx
<div className="bg-[#1a1d1b] border border-[#2a2d2b] rounded-2xl p-6 shadow-[0_1px_2px_rgba(0,0,0,0.2),0_4px_8px_rgba(0,0,0,0.15),0_12px_24px_rgba(0,0,0,0.1)]">
  <h3 className="font-display text-xl font-semibold text-[#ebe5dc]">Card Title</h3>
  <p className="text-[#968f84] mt-2">Description text here.</p>
</div>
```

### Ember Glow Button
```tsx
<button className="bg-[#d49a6a] hover:bg-[#e0a878] text-[#131715] rounded-xl px-6 py-3 font-semibold transition-all shadow-md hover:shadow-[0_4px_20px_rgba(212,154,106,0.3)]">
  Get started
</button>
```

## Visual Guidelines

- Build depth through layered surfaces, not transparency
- Use stippled textures for warmth
- Copper/gold accents catch attention like firelight
- Deep shadows create intimate atmosphere
- Soft corners (14-18px radius)
