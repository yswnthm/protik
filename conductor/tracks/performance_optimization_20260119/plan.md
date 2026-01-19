# Implementation Plan: Landing Page Performance Optimization

This plan focuses on auditing and optimizing the existing landing page to improve load times and runtime performance without changing the design.

## Phase 1: Audit & Baseline
- [ ] Task: Establish Performance Baseline
  - [ ] Write a performance test script (using Vitest or a simple Lighthouse CLI wrapper if available) to measure LCP and Bundle Size.
  - [ ] Record current bundle metrics and initial load performance.
- [ ] Task: Conductor - User Manual Verification 'Phase 1: Audit & Baseline' (Protocol in workflow.md)

## Phase 2: Code & Asset Optimization
- [ ] Task: Implement Component Lazy Loading
  - [ ] Write Tests: Ensure components still render correctly when scrolled into view.
  - [ ] Implement: Use `React.lazy` and `Suspense` for sections like `BoltSection`, `DukaanSection`, and `StackSection` within the horizontal scroll.
- [ ] Task: Optimize Asset Loading Strategy
  - [ ] Write Tests: Verify that off-screen videos/images don't load immediately.
  - [ ] Implement: Update `BackgroundVideo` and `HoverVideoCard` to use native lazy loading or intersection observers for video initialization.
- [ ] Task: Optimize Framer Motion & Render Cycles
  - [ ] Write Tests: Profile render counts for `Cursor` and `HorizontalScrollContainer`.
  - [ ] Implement: Use `useMemo`, `React.memo`, and `useTransform` efficiently to minimize React re-renders during high-frequency scroll events.
- [ ] Task: Conductor - User Manual Verification 'Phase 2: Code & Asset Optimization' (Protocol in workflow.md)

## Phase 3: Final Verification
- [ ] Task: Final Performance Audit
  - [ ] Run baseline tests again and compare results.
  - [ ] Verify 60fps performance on horizontal scroll.
- [ ] Task: Conductor - User Manual Verification 'Phase 3: Final Verification' (Protocol in workflow.md)
