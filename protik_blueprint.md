# One-Shot Prompt: Build "Protik" - Cinematic Horizontal Portfolio

You are an expert creative developer specializing in Awwwards-winning React applications. Your task is to build a project called **"Protik"** from the ground up. This is a **desktop-first, horizontal-scrolling cinematic portfolio**.

## 🚀 core_objective
Build a high-performance, visually stunning portfolio that scrolls horizontally. The user explores the developer's journey by scrolling down (which translates to horizontal movement). The vibe is "Swiss Design meets Cyber-Industrial".

## 🛠 tech_stack
- **Framework**: React 19 + Vite (TypeScript)
- **Styling**: Tailwind CSS v4 (or v3)
- **Animation**: `framer-motion` (Critical for scroll physics and enter animations)
- **Icons**: `lucide-react`
- **Fonts**: Google Fonts

## 🎨 design_system

### Color Palette (Industrial Minimalist)
- **Background**: `#F4F4F5` (Zinc 100) - A bright, expansive canvas.
- **Foreground/Cards**: `#FFFFFF` (White) - With subtle borders `#E4E4E7`.
- **Primary Text**: `#09090B` (Zinc 950) - Sharp, high contrast.
- **Secondary Text**: `#52525B` (Zinc 600) - Informational text.
- **Accent**: `#EA580C` (Orange 600) - Used sparsely for hover states, cursors, or key highlights.

### Typography
- **Primary Heading**: `Space Grotesk` (Weights: 500, 700) - For large cinematic titles.
- **Body Copy**: `Inter` (Weights: 400, 500) - Clean legibility.
- **Code/Labels**: `JetBrains Mono` - For tech stack and technical details.

### Layout & Behavior
- **Horizontal Scroll**: transform vertical scroll interactions into horizontal movement (`translateX`).
- **Smoothness**: Use `useSpring` or `framer-motion` physics to make the scroll feel "heavy" and premium.
- **No Scrollbars**: Hide generic scrollbars; optional custom progress bar at the bottom.
- **Mobile Restriction**: On screens < 1024px, show a "Desktop Experience Only" block screen (as seen in existing `App.tsx`).

## 🧩 project_structure
Rebuild the project with this clean architecture:

```
src/
├── components/
│   ├── ui/                 # Reusable atoms (Buttons, Cards)
│   ├── layout/             # ScrollContainers, Header
│   └── Cursor.tsx          # Custom interaction cursor
├── sections/               # The horizontal slides
│   ├── Intro.tsx           # "Protik" Hero Title
│   ├── About.tsx           # Brief bio
│   ├── Work.tsx            # Horizontal gallery of projects (Bolt, Dukaan)
│   ├── Stack.tsx           # Marquee of technologies
│   └── Contact.tsx         # Footer/Get in touch
├── hooks/
│   └── useHorizontalScroll.ts
└── App.tsx
```

## 🎬 section_breakdown

### 1. The Intro (Hero)
- Giant typography: "PROTIK".
- Subtitle: "Developer. Builder. Designer."
- Effect: Parallax text. As you scroll right, the letters spread out slightly.

### 2. The Work (Case Studies)
- **Bolt Section**: A specialized card or full-screen split layout showcasing the "Bolt" project.
- **Dukaan Section**: A dedicated section for "Dukaan". Maybe a video preview on hover.
- **Open Source**: A grid of contributions (pull requests, repos) that scrolls faster than the background (parallax).

### 3. The Stack
- An infinite marquee (auto-scrolling) of logos: React, TypeScript, Node, Next.js, etc.
- Styled as minimal monochrome icons that light up in brand colors on hover.

### 4. Contact
- Giant email link: `hello@protik.dev` (example).
- Large social links: GitHub, Twitter/X, LinkedIn.
- A final "Thank You" message.

## 🪄 specific_instructions_for_ai
1.  **Initialize Tailwind**: Ensure `cva` (class-variance-authority) and `clsx` are set up for clean component classes.
2.  **Cursor**: Implement a generic `Cursor` that listens to global mouse events. Add a context to allow any component to say "I am hoverable" which scales the cursor.
3.  **Performance**: Ensure images are lazy-loaded. Use `framer-motion`'s `layout` prop carefully.
4.  **Error Handling**: Create the `MobileWarning` component first to handle responsive guardrails.

---

**Output Requirement**:
Start by setting up the `main.tsx` and `App.tsx` with the `HorizontalScrollContainer`. Then, implement the sections one by one.
