"use client";

import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, Github, LayoutGrid, Archive, Sparkles } from "lucide-react";
import Link from "next/link";
import { useState, useRef } from "react";
import { projects } from "@/lib/projects";
import { CircuitPattern, GridDots } from "@/components/ui/Decorative";

/* ─── Stagger ─── */
const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
};

/* ─── Interactive Project Card (3D Tilt + Glow) ─── */
function ProjectCard({ project }: { project: typeof projects[0] }) {
    const cardRef = useRef<HTMLDivElement>(null);

    // Mouse Tracking Values
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Smooth Springs for Rotation
    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    // Dynamic Rotation Mappings (-5 to 5 degrees)
    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

    // Dynamic Glow Position
    const glowX = useTransform(x, [-0.5, 0.5], ["0%", "100%"]);
    const glowY = useTransform(y, [-0.5, 0.5], ["0%", "100%"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        
        // Normalize mouse position (-0.5 to 0.5)
        const mouseX = (e.clientX - rect.left) / rect.width - 0.5;
        const mouseY = (e.clientY - rect.top) / rect.height - 0.5;

        x.set(mouseX);
        y.set(mouseY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={cardRef}
            variants={fadeUp}
            whileHover="hover"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
                perspective: "1000px"
            }}
            className="h-full group/card"
        >
            <Link 
                href={project.slug.startsWith('http') ? project.link : `/work/${project.slug}`} 
                className="block h-full relative"
            >
                <motion.div 
                    variants={{
                        initial: { x: 0, y: 0, z: 0, boxShadow: "0px 0px 0px 0px rgba(0,0,0,0.15)" },
                        hover: { 
                            x: -8, 
                            y: -8, 
                            z: 20,
                            boxShadow: "10px 10px 0px 0px rgba(0,0,0,1)" 
                        }
                    }}
                    transition={{ 
                        type: "spring", 
                        stiffness: 400, 
                        damping: 25 // Snappy but controlled
                    }}
                    className={`neo-card ${project.color} ${project.textColor} p-6 md:p-8 h-full flex flex-col justify-between min-h-[22rem] md:min-h-[24rem] relative overflow-hidden neo-glow`}
                    style={{ transformStyle: "preserve-3d" }}
                >
                    {/* Dynamic Mouse-Tracking Glow */}
                    <motion.div
                        className="absolute inset-0 z-10 pointer-events-none opacity-0 group-active/card:opacity-100 group-hover/card:opacity-100 transition-opacity duration-500"
                        style={{
                            background: "radial-gradient(400px circle at var(--glow-x) var(--glow-y), rgba(255,255,255,0.15), transparent 40%)",
                            // @ts-ignore
                            "--glow-x": glowX,
                            "--glow-y": glowY,
                        }}
                    />

                    {/* ID overlay - (001, 002) */}
                    <div 
                        className="absolute top-4 right-4 font-heading font-bold text-[4rem] md:text-[6rem] leading-none opacity-[0.06] select-none tracking-tighter z-0"
                        style={{ transform: "translateZ(50px)" }}
                    >
                        {project.id}
                    </div>

                    {/* Circuit Pattern from screenshot */}
                    <CircuitPattern 
                        className="absolute top-0 right-0 w-32 h-32 opacity-[0.06] z-0" 
                        style={{ transform: "translateZ(30px)" }}
                    />

                    {/* Top Content */}
                    <div className="relative z-10" style={{ transform: "translateZ(60px)" }}>
                        <div className="font-mono text-[0.65rem] font-bold uppercase tracking-[0.2em] opacity-50 mb-4">
                            {project.category}
                        </div>
                        <h3 className="font-heading font-bold text-2xl md:text-3.5xl uppercase tracking-tight mb-4 group-hover/card:translate-x-1 transition-transform">
                            {project.title}
                        </h3>
                        <p className="font-mono text-sm font-bold opacity-75 leading-relaxed max-w-md">
                            {project.description}
                        </p>
                    </div>

                    {/* Bottom Content */}
                    <div className="relative z-10 mt-auto" style={{ transform: "translateZ(40px)" }}>
                        {/* Tech tags with thin border */}
                        <div className="flex flex-wrap gap-2 mb-6">
                            {project.tech.slice(0, 4).map((t) => (
                                <span key={t} className="px-2.5 py-1 border border-current font-mono text-[0.6rem] font-bold uppercase tracking-wider">
                                    {t}
                                </span>
                            ))}
                        </div>

                        {/* Metrics section */}
                        <div className="flex gap-6 items-end">
                            {project.metrics.map((m) => (
                                <div key={m.label} className="flex flex-col">
                                    <div className="font-heading font-bold text-lg md:text-xl leading-none mb-1">{m.value}</div>
                                    <div className="font-mono text-[0.5rem] font-bold uppercase tracking-[0.15em] opacity-50">{m.label}</div>
                                </div>
                            ))}
                        </div>

                        {/* Arrow Link box at bottom right - Perfectly Synchronized Smooth Arrow */}
                        <motion.div 
                            className="absolute bottom-0 right-0 w-11 h-11 border border-current flex items-center justify-center pointer-events-none overflow-hidden will-change-transform"
                            variants={{
                                initial: { x: 0, y: 0, z: 40, backgroundColor: "rgba(255,255,255,0)" },
                                hover: { 
                                    x: 3, 
                                    y: -3, 
                                    z: 80, 
                                    backgroundColor: "rgba(255,255,255,0.1)" 
                                }
                            }}
                            transition={{ 
                                type: "spring", 
                                stiffness: 400, 
                                damping: 35 
                            }}
                        >
                            <ArrowUpRight size={20} />
                        </motion.div>
                    </div>
                </motion.div>
            </Link>
        </motion.div>
    );
}

