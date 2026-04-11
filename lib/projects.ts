export interface Project {
    id: string;
    slug: string;
    title: string;
    description: string;
    longDescription: string;
    tech: string[];
    metrics: { label: string; value: string }[];
    color: string;
    textColor: string;
    link: string;
    deployedUrl?: string;
    category: string;
    problem: string;
    solution: string;
    outcomes: string[];
}

export const projects: Project[] = [
    {
        id: "001",
        slug: "documind-ai",
        title: "DOCUMIND RAG",
        description: "Engineered a semantic retrieval pipeline utilizing vector embeddings and LangChain for highly contextual document synthesis.",
        longDescription: "DocuMind-AI is an intelligent document assistant built with Python, LangChain, and Streamlit. It allows users to upload documents and query them through natural language — powered by RAG (Retrieval-Augmented Generation), semantic embeddings, and LLM-driven summarization.",
        tech: ["Python", "LangChain", "Streamlit", "RAG", "OpenAI"],
        metrics: [
            { label: "Pipeline", value: "RAG" },
            { label: "Search", value: "Semantic" },
            { label: "Interface", value: "Chat UI" },
        ],
        color: "bg-electric",
        textColor: "text-cream",
        link: "https://github.com/KaavyaGala546/DocuMind-AI",
        deployedUrl: "https://docu-mind-ai-kaavya.streamlit.app/",
        category: "AI / ML",
        problem: "Extracting meaningful answers from large documents is slow and tedious. Users needed an intuitive way to query documents conversationally without reading everything manually.",
        solution: "Built a RAG pipeline that chunks uploaded documents, creates semantic embeddings, and uses LangChain to orchestrate LLM-powered Q&A. Streamlit provides a clean, real-time chat interface.",
        outcomes: [
            "Real-time document Q&A through chat",
            "Semantic search with vector embeddings",
            "RAG pipeline for accurate, contextual answers",
            "Deployed on Streamlit Cloud",
        ],
    },
    {
        id: "002",
        slug: "property-listing",
        title: "REAL ESTATE ENGINE",
        description: "Architected a high-concurrency property discovery engine with a normalized MongoDB schema and custom filtering logic for sub-second query performance.",
        longDescription: "Property Listing is a production-grade real estate platform with a Next.js frontend, Express/Node.js backend, and MongoDB database. It features advanced filtering, interactive map integration, and a responsive design built for real-world use.",
        tech: ["Next.js", "Node.js", "Express", "MongoDB", "Tailwind"],
        metrics: [
            { label: "Stack", value: "Full-Stack" },
            { label: "Database", value: "MongoDB" },
            { label: "Design", value: "Responsive" },
        ],
        color: "bg-hotpink",
        textColor: "text-cream",
        link: "https://github.com/KaavyaGala546/property-listing",
        deployedUrl: "https://property-listing-amber.vercel.app",
        category: "Full-Stack",
        problem: "Most property listing demos are static pages with no real backend or search logic. Needed a full-stack solution with real data operations, filtering, and a polished UI.",
        solution: "Built a complete MERN-stack application with RESTful APIs, MongoDB data models for properties, advanced search/filter logic, and a responsive Next.js frontend with Tailwind CSS.",
        outcomes: [
            "Full CRUD operations with REST API",
            "Advanced search and filtering system",
            "Interactive map integration with Leaflet",
            "Deployed on Vercel with live demo",
        ],
    },
    {
        id: "003",
        slug: "ecommerce-nextjs",
        title: "HYPERLOCAL MARKETPLACE",
        description: "Developed a scalable D2C marketplace architecture with real-time inventory synchronization and high-velocity checkout flows.",
        longDescription: "A professional e-commerce web application built with Next.js and TypeScript. Features a structured product catalog, shopping cart, and responsive design following industry-standard architecture patterns.",
        tech: ["Next.js", "TypeScript", "React", "Tailwind", "Vercel"],
        metrics: [
            { label: "LOGIC", value: "Inventory Sync" },
            { label: "PAYMENTS", value: "Stripe" },
            { label: "STATUS", value: "0 → 1" },
        ],
        color: "bg-vivid",
        textColor: "text-cream",
        link: "https://github.com/KaavyaGala546/Ecommerce-nextjs",
        deployedUrl: "https://ecommerce-nextjs-ecru-two.vercel.app",
        category: "Web App",
        problem: "E-commerce frontends often lack proper architecture and type safety. Needed a clean, scalable implementation following modern React patterns.",
        solution: "Built a TypeScript-first Next.js application with proper component architecture, context-based state management for cart logic, and a responsive design system.",
        outcomes: [
            "Type-safe codebase with TypeScript",
            "Component-driven architecture",
            "Context-based cart state management",
            "Deployed with live demo on Vercel",
        ],
    },
    {
        id: "004",
        slug: "kaavya-portfolio",
        title: "PORTFOLIO(KINETIC UI)",
        description: "Created a high-performance UI portfolio utilizing motion primitives and reactive design patterns for an immersive brand experience.",
        longDescription: "A modern developer portfolio built with React, TypeScript, and Vite. Features a clean, responsive design that highlights projects, technical skills, and an engineering-first mindset. Deployed on Vercel.",
        tech: ["React", "TypeScript", "Vite", "Tailwind", "Vercel"],
        metrics: [
            { label: "PERF", value: "60FPS" },
            { label: "MOTION", value: "GSAP" },
            { label: "PHYSICS", value: "Bezier" },
        ],
        color: "bg-acid",
        textColor: "text-ink",
        link: "https://github.com/KaavyaGala546/KaavyaGala-Portfolio",
        deployedUrl: "https://kaavya-portfolio.vercel.app/",
        category: "Web",
        problem: "Needed a professional portfolio that goes beyond templates — one that reflects a system-focused engineering approach and showcases real projects with depth.",
        solution: "Built a custom React + TypeScript portfolio with Vite for fast builds, Tailwind for styling, and a structured component architecture. Designed for clarity and impact.",
        outcomes: [
            "Fast builds with Vite",
            "Type-safe React components",
            "Responsive, modern design",
            "Deployed on Vercel with live demo",
        ],
    },
    {
        id: "005",
        slug: "cold-case",
        title: "FORENSIC ANALYSIS APP",
        description: "Designed an investigative logic engine for forensic data synthesis and hierarchical evidence tracking.",
        longDescription: "Cold Case is a TypeScript project focused on structured analysis and logical problem-solving. Built as an exploration of applying engineering principles to investigative challenges.",
        tech: ["TypeScript", "Node.js", "Logic", "Analysis"],
        metrics: [
            { label: "GOAL", value: "Data Integrity" },
            { label: "LOGIC", value: "Pattern Rec." },
        ],
        color: "bg-ink",
        textColor: "text-cream",
        link: "https://github.com/KaavyaGala546/cold_case",
        category: "Engineering",
        problem: "Wanted to apply structured engineering thinking to complex analysis problems, using TypeScript for type safety and logical rigor.",
        solution: "Built a TypeScript-based system that applies systematic, data-driven methods to investigative analysis — demonstrating clean architecture and logical problem-solving.",
        outcomes: [
            "Type-safe analytical framework",
            "Structured problem-solving approach",
            "Clean TypeScript architecture",
            "Engineering-driven analysis",
        ],
    },
    {
        id: "006",
        slug: "ultron-agency",
        title: "ULTRON AGENTIC FW",
        description: "Architected a modular multi-agent orchestration framework for autonomous task execution and state management.",
        longDescription: "ULTRON_AGENCY is a system-first AI framework designed for complex agency operations. Built with Python, it focuses on modular agent communication and automated task execution.",
        tech: ["Python", "OpenAI", "NLP", "AI Agents"],
        metrics: [
            { label: "ORCHESTRATION", value: "Multi-Agent" },
            { label: "LOGIC", value: "Autonomous" },
            { label: "STATUS", value: "Open-Source" },
        ],
        color: "bg-purple",
        textColor: "text-cream",
        link: "https://github.com/KaavyaGala546/ULTRON_AGENCY",
        category: "AI / Automation",
        problem: "Orchestrating multiple AI agents for agency work is complex. Needed a clean, Pythonic way to manage agent state and communication.",
        solution: "Built a modular agency framework that allows for agent instantiation, role definition, and sequential task solving using state-of-the-art LLMs.",
        outcomes: [
            "Multi-agent orchestration system",
            "Pythonic state management",
            "Automated agency workflows",
            "Clean AI infrastructure",
        ],
    },
    {
        id: "007",
        slug: "solar-system-simulation",
        title: "3D CELESTIAL ENGINE",
        description: "Implemented a high-performance WebGL visualization engine with physics-based orbital mechanics and custom GLSL shaders.",
        longDescription: "Solar-System-Simulation is a high-performance 3D visualization project built with modern web technologies. It features accurate orbital paths, zoomable planets, and a premium glassmorphic UI.",
        tech: ["Three.js", "WebGL", "GSAP", "CSS"],
        metrics: [
            { label: "PERFORMANCE", value: "60 FPS" },
            { label: "RENDER", value: "WebGL" },
            { label: "INTERACTION", value: "Ray-Casting" },
        ],
        color: "bg-electric",
        textColor: "text-cream",
        link: "https://github.com/KaavyaGala546/Solar-System-Simulation",
        deployedUrl: "https://solar-system-replica.vercel.app",
        category: "3D / Web",
        problem: "Most solar system demos are simple 2D circles. Needed a high-fidelity 3D experience that allows users to explore planets with fluid animations.",
        solution: "Implemented a Three.js scene with custom shaders for planetary textures, GSAP for smooth orbital transitions, and a premium glassmorphism overlay for planetary info.",
        outcomes: [
            "Interactive 3D orbital physics",
            "Premium glassmorphic UI",
            "Detailed planetary exploration",
            "High-performance WebGL rendering",
        ],
    },
    {
        id: "008",
        slug: "calcpro",
        title: "SCIENTIFIC LOGIC APP",
        description: "Developed a mathematically rigorous logic engine with modular ES architecture and high-precision calculation history.",
        longDescription: "CalcPro is a next-generation calculator application built with a focus on ES modular architecture and mathematical rigor. Featuring scientific mode and a sleek, neo-brutalist interface.",
        tech: ["JavaScript", "Math.js", "CSS3", "Logic"],
        metrics: [
            { label: "PRECISION", value: "BigInt" },
            { label: "ARCHITECTURE", value: "Modular" },
            { label: "GOAL", value: "High-Precision" },
        ],
        color: "bg-vivid",
        textColor: "text-cream",
        link: "https://github.com/KaavyaGala546/CalcPro",
        deployedUrl: "https://modern-calculator-wihz.vercel.app",
        category: "Utility",
        problem: "Web calculators are often buggy or lack scientific depth. Needed a modular, type-safe (mental) implementation with reliable math logic.",
        solution: "Built a scientific calculator using Math.js for robust operations, a clean ES module system for logic, and a responsive, high-contrast UI.",
        outcomes: [
            "Robust scientific math engine",
            "Calculation history persistence",
            "Modular ES6+ architecture",
            "Responsive engineering-first UI",
        ],
    },
    {
        id: "009",
        slug: "responsive-website",
        title: "FLUID UI DESIGN SYSTEM",
        description: "Engineered a production-ready design system focusing on multi-breakpoint fluid layouts and atomic CSS optimization.",
        longDescription: "Responsive-Website is a demonstration of pure frontend excellence, focusing on multi-device breakpoints, performance, and modern layout systems like Grid and Flexbox.",
        tech: ["HTML5", "CSS3", "JavaScript", "Responsive"],
        metrics: [
            { label: "OPTIMIZATION", value: "Zero Bloat" },
            { label: "STRATEGY", value: "Mobile-First" },
            { label: "LIGHTHOUSE", value: "100 Score" },
        ],
        color: "bg-hotpink",
        textColor: "text-cream",
        link: "https://github.com/KaavyaGala546/Responsive-Website",
        deployedUrl: "https://capstone-kappa-ebon.vercel.app/",
        category: "Frontend",
        problem: "Achieving true pixel-perfection across all devices requires a deep understanding of CSS. Needed a demonstration of modern responsive design patterns.",
        solution: "Built a clean, professional landing page using modern CSS layout techniques (Grid/Flexbox) with a mobile-first approach and smooth interactions.",
        outcomes: [
            "Multi-device pixel perfection",
            "Optimized performance metrics",
            "Modern CSS pattern application",
            "Clean, semantic frontend code",
        ],
    },
];


export function getProjectBySlug(slug: string): Project | undefined {
    return projects.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
    return projects.map((p) => p.slug);
}
