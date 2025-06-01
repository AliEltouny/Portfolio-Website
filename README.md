# 3D Portfolio Website

A modern 3D portfolio website built with **React**, **Vite**, **Three.js**, **React Three Fiber**, **GSAP**, and **Tailwind CSS**. It showcases my skills, experience, projects, testimonials, and more in an interactive, animated experience.

## Features

* Responsive hero section with animated text and 3D model
* Interactive 3D scenes using Blender models and React Three Fiber
* Scroll-based animations using GSAP and ScrollTrigger
* Tech stack section with animated 3D cards
* Showcase of projects and work experience
* Testimonials from peers
* Contact form integrated with EmailJS
* Resume download link

---

## Project Setup

### 1. Create the React Project

```bash
npm create vite@latest
cd <project-name>
npm install
npm run dev
```

Edit `App.tsx` to include a custom header and basic structure.

### 2. Install Required Dependencies

```bash
npm install gsap @gsap/react three @react-three/fiber @react-three/drei @react-three/postprocessing
```

### 3. Tailwind CSS v4 Setup

```bash
npm install tailwindcss @tailwindcss/vite
```

* Configure the Vite plugin.
* Import Tailwind in your main CSS file.
* Test Tailwind by applying utility classes like `text-4xl` in your header.

---

## Development Breakdown

### 4. Hero Section

* Added animated hero text using keyframes for a vertical word slider.
* Connected UI strings like nav links, social icons, and tech stack to a central `constants/index.js`.
* Styled with Tailwind and GSAP transitions.

### 5. Hero 3D Model

* Added a 3D room model using `<Canvas />`, `<OrbitControls />`, and media queries for responsiveness.
* Optimized the `.glb` file with:

```bash
npx gltfjsx optimized-room.glb
```

* Added particles for visual polish.

### 6. Title Animation, Scroll, and Counter

* Used `react-countup` for animated counters.

```bash
npm install react-countup
```

* Implemented scroll navigation and section animations.

### 7. Showcase Section

* Project cards animate in with GSAP + ScrollTrigger.
* Images and descriptions fade and slide up on scroll.

### 8. Navbar, Logo Showcase & Feature Cards

* **Navbar**: Responsive with scroll detection and active link highlighting.
* **Logo Showcase**: Marquee-style scrolling of technology logos.
* **Feature Cards**: Grid layout using Tailwind, animated icons, and hover effects.

### 9. Experience Section

* Timeline built with `expCards`, animated with GSAP.
* Cards use an interactive `GlowCard` effect based on mouse movement.

### 10. Tech Stack

* Each skill is displayed with a 3D icon inside a `<Float />` wrapper.
* Uses `.glb` models from `techStackIcons`.
* GSAP triggers fade-in and upward motion on scroll.

### 11. Testimonials

* Testimonials mapped through a reusable `GlowCard` layout.
* Responsive design with peer feedback.

### 12. Contact Section

* Integrated with **EmailJS** for real-time message delivery and auto-reply.
* Includes a 3D model of a desk and interactive send button.

### 13. Resume Section

* Resume link included in the footer and navbar.
* Opens a PDF version of your CV.

---

## Resume

A link to my CV is provided in both the navigation bar and footer for mobile convenience. https://alieltouny.vercel.app

---

## Contact

Feel free to reach out using the contact form or via email—responses will be sent automatically through EmailJS. Eltounyali2006@gmail.com

---

## License

This project is for personal use and portfolio purposes.

---
