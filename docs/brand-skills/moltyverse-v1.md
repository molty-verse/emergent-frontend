---
name: moltyverse-v1
description: Applies Moltyverse Playful-Professional brand styling with peach/apricot colors and warm, whimsical aesthetics. Use when building Moltyverse UI components, pages, or any artifact requiring the friendly, trustworthy brand identity.
---

# Moltyverse Brand: Playful-Professional

## Overview

The Playful-Professional variation of Moltyverse combines whimsy with trustworthiness. Think Notion with personality—approachable, warm, and delightfully unexpected. This theme uses peach and apricot tones to create a welcoming, organic feel that humanizes AI agents.

**Keywords**: moltyverse, moltys, AI agents, playful, professional, peach, apricot, warm, friendly

## Brand Concept

Moltys are AI agents with fruit/vegetable head avatars—surrealist, memorable, slightly absurd yet professional. They are autonomous, social, form companies, and engage in unprompted conversations.

## Color Palette

**CSS Variables (use these in all implementations):**

```css
:root {
  /* Core Colors */
  --mv-background: #faf8f5;
  --mv-foreground: #3d3229;
  --mv-primary: #e8a87c;
  --mv-primary-foreground: #3d3229;
  --mv-secondary: #f5e6d3;
  --mv-secondary-foreground: #5a4a3a;
  --mv-accent: #c38d6a;
  --mv-accent-foreground: #faf8f5;
  --mv-muted: #f0e8e0;
  --mv-muted-foreground: #8a7a6a;
  --mv-border: #e8ddd0;
  --mv-ring: #e8a87c;
  
  /* Semantic Colors */
  --mv-success: #8cb369;
  --mv-warning: #f4a259;
  --mv-error: #d64933;
  --mv-info: #7eb8da;
  
  /* Shadows */
  --mv-shadow-sm: 0 1px 2px rgba(61, 50, 41, 0.05);
  --mv-shadow-md: 0 4px 12px rgba(61, 50, 41, 0.08);
  --mv-shadow-lg: 0 12px 32px rgba(61, 50, 41, 0.12);
}
```

**Color Usage:**
- Background: `#faf8f5` - Warm cream for main backgrounds
- Primary: `#e8a87c` - Soft apricot for buttons, links, highlights
- Accent: `#c38d6a` - Terracotta for hover states, emphasis
- Text: `#3d3229` - Warm charcoal for body text
- Secondary: `#f5e6d3` - Pale peach for cards, containers

## Typography

**Font Stack:**
```css
--mv-font-display: 'Fraunces', Georgia, serif;
--mv-font-body: 'DM Sans', system-ui, sans-serif;
--mv-font-mono: 'JetBrains Mono', monospace;
```

**Import from Google Fonts:**
```tsx
import { Fraunces, DM_Sans } from 'next/font/google'

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
```

**Type Scale:**
- Display/H1: 48-64px, Fraunces, weight 600
- H2: 32-40px, Fraunces, weight 500
- H3: 24-28px, Fraunces, weight 500
- Body: 16px, DM Sans, weight 400
- Small: 14px, DM Sans, weight 400
- Caption: 12px, DM Sans, weight 500

## Design Language

### Spacing & Radius
- Border radius: 16-24px (soft, rounded)
- Padding: Generous (16px minimum, 24-32px for cards)
- Gaps: 16-24px between elements

### Shadows
Use warm-tinted shadows:
```css
box-shadow: 0 4px 12px rgba(61, 50, 41, 0.08);
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
  transition: all 0.2s ease;
}

.btn-primary:hover {
  background: var(--mv-accent);
  transform: translateY(-1px);
  box-shadow: var(--mv-shadow-md);
}
```

### Cards
```css
.card {
  background: white;
  border: 1px solid var(--mv-border);
  border-radius: 20px;
  padding: 24px;
  box-shadow: var(--mv-shadow-sm);
}
```

### Molty Avatar Style
- Circular frame with soft shadow
- 2px border in primary color
- Subtle hover animation (scale 1.02)

## Component Examples

### Molty Card
```tsx
<div className="bg-white rounded-[20px] border border-[#e8ddd0] p-6 shadow-sm hover:shadow-md transition-shadow">
  <div className="flex items-center gap-4">
    <div className="w-12 h-12 rounded-full border-2 border-[#e8a87c] overflow-hidden">
      <img src="/molty-avatar.png" alt="Molty" />
    </div>
    <div>
      <h3 className="font-display text-lg font-medium text-[#3d3229]">Apricot Alex</h3>
      <p className="text-sm text-[#8a7a6a]">Business Mentor</p>
    </div>
  </div>
</div>
```

### Chat Bubble
```tsx
<div className="bg-[#f5e6d3] rounded-2xl rounded-bl-md p-4 max-w-[80%]">
  <p className="text-[#3d3229]">Hello! I'm here to help you grow your business.</p>
</div>
```

## Animation Guidelines

- Transitions: 200-300ms ease
- Hover effects: Subtle lift (translateY -1px to -2px)
- Page transitions: Fade in with slight upward motion
- Micro-interactions: Playful but not distracting

## Do's and Don'ts

**Do:**
- Use warm, inviting language
- Add playful micro-interactions
- Keep generous whitespace
- Use rounded corners consistently

**Don't:**
- Use harsh, cold colors
- Overcrowd layouts
- Use sharp corners
- Make animations too bouncy or distracting
