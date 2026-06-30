# Spider-Man Launch Site 🕷️

A cinematic, scroll-choreographed landing experience for the Spider-Man franchise launch. Built with Next.js 14, Framer Motion, and Tailwind CSS.

## Features

- **Animated Hero** — Parallax scrolling, floating spider emblem, animated web lines
- **Stats Section** — Franchise milestones (8 films, $3.9B box office, Academy Award, 60+ years)
- **Character Cards** — 6 iconic characters with hover effects (Spider-Man, Green Goblin, MJ, Doc Ock, Venom, Aunt May)
- **Film Timeline** — All 8 live-action Spider-Man films (2002-2021) with animated scroll-driven timeline
- **CTA Section** — Notification sign-up with glow effects
- **Dark Theme** — Red accent color, gradient text, glow effects throughout
- **Responsive** — Fully responsive design across all screen sizes
- **Scroll-Driven** — Framer Motion `useScroll`/`useTransform` for parallax and reveal animations

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS with custom design system
- **Animations:** Framer Motion
- **Icons:** Lucide React

## Getting Started

```bash
# Clone the repo
git clone https://github.com/Goatkenziee/spiderman-launch-site.git

# Install dependencies
cd spiderman-launch-site
npm install

# Run the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── globals.css          # Design system (CSS variables, theme)
│   ├── layout.tsx           # Root layout with Inter font
│   └── page.tsx             # Main page composing all sections
├── components/
│   ├── sections/
│   │   ├── hero.tsx         # Hero with parallax, web lines, floating spider
│   │   ├── stats.tsx        # Franchise stats cards
│   │   ├── characters.tsx   # Character showcase cards
│   │   ├── timeline.tsx     # Film timeline with scroll animation
│   │   └── cta.tsx          # Call-to-action / notification sign-up
│   └── ui/
│       ├── button.tsx       # Styled button component
│       └── card.tsx         # Card component
├── lib/
│   └── utils.ts             # cn() utility
└── tailwind.config.ts       # Tailwind configuration
```

## License

Fan tribute project. Not affiliated with Marvel, Sony, or Disney.
