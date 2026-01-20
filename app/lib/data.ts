// Personal Information
export const personalInfo = {
  name: 'John Paul Boholst',
  role: 'Full-Stack Developer',
  shortBio: 'Building high-performance web applications with clean, scalable code',
  longAbout:
    'I\'m a passionate Full-Stack Developer with a deep commitment to crafting beautiful, performant web applications that solve real-world problems. With expertise in modern technologies like React, Next.js, and Node.js, I blend technical excellence with user-centered design to create digital experiences that matter. I thrive on complex challenges and believe clean code is not just a practice—it\'s a craft.',
  email: 'john@example.com',
  phone: '+1 (555) 123-4567',
  location: 'San Francisco, CA',
  availability: 'Available for new opportunities',
};

// Projects Data
export const projectsData = [
  {
    id: 1,
    title: 'FinanceFlow Dashboard',
    description: 'A sophisticated financial analytics platform with real-time data visualization, portfolio tracking, and AI-powered investment recommendations.',
    longDescription:
      'Built a comprehensive financial dashboard enabling users to track investments, analyze market trends, and receive personalized recommendations. Features include real-time data updates, interactive charts, and secure payment integration.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Chart.js', 'Stripe API'],
    demoUrl: 'https://financeflow-demo.com',
    githubUrl: 'https://github.com/johnboholst/financeflow',
    featured: true,
  },
  {
    id: 2,
    title: 'TaskSync Pro',
    description: 'Intelligent task management application with AI-powered scheduling, team collaboration, and real-time synchronization across devices.',
    longDescription:
      'Developed an enterprise-grade task management system with AI-driven scheduling optimization, real-time collaboration features, and mobile-first design. Integrated Slack and calendar APIs for seamless workflow.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Prisma', 'WebSockets'],
    demoUrl: 'https://tasksync-demo.com',
    githubUrl: 'https://github.com/johnboholst/tasksync-pro',
    featured: true,
  },
  {
    id: 3,
    title: 'ChatHub',
    description: 'Real-time communication platform with end-to-end encryption, group messaging, video integration, and intelligent message search.',
    longDescription:
      'Created a secure real-time messaging platform supporting 1-to-1 and group conversations with E2E encryption, video call capabilities, and intelligent search functionality. Implemented using modern web technologies for optimal performance.',
    tags: ['Next.js', 'Socket.io', 'MongoDB', 'TailwindCSS', 'WebRTC'],
    demoUrl: 'https://chathub-demo.com',
    githubUrl: 'https://github.com/johnboholst/chathub',
    featured: false,
  },
  {
    id: 4,
    title: 'CodeCollab Editor',
    description: 'Collaborative code editor with real-time code sharing, syntax highlighting, and integrated terminal for pair programming sessions.',
    longDescription:
      'Built a collaborative development environment allowing developers to write, edit, and execute code in real-time with built-in version control and team communication features.',
    tags: ['React', 'Express', 'Monaco Editor', 'WebSockets', 'Docker'],
    demoUrl: 'https://codecollab-demo.com',
    githubUrl: 'https://github.com/johnboholst/codecollab',
    featured: false,
  },
  {
    id: 5,
    title: 'DesignSystem UI',
    description: 'Comprehensive design system and component library with interactive documentation and Storybook integration for team collaboration.',
    longDescription:
      'Designed and implemented a scalable design system with 50+ reusable components, comprehensive documentation, and Storybook integration to streamline the development process across multiple teams.',
    tags: ['React', 'TypeScript', 'Storybook', 'Tailwind CSS', 'Jest'],
    demoUrl: 'https://designsystem-demo.com',
    githubUrl: 'https://github.com/johnboholst/designsystem-ui',
    featured: false,
  },
  {
    id: 6,
    title: 'Analytics Suite',
    description: 'Enterprise analytics platform with advanced data visualization, custom reporting, and machine learning-powered insights.',
    longDescription:
      'Developed a comprehensive analytics solution providing real-time insights, customizable dashboards, and predictive analytics powered by machine learning algorithms.',
    tags: ['Next.js', 'D3.js', 'TensorFlow.js', 'PostgreSQL', 'Python'],
    demoUrl: 'https://analytics-suite-demo.com',
    githubUrl: 'https://github.com/johnboholst/analytics-suite',
    featured: false,
  },
];

