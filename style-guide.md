### **Retrofit Brand & UI Style Guide (Summary)**

**Overall Style Direction:**

The design uses a **modern, bold, and colorful aesthetic** that blends minimalist layout principles with expressive brand colors and dynamic typography. The goal is to create a visually striking, easy-to-navigate interface that feels professional yet vibrant — consistent with Retrofit’s energy and personality.

---

### **Visual Language**

**1. Color Scheme:**

* Core background: **Black (custom Retrofit black)** — darker than standard black to give depth.
* Accent colors: **Bright purples, greens, and complementary tones** are used intentionally and frequently across sections (buttons, highlights, hover effects, etc.).
* The system embraces color repetition and contrast — every color serves a purpose in branding and visual rhythm.
* Developers can check the exact CSS variables in the codebase (**/styles/colors.css** or **theme.ts**) for reference.

**2. Typography:**

* **Primary font:** Manrope or a similar geometric sans-serif — clean, tech-forward, and highly legible.
* **Secondary font (optional):** Acme or any bold display font for headings, to create strong hierarchy.
* Font sizes are generous — titles are large and confident; body text remains minimal and light.

**3. Imagery & Backgrounds:**

* Background images or illustrations are applied contextually to bring personality to each section.
* Hero and footer sections may use subtle gradients or color overlays to integrate imagery smoothly.
* Images should align with the futuristic, brand-forward mood — not overly literal or generic.
* When sourcing images, use **keywords** related to technology, creativity, collaboration, or modern workspaces (e.g., “futuristic interface design,” “creative team in neon studio,” “modern digital dashboard”).

---

### **Component System & Reusability**

Many parts of the homepage are built with **reusable React (or HTML/CSS) components** to keep the system consistent and efficient. Future pages should **reuse and extend these** instead of starting from scratch.

Examples:

* **Header & Navigation:** Shared across all pages.
* **Footer:** Built in the SquadHub-inspired layout — structured divs for email, action button (now  *Contact us on WhatsApp* ), two link columns, office info, and bottom socials row.
* **Button components:** Use the same rounded, solid-color buttons across CTAs for uniformity.
* **Section Layouts:** Follow a predictable vertical rhythm — full-width sections with defined padding, color blocks, and visual balance.
* **Typography & Spacing:** Maintain consistent **line-height**, **margin**, and **padding** to preserve harmony.

Each section in the homepage introduces components that can easily be reused (e.g., feature grids, call-to-action blocks, info cards, testimonial layouts). Developers can simply **pass in different props or data** to reuse these in other pages.

---

### **Implementation Notes**

* Stick to **the existing style tokens (CSS variables / Tailwind classes)** — this ensures consistent look and feel across pages.
* When building new sections, **reuse color utility classes** and **font presets** from the homepage.
* For any animations, transitions, or hover effects, follow the same duration and easing as used in current components.
* Images should be compressed and web-optimized; background images should use CSS **background-size: cover;**.

### **For Developers Using AI Assistants**

If you’re using an AI coding tool (e.g., ChatGPT, Claude, or Copilot) to extend this project:

* You can **continue this same ChatGPT thread** — it maintains the full visual and code context of Retrofit’s style.
* Mention that your updates must **preserve the established design language** (color system, typography scale, spacing rhythm).
* You can request “component-style parity with homepage” and ChatGPT will automatically generate compatible code.
