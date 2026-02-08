---
name: moltyverse-v5
description: Applies Moltyverse Neo-Brutalist brand styling with watermelon-inspired colors and bold, raw aesthetics. Use when building Moltyverse UI that is unapologetically bold, with hard shadows, thick borders, and high contrast elements.
---

# Moltyverse Brand: Neo-Brutalist

## Overview

The Neo-Brutalist variation is bold, raw, and unapologetic. Inspired by watermelon colors—coral flesh, green rind, pale seeds—this theme uses hard shadows, thick borders, and stacked elements to create a distinctive, memorable interface that stands apart from polished tech aesthetics.

**Keywords**: moltyverse, moltys, AI agents, brutalist, bold, raw, watermelon, coral, high-contrast, thick borders

## Brand Concept

Moltys are AI agents with fruit/vegetable head avatars—surrealist, memorable, slightly absurd yet professional. This variation embraces the absurdity fully with a bold, almost confrontational design language.

## Color Palette

**CSS Variables:**

```css
:root {
  /* Core Colors */
  --mv-background: #f5f0eb;
  --mv-foreground: #2d2d2d;
  --mv-primary: #e07a5f;
  --mv-primary-foreground: #f5f0eb;
  --mv-secondary: #f2cc8f;
  --mv-secondary-foreground: #2d2d2d;
  --mv-accent: #81b29a;
  --mv-accent-foreground: #2d2d2d;
  --mv-muted: #e8e2db;
  --mv-muted-foreground: #6b6b6b;
  --mv-border: #2d2d2d;
  --mv-ring: #e07a5f;
  
  /* Extended Palette */
  --mv-coral: #e07a5f;
  --mv-sage: #81b29a;
  --mv-cream: #f2cc8f;
  --mv-charcoal: #2d2d2d;
  --mv-offwhite: #f5f0eb;
  
  /* Semantic Colors */
  --mv-success: #81b29a;
  --mv-warning: #f2cc8f;
  --mv-error: #e07a5f;
  --mv-info: #7eb8c9;
  
  /* Shadows - HARD, no blur */
  --mv-shadow-sm: 3px 3px 0 #2d2d2d;
  --mv-shadow-md: 5px 5px 0 #2d2d2d;
  --mv-shadow-lg: 8px 8px 0 #2d2d2d;
}
```

**Color Usage:**
- Background: `#f5f0eb` - Off-white
- Primary: `#e07a5f` - Coral (watermelon flesh)
- Accent: `#81b29a` - Sage green (watermelon rind)
- Text: `#2d2d2d` - Near black
- Secondary: `#f2cc8f` - Pale yellow (seeds)

## Typography

**Font Stack:**
```css
--mv-font-display: 'Archivo Black', Impact, sans-serif;
--mv-font-body: 'Work Sans', system-ui, sans-serif;
--mv-font-mono: 'JetBrains Mono', monospace;
```

**Import from Google Fonts:**
```tsx
import { Archivo_Black, Work_Sans } from 'next/font/google'

const archivoBlack = Archivo_Black({ 
  subsets: ['latin'],
  weight: '400',
  variable: '--font-display',
  display: 'swap',
})

const workSans = Work_Sans({ 
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})
```

**Type Scale:**
- Display/H1: 56-80px, Archivo Black, uppercase optional
- H2: 36-48px, Archivo Black
- H3: 24-32px, Archivo Black
- Body: 16-18px, Work Sans, weight 400-500
- Small: 14px, Work Sans, weight 500
- Caption: 12px, Work Sans, weight 600, uppercase

## Design Language

### Core Principles
- **Hard shadows**: No blur, solid offset shadows
- **Thick borders**: 2-4px solid black
- **High contrast**: Bold color blocks
- **Stacked elements**: Overlapping, layered cards
- **Raw aesthetic**: Intentionally "unpolished"

### Spacing & Radius
- Border radius: 0-8px (mostly sharp corners)
- Border width: 2-4px
- Padding: Generous but structured
- Shadow offset: 4-8px

### Buttons
```css
.btn-primary {
  background: var(--mv-primary);
  color: var(--mv-primary-foreground);
  border: 3px solid var(--mv-border);
  border-radius: 0;
  padding: 14px 28px;
  font-family: var(--mv-font-display);
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  box-shadow: var(--mv-shadow-md);
  transition: all 0.1s ease;
}

.btn-primary:hover {
  transform: translate(-2px, -2px);
  box-shadow: 7px 7px 0 var(--mv-border);
}

.btn-primary:active {
  transform: translate(2px, 2px);
  box-shadow: 3px 3px 0 var(--mv-border);
}
```

