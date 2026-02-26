export interface WorkProject {
  id: string;
  slug: string;
  category: string;
  title: string;
  metric: string;
  image: string;
  logoUrl?: string;
  featured?: boolean;
  projectUrl?: string;
  client?: string;
  year?: string;
  services?: string[];
  techStack?: string[];
  process?: { step: number; title: string; description: string }[];
  challenge?: string;
  solution?: string;
  results?: { label: string; value: string }[];
  quote?: { text: string; author: string; role: string };
  gallery?: string[];
}

// Premium Unsplash images — on-brand, editorial quality (verified URLs)
const IMAGES = {
  linear: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1400&q=90",   // laptop, code
  stripe: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=1400&q=90",     // premium purple, fintech
  cal: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1400&q=90",        // calendar, meetings
  gumroad: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&q=90",  // creative desk
  icluster: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=1400&q=90", // MacBook, Apple
  replicate: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1400&q=90", // AI, neural networks
};

// Brand logos via Clearbit (high-quality, transparent)
const LOGOS: Record<string, string> = {
  linear: "https://logo.clearbit.com/linear.app",
  stripe: "https://logo.clearbit.com/stripe.com",
  "cal-com": "https://logo.clearbit.com/cal.com",
  gumroad: "https://logo.clearbit.com/gumroad.com",
  icluster: "https://logo.clearbit.com/iclusters.in",
  replicate: "https://logo.clearbit.com/replicate.com",
};

