"use client";

import { motion } from "framer-motion";
import { Zap, Bot, ArrowUpRight, Check, Shield, Rocket, RefreshCw, Code2, Smartphone, Database, Brain, Users, Briefcase, Terminal, Diamond, Sparkles, Target, Flame, Quote, Star, PartyPopper, Layers, Globe, Clock } from "lucide-react";
import { CircuitPattern, GridDots, CrossHatch } from "@/components/ui/Decorative";

/* ─── Animations ─── */
const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

/* ─── Data ─── */
const milestones = [
    {
        icon: <Briefcase size={32} />,
        label: "VENTURE // R&D",
        slogan: "SHIP FAST",
        role: "Founder",
        entity: "Bocadoh",
        period: "Aug 2025 - Present",
        desc: "Pioneering a D2C healthy snack brand. Developing first-of-its-kind fruit-flavoured coconut chips.",
        features: [
            { icon: <Bot size={20} />, title: "SYSTEMS DESIGN", sub: "Architected scalable headless commerce for GMT+5:30 flow." },
            { icon: <Database size={20} />, title: "INVENTORY OPS", sub: "Engineered automated inventory sync across multi-channels." },
            { icon: <Briefcase size={20} />, title: "GTM STRATEGY", sub: "Leading GTM strategy and product R&D for healthy snack brand." }
        ],
        tags: ["D2C_STRATEGY", "PRODUCT_R&D", "SUPPLY_CHAIN", "GTM"],
        color: "bg-hotpink",
        textColor: "text-cream",
        accent: "text-acid",
        ctaText: "EXPLORING"
    },
    {
        icon: <Users size={32} />,
        label: "LEADERSHIP // OPS",
        slogan: "STRATEGIC OPS",
        role: "President",
        entity: "E-Cell Rishihood",
        period: "Apr 2025 - Oct 2025",
        desc: "Orchestrated entrepreneurship culture for a 600+ student community. Executed 20+ innovation events.",
        features: [
            { icon: <Users size={20} />, title: "COMMUNITY ARCH", sub: "Orchestrated entrepreneurship culture for a 600+ student body." },
            { icon: <Target size={20} />, title: "EXECUTION FAST", sub: "Executed 20+ innovation events with cross-functional leadership." },
            { icon: <Sparkles size={20} />, title: "AGENTIC HACKATHONS", sub: "Orchestrated multiple Agentic AI hackathons for engineers." }
        ],
        tags: ["600+_COMMUNITY", "LEADERSHIP", "STRATEGY", "OPS"],
        color: "bg-acid",
        textColor: "text-ink",
        accent: "text-ink/60",
        link: "https://www.linkedin.com/posts/kaavya-gala-46602221a_leadership-entrepreneurship-ecell-activity-7363979125130223618-I2jm?utm_source=share&utm_medium=member_desktop&rcm=ACoAADctEg4BYXKFwgQTH4-hAPYR4dM_9rrRjbc",
        ctaText: "VISUAL_PROOF"
    },
    {
        icon: <Terminal size={32} />,
        label: "ENGINEERING // DEV",
        slogan: "THINK DIFFERENT",
        role: "Lead",
        entity: "DevClub (Web Dev)",
        period: "Aug 2024 - Oct 2025",
        desc: "Co-founded a developer-focused student community to promote software development and engineering culture.",
        features: [
            { icon: <Code2 size={20} />, title: "OPEN SOURCE", sub: "Initiated 'DCode' open-source platform for engineering culture." },
            { icon: <Users size={20} />, title: "DEV COMMUNITY", sub: "Built and scaled a developer ecosystem for 100+ active members." },
            { icon: <Terminal size={20} />, title: "DEEP DIVES", sub: "Performed architectural deep-dives for performance optimization." }
        ],
        tags: ["OPEN_SOURCE", "COMMUNITY", "100+_MEMBERS", "UI/UX"],
        color: "bg-electric",
        textColor: "text-cream",
        accent: "text-acid",
        ctaText: "EXPLORE"
    },
    {
        icon: <Layers size={32} />,
        label: "WEB // ARCHITECTURE",
        slogan: "BUILD AT SCALE",
        role: "Lead Architect",
        entity: "University Web Systems",
        period: "Aug 2024 - Oct 2025",
        desc: "Architected and maintained the core digital infrastructure for official university platforms and festivals.",
        features: [
            { icon: <Sparkles size={20} />, title: "DAMRU FESTIVAL", sub: "Architected official fest website (Tagged: 'Most mature fest website seen')." },
            { icon: <Globe size={20} />, title: "LIFE@RISHIHOOD", sub: "Developed the official lifeatrishihood university portal." },
            { icon: <Clock size={20} />, title: "PEAK PERFORMANCE", sub: "Optimized architectures for high-concurrency during peak events." }
        ],
        tags: ["UNIVERSITY_WEB", "SCALABLE_UI", "REACT", "NEXT.JS"],
        color: "bg-purple",
        textColor: "text-cream",
        accent: "text-acid",
        link: "https://youtu.be/jC4OacF7uG8?si=hKvN5h7H5NMoFqLb&t=144",
        ctaText: "VIEW RECOGNITION"
    },
    {
        icon: <Rocket size={32} />,
        label: "GLOBAL // CODE",
        slogan: "CODE WORLDWIDE",
        role: "Contributor",
        entity: "Hacktoberfest",
        period: "Oct 2025",
        desc: "Contributed to open-source repositories through collaborative development during the global Hacktoberfest initiative.",
        features: [
            { icon: <Rocket size={20} />, title: "GLOBAL CONTRIBUTOR", sub: "Contributed to core modules in flagship open-source repositories." },
            { icon: <Shield size={20} />, title: "ZERO BLOAT", sub: "Maintained zero-bloat standards in multi-developer repositories." },
            { icon: <RefreshCw size={20} />, title: "COLLABORATIVE DEV", sub: "Collaborated on Python and JavaScript projects during Hacktoberfest." }
        ],
        tags: ["PYTHON", "JAVASCRIPT", "OPEN_SOURCE"],
        color: "bg-ink",
        textColor: "text-cream",
        accent: "text-acid",
        link: "https://www.holopin.io/@kaavyagala546#",
        ctaText: "VIEW CREDENTIALS"
    },
    {
        icon: <PartyPopper size={32} />,
        label: "EVENT // LOGISTICS",
        slogan: "HIGH GRADIENT",
        role: "Core Committee",
        entity: "Damru",
        period: "Oct 2024 - Nov 2024",
        desc: "Selected as 1 of 20 core committee members from 2000+ students. Single-handedly designed end-to-end visual marketing including posters, banners, and brochures.",
        features: [
            { icon: <Zap size={20} />, title: "SELECTIVE OPS", sub: "1 of 20 Core Committee members selected from a 2000+ student body." },
            { icon: <Sparkles size={20} />, title: "VISUAL LEAD", sub: "Designed all posters, banners, and brochures single-handedly." },
            { icon: <Users size={20} />, title: "LEADERSHIP", sub: "Among few first-years recognized for leading teams with seniors." }
        ],
        tags: ["EVENT_OPS", "VISUAL_DESIGN", "LEADERSHIP"],
        color: "bg-hotpink",
        textColor: "text-cream",
        accent: "text-acid",
        link: "https://media.licdn.com/dms/image/v2/D4D2DAQE6ANVi3LtJRg/profile-treasury-image-shrink_8192_8192/B4DZXqivv.HAAg-/0/1743396734283?e=1776294000&v=beta&t=ukInruE3vqKX9UhNOfc26NtEjw-JLeljP0eOXsK2_hM",
        ctaText: "VIEW CERTIFICATE"
    }
];

