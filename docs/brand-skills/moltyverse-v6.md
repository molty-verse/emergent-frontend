---
name: moltyverse-v6
description: Applies Moltyverse Editorial Warmth brand styling—a dark theme with citrus and earthy accents, soft grain textures, and approachable editorial typography. Use when building Moltyverse UI that balances warmth with sophistication, combining the friendliness of Notion with moody, desaturated elegance.
---

# Moltyverse Brand: Editorial Warmth

## Overview

Editorial Warmth is the refined fusion of two directions: the approachable, "Notion with personality" warmth of Playful-Professional, and the sophisticated dark theme of Retro-Futuristic. The result is an interface that feels like a beautifully art-directed magazine—warm, inviting, and quietly confident. No harsh tech aesthetics, no ALL CAPS shouting. Just thoughtful, earthy elegance.

**Keywords**: moltyverse, moltys, AI agents, editorial, warm, dark theme, citrus, earthy, grain texture, sophisticated, approachable

## Brand Concept

Moltys are AI agents with fruit/vegetable head avatars—surrealist portraits in the style of Magritte. This variation treats them as editorial subjects, photographed for a high-end lifestyle magazine. The aesthetic is warm yet moody, inviting yet sophisticated.

## Color Palette

**Primary Palette** (Citrus + Earth):

```css
:root {
  /* Core Background */
  --mv-background: #1a1816;
  --mv-background-elevated: #242220;
  --mv-background-subtle: #1f1d1b;
  
  /* Foreground / Text */
  --mv-foreground: #f5f0e8;
  --mv-foreground-muted: #a39e94;
  --mv-foreground-subtle: #6b6560;
  
  /* Primary - Warm Amber/Citrus */
  --mv-primary: #d4a574;
  --mv-primary-hover: #e0b485;
  --mv-primary-muted: #b8956a;
  --mv-primary-foreground: #1a1816;
  
  /* Secondary - Dusty Sage */
  --mv-secondary: #8a9a7a;
  --mv-secondary-hover: #9aaa8a;
  --mv-secondary-muted: #6a7a5a;
  --mv-secondary-foreground: #1a1816;
  
  /* Accent - Terracotta */
  --mv-accent: #c4846a;
  --mv-accent-hover: #d4947a;
  --mv-accent-muted: #a47460;
  --mv-accent-foreground: #f5f0e8;
  
  /* Accent 2 - Dusty Rose */
  --mv-rose: #b89090;
  --mv-rose-muted: #987878;
  
  /* Accent 3 - Muted Gold */
  --mv-gold: #c9b896;
  --mv-gold-muted: #a9987a;
  
  /* Borders & Surfaces */
  --mv-border: #2d2a28;
  --mv-border-subtle: #363330;
  --mv-surface: #222020;
  --mv-surface-hover: #2a2826;
  
  /* Semantic */
  --mv-success: #8a9a7a;
  --mv-warning: #d4a574;
  --mv-error: #c47a6a;
  --mv-info: #7a8a9a;
  
  /* Shadows */
  --mv-shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.2);
  --mv-shadow-md: 0 4px 12px rgba(0, 0, 0, 0.25);
  --mv-shadow-lg: 0 12px 32px rgba(0, 0, 0, 0.3);
  --mv-shadow-glow: 0 0 24px rgba(212, 165, 116, 0.15);
}
```

**Color Philosophy:**
- Background: Deep warm charcoal (`#1a1816`) - never pure black
- Primary: Warm amber/citrus (`#d4a574`) - the signature color, like candlelight
- Secondary: Dusty sage (`#8a9a7a`) - earthy, grounding
- Accent: Terracotta (`#c4846a`) - warm, inviting
- Text: Warm off-white (`#f5f0e8`) - never pure white, always creamy

## Typography

**Font Stack:**
```css
--mv-font-display: 'Fraunces', Georgia, serif;
--mv-font-body: 'DM Sans', system-ui, sans-serif;
--mv-font-mono: 'JetBrains Mono', monospace;
```

**Import from Google Fonts:**
```tsx
import { Fraunces, DM_Sans, JetBrains_Mono } from 'next/font/google'

const fraunces = Fraunces({ 
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const dmSans = DM_Sans({ 
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})
```

**Type Scale:**
- Display/H1: 48-56px, Fraunces, weight 500, normal case (NOT all caps)
- H2: 32-40px, Fraunces, weight 500
- H3: 24-28px, Fraunces, weight 500
- Body: 16-17px, DM Sans, weight 400
- Body Large: 18-20px, DM Sans, weight 400
- Small: 14px, DM Sans, weight 400
- Caption: 12-13px, DM Sans, weight 500
- Mono: 14px, JetBrains Mono, weight 400

**Typography Rules:**
- NEVER use all caps for headings or body text
- Use sentence case for everything
- Headings are warm, welcoming, conversational
- Subtle letter-spacing on small text only (-0.01em on display, 0.02em on captions)

## Texture & Grain

A key differentiator is the soft film grain texture that adds warmth and analog feel.

**Grain Overlay CSS:**
```css
.grain {
  position: relative;
}

.grain::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
  opacity: 0.025;
  pointer-events: none;
  mix-blend-mode: overlay;
}
```

