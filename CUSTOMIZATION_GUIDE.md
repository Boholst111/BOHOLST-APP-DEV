# Portfolio Customization Guide

## Quick Edit Guide

All portfolio content is centralized in **`app/lib/data.ts`**. Here's how to customize each section:

---

## 1. Personal Information

**File**: `app/lib/data.ts`

```typescript
export const personalInfo = {
  name: 'John Paul Boholst',        // Your name
  role: 'Full-Stack Developer',     // Your professional role
  shortBio: 'Building high-performance web applications with clean, scalable code',
  longAbout: 'I\'m a passionate Full-Stack Developer...',  // Your about section
  email: 'john@example.com',        // Your email
  phone: '+1 (555) 123-4567',       // Your phone (optional)
  location: 'San Francisco, CA',    // Your location
  availability: 'Available for new opportunities',  // Your availability status
};
```

**Where it appears**: Hero section, Contact section, Footer

---

## 2. Projects

**File**: `app/lib/data.ts`

```typescript
export const projectsData = [
  {
    id: 1,
    title: 'Your Project Name',
    description: 'Brief one-liner description',
    longDescription: 'Detailed project description (shown on hover)',
    tags: ['Tech1', 'Tech2', 'Tech3'],  // Technology stack
    demoUrl: 'https://your-demo-url.com',
    githubUrl: 'https://github.com/yourname/project',
    featured: true,  // Set to true to highlight project
  },
  // Add more projects...
];
```

**Where it appears**: Projects section (grid layout)

**To add a new project**:
1. Add a new object to the `projectsData` array
2. Increment the `id` field
3. Fill in all required fields
4. Set `featured: true` for special projects

---

## 3. Experience / Career History

**File**: `app/lib/data.ts`

```typescript
export const experienceData = [
  {
    id: 1,
    company: 'Company Name',
    position: 'Your Job Title',
    duration: '2022 - Present',
    description: 'Brief description of your role and responsibilities',
    achievements: [
      'Achievement 1',
      'Achievement 2',
      'Achievement 3',
      'Achievement 4',
    ],
  },
  // Add more positions...
];
```

**Where it appears**: Experience section (timeline layout)

---

## 4. Certifications & Achievements

**File**: `app/lib/data.ts`

```typescript
export const certificationsData = [
  {
    id: 1,
    title: 'AWS Certified Developer Associate',
    issuer: 'Amazon Web Services',
    date: '2023',
    credentialUrl: 'https://aws.amazon.com/certification',
    icon: '☁️',  // Emoji icon
  },
  // Add more certifications...
];
```

**Where it appears**: Certifications section (4-column grid)

**Emoji icons you can use**:
- ☁️ Cloud
- 💻 Computer
- 🔵 Google/Blue
- 📘 Documentation
- 🏆 Trophy
- ✅ Check
- 🚀 Rocket

---

## 5. Testimonials

**File**: `app/lib/data.ts`

```typescript
export const testimonialsData = [
  {
    id: 1,
    name: 'Person Name',
    role: 'Their Job Title',
    company: 'Their Company',
    quote: 'Their testimonial/quote about you',
    avatar: '👨‍💼',  // Emoji avatar
  },
  // Add more testimonials...
];
```

**Where it appears**: Testimonials section (carousel with navigation)

**Emoji avatars you can use**:
- 👨‍💼 Male professional
- 👩‍💼 Female professional
- 👨‍💻 Male developer
- 👩‍💻 Female developer
- 👨‍🔬 Male scientist
- 👩‍🎨 Female artist
- 👨‍🏫 Male teacher
- 👩‍💰 Female finance person

---

## 6. Skills by Category

**File**: `app/lib/data.ts`

```typescript
export const skillsCategories = [
  {
    category: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', ...],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express.js', 'PostgreSQL', ...],
  },
  {
    category: 'Tools & DevOps',
    skills: ['Git', 'Docker', 'AWS', ...],
  },
  {
    category: 'Testing & Quality',
    skills: ['Jest', 'Cypress', ...],
  },
];
```

**Where it appears**: Skills section (4-column category cards + full skills grid)

---

## 7. Social Links

**File**: `app/lib/data.ts`

```typescript
export const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/yourname',
    icon: 'Github',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/yourname',
    icon: 'Linkedin',
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/yourname',
    icon: 'Twitter',
  },
  {
    name: 'Email',
    url: 'mailto:your.email@example.com',
    icon: 'Mail',
  },
];
```

**Where it appears**: Navigation (logo), Footer

**Available icons** (from Lucide React):
- `Github`
- `Linkedin`
- `Twitter`
- `Mail`
- `ExternalLink`
- `ChevronLeft` / `ChevronRight`

---

## 8. Colors & Theme

**File**: `tailwind.config.ts`

