---
name: moltyverse-v9
description: Applies Moltyverse Citrus Mist brand styling—a sophisticated dark theme with subtle aurora gradients, paper-like textures, and warm citrus accents. Features olive-tinted blacks with Urbanist typography for an organic yet polished editorial-tech aesthetic.
---

# Moltyverse Brand: Citrus Mist

## Overview

Citrus Mist combines paper-like textures with subtle aurora color washes. The background features a deep olive-black that complements warm citrus tones beautifully. Soft gradient mists add atmosphere without overwhelming. Typography uses Urbanist, a humanist sans-serif that feels both organic and refined.

**Keywords**: moltyverse, moltys, AI agents, aurora, gradient, paper texture, citrus, olive-black, mist, editorial

## Brand Concept

Moltys emerging from a soft morning mist—warm citrus light diffusing through atmospheric haze. The aesthetic is calm, sophisticated, and inviting, like a premium journal or thoughtful app.

## Color Palette

```css
:root {
  /* Olive-Tinted Black */
  --mv-background: #14171514;
  --mv-background-paper: #1b1e1c;
  --mv-background-mist: #1f2320;
  
  /* Foreground */
  --mv-foreground: #f2ece3;
  --mv-foreground-muted: #a09a90;
  --mv-foreground-subtle: #686460;
  
  /* Primary - Soft Apricot */
  --mv-primary: #e0a878;
  --mv-primary-hover: #eab888;
  --mv-primary-muted: #c89060;
  
  /* Secondary - Muted Sage */
  --mv-sage: #8a9878;
  --mv-sage-light: #a0ae90;
  
  /* Accent - Dusty Rose */
  --mv-rose: #c09088;
  
  /* Accent 2 - Soft Gold */
  --mv-gold: #c8b088;
  
  /* Aurora/Mist Gradients */
  --mv-mist-warm: rgba(224, 168, 120, 0.06);
  --mv-mist-sage: rgba(138, 152, 120, 0.05);
  --mv-mist-rose: rgba(192, 144, 136, 0.04);
  
  /* Borders */
  --mv-border: #2a2e2c;
  --mv-border-light: #363a38;
}
```

## Typography

**Font Stack:**
```css
--mv-font-display: 'Urbanist', system-ui, sans-serif;
--mv-font-body: 'Karla', system-ui, sans-serif;
--mv-font-mono: 'JetBrains Mono', monospace;
```

```tsx
import { Urbanist, Karla } from 'next/font/google'

const urbanist = Urbanist({ 
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const karla = Karla({ 
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})
```

## Texture & Atmosphere

**Paper Grain Texture:**
```css
.paper-texture::after {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='paper'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23paper)'/%3E%3C/svg%3E");
  opacity: 0.025;
  pointer-events: none;
  mix-blend-mode: overlay;
}
```

**Aurora Mist Gradient:**
```css
.aurora-mist {
  background: 
    radial-gradient(ellipse at 20% 20%, var(--mv-mist-warm) 0%, transparent 50%),
    radial-gradient(ellipse at 80% 60%, var(--mv-mist-sage) 0%, transparent 40%),
    radial-gradient(ellipse at 40% 80%, var(--mv-mist-rose) 0%, transparent 45%);
}
```

## Component Examples

### Misted Card
```tsx
<div className="relative bg-[#1b1e1c] border border-[#2a2e2c] rounded-2xl p-6 overflow-hidden">
  {/* Subtle mist gradient */}
  <div className="absolute inset-0 bg-gradient-to-br from-[#e0a878]/[0.04] via-transparent to-[#8a9878]/[0.03] pointer-events-none" />
  
  <div className="relative">
    <h3 className="font-display text-xl font-semibold text-[#f2ece3]">Card Title</h3>
    <p className="text-[#a09a90] mt-2 leading-relaxed">Description here.</p>
  </div>
</div>
```

### Soft Glow Button
```tsx
<button className="bg-[#e0a878] hover:bg-[#eab888] text-[#141715] rounded-xl px-6 py-3 font-semibold transition-all hover:shadow-[0_0_30px_rgba(224,168,120,0.2)]">
  Get started
</button>
```

## Visual Guidelines

- Use paper grain for tactile warmth
- Subtle aurora gradients add atmosphere
- Olive-black grounds the warm citrus
- Soft, diffused edges and shadows
- Rounded corners (16-20px radius)
- Keep the mist subtle—atmosphere not distraction