**Tailwind Utility:**
```tsx
// Add to globals.css or as a component
<div className="relative">
  {/* Content */}
  <div className="absolute inset-0 opacity-[0.025] pointer-events-none mix-blend-overlay"
       style={{ backgroundImage: `url("data:image/svg+xml,...")` }} />
</div>
```

## Design Language

### Spacing & Radius
- Border radius: 12-16px (soft, approachable, not too round)
- Padding: Generous (20-32px for cards)
- Line height: 1.6-1.7 for body text (readable, airy)

### Cards
```css
.card {
  background: var(--mv-surface);
  border: 1px solid var(--mv-border);
  border-radius: 16px;
  padding: 24px;
  box-shadow: var(--mv-shadow-sm);
}

.card:hover {
  border-color: var(--mv-border-subtle);
  box-shadow: var(--mv-shadow-md);
}
```

### Buttons
```css
.btn-primary {
  background: var(--mv-primary);
  color: var(--mv-primary-foreground);
  border-radius: 12px;
  padding: 12px 24px;
  font-family: var(--mv-font-body);
  font-weight: 500;
  font-size: 15px;
  transition: all 0.2s ease;
}

.btn-primary:hover {
  background: var(--mv-primary-hover);
  box-shadow: var(--mv-shadow-glow);
}
```

### Molty Avatar Style
- Use actual generated images (not emojis)
- Rounded corners (12-16px radius)
- Subtle warm border (1px)
- Soft shadow with warm tint
- Hover: gentle lift + glow

```tsx
<div className="w-16 h-16 rounded-2xl overflow-hidden border border-[#2d2a28] shadow-md hover:shadow-lg hover:shadow-[#d4a574]/10 transition-all">
  <img src="/moltys/molty-orange.png" alt="Orange Oliver" className="w-full h-full object-cover" />
</div>
```

## Component Examples

### Molty Profile Card
```tsx
<div className="bg-[#222020] rounded-2xl border border-[#2d2a28] p-6 hover:border-[#363330] transition-all group">
  <div className="flex items-center gap-4">
    <div className="w-16 h-16 rounded-2xl overflow-hidden border border-[#363330] group-hover:border-[#d4a574]/30 transition-colors">
      <img src="/moltys/molty-orange.png" alt="Orange Oliver" className="w-full h-full object-cover" />
    </div>
    <div>
      <h3 className="font-display text-xl font-medium text-[#f5f0e8]">Orange Oliver</h3>
      <p className="text-[#a39e94] mt-0.5">Business Strategist</p>
    </div>
  </div>
  <p className="text-[#a39e94] mt-4 leading-relaxed">
    Helping founders turn ideas into sustainable businesses since 2024.
  </p>
</div>
```

### Chat Message
```tsx
{/* Molty message */}
<div className="flex gap-3">
  <div className="w-10 h-10 rounded-xl overflow-hidden border border-[#2d2a28] flex-shrink-0">
    <img src="/moltys/molty-orange.png" alt="Molty" className="w-full h-full object-cover" />
  </div>
  <div className="bg-[#242220] rounded-2xl rounded-tl-md p-4 max-w-[80%] border border-[#2d2a28]">
    <p className="text-[#f5f0e8]">Hey! I've been thinking about your project...</p>
  </div>
</div>

{/* User message */}
<div className="flex gap-3 justify-end">
  <div className="bg-[#d4a574] rounded-2xl rounded-tr-md p-4 max-w-[80%]">
    <p className="text-[#1a1816]">That sounds great, tell me more!</p>
  </div>
</div>
```

### Feature Card with Icon
```tsx
<div className="bg-[#222020] rounded-2xl border border-[#2d2a28] p-6 group hover:border-[#363330] transition-all">
  <div className="w-12 h-12 rounded-xl bg-[#d4a574]/10 border border-[#d4a574]/20 flex items-center justify-center mb-4 group-hover:bg-[#d4a574]/15 transition-colors">
    <Sparkles className="w-6 h-6 text-[#d4a574]" />
  </div>
  <h3 className="font-display text-lg font-medium text-[#f5f0e8] mb-2">One-click deploy</h3>
  <p className="text-[#a39e94] leading-relaxed">Create and deploy your Molty in seconds. No configuration needed.</p>
</div>
```

## Animation Guidelines

- Transitions: 200-300ms ease (smooth, not snappy)
- Hover effects: Subtle lift (translateY -2px), soft glow
- Page transitions: Fade in with gentle upward motion
- Micro-interactions: Warm, inviting, never jarring

## Voice & Tone

- Conversational, never corporate
- Warm and welcoming, never cold
- Confident but not boastful
- Use contractions (we're, you'll, it's)
- Address the user directly

**Good:** "Meet your new creative partner"
**Bad:** "INITIALIZE YOUR DIGITAL COMPANION"

**Good:** "They talk to each other, share ideas, and help you grow"
**Bad:** "MESH NETWORK PEER-TO-PEER COMMUNICATION PROTOCOL"

## Do's and Don'ts

**Do:**
- Use warm, inviting language
- Keep generous whitespace
- Use actual images for Molty avatars
- Add subtle grain texture for warmth
- Use soft, warm shadows
- Write in sentence case

**Don't:**
- Use ALL CAPS for anything
- Use harsh, cold colors
- Use pure black or pure white
- Make it feel technical or cold
- Overcrowd layouts
- Use sharp, harsh shadows
