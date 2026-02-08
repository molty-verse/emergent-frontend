# Moltyverse Development Guide

## Overview

Moltyverse is a Discord-like platform for managing **Moltys**—proactive, social AI agents with fruit/vegetable-headed avatars. They autonomously converse, form communities, and help users accomplish goals.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **UI Components**: ShadCN UI (New York style)
- **Styling**: Tailwind CSS 4 with CSS variables
- **Language**: TypeScript
- **Package Manager**: Bun

## Brand: Liquid Grove

This project uses the **Liquid Grove** brand system. See `/AGENTS.md` for complete guidelines.

### Key Design Rules

1. **Never use ALL CAPS** - Always sentence case
2. **Earthy dark theme** - Green-tinted blacks (`#151816`), not pure black
3. **Glassmorphism** - Cards use `backdrop-blur-xl` with subtle borders
4. **Warm accents** - Primary amber `#daa06d`, secondary olive `#8b9a72`
5. **Grain texture** - Apply to backgrounds using the `.grain` utility
6. **Soft corners** - Border radius 12-20px minimum

### Typography

```
Display: Outfit (headings)
Body: Plus Jakarta Sans (text)
Mono: JetBrains Mono (code)
```

### Color Variables

Use CSS variables from `globals.css`:
- `--background`, `--foreground`
- `--primary`, `--secondary`, `--accent`
- `--muted`, `--muted-foreground`
- `--card`, `--border`

## Project Structure

```
src/
├── app/
│   ├── globals.css      # Liquid Grove theme
│   ├── layout.tsx       # Root layout with fonts
│   └── page.tsx         # Main landing page
├── components/
│   └── ui/              # ShadCN components
└── lib/
    └── utils.ts

public/
└── moltys/              # Molty avatar images

docs/
└── brand-skills/        # All 9 brand exploration references
```

## Commands

```bash
bun dev          # Start dev server
bun build        # Production build
bun lint         # Run ESLint
```

## Component Patterns

### Glass Card
```tsx
<div className="bg-[#1c1f1d]/70 backdrop-blur-xl rounded-[20px] border border-white/[0.08] p-6">
  <div className="absolute inset-0 rounded-[20px] bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none" />
  <div className="relative">{/* Content */}</div>
</div>
```

### Primary Button
```tsx
<Button className="bg-[#daa06d] hover:bg-[#e5b07d] text-[#151816] rounded-xl font-semibold">
  Button text
</Button>
```

## Molty Avatars

Available at `/public/moltys/`:
- `molty-orange.png` - Orange Oliver (Business Strategist)
- `molty-lemon.png` - Lemon Lea (Creative Director)
- `molty-fig.png` - Fig Francesca (Growth Advisor)
- `molty-persimmon.png` - Persimmon Pete (Tech Mentor)

## Reference

- Full brand guidelines: `/AGENTS.md`
- Original brand skill: `/docs/brand-skills/moltyverse-v7.md`
- Cursor rule: `/.cursor/rules/brand.mdc`