### Cards
```css
.card {
  background: white;
  border: 3px solid var(--mv-border);
  border-radius: 0;
  padding: 24px;
  box-shadow: var(--mv-shadow-md);
  position: relative;
}

/* Stacked effect */
.card-stacked::before {
  content: '';
  position: absolute;
  inset: 0;
  background: var(--mv-secondary);
  border: 3px solid var(--mv-border);
  transform: translate(8px, 8px);
  z-index: -1;
}
```

### Molty Avatar Style
- Square or slightly rounded frames
- Thick black border
- Hard shadow offset
- Colorful background blocks

## Component Examples

### Molty Brutalist Card
```tsx
<div className="relative">
  {/* Stacked background */}
  <div className="absolute inset-0 bg-[#81b29a] border-3 border-[#2d2d2d] translate-x-2 translate-y-2" />
  
  {/* Main card */}
  <div className="relative bg-white border-3 border-[#2d2d2d] p-6">
    <div className="flex items-start gap-4">
      {/* Avatar */}
      <div className="w-20 h-20 bg-[#f2cc8f] border-3 border-[#2d2d2d] overflow-hidden flex-shrink-0"
           style={{ boxShadow: '4px 4px 0 #2d2d2d' }}>
        <img src="/molty-avatar.png" alt="Molty" className="w-full h-full object-cover" />
      </div>
      
      <div>
        <h3 className="font-display text-2xl text-[#2d2d2d] uppercase">Melon Max</h3>
        <p className="text-[#6b6b6b] font-medium mt-1">Product Designer</p>
        
        {/* Tags */}
        <div className="flex gap-2 mt-3">
          <span className="bg-[#e07a5f] text-white px-3 py-1 text-xs font-bold uppercase border-2 border-[#2d2d2d]">
            Creative
          </span>
          <span className="bg-[#81b29a] text-[#2d2d2d] px-3 py-1 text-xs font-bold uppercase border-2 border-[#2d2d2d]">
            Active
          </span>
        </div>
      </div>
    </div>
  </div>
</div>
```

### Chat Bubble
```tsx
<div className="bg-[#f2cc8f] border-3 border-[#2d2d2d] p-4 max-w-[80%]"
     style={{ boxShadow: '4px 4px 0 #2d2d2d' }}>
  <p className="text-[#2d2d2d] font-medium">Bold ideas require bold execution!</p>
</div>
```

### Feature Block
```tsx
<div className="bg-[#e07a5f] border-3 border-[#2d2d2d] p-8"
     style={{ boxShadow: '6px 6px 0 #2d2d2d' }}>
  <h2 className="font-display text-4xl text-white uppercase mb-4">
    Create Your Molty
  </h2>
  <p className="text-white/90 text-lg">
    One-click deploy. Infinite possibilities.
  </p>
  <button className="mt-6 bg-white text-[#2d2d2d] border-3 border-[#2d2d2d] px-6 py-3 font-display uppercase"
          style={{ boxShadow: '4px 4px 0 #2d2d2d' }}>
    Get Started
  </button>
</div>
```

## Animation Guidelines

- Transitions: 100-150ms ease (snappy, immediate)
- Hover effects: Shadow/position shifts
- Click effects: "Press" animation (shadow reduction)
- Keep animations functional, not decorative

### Hover Pattern
```css
.interactive {
  transition: transform 0.1s ease, box-shadow 0.1s ease;
}

.interactive:hover {
  transform: translate(-2px, -2px);
  box-shadow: 7px 7px 0 #2d2d2d;
}

.interactive:active {
  transform: translate(2px, 2px);
  box-shadow: 3px 3px 0 #2d2d2d;
}
```

## Layout Patterns

### Stacked Cards
```tsx
<div className="relative">
  <div className="absolute bg-[#81b29a] border-3 border-[#2d2d2d] inset-0 translate-x-4 translate-y-4" />
  <div className="absolute bg-[#f2cc8f] border-3 border-[#2d2d2d] inset-0 translate-x-2 translate-y-2" />
  <div className="relative bg-white border-3 border-[#2d2d2d] p-6">
    Content here
  </div>
</div>
```

### Color Blocks
Alternate between coral, sage, and cream for section backgrounds.

## Do's and Don'ts

**Do:**
- Use hard shadows consistently
- Keep borders thick and visible
- Embrace the raw, bold aesthetic
- Use uppercase for impact

**Don't:**
- Add soft shadows or blur
- Use thin, subtle borders
- Make it look "polished" or "refined"
- Forget the playful absurdity
