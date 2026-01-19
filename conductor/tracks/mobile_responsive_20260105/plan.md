# Track Plan: Implement Mobile Responsive Design

## Phase 1: Foundation & Cleanup [checkpoint: 5ab7e74]
- [x] Task: Remove Desktop-Only Guardrail. Update `App.tsx` to remove the `lg:hidden` overlay. [21b8ed8]
- [x] Task: Audit Current Sections. Identify all components with hardcoded widths or `lg:`-only styles that break on mobile. [ccb6c52]
- [x] Task: Conductor - User Manual Verification 'Foundation & Cleanup' (Protocol in workflow.md) [5ab7e74]

## Phase 2: Responsive Layout Implementation
- [x] Task: Write Tests for Responsive Container. Ensure `HorizontalScrollContainer` or a new mobile container handles screen resizing. [1eb622b]
- [x] Task: Implement Mobile Container. Create a vertical fallback for the horizontal scroll on mobile devices (e.g., `< 1024px`). [ee95b32]
- [x] Task: Write Tests for Section Adaptations. [701d5ca]
- [~] Task: Adapt `TitleSection` and `IntroSection` for small screens.
- [ ] Task: Adapt `Work` sections (`BoltSection`, `DukaanSection`) for mobile grid/stack.
- [ ] Task: Conductor - User Manual Verification 'Responsive Layout Implementation' (Protocol in workflow.md)

## Phase 3: Interaction & Polish
- [ ] Task: Touch-friendly Interactions. Ensure `HoverVideoCard` and `VideoModal` respond to tap events.
- [ ] Task: Optimize Typography. Use responsive font sizes (Tailwind `text-sm` to `text-lg` breakpoints) for mobile legibility.
- [ ] Task: Final Polish & Performance Audit. Verify animations feel smooth on mobile browsers.
- [ ] Task: Conductor - User Manual Verification 'Interaction & Polish' (Protocol in workflow.md)