export const experienceData = [
  {
    id: 1,
    company: 'Tech Innovations Inc.',
    position: 'Senior Full-Stack Developer',
    duration: '2022 - Present',
    description: 'Led development of React-based applications serving 100K+ users. Architected scalable microservices and implemented performance optimizations reducing load time by 40%.',
    achievements: [
      'Architected and built scalable design system serving 3+ product teams',
      'Mentored 5 junior developers, improving team velocity by 30%',
      'Implemented critical performance optimizations improving Core Web Vitals',
      'Led migration from REST to GraphQL reducing API payload by 60%',
    ],
  },
  {
    id: 2,
    company: 'Digital Solutions Ltd.',
    position: 'Full Stack Developer',
    duration: '2020 - 2022',
    description: 'Developed end-to-end web applications using MERN stack. Managed database optimization and built robust APIs serving millions of requests.',
    achievements: [
      'Built microservices architecture supporting 50K concurrent users',
      'Optimized database queries reducing response time by 50%',
      'Led comprehensive migration from JavaScript to TypeScript',
      'Established CI/CD pipeline reducing deployment time from 2 hours to 15 minutes',
    ],
  },
  {
    id: 3,
    company: 'StartUp Ventures',
    position: 'Junior Web Developer',
    duration: '2019 - 2020',
    description: 'Collaborated with cross-functional teams to deliver responsive web applications and interactive UIs using React.',
    achievements: [
      'Developed 20+ responsive landing pages achieving 98+ Lighthouse scores',
      'Implemented automated testing suite increasing code coverage to 85%',
      'Contributed to 5+ open-source projects with 200+ GitHub stars',
      'Optimized bundle size reducing initial load time by 45%',
    ],
  },
];

// Certifications & Achievements
export const certificationsData = [
  {
    id: 1,
    title: 'AWS Certified Developer Associate',
    issuer: 'Amazon Web Services',
    date: '2023',
    credentialUrl: 'https://aws.amazon.com',
    icon: '☁️',
  },
  {
    id: 2,
    title: 'Meta Frontend Professional Certificate',
    issuer: 'Meta (formerly Facebook)',
    date: '2023',
    credentialUrl: 'https://www.meta.com',
    icon: '💻',
  },
  {
    id: 3,
    title: 'Google Cloud Professional Data Engineer',
    issuer: 'Google Cloud',
    date: '2022',
    credentialUrl: 'https://cloud.google.com',
    icon: '🔵',
  },
  {
    id: 4,
    title: 'Advanced TypeScript - Professional Development',
    issuer: 'Egghead.io',
    date: '2022',
    credentialUrl: 'https://egghead.io',
    icon: '📘',
  },
];

// Testimonials
export const testimonialsData = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Product Manager',
    company: 'Tech Innovations Inc.',
    quote:
      'John is an exceptional developer who not only delivers high-quality code but also contributes significantly to our product strategy. His attention to detail and problem-solving skills are remarkable.',
    avatar: '👩‍💼',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'CTO',
    company: 'Digital Solutions Ltd.',
    quote:
      'Working with John transformed our development process. His full-stack expertise and mentoring abilities elevated the entire team. A true technical leader.',
    avatar: '👨‍💼',
  },
  {
    id: 3,
    name: 'Emma Rodriguez',
    role: 'Design Lead',
    company: 'StartUp Ventures',
    quote:
      'John brings a perfect blend of technical excellence and design thinking. He\'s one of the few developers who truly understands the importance of user experience.',
    avatar: '👩‍🎨',
  },
  {
    id: 4,
    name: 'David Park',
    role: 'Engineering Manager',
    company: 'Tech Innovations Inc.',
    quote:
      'John\'s ability to architect scalable systems while maintaining clean code is impressive. He sets the standard for technical excellence in our organization.',
    avatar: '👨‍💻',
  },
];

// Skills organized by category
export const skillsCategories = [
  {
    category: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Redux', 'HTML5', 'CSS3', 'JavaScript (ES6+)'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express.js', 'PostgreSQL', 'MongoDB', 'Prisma', 'GraphQL', 'REST APIs', 'Authentication', 'Database Design'],
  },
  {
    category: 'Tools & DevOps',
    skills: ['Git', 'GitHub', 'Docker', 'AWS', 'Vercel', 'CI/CD', 'Figma', 'VS Code', 'Webpack'],
  },
  {
    category: 'Testing & Quality',
    skills: ['Jest', 'React Testing Library', 'Cypress', 'Storybook', 'ESLint', 'Prettier', 'SonarQube'],
  },
];

export const skillsData = [
  'React',
  'Next.js',
  'TypeScript',
  'Tailwind CSS',
  'Framer Motion',
  'Node.js',
  'Express.js',
  'PostgreSQL',
  'MongoDB',
  'Prisma',
  'Git',
  'Docker',
  'AWS',
  'GraphQL',
  'REST APIs',
  'Jest',
  'Vercel',
  'WebSockets',
  'TensorFlow.js',
  'Figma',
  'Web Performance',
  'SEO Optimization',
];

export const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/johnboholst',
    icon: 'Github',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/johnboholst',
    icon: 'Linkedin',
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/johnboholst',
    icon: 'Twitter',
  },
  {
    name: 'Email',
    url: 'mailto:john@example.com',
    icon: 'Mail',
  },
];
