"use client";

import { BentoGrid, BentoGridItem } from "@/components/ui/BentoGrid";
import { CircuitPattern, GridDots, CrossHatch } from "@/components/ui/Decorative";
import LiveTerminal from "@/components/ui/LiveTerminal";
import { Smartphone, Bot, Shield, Terminal, Code2, Zap, ArrowUpRight, Github, Mail, ChevronDown, Quote, Star, Linkedin, Layers, Rocket, Diamond, Users, Briefcase } from "lucide-react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import GitHubActivity from "@/components/ui/GitHubActivity";

/* ─── Animated Counter Hook ─── */
function useCounter(end: number, duration: number = 2000, startCounting: boolean = false) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!startCounting) return;
        let startTime: number | null = null;
        let animationFrame: number;

        const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) {
                animationFrame = requestAnimationFrame(step);
            }
        };

        animationFrame = requestAnimationFrame(step);
        return () => cancelAnimationFrame(animationFrame);
    }, [end, duration, startCounting]);

    return count;
}

/* ─── Animated Stat Component ─── */
function AnimatedStat({ value, suffix = "", label }: { value: number; suffix?: string; label: string }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const count = useCounter(value, 2000, isInView);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="neo-card bg-ink text-cream p-4 md:p-6 text-center relative overflow-hidden neo-glow"
        >
            <div className="relative z-10">
                <div className="font-heading font-bold text-3xl md:text-4xl text-acid">
                    {count}{suffix}
                </div>
                <div className="font-mono text-[0.6rem] font-bold uppercase tracking-widest mt-1 text-cream/50">
                    {label}
                </div>
            </div>
        </motion.div>
    );
}

/* ─── Data ─── */
const techLogos = [
    "NEXT.JS 15", "TYPESCRIPT", "PYTHON", "OPENAI / GPT-4", "LANGCHAIN", "RAG PIPELINES", "SWIFTUI", "POSTGRESQL", "MONGODB", "TABLEAU", "JUPYTER", "FASTAPI", "STREAMLIT", "VERCEL", "GSAP", "React",
];

const testimonials = [
    {
        quote: "Kaavya stands out for his precision, professionalism, and strong sense of ownership. He approaches every task with discipline, respects timelines, and delivers with consistency. His work ethic, attention to detail, and commitment to quality make him highly reliable and easy to trust.",
        author: "Business Client",
        role: "Company Director",
        accent: "bg-acid",
    },
    {
        quote: "Kaavya's ability to go from concept to a multi-channel deployment overnight is a complete game-changer. Fast, clean, and architectured for scale—he is an engineer who truly thinks like a founder.",
        author: "Client Feedback",
        role: "Startup Founder",
        accent: "bg-electric",
    },
    {
        quote: "Working with Kaavya is like having a systems architect and a lead developer in one. Every solution is grounded in first principles and optimized for extreme performance.",
        author: "Client Feedback",
        role: "CTO, Tech Company",
        accent: "bg-hotpink",
    },
];

/* ─── Stagger Animations ─── */
const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
};

/* ─── Konami Code Easter Egg ─── */
function useKonamiCode(callback: () => void) {
    const sequence = [
        "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
        "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight",
        "b", "a",
    ];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (e.key === sequence[index]) {
                const next = index + 1;
                if (next === sequence.length) {
                    callback();
                    setIndex(0);
                } else {
                    setIndex(next);
                }
            } else {
                setIndex(0);
            }
        };
        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, [index, callback]);
}

