# Specification: Landing Page Performance Optimization

## 1. Overview
This track focuses on optimizing the existing "Protik" landing page to maximize load speed and runtime performance. The goal is to achieve a highly optimized website (targeting < 1.5s load times where possible) without altering the current design, visual aesthetics, or user experience.

## 2. Functional Requirements

### 2.1 Code Optimization
- **Code Splitting:** Implement lazy loading for heavy components (e.g., case study sections, modals) that are not immediately visible in the viewport.
- **Bundle Analysis:** Analyze and reduce the initial JavaScript bundle size.
- **Render Optimization:** Minimize unnecessary re-renders in React components, especially within the `HorizontalScrollContainer` and `Cursor` components.

### 2.2 Asset Optimization
- **Image/Video Loading:** Ensure all media assets (images, videos in `BackgroundVideo`, `HoverVideoCard`) are properly compressed and served in modern formats (WebP/AVIF).
- **Loading Strategy:** Implement efficient preloading for critical Hero assets and lazy loading for off-screen assets.

### 2.3 Animation Performance
- **Framer Motion:** Audit `Framer Motion` usage to ensure animations are hardware-accelerated (using `transform` and `opacity` only) and do not cause layout thrashing.
- **Scroll Performance:** Optimize the `HorizontalScrollContainer` to ensure a consistent 60fps frame rate during scroll interactions.

## 3. Non-Functional Requirements
- **Visual Integrity:** The design, layout, and animations must look exactly the same as the current implementation.
- **Metrics:** measurable improvement in Core Web Vitals (LCP, FID, CLS).

## 4. Acceptance Criteria
- [ ] Initial bundle size is reduced.
- [ ] Lighthouse Performance score is significantly improved.
- [ ] No visual regressions (the site looks and behaves identical to the previous version).
- [ ] Scrolling remains smooth (60fps) on reference desktop hardware.
- [ ] Heavy assets are loaded only when needed or effectively preloaded without blocking.

## 5. Out of Scope
- Redesigning any UI elements.
- Adding new features.
- Changing the "Desktop Experience Only" logic (unless it affects performance).