const principles = [
    { num: "01", title: "Architecture First", desc: "No code without a blueprint. I map the system first.", color: "bg-acid", textColor: "text-ink" },
    { num: "02", title: "Velocity First", desc: "Ship production-ready logic at warp speed.", color: "bg-ink", textColor: "text-cream" },
    { num: "03", title: "Zero Bloat", desc: "Lean, high-concurrency systems that survive load.", color: "bg-electric", textColor: "text-cream" },
    { num: "04", title: "Agentic First", desc: "Every system built for future autonomy.", color: "bg-hotpink", textColor: "text-cream" },
];

export default function TrajectoryPage() {
    return (
        <div className="min-h-screen bg-cream pb-24">

            {/* Status bar */}
            <div className="w-full bg-ink border-b-[3px] border-ink py-2 px-4 md:px-8 flex justify-between items-center relative z-20">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-acid animate-pulse-dot" />
                    <span className="font-mono text-xs font-bold text-cream/50 uppercase tracking-widest text-[0.6rem] md:text-xs">STATUS: ACTIVELY_SEEKING_INTERNSHIPS // PPO_READY</span>
                </div>
                <div className="hidden md:flex items-center gap-4">
                    <span className="font-mono text-xs font-bold text-cream/30 tracking-widest uppercase text-[0.65rem]">LOCATED: GMT+5:30</span>
                </div>
            </div>

            {/* Header */}
            <section className="max-w-7xl mx-auto px-4 md:px-8 mt-8 md:mt-16 mb-8 md:mb-12 text-left">
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-ink/40 mb-3">THE ARCHIVE</div>
                    <h1 className="text-4xl sm:text-6xl md:text-[7rem] font-heading font-bold text-ink leading-[0.85] tracking-tighter uppercase mb-6">
                        Trajectory
                    </h1>
                    <p className="font-mono text-sm md:text-base font-bold text-ink/60 max-w-lg leading-relaxed">
                        A systematic log of leadership, systems engineering, and founder-track initiatives. 
                        Moving from 0 to 1 with technical architectural precision.
                    </p>
                </motion.div>
            </section>

            {/* ──── Milestone Grid Architecture ──── */}
            <section className="max-w-7xl mx-auto px-4 md:px-8 mb-12 md:mb-20">
                <div className="grid md:grid-cols-2 gap-5">
                    {milestones.map((milestone, idx) => (
                        <motion.div
                            key={milestone.entity}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="h-full"
                        >
                            <div className={`neo-card ${milestone.color} ${milestone.textColor} p-8 md:p-10 h-full relative overflow-hidden group border-[3px] border-ink flex flex-col`}>
                                {/* Header: Icon + Category Tag + Slogan */}
                                <div className="flex justify-between items-start mb-8 relative z-10">
                                    <div className="flex items-center gap-4">
                                        <div className={milestone.textColor === 'text-ink' ? 'text-ink' : 'text-acid'}>
                                            {milestone.icon}
                                        </div>
                                        <div className="flex flex-col">
                                            <div className="font-mono text-[0.55rem] font-bold uppercase tracking-[0.2em] opacity-40 leading-none mb-1">
                                                {milestone.label}
                                            </div>
                                            <div className={`font-mono text-[0.7rem] font-bold uppercase tracking-[0.1em] leading-none ${milestone.textColor === 'text-ink' ? 'text-ink/60' : 'text-cream/60'}`}>
                                                {milestone.slogan}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Title + Role Section */}
                                <div className="relative z-10 mb-6">
                                    <div className="font-heading font-bold text-3xl md:text-4xl uppercase tracking-tighter leading-none mb-4">
                                        {milestone.entity}
                                    </div>
                                    <p className={`font-mono text-sm font-bold leading-relaxed opacity-80 max-w-sm`}>
                                        {milestone.desc}
                                    </p>
                                </div>

                                {/* Feature List with Sub-text */}
                                <div className="relative z-10 space-y-6 mb-12 flex-grow">
                                    {milestone.features.map((feature, i) => (
                                        <div key={i} className="flex gap-4 items-start group/feature">
                                            <div className={`mt-1 ${milestone.textColor === 'text-ink' ? 'text-ink' : 'text-acid'} opacity-80 group-hover/feature:opacity-100 transition-opacity`}>
                                                {feature.icon}
                                            </div>
                                            <div>
                                                <div className="font-heading font-bold text-base uppercase tracking-tight leading-none mb-1">
                                                    {feature.title}
                                                </div>
                                                <div className={`font-mono text-[0.7rem] font-bold opacity-60 leading-tight uppercase ${milestone.textColor === 'text-ink' ? 'text-ink' : 'text-cream'}`}>
                                                    {feature.sub}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* CTA Button */}
                                <div className="relative z-10 pt-6 mt-auto">
                                    <a 
                                        href={milestone.link || "#"} 
                                        target={milestone.link ? "_blank" : "_self"}
                                        rel={milestone.link ? "noopener noreferrer" : ""}
                                        className={`inline-flex items-center justify-between w-full md:w-auto md:min-w-[180px] gap-4 font-heading font-bold text-sm uppercase tracking-widest px-6 py-4 border-[3px] border-ink transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] ${
                                            milestone.color === 'bg-vivid' || milestone.color === 'bg-acid' 
                                            ? 'bg-ink text-cream hover:bg-cream hover:text-ink' 
                                            : 'bg-acid text-ink hover:bg-cream hover:text-ink'
                                        }`}
                                    >
                                        {milestone.ctaText} <ArrowUpRight size={18} />
                                    </a>
                                </div>

                                {/* Background Accents */}
                                {milestone.textColor === 'text-ink' ? (
                                    <CrossHatch className="absolute top-0 right-0 w-48 h-48 text-ink opacity-[0.03]" />
                                ) : (
                                    <CircuitPattern className="absolute bottom-0 left-0 w-64 h-64 text-cream/5" />
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ──── Core Principles (Old Process Layout) ──── */}
            <motion.section
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="max-w-7xl mx-auto px-4 md:px-8 mb-12 md:mb-20 text-left"
            >
                <div className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-ink/40 mb-2">Standard Operating Procedures</div>
                <h2 className="font-heading font-bold text-3xl md:text-4xl uppercase tracking-tight text-ink mb-10">Core Principles</h2>

                <div className="grid md:grid-cols-4 gap-5">
                    {principles.map((step) => (
                        <motion.div key={step.num} variants={fadeUp}>
                            <div className={`neo-card ${step.color} ${step.textColor} p-6 h-full relative overflow-hidden group hover:-translate-y-1 transition-transform border-[3px] border-ink`}>
                                <div className="absolute top-3 right-3 font-heading font-bold text-4xl opacity-10 select-none group-hover:opacity-20 transition-opacity">{step.num}</div>
                                <div className="relative z-10 text-left">
                                    <h3 className="font-heading font-bold text-xl uppercase tracking-tight mb-3">{step.title}</h3>
                                    <p className="font-mono text-xs font-bold opacity-80 leading-relaxed">{step.desc}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* ──── CTA Section ──── */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-7xl mx-auto px-4 md:px-8 mb-12"
            >
                <div className="neo-card bg-ink text-cream p-8 md:p-12 text-center relative overflow-hidden border-[3px] border-ink shadow-neo">
                    <GridDots className="absolute inset-0 w-full h-full text-cream/3" />
                    <div className="relative z-10">
                        <h2 className="font-heading font-bold text-3xl md:text-5xl uppercase tracking-tight mb-4">
                            Need This Momentum<br /><span className="gradient-text-acid text-acid">In Your Team?</span>
                        </h2>
                        <p className="font-mono text-sm md:text-base font-bold text-cream/60 max-w-xl mx-auto mb-8">
                            I don&apos;t just write scripts; I build systems. I am ready to integrate into your sprint cycles and deliver measurable value from Day 1.
                        </p>
                        <a
                            href="/contact"
                            className="inline-block bg-acid text-ink font-heading font-bold text-lg uppercase tracking-wider px-8 py-4 border-[3px] border-ink shadow-neo hover:shadow-none hover:translate-x-[6px] hover:translate-y-[6px] transition-all"
                        >
                            Schedule Interview
                        </a>
                    </div>
                </div>
            </motion.section>
        </div>
    );
}
