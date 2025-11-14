import {
  Aperture,
  Atom,
  Blocks,
  Brush,
  Cloud,
  Code,
  Compass,
  Eye,
  Heart,
  Lightbulb,
  Network,
  Palette,
  PenTool,
  Rocket,
  Settings,
  Shield,
  ShoppingCart,
  Smartphone,
  Target,
  TrendingUp,
  Users,
  Wrench,
} from "lucide-react";

export const nav_items = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export const services = [
  {
    icon: Code,
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
    icon: Smartphone,
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
    icon: Blocks,
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
    icon: ShoppingCart,
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
    icon: Cloud,
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
    icon: Aperture,
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
    icon: Brush,
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
    icon: TrendingUp,
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
    icon: Wrench,
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
    webLink: "https://diabmart.com",
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
    webLink: "https://kolnet.superstaking.io",
    isFeatured: true,
  },
];

export const evolution_steps = [
  {
    number: "01",
    icon: Compass,
    title: "Discovery & Strategy",
    description:
      "We analyze your business needs, target audience, and goals to create a comprehensive digital strategy.",
    deliverables: [
      "Project Roadmap",
      "Technical Specifications",
      "Timeline & Budget",
      "Risk Assessment",
    ],
  },
  {
    number: "02",
    icon: PenTool,
    title: "Design & Prototyping",
    description:
      "Creating wireframes, mockups, and interactive prototypes to visualize the final product before development.",
    deliverables: [
      "Wireframes",
      "UI/UX Design",
      "Interactive Prototype",
      "Design System",
    ],
  },
  {
    number: "03",
    icon: Code,
    title: "Development & Testing",
    description:
      "Building your solution using best practices, with continuous testing to ensure quality and performance.",
    deliverables: [
      "Clean Code",
      "Quality Assurance",
      "Performance Testing",
      "Security Audit",
    ],
  },
  {
    number: "04",
    icon: Rocket,
    title: "Deployment & Support",
    description:
      "Launching your solution and providing ongoing support to ensure optimal performance and satisfaction.",
    deliverables: [
      "Live Deployment",
      "User Training",
      "Documentation",
      "Ongoing Support",
    ],
  },
];

export const our_purpose = [
  {
    icon: Target,
    title: "Our Mission",
    desc: "To empower businesses with modern, scalable, and meaningful digital solutions.",
    color: "from-primary/10 to-transparent",
  },
  {
    icon: Eye,
    title: "Our Vision",
    desc: "To be a global innovation leader in digital transformation and intelligent systems.",
    color: "from-secondary/10 to-transparent",
  },
  {
    icon: Lightbulb,
    title: "Our Philosophy",
    desc: "We merge strategy + creativity + technology to build digital experiences that truly evolve.",
    color: "from-primary/10 to-transparent",
  },
];

export const our_values = [
  {
    icon: <Target className="w-8 h-8 text-primary" />,
    title: "Purpose-Driven",
    description:
      "Every solution we create serves a meaningful purpose, driving real business transformation and user value.",
  },
  {
    icon: <Lightbulb className="w-8 h-8 text-primary" />,
    title: "Innovation First",
    description:
      "We embrace cutting-edge technologies and innovative approaches to solve complex digital challenges.",
  },
  {
    icon: <Shield className="w-8 h-8 text-primary" />,
    title: "Quality & Security",
    description:
      "We maintain the highest standards of code quality, security, and performance in every project we deliver.",
  },
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    title: "Collaborative",
    description:
      "We work closely with our clients as partners, ensuring transparent communication and shared success.",
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-primary" />,
    title: "Growth Minded",
    description:
      "We focus on scalable solutions that grow with your business and adapt to changing market needs.",
  },
  {
    icon: <Heart className="w-8 h-8 text-primary" />,
    title: "User-Centric",
    description:
      "Every decision we make is guided by creating exceptional user experiences and meaningful interactions.",
  },
];