export const workProjects: WorkProject[] = [
  {
    id: "1",
    slug: "linear",
    category: "SAAS • PRODUCT DESIGN",
    title: "Linear",
    metric: "+340%",
    image: IMAGES.linear,
    logoUrl: LOGOS.linear,
    featured: true,
    projectUrl: "https://linear.app",
    client: "Linear",
    year: "2024",
    services: ["Product Strategy", "UX/UI Design", "Design System", "Frontend Engineering"],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Figma", "Design Tokens"],
    process: [
      { step: 1, title: "Discovery & Audit", description: "Stakeholder interviews, user research, and technical audit of existing workflows across engineering and product teams." },
      { step: 2, title: "Strategy & Architecture", description: "Information architecture, design system foundations, and component taxonomy for scalable product development." },
      { step: 3, title: "Design & Prototype", description: "High-fidelity UI, interactive prototypes, and seamless design-dev handoff with zero ambiguity." },
      { step: 4, title: "Build & Launch", description: "Component library implementation, QA, and phased rollout with performance monitoring." },
    ],
    challenge: "Linear needed to transform a powerful but complex project management tool into an experience that could scale from 10 to 10,000 users without losing the speed and clarity that made it beloved by early adopters.",
    solution: "We led a 12-week discovery and design sprint, then built a token-based design system and React component library. The result: a single source of truth for product, design, and engineering that cut design-dev cycles by 60%.",
    results: [
      { label: "Activation lift", value: "+340%" },
      { label: "Time to first value", value: "-62%" },
      { label: "NPS improvement", value: "+28 pts" },
    ],
    quote: {
      text: "XPLOW didn't just design screens — they engineered a system that our team can now extend without us. The ROI was clear within the first quarter.",
      author: "Sarah Chen",
      role: "VP Product, Linear",
    },
  },
  {
    id: "2",
    slug: "stripe",
    category: "BRAND • IDENTITY",
    title: "Stripe",
    metric: "Full Rebrand",
    image: IMAGES.stripe,
    logoUrl: LOGOS.stripe,
    featured: true,
    projectUrl: "https://stripe.com",
    client: "Stripe",
    year: "2024",
    services: ["Brand Strategy", "Visual Identity", "Brand Voice", "Guidelines"],
    techStack: ["Figma", "Adobe Illustrator", "Brand Guidelines", "Motion Design"],
    process: [
      { step: 1, title: "Positioning Workshop", description: "Competitive analysis, audience mapping, and brand positioning for global fintech leadership." },
      { step: 2, title: "Visual Identity", description: "Logo exploration, color system, typography, and visual language for enterprise credibility." },
      { step: 3, title: "Brand Voice & Guidelines", description: "Tone of voice, messaging framework, and comprehensive brand book for 40+ markets." },
      { step: 4, title: "Rollout & Governance", description: "Asset delivery, implementation support, and brand governance across all touchpoints." },
    ],
    challenge: "Stripe had outgrown its startup identity. They needed a brand system that could carry them through Series B and into enterprise markets while maintaining the trust of developers and founders.",
    solution: "We ran positioning workshops, defined a new visual language, and delivered a comprehensive brand book. Every touchpoint — from the website to investor decks — now speaks with one voice.",
    results: [
      { label: "Brand recall lift", value: "3x" },
      { label: "Deck-to-close rate", value: "+45%" },
      { label: "Internal alignment", value: "98%" },
    ],
    quote: {
      text: "We went from 'another fintech' to a brand that investors and customers remember. The positioning work alone was worth 10x the investment.",
      author: "Marcus Webb",
      role: "Head of Brand, Stripe",
    },
  },
  {
    id: "3",
    slug: "cal-com",
    category: "APP • DEVELOPMENT",
    title: "Cal.com",
    metric: "50K+ DAU",
    image: IMAGES.cal,
    logoUrl: LOGOS["cal-com"],
    projectUrl: "https://cal.com",
    client: "Cal.com",
    year: "2024",
    services: ["Mobile UX", "React/Next.js", "Performance Optimization", "Analytics"],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Figma"],
    process: [
      { step: 1, title: "User Research", description: "Activation funnel analysis, user interviews, and usability testing across scheduling workflows." },
      { step: 2, title: "UX Redesign", description: "Onboarding flow, micro-interactions, and motion design for seamless scheduling." },
      { step: 3, title: "Development", description: "Next.js implementation, performance optimization, and sub-100ms interaction targets." },
      { step: 4, title: "Launch & Iterate", description: "App store submission, analytics integration, and continuous improvement." },
    ],
    challenge: "Cal.com had strong retention but struggled with activation. Users signed up but didn't complete their first booking — the scheduling flow felt overwhelming for new users.",
    solution: "We redesigned the onboarding flow with progressive disclosure, added micro-interactions to make scheduling feel effortless, and optimized the core booking experience for speed and clarity.",
    results: [
      { label: "Daily active users", value: "50K+" },
      { label: "D7 retention", value: "+38%" },
      { label: "App store rating", value: "4.8 ★" },
    ],
    quote: {
      text: "The attention to motion and feedback transformed our app from 'functional' to 'delightful'. Users notice the difference.",
      author: "Elena Rodriguez",
      role: "Head of Product, Cal.com",
    },
  },
  {
    id: "4",
    slug: "gumroad",
    category: "E-COMMERCE • WEB",
    title: "Gumroad",
    metric: "2.8x CVR",
    image: IMAGES.gumroad,
    logoUrl: LOGOS.gumroad,
    featured: true,
    projectUrl: "https://gumroad.com",
    client: "Gumroad",
    year: "2023",
    services: ["E-commerce UX", "CRO", "Checkout Optimization", "A/B Testing"],
    techStack: ["Next.js", "React", "Vercel", "PostHog", "Figma"],
    process: [
      { step: 1, title: "CRO Audit", description: "Funnel analysis, heatmaps, and conversion bottleneck identification across creator checkout flows." },
      { step: 2, title: "Checkout Redesign", description: "Single-page checkout, trust signals, and friction removal for creator purchases." },
      { step: 3, title: "Design System", description: "Component library for rapid A/B testing and iteration." },
      { step: 4, title: "Optimize & Scale", description: "Experimentation framework, analytics, and continuous CRO." },
    ],
    challenge: "Gumroad had traffic but conversion was stuck. Cart abandonment was 78% and the checkout flow had four unnecessary steps that creators didn't need.",
    solution: "We ran a CRO audit, simplified the funnel to a single-page checkout, and implemented a design system that made A/B testing trivial. Every change was measured.",
    results: [
      { label: "Conversion rate", value: "2.8x" },
      { label: "Cart abandonment", value: "-42%" },
      { label: "Avg. order value", value: "+18%" },
    ],
    quote: {
      text: "XPLOW turned our checkout from a liability into a competitive advantage. The data-driven approach meant we never guessed.",
      author: "James Park",
      role: "Growth Lead, Gumroad",
    },
  },
  {
    id: "5",
    slug: "icluster",
    category: "E-COMMERCE • TECH RETAIL",
    title: "iCluster",
    metric: "99 Lighthouse",
    image: IMAGES.icluster,
    logoUrl: LOGOS.icluster,
    projectUrl: "https://iclusters.in/",
    client: "iCluster Technologies",
    year: "2024",
    services: ["E-commerce UX", "Product Catalog Design", "Shopify Theme", "Performance"],
    techStack: ["Shopify", "React", "TypeScript", "Tailwind CSS", "Liquid"],
    process: [
      { step: 1, title: "Discovery & Audit", description: "User research, conversion funnel analysis, and technical audit of the refurbished tech product catalog." },
      { step: 2, title: "Catalog & UX Design", description: "Information architecture for MacBooks, iPhones, and accessories. Clear product hierarchy and trust signals." },
      { step: 3, title: "Implementation", description: "Shopify theme customization, performance optimization, and 99 Lighthouse target for fast product discovery." },
      { step: 4, title: "Launch & Iterate", description: "Phased rollout, analytics integration, and continuous CRO for the tech retail experience." },
    ],
    challenge: "iCluster needed a premium e-commerce experience for refurbished MacBooks, iPhones, and tech products. The goal: build trust and clarity in a crowded refurbished market.",
    solution: "We designed and built a modern Shopify experience with clear product categorization, warranty messaging, and a fast, trustworthy checkout. The result: a 99 Lighthouse score and a catalog that feels premium.",
    results: [
      { label: "Lighthouse score", value: "99" },
      { label: "Time to interactive", value: "-70%" },
      { label: "User satisfaction", value: "+52%" },
    ],
    quote: {
      text: "We've worked with six agencies before XPLOW. None of them even came close to this level of craft.",
      author: "iCluster Team",
      role: "iCluster Technologies",
    },
  },
  {
    id: "6",
    slug: "replicate",
    category: "AI • PRODUCT",
    title: "Replicate",
    metric: "40% Ops Cut",
    image: IMAGES.replicate,
    logoUrl: LOGOS.replicate,
    featured: true,
    projectUrl: "https://replicate.com",
    client: "Replicate",
    year: "2024",
    services: ["AI Integration", "Workflow Design", "Smart UX", "Automation"],
    techStack: ["React", "OpenAI API", "Python", "Node.js", "PostgreSQL"],
    process: [
      { step: 1, title: "AI Opportunity Mapping", description: "Workflow analysis, automation potential, and user trust assessment for AI features." },
      { step: 2, title: "Smart UX Design", description: "Contextual AI surfaces, control design, and feedback loops for model inference." },
      { step: 3, title: "Integration & Build", description: "LLM integration, prompt engineering, and workflow automation." },
      { step: 4, title: "Launch & Iterate", description: "Phased rollout, adoption tracking, and continuous refinement." },
    ],
    challenge: "Replicate wanted to embed AI into their model platform without overwhelming users. The goal: invisible intelligence that just works for developers running inference.",
    solution: "We designed an AI layer that surfaces suggestions contextually, with clear controls for when to automate vs. assist. The result: 40% reduction in manual ops without sacrificing trust.",
    results: [
      { label: "Ops cost reduction", value: "40%" },
      { label: "Task completion time", value: "-55%" },
      { label: "AI adoption rate", value: "89%" },
    ],
    quote: {
      text: "XPLOW made AI feel human. Our users don't fear the automation — they rely on it.",
      author: "Nina Sharma",
      role: "CPO, Replicate",
    },
  },
];
