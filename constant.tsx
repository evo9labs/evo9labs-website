import {
  Aperture,
  Atom,
  Brush,
  Cloud,
  Code,
  Network,
  Palette,
  Settings,
  ShoppingCart,
  Smartphone,
  TrendingUp,
  Wrench,
} from "lucide-react";

export const services = [
  {
    icon: <Code className="w-8 h-8 text-primary" />,
    title: "Web Development",
    short_description:
      "Modern, responsive websites built with cutting-edge technologies",
    description:
      "Custom web applications built with modern frameworks and technologies for optimal performance and user experience.",
    features: [
      "React & Next.js",
      "Node.js Backend",
      "Database Design",
      "API Development",
      "Performance Optimization",
    ],
  },
  {
    icon: <Smartphone className="w-12 h-12 text-primary" />,
    title: "Mobile App Development",
    short_description:
      "Native and cross-platform mobile apps delivering exceptional user experiences.",

    description:
      "Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.",
    features: [
      "iOS & Android",
      "React Native",
      "Flutter",
      "App Store Deployment",
      "Push Notifications",
    ],
  },
  {
    icon: <Network className="w-12 h-12 text-primary" />,
    title: "Blockchain  Services",
    short_description:
      "Secure, scalable blockchain solutions for future-ready Web3.",
    description:
      "End-to-end blockchain solutions delivering secure, scalable, and future-ready Web3 experiences.",
    features: [
      "DApp Development",
      "NFT Marketplace Development",
      "Smart Contract Development",
      "Smart Contract Integration",
      "Wallet–DApp Connectivity",
    ],
  },
  {
    icon: <ShoppingCart className="w-12 h-12 text-primary" />,
    title: "E-commerce Solutions",
    short_description: "Complete online stores with payment integration",
    description:
      "Complete online stores with secure payment processing, inventory management, and analytics.",
    features: [
      "Shopify Development",
      "Custom E-commerce",
      "Payment Integration",
      "Inventory Management",
      "Analytics",
    ],
  },
  {
    icon: <Cloud className="w-12 h-12 text-primary" />,
    title: "Cloud Services",
    short_description: "Scalable infrastructure and deployment solutions",
    description:
      "Scalable cloud infrastructure setup and management for reliable, high-performance applications.",
    features: [
      "AWS/Azure Setup",
      "Auto Scaling",
      "Load Balancing",
      "Database Management",
      "Security Configuration",
    ],
  },
  {
    icon: <Aperture className="w-12 h-12 text-primary" />,
    title: "Custom Software",
    short_description: "Custom business applications and system integrations",
    description:
      "Tailored software solutions designed specifically for your unique business requirements and processes.",
    features: [
      "Requirements Analysis",
      "Custom Development",
      "System Integration",
      "Database Design",
      "API Development",
    ],
  },
  {
    icon: <Brush className="w-12 h-12 text-primary" />,
    title: "Branding & Graphic Designing",
    short_description: "Complete brand identity and visual design",
    description:
      "Complete brand identity design including logos, color schemes, and marketing materials.",
    features: [
      "Logo Design",
      "Brand Guidelines",
      "Marketing Materials",
      "Visual Identity",
      "Brand Strategy",
    ],
  },
  {
    icon: <TrendingUp className="w-12 h-12 text-primary" />,
    title: "Digital Marketing",
    short_description: "SEO, social media, and paid advertising campaigns",
    description:
      "Comprehensive digital marketing strategies to grow your online presence and reach your target audience.",
    features: [
      "SEO Optimization",
      "Social Media",
      "Content Strategy",
      "Analytics",
      "Campaign Management",
    ],
  },
  {
    icon: <Wrench className="w-12 h-12 text-primary" />,
    title: "Maintenance & Support",
    short_description: "Ongoing technical support and system updates",
    description:
      "Ongoing support and maintenance services to keep your digital solutions running smoothly and securely.",
    features: [
      "24/7 Monitoring",
      "Regular Updates",
      "Security Patches",
      "Performance Optimization",
      "Technical Support",
    ],
  },
];

export const projects = [
  {
    title: "METADOT - Browser Extension",
    description:
      "Metadot is a browser extension based non-custodial crypto wallet built to support the Polkadot & Kusama Ecosystem.Send and receive tokens with Metadot browser extension wallet on Polkadot, Kusama and Westend test network from your browser.",
    shortDescription:
      "A browser extension based non custodial wallet for Polkadot Blockchain.",
    image: "/images/metadot.webp",
    tags: ["Web3", "Wallet", "React", "Polkadot"],
    category: "Blockchain",
    webLink: "",
    isFeatured: true,
  },
  {
    title: "CollabDash - HRMS System",
    description:
      "A complete Human Resource Management System with employee onboarding, payroll, performance tracking, and leave management. Built with modern web technologies for scalability and ease of use.",
    shortDescription:
      "HRMS with payroll, performance tracking, and leave management.",
    image: "/images/collabdash.webp",
    tags: ["HRMS", "Web App", "React", "Node.js", "MongoDB"],
    category: "Custom Software",
    webLink: "https://app.collabdash.io",
    isFeatured: true,
  },
  {
    title: "Tuition Highway - LMS System",
    description:
      "A Learning Management System designed for tutors and students. Features include course creation, video lessons, quizzes, progress tracking, and secure payments.",
    shortDescription:
      "LMS with courses, quizzes, video lessons, and student tracking.",
    image: "/images/tuition_highway.webp",
    tags: ["LMS", "Education", "React", "Next.js", "MongoDB"],
    category: "Custom Software",
    webLink: "https://portal.tuitionhighway.com",
    isFeatured: true,
  },
  {
    title: "DiabMart - Marketplace",
    description:
      "An e-commerce marketplace platform for multiple vendors. Includes product listings, shopping cart, order tracking, and integrated payments.",
    shortDescription:
      "Multi-vendor marketplace with cart, payments, and order tracking.",
    image: "/images/diabmart.webp",
    tags: ["E-commerce", "Marketplace", "Next.js", "Stripe", "MongoDB"],
    category: "E-commerce",
    webLink: "",
    isFeatured: true,
  },
  {
    title: "Tuition Excellency - Website",
    description:
      "A modern responsive website for Tuition Excellency academy, highlighting courses, faculty, and enrollment process with a clean UI/UX.",
    shortDescription:
      "Responsive website for academy with courses and enrollment info.",
    image: "/images/tuition_excellency.webp",
    tags: ["Website", "Education", "Next.js", "TailwindCSS"],
    category: "Web Development",
    webLink: "https://tuitionexcellency.com",
    isFeatured: true,
  },

  {
    title: "KOLNET - Staking App",
    description:
      "A staking decentralized application built for Polygon chain where users can Stake, Unstake their MATIC and Claim Rewards.",
    shortDescription: "Staking Decentralized App for Polygon chain",
    image: "/images/kolnet.webp",
    tags: ["Web3", "Wallet Connection", "DApp", "React", "Polygon"],
    category: "Blockchain",
    webLink: "",
    isFeatured: true,
  },
];
