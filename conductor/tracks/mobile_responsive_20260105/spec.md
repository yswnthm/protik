# Track Spec: Implement Mobile Responsive Design

## Overview
Adapt the existing desktop-first cinematic portfolio for mobile devices. This involves removing the "Desktop Experience Only" barrier and implementing a responsive layout that maintains the "Swiss Design meets Cyber-Industrial" aesthetic while being functional on smaller, touch-oriented screens.

## Goals
- Remove the `MobileWarning` overlay in `App.tsx`.
- Implement a responsive navigation/layout strategy.
- Ensure the horizontal scroll system either adapts to a vertical flow or provides an optimized horizontal experience for mobile.
- Optimize typography and spacing for small screens.
- Ensure all interactive elements (HoverVideoCard, VideoModal, etc.) are touch-friendly.

## Technical Constraints
- Must use existing tech stack: React 19, Tailwind CSS v4, Framer Motion.
- Maintain the color palette (Zinc 100/950, Orange 600).
- Performance must remain high (Lighthouse 90+).

## User Stories
- As a mobile user, I want to explore the portfolio without being blocked by a "Desktop Only" message.
- As a mobile user, I want to easily navigate between sections using standard touch gestures.
- As a mobile user, I want to see clear, readable project details and videos.