### Primary Colors
- **Orange** (main accent): `#fb923c`, `#f97316`
- **Background**: `#0f172a` (Slate 950)
- **Text**: `#f1f5f9` (Slate 100)

### To change colors:
1. Open `tailwind.config.ts`
2. Modify the `colors` section:

```typescript
colors: {
  orange: {
    400: '#your-color-1',
    500: '#your-color-2',
    600: '#your-color-3',
  }
}
```

3. Update references in CSS files if needed

---

## 9. Navigation Links

**File**: `app/components/Navigation.tsx`

```typescript
const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];
```

**To add a new nav link**:
1. Add a new object with `name` and `href` (section ID)
2. Ensure the section exists on the page (ID match)

---

## 10. Page Metadata (SEO)

**File**: `app/layout.tsx`

```typescript
export const metadata: Metadata = {
  title: 'Your Name - Your Title',
  description: 'Your description for search engines',
  keywords: ['keyword1', 'keyword2', ...],
  authors: [{ name: 'Your Name' }],
  openGraph: {
    title: 'Title for social sharing',
    description: 'Description for social sharing',
    url: 'https://your-domain.com',
  },
};
```

---

## 11. Contact Form

**File**: `app/components/ContactForm.tsx`

The contact form currently simulates submission. To integrate with a real backend:

```typescript
const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setStatus('loading');

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } else {
      setStatus('error');
    }
  } catch (error) {
    setStatus('error');
  }

  setTimeout(() => setStatus('idle'), 3000);
};
```

---

## 12. Animations

**File**: `app/lib/animations.ts`

All animations are defined here. To customize:

```typescript
export const animationVariants = {
  fadeInUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: 'easeOut' },  // Change duration here
  },
  // ...
};
```

Common timing values:
- Fast: `0.2s` - `0.4s`
- Normal: `0.5s` - `0.8s`
- Slow: `1s` - `2s`

---

## Common Tasks

### Update Hero Section Text
1. Edit `personalInfo` in `app/lib/data.ts`
2. Changes appear automatically in `HeroSection.tsx`

### Add a New Project
1. Add object to `projectsData` array in `app/lib/data.ts`
2. Increment `id` field
3. Save - changes render automatically

### Change Primary Color
1. Edit `tailwind.config.ts`
2. Find orange color values (currently `#fb923c`, `#f97316`)
3. Replace with your preferred color
4. Rebuild with `npm run build`

### Update Contact Email
1. Edit `personalInfo.email` in `app/lib/data.ts`
2. Also update in `socialLinks` for the email link
3. Changes appear in Contact section and Footer

### Customize Testimonials
1. Edit `testimonialsData` in `app/lib/data.ts`
2. Replace names, companies, quotes
3. Change emoji avatars as needed

---

## Deployment Checklist

Before deploying, ensure you've updated:

- [ ] `personalInfo` - All fields
- [ ] `projectsData` - At least 3-6 projects
- [ ] `experienceData` - Your career history
- [ ] `certificationsData` - Your credentials
- [ ] `testimonialsData` - Real testimonials or quotes
- [ ] `skillsCategories` - Your actual skills
- [ ] `socialLinks` - Your actual social profiles
- [ ] `metadata` in `layout.tsx` - SEO optimized
- [ ] Contact form - Connected to backend service
- [ ] Page title in Navigation - Shows your name

---

## File Structure Reference

```
app/
├── lib/
│   └── data.ts                    ← ALL CONTENT HERE
├── components/
│   ├── Navigation.tsx             ← Nav links
│   ├── ContactForm.tsx            ← Form logic
│   └── sections/
│       ├── HeroSection.tsx        ← Uses personalInfo
│       ├── ProjectsSection.tsx    ← Uses projectsData
│       ├── ExperienceSection.tsx  ← Uses experienceData
│       ├── CertificationsSection.tsx ← Uses certificationsData
│       ├── TestimonialsSection.tsx ← Uses testimonialsData
│       ├── SkillsSection.tsx      ← Uses skillsCategories
│       ├── ContactSection.tsx     ← Uses personalInfo
│       └── Footer.tsx             ← Uses personalInfo, socialLinks
├── layout.tsx                     ← SEO metadata
└── page.tsx                       ← Page layout
```

---

## Tips for Best Results

1. **Keep it concise**: Testimonials should be 1-2 sentences
2. **Use real data**: Replace placeholders with actual information
3. **Optimize images**: Add high-quality project screenshots
4. **Check mobile**: Test on phone before deploying
5. **SEO keywords**: Include relevant keywords in descriptions
6. **Social links**: Ensure all links are correct before deploying
7. **Email verification**: Test contact form thoroughly
8. **Performance**: Use `npm run build` to check bundle size

---

**Happy customizing! Your portfolio is ready to shine. 🌟**
