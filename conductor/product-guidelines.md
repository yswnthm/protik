# Product Guidelines: Protik

## 1. Visual Identity
*   **Aesthetic Theme:** "Swiss Design meets Cyber-Industrial".
    *   **Keywords:** Precision, Scale, Raw, Kinetic, Atmospheric.
*   **Color Palette:**
    *   **Canvas:** `Zinc 100` (#F4F4F5) - A stark, bright laboratory feel.
    *   **Ink:** `Zinc 950` (#09090B) - Deep, almost-black for maximum contrast and readability.
    *   **Structure:** `Zinc 600` (#52525B) & `Zinc 200` (#E4E4E7) - For borders, dividers, and secondary information.
    *   **Pulse:** `Orange 600` (#EA580C) - Used surgically for interaction states (hover, focus, active cursors).
*   **Typography:**
    *   **Display:** `Space Grotesk` - Used for massive headers. Tight letter-spacing for impact.
    *   **Body:** `Inter` - Highly legible, neutral utility typeface.
    *   **Data:** `JetBrains Mono` - For code snippets, specs, and technical metadata.

## 2. Interaction Design (The "Feel")
*   **Physics:** Movements should feel weighted and deliberate, not floaty. Use spring physics for scroll inertia.
*   **Cursor:** The cursor is the user's avatar. It should react magnetically to interactive elements, expanding or changing state to indicate "clickability".
*   **Parallax:** Depth is key. Text and background elements should move at different speeds during the horizontal scroll to create a 2.5D effect.
*   **Micro-interactions:** Buttons shouldn't just change color; they should scale, shift, or reveal content.

## 3. Voice & Tone
*   **Confident Minimalism:** Speak clearly and with intent. Avoid fluff.
*   **Technical Authority:** When describing projects, focus on the *challenge* and the *solution*. Use precise terminology.
*   **Professional:** Friendly but reserved. The tone should inspire confidence in high-value stakeholders.

## 4. Accessibility & Responsiveness
*   **Desktop-First:** Acknowledge the constraint. The core experience is designed for a mouse/trackpad and wide screen.
*   **Graceful Degradation:** The "Mobile Warning" is a polite gatekeeper, but where possible, content should still be accessible via a simplified vertical layout or a clear message.
*   **Motion Sensitivity:** Ensure animations respect `prefers-reduced-motion` where critical (e.g., disabling large parallax shifts).