export default function WorkPage() {
    const [viewMode, setViewMode] = useState<'selected' | 'palette'>('selected');

    // State for curated vs total
    const displayedProjects = viewMode === 'selected' ? projects.slice(0, 5) : projects;

    return (
        <div className="min-h-screen bg-cream pb-24 relative overflow-x-hidden">
            {/* Status bar */}
            <div className="w-full bg-ink border-b-[3px] border-ink py-2 px-4 md:px-8 flex justify-between items-center relative z-20">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-acid animate-pulse-dot" />
                    <span className="font-mono text-xs font-bold text-cream/50 uppercase tracking-widest">STATUS: ACTIVELY_SEEKING_INTERNSHIPS // PPO_READY</span>
                </div>
                <div className="flex items-center gap-4">
                    <span className="font-mono text-xs font-bold text-cream/30 tracking-widest">{displayedProjects.length} DEPLOYED</span>
                </div>
            </div>

            {/* Header */}
            <section className="max-w-7xl mx-auto px-4 md:px-8 mt-12 md:mt-16 mb-12 md:mb-16">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
                    <motion.div
                        key={viewMode}
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex-1"
                    >
                        <div className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-ink/40 mb-4">Portfolio</div>
                        <h1 className="text-5xl sm:text-6xl md:text-[7.5rem] font-heading font-bold text-ink leading-[0.8] tracking-tighter uppercase mb-8">
                            {viewMode === 'selected' ? <>Selected<br />Work</> : <>Work<br />Palette</>}
                        </h1>
                        <p className="font-mono text-sm md:text-base font-bold text-ink/60 max-w-lg leading-relaxed">
                            {viewMode === 'palette'
                                ? "A visual collection of all technical explorations, prototypes, and open-source contributions."
                                : "Projects built around real-world problems, focused on practical solutions and learning through execution."
                            }
                        </p>
                    </motion.div>

                    {/* Toggle Button - Clean & Integrated */}
                    <div className="flex-shrink-0">
                        <button
                            onClick={() => setViewMode(prev => prev === 'selected' ? 'palette' : 'selected')}
                            className="group flex items-center gap-4 px-8 py-4 bg-ink text-cream font-heading font-bold text-xs uppercase tracking-widest neo-card hover:bg-ink/90 transition-all hover:translate-x-1 hover:-translate-y-1"
                        >
                            {viewMode === 'selected' ? <Archive size={18} /> : <Sparkles size={18} />}
                            {viewMode === 'selected' ? 'WORK PALETTE' : 'SELECTED WORK'}
                            <ArrowUpRight size={16} className="text-acid group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </button>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════
                DYNAMIC GRID (Restored)
               ══════════════════════════════════════ */}
            <motion.section
                key={viewMode}
                variants={stagger}
                initial="hidden"
                animate="visible"
                className="max-w-7xl mx-auto px-4 md:px-8 mb-16 md:mb-24"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    <AnimatePresence mode="popLayout">
                        {displayedProjects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </AnimatePresence>
                </div>
            </motion.section>

            {/* ══════════════════════════════════════
                GITHUB CTA
               ══════════════════════════════════════ */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-7xl mx-auto px-4 md:px-8 mb-12"
            >
                <div className="neo-card bg-ink text-cream p-6 md:p-10 relative overflow-hidden">
                    <GridDots className="absolute inset-0 w-full h-full text-cream/3" />
                    <div className="absolute top-0 left-1/4 w-1/2 h-20 bg-acid/10 blur-3xl pointer-events-none" />

                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div>
                            <h3 className="font-heading font-bold text-2xl md:text-3xl uppercase tracking-tight mb-2">
                                Want the Full Archive?
                            </h3>
                            <p className="font-mono text-sm font-bold text-cream/50 max-w-md">
                                All repositories are live on GitHub. Fork the source, audit the code, or get inspired for your next build.
                            </p>
                        </div>
                        <a
                            href="https://github.com/KaavyaGala546"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="neo-card bg-cream text-ink px-8 py-4 font-heading font-bold text-sm uppercase tracking-wider flex items-center gap-2 hover:bg-acid transition-all group flex-shrink-0"
                        >
                            <Github size={18} />
                            GitHub Archive
                            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </a>
                    </div>
                </div>
            </motion.section>
        </div>
    );
}
