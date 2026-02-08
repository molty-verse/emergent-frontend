---
name: moltyverse-v7
description: Applies Moltyverse Liquid Grove brand styling—an earthy dark theme with frosted glass effects, organic typography, and citrus warmth. Features subtle green-tinted blacks, glassmorphism cards, and soft grain textures for a modern editorial feel.
---

# Moltyverse Brand: Liquid Grove

## Overview

Liquid Grove merges editorial warmth with modern glassmorphism. The background uses a subtle earthy green-black that grounds the citrus accents beautifully. Frosted glass panels create depth and sophistication while maintaining warmth. The typography uses organic sans-serifs that feel natural yet contemporary.

**Keywords**: moltyverse, moltys, AI agents, glassmorphism, frosted, organic, earthy, green-black, citrus, modern editorial

## Brand Concept

Moltys as digital beings emerging from an organic digital forest—warm citrus light filtering through frosted glass leaves. The aesthetic balances tech sophistication with natural warmth.

## Color Palette

```css
:root {
  /* Earthy Green-Black Backgrounds */
  --mv-background: #151816;
  --mv-background-elevated: #1c1f1d;
  --mv-background-glass: rgba(28, 31, 29, 0.7);
  --mv-background-glass-strong: rgba(28, 31, 29, 0.85);
  
  /* Foreground / Text */
  --mv-foreground: #f0ebe4;
  --mv-foreground-muted: #9a958c;
  --mv-foreground-subtle: #686460;
  
  /* Primary - Warm Amber */
  --mv-primary: #daa06d;
  --mv-primary-hover: #e5b07d;
  --mv-primary-glow: rgba(218, 160, 109, 0.15);
  
  /* Secondary - Muted Olive */
  --mv-secondary: #8b9a72;
  --mv-secondary-muted: #6b7a5a;
  
  /* Accent - Dusty Coral */
  --mv-accent: #c9847a;
  --mv-accent-muted: #a96a60;
  
  /* Accent 2 - Sage */
  --mv-sage: #9aaa8a;
  
  /* Glass Effects */
  --mv-glass-border: rgba(240, 235, 228, 0.08);
  --mv-glass-highlight: rgba(240, 235, 228, 0.03);
  --mv-blur-amount: 16px;
  
  /* Shadows */
  --mv-shadow-glass: 0 8px 32px rgba(0, 0, 0, 0.3);
  --mv-shadow-glow: 0 0 40px var(--mv-primary-glow);
}
```

## Typography

**Font Stack (Organic Sans-Serifs):**
```css
--mv-font-display: 'Outfit', system-ui, sans-serif;
--mv-font-body: 'Plus Jakarta Sans', system-ui, sans-serif;
--mv-font-mono: 'JetBrains Mono', monospace;
```

```tsx
import { Outfit, Plus_Jakarta_Sans } from 'next/font/google'

const outfit = Outfit({ 
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const plusJakarta = Plus_Jakarta_Sans({ 
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})
```

**Type Scale:**
- Display: 48-56px, Outfit, weight 600
- H2: 32-40px, Outfit, weight 500
- Body: 16-17px, Plus Jakarta Sans, weight 400
- All sentence case—no ALL CAPS

## Glassmorphism Patterns

**Frosted Glass Card:**
```css
.glass-card {
  background: var(--mv-background-glass);
  backdrop-filter: blur(var(--mv-blur-amount));
  -webkit-backdrop-filter: blur(var(--mv-blur-amount));
  border: 1px solid var(--mv-glass-border);
  border-radius: 20px;
  box-shadow: var(--mv-shadow-glass);
}

/* Inner highlight for depth */
.glass-card::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1px;
  background: linear-gradient(
    135deg,
    var(--mv-glass-highlight) 0%,
    transparent 50%
  );
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  pointer-events: none;
}
```

**Grain + Glass Texture:**
```css
.textured-bg {
  background: var(--mv-background);
  position: relative;
}

.textured-bg::after {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,...");
  opacity: 0.03;
  pointer-events: none;
  mix-blend-mode: soft-light;
}
```

## Component Examples

### Glass Card
```tsx
<div className="relative bg-[#1c1f1d]/70 backdrop-blur-xl border border-white/[0.08] rounded-[20px] p-6 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
  {/* Highlight edge */}
  <div className="absolute inset-0 rounded-[20px] bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none" />
  
  <div className="relative">
    {/* Card content */}
  </div>
</div>
```

### Glowing Button
```tsx
<button className="bg-[#daa06d] hover:bg-[#e5b07d] text-[#151816] rounded-xl px-6 py-3 font-medium transition-all hover:shadow-[0_0_40px_rgba(218,160,109,0.25)]">
  Get started
</button>
```

## Visual Guidelines

- Use frosted glass for elevated surfaces
- Subtle grain texture on base background
- Warm amber glow effects on hover
- Green-black backgrounds create natural depth
- All corners soft (16-24px radius)