export const blog_posts = [
  {
    id: 1,
    title: "The Future of Web Development: AI-Powered Solutions",
    excerpt:
      "Explore how artificial intelligence is revolutionizing the way we build and deploy web applications.",
    date: "2024-03-15",
    readTime: "5 min read",
    category: "Development",
    image: "/blogs/blog-ai-web-dev.jpg",
    author: {
      name: "Sarah Chen",
      role: "Lead Developer",
      avatar: "SC",
    },
    content: `
      <p>Artificial Intelligence is fundamentally transforming the landscape of web development. What once seemed like science fiction is now becoming an integral part of how we build, test, and deploy modern web applications.</p>
      
      <h2>The Rise of AI in Development</h2>
      <p>The integration of AI into development workflows has accelerated dramatically over the past few years. From intelligent code completion to automated testing, AI tools are enhancing developer productivity and code quality across the board.</p>
      
      <p>Modern AI-powered development tools can now:</p>
      <ul>
        <li>Generate boilerplate code and components automatically</li>
        <li>Suggest optimizations and identify potential bugs before they occur</li>
        <li>Automate repetitive tasks, freeing developers to focus on creative problem-solving</li>
        <li>Provide intelligent code reviews and security analysis</li>
      </ul>
      
      <h2>Practical Applications</h2>
      <p>In real-world scenarios, AI is being used to create more accessible, performant, and user-friendly web applications. Machine learning models can now predict user behavior, optimize content delivery, and even generate personalized experiences at scale.</p>
      
      <blockquote>
        "The future of web development isn't about replacing developers—it's about empowering them with intelligent tools that amplify their capabilities."
      </blockquote>
      
      <h2>Looking Ahead</h2>
      <p>As we look to the future, the synergy between human creativity and AI capabilities will continue to evolve. The developers who thrive will be those who embrace these tools while maintaining their focus on solving real user problems.</p>
      
      <p>The question isn't whether to adopt AI in your development workflow, but how quickly you can integrate it to stay competitive in an increasingly AI-powered world.</p>
    `,
  },
  {
    id: 2,
    title: "Blockchain Integration: A Complete Guide for Startups",
    excerpt:
      "Learn how blockchain technology can transform your business operations and enhance security.",
    date: "2024-03-10",
    readTime: "8 min read",
    category: "Blockchain",
    image: "blog-blockchain.jpg",
    author: {
      name: "Michael Torres",
      role: "Blockchain Architect",
      avatar: "MT",
    },
    content: `
      <p>Blockchain technology has evolved from its cryptocurrency origins into a powerful tool for businesses seeking transparency, security, and efficiency in their operations.</p>
      
      <h2>Understanding Blockchain for Business</h2>
      <p>At its core, blockchain is a distributed ledger technology that creates an immutable record of transactions. For startups, this means unprecedented opportunities to build trust with customers and partners.</p>
      
      <h2>Key Benefits for Startups</h2>
      <ul>
        <li><strong>Enhanced Security:</strong> Cryptographic protection of sensitive data</li>
        <li><strong>Transparency:</strong> Verifiable audit trails for all transactions</li>
        <li><strong>Efficiency:</strong> Automated smart contracts reduce manual processes</li>
        <li><strong>Cost Reduction:</strong> Elimination of intermediaries in many processes</li>
      </ul>
      
      <h2>Implementation Strategies</h2>
      <p>Successfully integrating blockchain requires careful planning and execution. Start with a clear use case, evaluate different blockchain platforms, and ensure your team has the necessary expertise.</p>
      
      <blockquote>
        "Blockchain isn't just about technology—it's about reimagining how trust and value are exchanged in the digital age."
      </blockquote>
      
      <p>Whether you're looking to improve supply chain transparency, secure customer data, or create new business models, blockchain offers powerful solutions for forward-thinking startups.</p>
    `,
  },
  {
    id: 3,
    title: "Mobile-First Design: Best Practices for 2024",
    excerpt:
      "Discover the latest trends and techniques for creating responsive mobile experiences.",
    date: "2024-03-05",
    readTime: "6 min read",
    category: "Design",
    image: "/blogs/blog-mobile-design.jpg",
    author: {
      name: "Emma Rodriguez",
      role: "UX Designer",
      avatar: "ER",
    },
    content: `
      <p>Mobile-first design has evolved from a trend to an absolute necessity. With over 60% of web traffic coming from mobile devices, designing for mobile first is no longer optional—it's essential.</p>
      
      <h2>The Mobile-First Mindset</h2>
      <p>Mobile-first design means starting with the smallest screen and working your way up. This approach forces you to prioritize content and functionality, resulting in cleaner, more focused designs.</p>
      
      <h2>2024 Best Practices</h2>
      <ul>
        <li><strong>Touch-First Interactions:</strong> Design for fingers, not cursors</li>
        <li><strong>Performance Optimization:</strong> Every millisecond counts on mobile</li>
        <li><strong>Simplified Navigation:</strong> Clear, accessible menus and actions</li>
        <li><strong>Adaptive Content:</strong> Responsive images and dynamic layouts</li>
      </ul>
      
      <h2>Performance Matters</h2>
      <p>Mobile users are often on slower connections and less powerful devices. Optimizing images, minimizing JavaScript, and leveraging modern CSS techniques are crucial for delivering fast, smooth experiences.</p>
      
      <blockquote>
        "Great mobile design isn't about fitting everything on a small screen—it's about presenting what matters most, when it matters most."
      </blockquote>
      
      <p>By embracing mobile-first principles, you're not just accommodating mobile users—you're creating better experiences for everyone.</p>
    `,
  },
  {
    id: 4,
    title: "E-commerce Optimization: Boosting Your Conversion Rate",
    excerpt:
      "Proven strategies to enhance your online store's performance and increase sales.",
    date: "2024-02-28",
    readTime: "7 min read",
    category: "E-commerce",
    image: "/blogs/blog-ecommerce.jpg",
    author: {
      name: "Olivia Bennett",
      role: "E-commerce Strategist",
      avatar: "OB",
    },
    content: `
      <p>Optimizing an e-commerce site is more than just improving the design; it's about understanding customer behavior and removing friction from the buying process.</p>
      
      <h2>Key Optimization Strategies</h2>
      <ul>
        <li>Streamlined checkout process to reduce cart abandonment</li>
        <li>Personalized product recommendations</li>
        <li>High-quality product images and videos</li>
        <li>Clear and compelling calls-to-action</li>
      </ul>

      <h2>Leveraging Analytics</h2>
      <p>Using analytics to track user behavior, identify bottlenecks, and measure conversion rates is critical. A/B testing different layouts and messaging can provide actionable insights to boost sales.</p>

      <blockquote>
        "E-commerce success comes from continuous testing, learning, and optimizing the customer journey."
      </blockquote>

      <p>By implementing these strategies, online stores can see significant improvements in conversion rates and overall revenue.</p>
    `,
  },
  {
    id: 5,
    title: "Cloud Infrastructure: Scaling Your Digital Business",
    excerpt:
      "Understanding cloud solutions and how to leverage them for maximum efficiency.",
    date: "2024-02-20",
    readTime: "10 min read",
    category: "Cloud",
    image: "/blogs/blog-cloud.jpg",
    author: {
      name: "Rajesh Kumar",
      role: "Cloud Solutions Architect",
      avatar: "RK",
    },
    content: `
      <p>Cloud infrastructure has become the backbone of modern digital businesses, offering scalability, flexibility, and cost efficiency.</p>
      
      <h2>Benefits of Cloud Adoption</h2>
      <ul>
        <li>Scalable resources to handle traffic spikes</li>
        <li>Reduced infrastructure costs</li>
        <li>Improved collaboration and remote accessibility</li>
        <li>Enhanced security and disaster recovery options</li>
      </ul>

      <h2>Choosing the Right Cloud Model</h2>
      <p>Businesses must evaluate public, private, and hybrid cloud options based on their unique requirements, budget, and compliance needs.</p>

      <blockquote>
        "A well-architected cloud strategy not only supports growth but also drives innovation across your organization."
      </blockquote>

      <p>Proper planning, monitoring, and continuous optimization are key to getting the most out of your cloud infrastructure.</p>
    `,
  },
  {
    id: 6,
    title: "Digital Marketing Trends That Will Define 2024",
    excerpt:
      "Stay ahead of the curve with these emerging marketing strategies and tools.",
    date: "2024-02-15",
    readTime: "6 min read",
    category: "Marketing",
    image: "/blogs/blog-marketing.jpg",
    author: {
      name: "Sophia Lee",
      role: "Digital Marketing Expert",
      avatar: "SL",
    },
    content: `
      <p>Digital marketing is constantly evolving. Staying ahead requires understanding the latest trends, tools, and consumer behaviors.</p>
      
      <h2>Emerging Trends</h2>
      <ul>
        <li>AI-driven personalization and automation</li>
        <li>Short-form video content and social commerce</li>
        <li>Voice search optimization</li>
        <li>Data privacy and first-party data strategies</li>
      </ul>

      <h2>Strategies for 2024</h2>
      <p>Marketers need to embrace an omnichannel approach, leverage analytics to drive decisions, and experiment with new formats to engage audiences effectively.</p>

      <blockquote>
        "The brands that succeed in 2024 will be those that combine creativity with data-driven insights."
      </blockquote>

      <p>By adopting these trends and strategies, businesses can stay competitive and connect with customers in meaningful ways.</p>
    `,
  },
];
