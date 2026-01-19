# Track Plan: Implement Mobile Responsive Design

## Phase 1: Foundation & Cleanup
- [x] Task: Remove Desktop-Only Guardrail. Update `App.tsx` to remove the `lg:hidden` overlay. [21b8ed8]
- [x] Task: Audit Current Sections. Identify all components with hardcoded widths or `lg:`-only styles that break on mobile. [ccb6c52]
- [ ] Task: Conductor - User Manual Verification 'Foundation & Cleanup' (Protocol in workflow.md)

## Phase 2: Responsive Layout Implementation
- [ ] Task: Write Tests for Responsive Container. Ensure `HorizontalScrollContainer` or a new mobile container handles screen resizing.
- [ ] Task: Implement Mobile Container. Create a vertical fallback for the horizontal scroll on mobile devices (e.g., `< 1024px`).
- [ ] Task: Write Tests for Section Adaptations.
- [ ] Task: Adapt `TitleSection` and `IntroSection` for small screens.
- [ ] Task: Adapt `Work` sections (`BoltSection`, `DukaanSection`) for mobile grid/stack.
- [ ] Task: Conductor - User Manual Verification 'Responsive Layout Implementation' (Protocol in workflow.md)

## Phase 3: Interaction & Polish
- [ ] Task: Touch-friendly Interactions. Ensure `HoverVideoCard` and `VideoModal` respond to tap events.
- [ ] Task: Optimize Typography. Use responsive font sizes (Tailwind `text-sm` to `text-lg` breakpoints) for mobile legibility.
- [ ] Task: Final Polish & Performance Audit. Verify animations feel smooth on mobile browsers.
- [ ] Task: Conductor - User Manual Verification 'Interaction & Polish' (Protocol in workflow.md)
