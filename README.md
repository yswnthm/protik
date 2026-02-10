# Protik — Cinematic Horizontal Portfolio Case Study

> **Note:** This project is a case study by [Solicate](https://solicate.in). It demonstrates high-end frontend development techniques, including horizontal scrolling, complex animations, and a distinct "Cyber-Industrial" aesthetic.

## 🎯 Overview

**Protik** was designed as a premium portfolio for a creative developer. The goal was to break away from traditional vertical scrolling websites and offer a cinematic, gallery-like experience that feels more like an interactive film than a resume.

The project features a **horizontal scrolling system** where vertical scroll interactions are translated into horizontal movement, creating a seamless and immersive journey.

## ✨ Key Features

- **Horizontal Scroll System:** Custom implementation using `framer-motion` to map vertical scroll to horizontal translation.
- **Cinematic Typography:** focused on large-scale `Anton` and `Oswald` headers for visual impact.
- **Micro-Interactions:** Custom cursor system that reacts to hoverable elements (`components/Cursor.tsx`).
- **Video Integration:** High-quality video backgrounds (Mux integration) to showcase video editing work.
- **Responsive Guardrails:** A "Desktop Experience Only" approach to ensure the artistic vision is preserved, with mobile fallbacks.
- **Cyber-Industrial Aesthetic:** A stark palette of Zinc, White, and Orange accents.

## 🛠 Tech Stack

- **Framework:** React 19 + Vite
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animation:** `framer-motion` (Scroll physics, entrance animations)
- **Icons:** `lucide-react`
- **Video:** `@mux/mux-player-react`

## 📂 Project Structure

```
src/
├── components/         # Reusable UI (Cursor, ScrollContainer, Video)
├── sections/           # Horizontal slides (Intro, Work, Stack, Contact)
├── conductor/          # Project documentation & design system
└── context/            # Global state (CursorContext)
```

## 🚀 Running Locally

This case study is a static React application.

1. **Install dependencies:**

    ```bash
    npm install
    ```

2. **Run the development server:**

    ```bash
    npm run dev
    ```

## 🎨 Design System

The design system is documented in `conductor/product-guidelines.md`. It follows a strict "Industrial Minimalist" theme:

- **Background:** Zinc 100 (#F4F4F5)
- **Accents:** Orange 600 (#EA580C)
- **Typography:** Space Grotesk / Inter / JetBrains Mono

---
*Created by [Solicate](https://solicate.in) — Elevating Digital Experiences.*
