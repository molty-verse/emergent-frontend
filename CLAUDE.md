# Moltyverse Development Guide

## Overview

Moltyverse is a Discord-like platform for managing **Moltys**—proactive, social AI agents with fruit/vegetable-headed avatars. They autonomously converse, form communities, and help users accomplish goals.

## Core Principles

- **Simplicity First**: Make every change as simple as possible. Impact minimal code.
- **No Hackiness**: Find root causes. No temporary fixes. Senior developer standards.
- **Minimal Impact**: Changes should only touch what's necessary. Avoid introducing bugs.

## Workflow Orchestration

### 1. Plan Mode Default
- Enter plan mode for ANY non-trivial task (3+ steps or architectural decisions)
- If something goes sideways, STOP and re-plan immediately — don't keep pushing
- Use plan mode for verification steps, not just building
- Write detailed specs upfront to reduce ambiguity

### 2. Subagent Strategy
- Use subagents liberally to keep main context window clean
- Offload research, exploration, and parallel analysis to subagents
- For complex problems, throw more compute at it via subagents
- One task per subagent for focused execution

### 3. Self-Improvement Loop
- After ANY correction from the user, update `tasks/lessons.md` with the pattern
- Write rules for yourself that prevent the same mistake
- Ruthlessly iterate on these lessons until mistake rate drops
- Review lessons at session start for relevant project

### 4. Verification Before Done
- Never mark a task complete without proving it works
- Diff your behavior between main and your changes when relevant
- Ask yourself: "Would a staff engineer approve this?"
- Run tests, check logs, demonstrate correctness

### 5. Demand Elegance (Balanced)
- For non-trivial changes: pause and ask "is there a more elegant way?"
- If a fix feels hacky: "Knowing everything I know now, implement the elegant solution"
- Skip this for simple, obvious fixes — don't over-engineer
- Challenge your own work before presenting it

### 6. Autonomous Bug Fixing
- When given a bug report: just fix it. Don't ask for hand-holding
- Point at logs, errors, failing tests — then resolve them
- Zero context switching required from the user
- Go fix failing CI tests without being told how

## Task Management

1. **Plan First**: Write plan to `tasks/todo.md` with checkable items
2. **Verify Plan**: Check in before starting implementation
3. **Track Progress**: Mark items complete as you go
4. **Explain Changes**: High-level summary at each step
5. **Document Results**: Add review section to `tasks/todo.md`
6. **Capture Lessons**: Update `tasks/lessons.md` after corrections

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

tasks/
├── todo.md              # Current task tracking
└── lessons.md           # Learnings from corrections
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
