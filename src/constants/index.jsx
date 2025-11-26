import { BotMessageSquare, Sparkles, Code, Bug, Zap, FileText, TestTube, Rocket, Clock, Shield, TrendingUp, BarChart } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Services", href: "#services" },
  { label: "AI Services", href: "#ai-services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Pricing", href: "#pricing" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export const testimonials = [
  {
    user: "Sarah Martinez",
    company: "Real Estate Agent",
    image: user1,
    text: "CodeNova AI built my website in 3 days instead of 3 weeks! The AI chatbot captures leads 24/7 and I've seen a 40% increase in inquiries. Best investment I've made.",
  },
  {
    user: "James Chen",
    company: "Restaurant Owner",
    image: user2,
    text: "The automated content generation is a game-changer. My SEO pages rank higher and I'm getting more online orders. The monthly maintenance keeps everything running smoothly.",
  },
  {
    user: "Dr. Emily Rodriguez",
    company: "Dental Clinic",
    image: user3,
    text: "The AI chatbot handles appointment bookings and patient questions automatically. It's like having a receptionist that never sleeps. Our patient satisfaction has improved significantly.",
  },
  {
    user: "Michael Thompson",
    company: "Business Coach",
    image: user4,
    text: "CodeNova AI revamped my entire website and integrated an AI chatbot that qualifies leads. I'm closing 2-3X more clients now. The automation features are incredible.",
  },
  {
    user: "Lisa Park",
    company: "E-commerce Store",
    image: user5,
    text: "The automated code generation saved us thousands in development costs. The site is fast, modern, and converts better than our old one. Highly recommend!",
  },
  {
    user: "Robert Kim",
    company: "SaaS Founder",
    image: user6,
    text: "The AI-powered maintenance and bug fixing is worth every penny. Issues get fixed automatically, and the monthly reports show exactly how our site is performing.",
  },
];

export const features = [
  {
    icon: <Sparkles />,
    text: "AI-Assisted Website Building",
    description:
      "Get modern, responsive websites built 2-5X faster using AI-powered development tools. From landing pages to full business sites.",
  },
  {
    icon: <BotMessageSquare />,
    text: "AI Chatbot Integration",
    description:
      "Intelligent chatbots that capture leads 24/7, answer questions, and automate customer service. Boost conversions and reduce response time.",
  },
  {
    icon: <Code />,
    text: "Automated Code Generation",
    description:
      "AI generates React, Tailwind, and component code automatically. Faster development, fewer bugs, consistent quality.",
  },
  {
    icon: <Bug />,
    text: "AI Website Maintenance & Bug Fixing",
    description:
      "Automated monitoring and fixing of broken links, missing assets, and performance issues. Your site stays perfect without manual work.",
  },
  {
    icon: <FileText />,
    text: "Automated Content Generation",
    description:
      "AI creates SEO-optimized pages, blog posts, and content automatically. Keep your site fresh and ranking higher.",
  },
  {
    icon: <TestTube />,
    text: "AI Front-End Testing Automation",
    description:
      "Automated testing ensures your site works perfectly across all devices and browsers. Catch issues before users do.",
  },
];

export const checklistItems = [
  {
    icon: <Rocket />,
    title: "2–5× Faster Delivery",
    description:
      "Get your website, chatbot, or automation delivered in days instead of weeks. AI-powered development accelerates every step of the process.",
  },
  {
    icon: <TrendingUp />,
    title: "Lower Costs Than Traditional Agencies",
    description:
      "Save 50% or more compared to traditional web agencies. AI automation reduces development time and costs without sacrificing quality.",
  },
  {
    icon: <Zap />,
    title: "Ongoing Automated Improvement",
    description:
      "Your website gets better over time with automated optimizations, content updates, and performance improvements—no extra work required.",
  },
  {
    icon: <BarChart />,
    title: "Measurable Business Growth",
    description:
      "Track real results: increased conversions, higher rankings, more leads. We provide analytics and reports showing your ROI.",
  },
];

// One-time project pricing
export const oneTimeProjects = [
  {
    title: "AI-Powered Landing Page",
    price: "$350 - $800",
    description: "Modern React/Next.js landing page with AI optimization",
    features: ["Responsive design", "SEO optimized", "Fast loading", "AI-powered"],
  },
  {
    title: "5-Page Business Website",
    price: "$600 - $2,000",
    description: "Complete business website with all essential pages",
    features: ["5 custom pages", "Contact forms", "Mobile responsive", "SEO ready"],
  },
  {
    title: "AI Chatbot Setup",
    price: "$150 - $1,200",
    description: "Intelligent chatbot integration and configuration",
    features: ["Lead capture", "24/7 support", "Custom training", "Analytics"],
  },
  {
    title: "Website Revamp + Speed",
    price: "$250 - $1,500",
    description: "Modernize and optimize your existing website",
    features: ["Design refresh", "Speed optimization", "Mobile-first", "SEO boost"],
  },
];

// Monthly recurring plans
export const monthlyPlans = [
  {
    title: "Starter",
    price: "$150",
    period: "/mo",
    popular: false,
    features: [
      "Up to 3 hours of updates",
      "Security & uptime monitoring",
      "Monthly performance report",
      "Basic bug fixes",
      "Email support",
    ],
  },
  {
    title: "Growth",
    price: "$300",
    period: "/mo",
    popular: true,
    features: [
      "Up to 7 hours of updates",
      "AI chatbot tuning & optimization",
      "Content generation (2 blogs/month)",
      "Bug fixes & UX improvements",
      "Priority support",
      "Advanced analytics",
    ],
  },
  {
    title: "Automation Pro",
    price: "$500",
    period: "/mo",
    popular: false,
    features: [
      "Everything in Growth",
      "SEO auto-pages generation",
      "A/B testing setup",
      "Full website analytics dashboard",
      "Unlimited content updates",
      "Dedicated account manager",
    ],
  },
];

// Legacy pricing for backward compatibility
export const pricingOptions = monthlyPlans;

export const resourcesLinks = [
  { href: "#services", text: "Services" },
  { href: "#ai-services", text: "AI Solutions" },
  { href: "#portfolio", text: "Portfolio" },
  { href: "#contact", text: "Contact" },
];

export const platformLinks = [
  { href: "#services", text: "AI Website Building" },
  { href: "#services", text: "Chatbot Integration" },
  { href: "#ai-services", text: "Automation Consulting" },
  { href: "#blog", text: "Insights" },
];

export const communityLinks = [
  { href: "#contact", text: "Book a Call" },
  { href: "#portfolio", text: "Case Studies" },
  { href: "#blog", text: "Blog" },
  { href: "#ai-services", text: "Resources" },
];

// Target niches
export const niches = [
  "Real Estate Agents",
  "Coaches & Course Creators",
  "Restaurants",
  "Dentists / Local Clinics",
  "E-commerce",
  "SaaS Founders",
  "Local Service Providers",
];

export const aiServices = [
  {
    title: "AI Automation Playbooks",
    summary: "Done-for-you automation audits, workflow mapping, and Zapier/Make builds tailored for Philippine SMBs.",
    bullets: [
      "Back-office automation & reporting",
      "Sales pipeline enrichment",
      "Custom CRM triggers",
    ],
  },
  {
    title: "Hybrid AI + Human Websites",
    summary: "AI powered website builder process that combines React experts with AI-generated sections for speed.",
    bullets: [
      "AI-assisted copy & graphics",
      "Component library tuned for conversion",
      "Performance monitoring & fixes",
    ],
  },
  {
    title: "AI Chatbot Operations",
    summary: "Multilingual chatbots pre-trained on your knowledge base to qualify leads and book demos 24/7.",
    bullets: [
      "Flows for sales, support, and FAQ",
      "Analytics dashboard",
      "Human handoff alerts",
    ],
  },
  {
    title: "Data & Analytics Co-Pilot",
    summary: "Unified dashboards, metric explanations, and GPT-powered insights for founders and ops teams.",
    bullets: [
      "Auto-updated KPI reports",
      "Slack/Email summaries",
      "Predictive alerts",
    ],
  },
];

export const chatbotBenefits = [
  {
    title: "Convert More Visitors",
    description:
      "Personalized AI chatbot for small business nurtures every click, routes qualified leads, and books calls without waiting for office hours.",
    stat: "32% more booked meetings",
  },
  {
    title: "Reduce Support Volume",
    description:
      "Answer FAQs instantly across Facebook Messenger, website widgets, and WhatsApp while giving your team clean transcripts.",
    stat: "45% fewer repetitive tickets",
  },
  {
    title: "Boost E-commerce Sales",
    description:
      "Recommend bundles, recover abandoned carts, and upsell memberships using conversational AI tuned for Philippine shoppers.",
    stat: "22% lift in average order value",
  },
  {
    title: "Localize Across Markets",
    description:
      "Serve prospects in English, Filipino, or Taglish automatically, keeping tone and compliance consistent.",
    stat: "100% bilingual coverage",
  },
];

export const blogPosts = [
  {
    title: "Top 10 AI Tools for Small Businesses in 2025",
    excerpt:
      "From AI website builders to automation copilots, these tools help Philippine SMEs cut manual work in half.",
    readTime: "6 min read",
    tags: ["AI tools", "Small Business"],
    url: "#",
  },
  {
    title: "How AI Chatbots Increase Sales for Online Shops",
    excerpt:
      "Discover the exact flows we use to help Shopify and WooCommerce stores answer questions and upsell on autopilot.",
    readTime: "5 min read",
    tags: ["E-commerce", "Chatbots"],
    url: "#",
  },
  {
    title: "Best AI Automations for Real Estate in the Philippines",
    excerpt:
      "Qualify buyers, send property packs, and trigger follow-ups using low-cost automations built for local brokers.",
    readTime: "7 min read",
    tags: ["Real Estate", "Automation"],
    url: "#",
  },
];
