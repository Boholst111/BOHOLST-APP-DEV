# Developer Portfolio Website

A modern, high-performance personal portfolio website built with **Next.js 14+**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## ✨ Features

- **Modern Design**: Clean, minimalist interface with glassmorphism accents
- **Premium Animations**: Smooth transitions and entrance animations using Framer Motion
- **Responsive**: Mobile-first approach ensuring perfect display on all devices
- **Performance Optimized**: Built with Next.js 14 for exceptional performance
- **Accessibility**: Semantic HTML5 with proper ARIA labels
- **SEO Friendly**: Meta tags, Open Graph support, and semantic markup
- **Dark Theme**: Slate/Zinc dark palette with orange accents

## 🚀 Tech Stack

- **Framework**: [Next.js 14+](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Font**: [Poppins](https://fonts.google.com/specimen/Poppins) from Google Fonts

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── components/
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx          # Hero with floating elements
│   │   │   ├── ProjectsSection.tsx      # Projects grid
│   │   │   ├── ExperienceSection.tsx    # Timeline experience
│   │   │   ├── SkillsSection.tsx        # Skills grid + stats
│   │   │   ├── ContactSection.tsx       # Contact info + form
│   │   │   └── Footer.tsx               # Footer with social links
│   │   ├── Navigation.tsx               # Sticky nav with mobile menu
│   │   ├── ProjectCard.tsx              # Reusable project card
│   │   ├── ExperienceItem.tsx           # Timeline item component
│   │   ├── SkillBadge.tsx               # Skill badge component
│   │   ├── SectionHeading.tsx           # Section title component
│   │   └── ContactForm.tsx              # Contact form with validation
│   ├── lib/
│   │   ├── animations.ts                # Framer Motion variants
│   │   └── data.ts                      # Sample data (projects, experience, skills)
│   ├── globals.css                      # Global styles & Tailwind directives
│   ├── layout.tsx                       # Root layout
│   └── page.tsx                         # Home page
├── public/                              # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.mjs
├── next.config.js
├── .eslintrc.json
└── .gitignore
```

## 🎯 Page Sections

### Hero Section
- Large typography with gradient text
- Fade-in-up entrance animation
- Floating background elements
- CTA buttons for quick navigation
- Animated scroll indicator

### Projects Section
- Responsive grid layout (1-3 columns)
- Hover scale animations on cards
- Tech stack tags
- Demo and GitHub links
- Staggered entrance animations

### Experience Section
- Vertical timeline layout
- Desktop side-by-side alternating design
- Achievements list
- Slide-in animations on scroll
- Company, position, and duration display

### Skills Section
- Responsive grid of skill badges
- Hover glow effects
- Stats cards (Projects, Experience, etc.)
- Grid layout (2-4 columns)

### Contact Section
- Clean contact form with validation
- Success/error states
- Contact info cards
- Social links with hover effects
- Glassmorphism design

## 🔧 Getting Started

### Prerequisites
- Node.js 18.0 or higher
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourname/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Create environment variables** (optional)
   ```bash
   cp .env.example .env.local
   ```

4. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open in browser**
   Navigate to `http://localhost:3000`

## 📝 Customization

### Update Personal Information

Edit `app/lib/data.ts` to update:
- Projects data
- Experience entries
- Skills list
- Social links

Example:
```typescript
export const projectsData = [
  {
    id: 1,
    title: 'Your Project',
    description: 'Project description',
    tags: ['React', 'Node.js'],
    demoUrl: 'https://...',
    githubUrl: 'https://...',
  },
  // Add more projects...
];
```

### Customize Colors

Edit `tailwind.config.ts` to modify:
- Primary color (currently orange-500)
- Dark theme palette (slate colors)
- Animation speeds and keyframes

### Update Navigation Links

Edit `app/components/Navigation.tsx` to add/modify navigation items:
```typescript
const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Projects', href: '#projects' },
  // Add more links...
];
```

### Modify Animation Behavior

Edit `app/lib/animations.ts` to customize:
- Animation variants
- Timing and delays
- Stagger effects
- Hover interactions

## 🎨 Design System

### Color Palette
- **Primary**: Orange (`#fb923c`, `#f97316`)
- **Background**: Slate 950 (`#0f172a`)
- **Text**: Slate 100 (`#f1f5f9`)
- **Accents**: Slate 700-800

### Animation Principles
- Fade-in-up on initial load
- Slide-in on scroll visibility
- Scale on hover
- Stagger for multiple elements
- Smooth transitions (0.3-0.8s)

### Typography
- **Font**: Poppins (300-900 weights)
- **Headings**: 4xl-7xl with gradient text
- **Body**: lg-xl for readability
- **Semantic**: h1, h2, h3 hierarchy

## 🚀 Build & Deploy

### Build for Production
```bash
npm run build
npm start
```

### Deploy on Vercel (Recommended)
1. Push your repository to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your project
4. Click Deploy

### Other Deployment Options
- **Netlify**: `npm run build` → Deploy `out/` folder
- **GitHub Pages**: Configure next.config.js for static export
- **Docker**: Create Dockerfile for containerization

## 📊 Performance Optimization

- **Image Optimization**: Next.js Image component (when adding images)
- **Code Splitting**: Automatic route-based splitting
- **CSS Optimization**: Tailwind purging unused styles
- **Font Optimization**: Google Fonts with `next/font`
- **Minification**: Production build optimization

## ♿ Accessibility

- Semantic HTML5 structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Color contrast compliance
- Focus indicators on buttons
- Form labels properly associated

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

All components are optimized for mobile-first responsive design.

## 🔐 Best Practices

- ✅ TypeScript for type safety
- ✅ Component modularization
- ✅ CSS-in-JS with Tailwind
- ✅ Performance monitoring
- ✅ SEO optimization
- ✅ Clean code standards
- ✅ Error handling
- ✅ Loading states

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Lucide Icons](https://lucide.dev/)

## 🤝 Contributing

Feel free to fork this project and customize it for your portfolio. This is meant to be a starting template!

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Your Name**
- Website: [yourportfolio.com](https://yourportfolio.com)
- GitHub: [@yourname](https://github.com/yourname)
- LinkedIn: [Your Name](https://linkedin.com/in/yourname)

---

**Made with ❤️ using Next.js, TypeScript, Tailwind CSS, and Framer Motion**