export default function Home() {
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
    const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    const [konamiActive, setKonamiActive] = useState(false);
    useKonamiCode(() => setKonamiActive(true));

    return (
        <div className={`min-h-screen bg-cream pb-24 ${konamiActive ? "hue-rotate-180 transition-all duration-1000" : ""}`}>

            {/* ══════════════════════════════════════
                STATUS BAR
               ══════════════════════════════════════ */}
            <div className="w-full bg-ink border-b-[3px] border-ink py-2 px-4 md:px-8 flex justify-between items-center relative z-20">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-acid animate-pulse-dot" />
                    <span className="font-mono text-xs font-bold text-cream/50 uppercase tracking-widest">STATUS: ACTIVELY_SEEKING_INTERNSHIPS // PPO_READY</span>
                </div>
                <div className="flex items-center gap-4">
                    <span className="font-mono text-xs font-bold text-cream/30 tracking-widest uppercase">LOCATED: GMT+5:30</span>
                </div>
            </div>

            {/* ══════════════════════════════════════
                TOP MARQUEE
               ══════════════════════════════════════ */}
            <div className="w-full bg-acid border-b-[3px] border-ink py-2 overflow-hidden animate-glitch">
                <div className="marquee-container font-mono font-bold text-ink uppercase tracking-widest text-xs marquee-mask">
                    <div className="marquee-content animate-marquee">
                        <span className="px-4 md:px-6">[SYSTEM_LOG]: PRODUCT ENGINEER&nbsp;///&nbsp;</span>
                        <span className="px-4 md:px-6">AGENTIC SYSTEMS ARCHITECT&nbsp;///&nbsp;</span>
                        <span className="px-4 md:px-6">LLM OPS & RAG SPECIALIST&nbsp;///&nbsp;</span>
                        <span className="px-4 md:px-6">PRODUCT-MINDED ENGINEER&nbsp;///&nbsp;</span>
                        <span className="px-4 md:px-6">SYSTEMS DESIGNER&nbsp;///&nbsp;</span>
                        <span className="px-4 md:px-6">OPTIMIZATION-FIRST DEVELOPER&nbsp;///&nbsp;</span>
                        <span className="px-4 md:px-6">FOUNDING ENGINEER @ BOCADOH&nbsp;///&nbsp;</span>
                        <span className="px-4 md:px-6">● STATUS: ACTIVE&nbsp;///&nbsp;</span>
                    </div>
                    <div className="marquee-content animate-marquee" aria-hidden="true">
                        <span className="px-4 md:px-6">[SYSTEM_LOG]: PRODUCT ENGINEER&nbsp;///&nbsp;</span>
                        <span className="px-4 md:px-6">AGENTIC SYSTEMS ARCHITECT&nbsp;///&nbsp;</span>
                        <span className="px-4 md:px-6">LLM OPS & RAG SPECIALIST&nbsp;///&nbsp;</span>
                        <span className="px-4 md:px-6">PRODUCT-MINDED ENGINEER&nbsp;///&nbsp;</span>
                        <span className="px-4 md:px-6">SYSTEMS DESIGNER&nbsp;///&nbsp;</span>
                        <span className="px-4 md:px-6">OPTIMIZATION-FIRST DEVELOPER&nbsp;///&nbsp;</span>
                        <span className="px-4 md:px-6">FOUNDING ENGINEER @ BOCADOH&nbsp;///&nbsp;</span>
                        <span className="px-4 md:px-6">● STATUS: ACTIVE&nbsp;///&nbsp;</span>
                    </div>
                </div>
            </div>

            {/* ══════════════════════════════════════
                HERO SECTION (Parallax)
               ══════════════════════════════════════ */}
            <section ref={heroRef} className="relative min-h-[80vh] md:min-h-screen flex items-center overflow-hidden">
                {/* Animated background blobs */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute -top-20 -right-20 w-72 md:w-[500px] h-72 md:h-[500px] bg-acid/10 rounded-full blur-3xl animate-blob" />
                    <div className="absolute bottom-10 -left-20 w-60 md:w-[400px] h-60 md:h-[400px] bg-electric/10 rounded-full blur-3xl animate-blob" style={{ animationDelay: "2s" }} />
                    <div className="absolute top-1/3 left-1/3 w-48 md:w-[300px] h-48 md:h-[300px] bg-hotpink/8 rounded-full blur-3xl animate-blob" style={{ animationDelay: "4s" }} />
                </div>

                <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24 w-full relative z-10">

                    <motion.div style={{ y: heroY, opacity: heroOpacity }}>
                        <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
                            <motion.div
                                initial={{ opacity: 0, x: -60 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                            >
                                <div className="font-mono text-xs md:text-sm font-bold uppercase tracking-[0.3em] text-ink/50 mb-4">
                                    Portfolio / {new Date().getFullYear()}
                                </div>
                                <h1 className="text-5xl sm:text-7xl md:text-[8rem] lg:text-[10rem] font-heading font-bold text-ink leading-[0.85] tracking-tighter uppercase">
                                    Kaavya<br />
                                    <span className="relative inline-block">
                                        Gala
                                        <span className="absolute -right-2 -top-2 md:-right-5 md:-top-5 w-5 h-5 md:w-8 md:h-8 bg-acid border-[3px] border-ink animate-spin-slow" />
                                    </span>
                                </h1>
                                <p className="font-mono text-sm md:text-lg font-bold text-ink/60 mt-6 max-w-xl leading-relaxed">
                                    Building production-grade AI systems and full-stack architectures with the speed of a startup and the precision of a senior engineer. Currently a Sophomore, operating at a Senior level.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="flex flex-col items-start md:items-end gap-4"
                            >
                                <a
                                    href="/contact"
                                    className="neo-card bg-ink text-cream px-6 py-3 font-heading font-bold text-sm uppercase tracking-wider flex items-center gap-2 hover:bg-acid hover:text-ink transition-all group neo-glow"
                                >
                                    Initialize Contact
                                    <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                </a>
                                <div className="flex items-center gap-3 text-ink/30">
                                    <div className="w-2 h-2 bg-acid animate-pulse-dot" />
                                    <span className="font-mono text-xs font-bold uppercase tracking-wider">Available for hire</span>
                                </div>
                            </motion.div>
                        </header>

                        {/* Scroll indicator */}
                        <motion.div
                            animate={{ y: [0, 8, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            className="mt-12 md:mt-20 flex justify-center"
                        >
                            <ChevronDown size={24} className="text-ink/20" />
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* ══════════════════════════════════════
                STATS STRIP
               ══════════════════════════════════════ */}
            <section className="max-w-7xl mx-auto px-4 md:px-8 -mt-4 mb-12 md:mb-20 relative z-20">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <AnimatedStat value={10} suffix="+" label="Projects Developed" />
                    <AnimatedStat value={1} suffix="+" label="Start-ups Built" />
                    <AnimatedStat value={100} suffix="K+" label="Lines of Code" />
                    <AnimatedStat value={3} suffix="+" label="Years Building" />
                </div>
            </section>

            {/* ══════════════════════════════════════
                ABOUT / BIO
               ══════════════════════════════════════ */}
            <motion.section
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className="max-w-7xl mx-auto px-4 md:px-8 mb-12 md:mb-20"
            >
                <div className="grid md:grid-cols-5 gap-5">
                    {/* Photo card */}
                    <div className="md:col-span-2 neo-card bg-acid p-0 relative overflow-hidden min-h-[300px] md:min-h-[400px]">
                        <Image
                            src="/headshot.png"
                            alt="Kaavya Gala"
                            fill
                            className="object-cover object-center"
                            sizes="(max-width: 768px) 100vw, 40vw"
                            priority
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-ink/80 to-transparent p-6">
                            <div className="font-mono text-xs font-bold text-cream/60 tracking-widest uppercase">BASED IN INDIA (MUMBAI)</div>
                        </div>
                        {/* Avatar Badge */}
                        <div className="absolute top-4 right-4 z-20 flex items-center gap-2 bg-ink/90 backdrop-blur-sm border-2 border-acid px-3 py-1.5 rounded-full neo-glow animate-glow-pulse shadow-neo-sm">
                            <Diamond size={14} className="text-acid fill-acid/20" />
                            <span className="font-mono text-[10px] md:text-[11px] font-black text-cream uppercase tracking-tighter">SOPHOMORE // SENIOR_OPS</span>
                        </div>
                    </div>

                    {/* Bio card */}
                    <div className="md:col-span-3 neo-card bg-cream p-6 md:p-8 md:pb-6 flex flex-col justify-between relative overflow-hidden">
                        <CrossHatch className="absolute top-0 right-0 w-32 h-32 text-ink" />
                        <div className="relative z-10">
                            <div className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-ink/40 mb-3">About</div>
                            <h2 className="font-heading font-bold text-3xl md:text-4xl uppercase tracking-tight text-ink mb-6 leading-tight">
                                The Applied
                                <br />Engineer</h2>
                            <p className="font-mono text-sm md:text-base font-bold text-ink/70 leading-relaxed mb-4">
                                I architect systems from first principles—grounded in logic, shaped by high-performance benchmarks, and driven by extreme execution velocity. My focus is on bridging the gap between raw AI research and production-grade, user-centric applications.
                            </p>
                            <p className="font-mono text-sm md:text-base font-bold text-ink/70 leading-relaxed mb-4">
                                I don’t just write code; I design scalable infrastructure. My stack is centered around Type-Safe Fullstack Architectures and Agentic AI Orchestration. Whether I’m optimizing RAG pipelines for sub-second latency or building reactive interfaces in SwiftUI, I think in terms of edge cases, system bottlenecks, and global scalability.
                            </p>

                            <p className="font-mono text-sm md:text-base font-bold text-ink/70 leading-relaxed">
                                I am not here to prototype ideas. I build self-sustaining products—currently scaling Bocadoh from an architectural vision to a market-ready reality.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-3 mt-6 pt-4 border-t-[3px] border-ink/10 relative z-10">
                            <a href="https://www.linkedin.com/in/kaavya-gala-46602221a/" target="_blank" className="neo-pill bg-ink text-cream hover:bg-electric hover:text-cream flex items-center gap-2 border-2 border-acid/60 shadow-[0_0_15px_rgba(204,255,0,0.15)] ring-1 ring-acid/20">
                                <Linkedin size={14} className="text-acid" /> LinkedIn
                            </a>
                            <a href="https://github.com/KaavyaGala546" target="_blank" className="neo-pill bg-ink text-cream hover:bg-acid hover:text-ink flex items-center gap-2">
                                <Github size={14} /> GitHub
                            </a>
                            <a href="mailto:kaavyagala@gmail.com" className="neo-pill bg-ink text-cream hover:bg-vivid hover:text-cream flex items-center gap-2">
                                <Mail size={14} /> Email
                            </a>
                        </div>
                        <div className="mt-4 font-mono text-[10px] md:text-xs font-bold text-ink/30 uppercase tracking-widest relative z-10 space-y-1">
                            <div>[AVAILABILITY]: GLOBAL_REMOTE</div>
                            <div>[TIMEZONE]: GMT+5:30</div>
                            <div>[STATUS]: OPEN_TO_HIGH_IMPACT_ROLES</div>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* ══════════════════════════════════════
                LIVE PULSE & SYSTEM STATUS
               ══════════════════════════════════════ */}
            <section className="max-w-7xl mx-auto px-4 md:px-8 mb-12 md:mb-20">
                <GitHubActivity />
                
                <div className="mt-12 md:mt-20">
                    <div className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-ink/40 mb-2">Live Feed</div>
                    <h2 className="font-heading font-bold text-2xl md:text-3xl uppercase tracking-tight text-ink mb-4">System Status</h2>
                    <LiveTerminal />
                </div>
            </section>

            {/* ══════════════════════════════════════
                TECH LOGO MARQUEE
               ══════════════════════════════════════ */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 mb-12 md:mb-20">
                <div className="border-[3px] border-ink bg-ink py-4 overflow-hidden">
                    <div className="marquee-container font-mono font-bold text-cream/40 uppercase tracking-[0.3em] text-xs md:text-sm marquee-mask">
                        <div className="marquee-content animate-marquee" style={{ animationDuration: "30s" }}>
                            {techLogos.map((logo) => (
                                <span key={logo} className="px-6 md:px-8 hover:text-acid transition-colors flex items-center whitespace-nowrap">
                                    {logo}
                                    <span className="ml-6 md:ml-8 text-acid/30 font-bold tracking-normal">{"///"}</span>
                                </span>
                            ))}
                        </div>
                        <div className="marquee-content animate-marquee" aria-hidden="true" style={{ animationDuration: "30s" }}>
                            {techLogos.map((logo) => (
                                <span key={`dup-${logo}`} className="px-6 md:px-8 flex items-center whitespace-nowrap">
                                    {logo}
                                    <span className="ml-6 md:ml-8 text-acid/30 font-bold tracking-normal">{"///"}</span>
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* ══════════════════════════════════════
                BENTO GRID — PROJECTS
               ══════════════════════════════════════ */}
            <section className="max-w-7xl mx-auto px-4 md:px-8 mb-12 md:mb-20">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="flex items-end justify-between mb-6"
                >
                    <div>
                        <div className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-ink/40 mb-2">Featured</div>
                        <h2 className="font-heading font-bold text-3xl md:text-5xl uppercase tracking-tight text-ink">Selected Work</h2>
                    </div>
                    <a href="/work" className="font-heading font-bold uppercase tracking-tight text-ink hover:text-electric transition-colors flex items-center gap-2 group text-xl">
                        Full Archive <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* DocuMind AI */}
                    <BentoGridItem
                        index={0}
                        className="aspect-[4/3]"
                        title="DOCUMIND RAG"
                        description="SEMANTIC RAG // LLM"
                        bgColor="bg-electric"
                        textColor="text-cream"
                        icon={<Bot size={36} className="text-cream" />}
                        href="/work/documind-ai"
                    />

                    {/* Property Listing */}
                    <BentoGridItem
                        index={1}
                        className="aspect-[4/3]"
                        title="REAL ESTATE ENGINE"
                        description="SEARCH ENGINE // ARCH"
                        bgColor="bg-hotpink"
                        textColor="text-cream"
                        icon={<Layers size={36} className="text-cream" />}
                        href="/work/property-listing"
                    />

                    {/* E-Commerce */}
                    <BentoGridItem
                        index={2}
                        className="aspect-[4/3]"
                        title="HYPERLOCAL MARKETPLACE"
                        description="D2C // COMMERCE ENGINE"
                        bgColor="bg-vivid"
                        textColor="text-cream"
                        icon={<Code2 size={28} className="text-cream" />}
                        href="/work/ecommerce-nextjs"
                    />

                    {/* KaavyaGala Portfolio */}
                    <BentoGridItem
                        index={3}
                        className="aspect-[4/3]"
                        title="PORTFOLIO(KINETIC UI)"
                        description="MOTION // LUXURY UX"
                        bgColor="bg-acid"
                        textColor="text-ink"
                        icon={<Code2 size={28} className="text-ink" />}
                        href="/work/kaavya-portfolio"
                    />

                    {/* Cold Case */}
                    <BentoGridItem
                        index={4}
                        className="aspect-[4/3]"
                        title="LOGIC ENGINE"
                        description="DATA // FORENSIC ANALYSIS"
                        bgColor="bg-[#8B5CF6]"
                        textColor="text-cream"
                        icon={<Shield size={28} className="text-cream" />}
                        href="/work/cold-case"
                    />

                    {/* Active Development Card */}
                    <BentoGridItem
                        index={5}
                        className="aspect-[4/3] border-dashed border-[3px] border-acid/60"
                        title="Active Development"
                        description="System architecting in progress"
                        bgColor="bg-white"
                        textColor="text-ink"
                        icon={
                            <div className="flex items-center gap-3">
                                <div className="w-3 h-3 bg-acid rounded-full animate-pulse shadow-[0_0_10px_rgba(204,255,0,0.8)]" />
                                <span className="font-mono text-[10px] text-ink/60 font-bold tracking-widest uppercase">Live_Feed</span>
                            </div>
                        }
                    />
                </div>
            </section>

            {/* ══════════════════════════════════════
                PHILOSOPHY / APPROACH
               ══════════════════════════════════════ */}
            <motion.section
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className="max-w-7xl mx-auto px-4 md:px-8 mb-12 md:mb-20"
            >
                <div className="neo-card bg-ink text-cream p-6 md:p-12 relative overflow-hidden gradient-top-accent">
                    <CircuitPattern className="absolute top-0 right-0 w-48 md:w-80 h-48 md:h-80 text-cream/5" />
                    <GridDots className="absolute bottom-0 left-0 w-40 h-40 text-cream/5" />
                    {/* Subtle gradient glow */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-electric/5 rounded-full blur-3xl pointer-events-none" />

                    <div className="relative z-10 grid md:grid-cols-2 gap-8 md:gap-16">
                        <div>
                            <div className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-cream/30 mb-3">Philosophy</div>
                            <h2 className="font-heading font-bold text-3xl md:text-5xl uppercase tracking-tight text-cream leading-tight mb-6">
                                Code. Scale.<br /><span className="gradient-text-acid">Entrepreneur.</span>
                            </h2>
                            <p className="font-mono text-sm font-bold text-cream/60 leading-relaxed mb-6">
                                Building is more than writing code—it’s about creating systems that solve real problems. Whether I’m training a deep learning model or scaling the infrastructure for a consumer brand like BOCADOH, I focus on the bridge between high-level logic and market-ready products. I use AI to automate the mundane so I can focus on the complex, moving from architecture to production without the friction of traditional development cycles.
                            </p>
                            <div className="flex items-center gap-3 p-4 border-[3px] border-cream/10">
                                <div className="w-3 h-3 bg-acid animate-pulse-dot flex-shrink-0" />
                                <span className="font-mono text-xs font-bold text-cream/40 uppercase tracking-wider">STATUS: SCALING BOCADOH // OPEN FOR GLOBAL COLLAB</span>
                            </div>
                        </div>
                        <div className="space-y-4">
                            {[
                                { num: "01", title: "DISCOVERY", desc: "Defining the objective, whether it’s a neural network architecture or a business growth strategy." },
                                { num: "02", title: "ARCHITECT", desc: "Mapping data structures and full-stack environments. Real engineering, from backend logic to creative media." },
                                { num: "03", title: "DEPLOY", desc: "Launching projects into the wild. Gathering real-world data and user feedback to validate the thesis." },
                                { num: "04", title: "ITERATE", desc: "Closing the feedback loop and performance auditing. Optimizing performance, scaling the stack, and expanding the brand reach." },
                            ].map((step, idx) => (
                                <motion.div
                                    key={step.num}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1, duration: 0.4 }}
                                    className="flex gap-4 items-start group"
                                >
                                    <div className="font-heading font-bold text-2xl md:text-3xl text-acid w-12 flex-shrink-0 group-hover:translate-x-1 transition-transform">{step.num}</div>
                                    <div className="border-l-[3px] border-cream/10 pl-4 group-hover:border-acid/40 transition-colors">
                                        <div className="font-heading font-bold text-lg uppercase tracking-tight">{step.title}</div>
                                        <div className="font-mono text-xs font-bold text-cream/40 mt-1">{step.desc}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* ══════════════════════════════════════
                TESTIMONIALS / SOCIAL PROOF
               ══════════════════════════════════════ */}
            <motion.section
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="max-w-7xl mx-auto px-4 md:px-8 mb-12 md:mb-20"
            >
                <div className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-ink/40 mb-2">Reputation</div>
                <h2 className="font-heading font-bold text-3xl md:text-5xl uppercase tracking-tight text-ink mb-8">What People Say</h2>

                <div className="grid md:grid-cols-3 gap-5">
                    {testimonials.map((t, i) => (
                        <motion.div key={i} variants={fadeUp}>
                            <div className="neo-card bg-cream p-6 md:p-8 h-full flex flex-col relative overflow-hidden neo-glow group">
                                {/* Accent corner */}
                                <div className={`absolute top-0 left-0 w-16 h-16 ${t.accent} opacity-[0.08] group-hover:opacity-[0.15] transition-opacity`} />
                                <div className="relative z-10 flex flex-col h-full">
                                    <Quote size={24} className="text-ink/10 mb-4 flex-shrink-0" />
                                    <p className="font-mono text-sm font-bold text-ink/70 leading-relaxed mb-6 flex-grow">
                                        &ldquo;{t.quote}&rdquo;
                                    </p>
                                    <div className="border-t-[3px] border-ink/10 pt-4">
                                        <div className="font-heading font-bold text-base uppercase tracking-tight">{t.author}</div>
                                        <div className="font-mono text-[0.65rem] font-bold text-ink/40 uppercase tracking-wider">{t.role}</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* ══════════════════════════════════════
                SERVICES PREVIEW
               ══════════════════════════════════════ */}
            <motion.section
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="max-w-7xl mx-auto px-4 md:px-8 mb-12 md:mb-20"
            >
                <div className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-ink/40 mb-2">THE ARCHIVE</div>
                <div className="flex items-end justify-between mb-6">
                    <h2 className="font-heading font-bold text-3xl md:text-5xl uppercase tracking-tight text-ink">THE TRAJECTORY</h2>
                    <a href="/trajectory" className="font-heading font-bold uppercase tracking-tight text-ink hover:text-vivid transition-colors flex items-center gap-2 group text-xl">
                        DETAILS <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                </div>

                <div className="grid md:grid-cols-3 gap-5">
                    <motion.div variants={fadeUp}>
                        <div className="neo-card bg-vivid text-cream p-6 md:p-8 h-full relative overflow-hidden group gradient-top-accent neo-glow flex flex-col">
                            <GridDots className="absolute top-0 right-0 w-24 h-24 text-cream/10" />
                            <div className="relative z-10 flex flex-col h-full text-left">
                                <div className="flex-grow flex flex-col">
                                    <Briefcase size={32} className="mb-4 text-cream" />
                                    <h3 className="font-heading font-bold text-2xl md:text-3xl uppercase tracking-tight mb-3">FOUNDER // BOCADOH</h3>
                                    <p className="font-mono text-sm font-bold opacity-70 leading-relaxed mb-6">
                                        Achievement: Pioneering a D2C healthy snack brand. Developing first-of-its-kind fruit-flavoured coconut chips. Leading GTM strategy and product R&D.
                                    </p>
                                </div>
                                <div className="mt-auto">
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {["D2C_STRATEGY", "PRODUCT_R&D", "SUPPLY_CHAIN", "GTM"].map((t) => (
                                            <span key={t} className="px-2 py-1 border-2 border-cream/30 font-mono text-[0.6rem] font-bold uppercase">{t}</span>
                                        ))}
                                    </div>
                                    <a href="/trajectory" className="inline-flex items-center gap-2 font-mono text-sm font-bold uppercase tracking-wider group-hover:translate-x-1 transition-transform text-cream">
                                        Explore Business <ArrowUpRight size={14} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div variants={fadeUp}>
                        <div className="neo-card bg-acid text-ink p-6 md:p-8 h-full relative overflow-hidden group gradient-top-accent neo-glow flex flex-col">
                            <CrossHatch className="absolute top-0 right-0 w-24 h-24 text-ink opacity-50" />
                            <div className="relative z-10 flex flex-col h-full text-left">
                                <div className="flex-grow flex flex-col">
                                    <Users size={32} className="mb-4 text-ink" />
                                    <h3 className="font-heading font-bold text-2xl md:text-3xl uppercase tracking-tight mb-3">PRESIDENT // E-CELL</h3>
                                    <p className="font-mono text-sm font-bold opacity-70 leading-relaxed mb-4">
                                        Achievement: Orchestrated entrepreneurship culture for a 600+ student community. Executed 20+ innovation events and managed cross-functional teams.
                                    </p>
                                </div>
                                <div className="mt-auto">
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {["600+_COMMUNITY", "LEADERSHIP", "STRATEGY", "OPS"].map((t) => (
                                            <span key={t} className="px-2 py-1 border-2 border-ink/30 font-mono text-[0.6rem] font-bold uppercase">{t}</span>
                                        ))}
                                    </div>
                                    <a href="/trajectory" className="inline-flex items-center gap-2 font-mono text-sm font-bold uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                                        View Initiatives <ArrowUpRight size={14} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div variants={fadeUp}>
                        <div className="neo-card bg-electric text-cream p-6 md:p-8 h-full relative overflow-hidden group gradient-top-accent neo-glow-blue flex flex-col">
                            <CircuitPattern className="absolute bottom-0 left-0 w-32 h-32 text-cream/10" />
                            <div className="relative z-10 flex flex-col h-full text-left">
                                <div className="flex-grow flex flex-col">
                                    <Terminal size={32} className="mb-4 text-acid" />
                                    <h3 className="font-heading font-bold text-2xl md:text-3xl uppercase tracking-tight mb-3">LEAD // TECH INITIATIVES</h3>
                                    <p className="font-mono text-sm font-bold opacity-70 leading-relaxed mb-4">
                                        Achievement: Initiated &quot;DCode&quot; open-source platform and architected the official university fest portal for a 2000+ student body. Successfully contributed to global open-source initiatives during Hacktoberfest.
                                    </p>
                                </div>
                                <div className="mt-auto">
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {["OPEN_SOURCE", "WEB_ARCH", "2000+_USERS", "HACKTOBERFEST_24", "UI/UX"].map((t) => (
                                            <span key={t} className="px-2 py-1 border-2 border-cream/30 font-mono text-[0.6rem] font-bold uppercase">{t}</span>
                                        ))}
                                    </div>
                                    <a href="https://www.holopin.io/@kaavyagala546#" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-mono text-sm font-bold uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                                        VIEW CREDENTIALS <ArrowUpRight size={14} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.section>

            {/* ══════════════════════════════════════
                CTA SECTION
               ══════════════════════════════════════ */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="max-w-7xl mx-auto px-4 md:px-8 mb-12"
            >
                <div className="neo-card bg-hotpink text-cream p-8 md:p-12 text-center relative overflow-hidden gradient-top-accent">
                    <GridDots className="absolute inset-0 w-full h-full text-cream/5" />
                    {/* Gradient glow */}
                    <div className="absolute top-0 left-1/4 w-1/2 h-32 bg-acid/10 blur-3xl pointer-events-none" />
                    <div className="relative z-10">
                        <h2 className="font-heading font-bold text-3xl md:text-6xl uppercase tracking-tight mb-4">Initiate Collaboration</h2>
                        <p className="font-mono text-sm md:text-base font-bold opacity-80 mb-4 max-w-xl mx-auto">
                            Currently accepting high-impact roles, agentic AI builds, and founding-team positions. If you&apos;re looking for high-velocity execution and zero-bloat architecture, let&apos;s talk.
                            <br /><br />
                            No BS. Just results.
                        </p>
                        <div className="flex items-center justify-center gap-2 mb-8 text-cream/60">
                            <Star size={14} className="text-acid" />
                            <span className="font-mono text-xs font-bold uppercase tracking-wider">Estimated Lead Time: 2 Weeks</span>
                            <Star size={14} className="text-acid" />
                        </div>
                        <a
                            href="/contact"
                            className="inline-block bg-cream text-ink font-heading font-bold text-lg uppercase tracking-wider px-8 py-4 border-[3px] border-ink shadow-neo hover:shadow-none hover:translate-x-[6px] hover:translate-y-[6px] transition-all hover-shake"
                        >
                            Secure Availability ↗
                        </a>
                    </div>
                </div>
            </motion.section>

            {/* ══════════════════════════════════════
                BOTTOM MARQUEE
               ══════════════════════════════════════ */}
            <div className="w-full bg-acid border-t-[3px] border-ink py-3 overflow-hidden animate-glitch">
                <div className="marquee-container font-mono font-bold text-ink uppercase tracking-widest text-sm marquee-mask">
                    <div className="marquee-content animate-marquee-reverse">
                        <span className="px-6">LOCATED: GMT+5:30&nbsp;///&nbsp;</span>
                        <span className="px-6">STACK: NEXT.JS + AI&nbsp;///&nbsp;</span>
                        <span className="px-6">STATUS: SCALING BOCADOH&nbsp;///&nbsp;</span>
                        <span className="px-6">OPEN FOR GLOBAL ROLES&nbsp;///&nbsp;</span>
                    </div>
                    <div className="marquee-content animate-marquee-reverse" aria-hidden="true">
                        <span className="px-6">LOCATED: GMT+5:30&nbsp;///&nbsp;</span>
                        <span className="px-6">STACK: NEXT.JS + AI&nbsp;///&nbsp;</span>
                        <span className="px-6">STATUS: SCALING BOCADOH&nbsp;///&nbsp;</span>
                        <span className="px-6">OPEN FOR GLOBAL ROLES&nbsp;///&nbsp;</span>
                    </div>
                </div>
            </div>

            {/* Easter egg - Konami code resets */}
            {konamiActive && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="fixed top-20 left-1/2 -translate-x-1/2 z-[400] neo-card bg-acid text-ink px-6 py-3 font-mono text-sm font-bold uppercase"
                >
                    🎮 lord_decay mode activated
                    <button onClick={() => setKonamiActive(false)} className="ml-4 underline text-xs">dismiss</button>
                </motion.div>
            )}
        </div>
    );
}
