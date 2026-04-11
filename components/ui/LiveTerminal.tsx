"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const commands = [
    { prompt: "$ boot --user kaavya_gala", result: "> [INIT]: SECOND_YEAR_BTECH // SOPHOMORE\n> [INTEL]: OPERATING_AT_SENIOR_LEVEL\n> [STATUS]: REMOTE_GLOBAL // GMT+5:30", delay: 0 },
    { prompt: "$ load_expertise --niche", result: "> Applied AI & Agentic Systems... [LOADED]\n> RAG Pipelines & Vector Ops... [OPTIMIZED]\n> Systems Design & Optimization... [ACTIVE]", delay: 2000 },
    { prompt: "$ inspect bocadoh_engine", result: "> [INDUSTRY]: CPG // HEALTHY_SNACK_BRAND\n> [TECH]: HEADLESS_COMMERCE_ARCHITECTURE\n> [ROLE]: FOUNDING_ENGINEER // ARCHITECT\n> [GOAL]: SCALING_LOGIC_FOR_REVENUE", delay: 4000 },
    { prompt: "$ system_benchmarks", result: "> lighthouse_performance: 100%\n> code_velocity: HIGH_IMPACT\n> architecture: ZERO_BLOAT", delay: 6000 },
    { prompt: "$ _ Build. Solve. Ship.", result: "", delay: 8000 },
];

export default function LiveTerminal() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [visibleLines, setVisibleLines] = useState(0);
    const [typedChars, setTypedChars] = useState<number[]>([]);

    useEffect(() => {
        if (!isInView) return;

        commands.forEach((cmd, i) => {
            // Start typing prompt
            setTimeout(() => {
                setVisibleLines(i + 1);
                let charIndex = 0;
                const typeInterval = setInterval(() => {
                    charIndex++;
                    setTypedChars((prev) => {
                        const newArr = [...prev];
                        newArr[i] = charIndex;
                        return newArr;
                    });
                    if (charIndex >= cmd.prompt.length) {
                        clearInterval(typeInterval);
                    }
                }, 30);
            }, cmd.delay);
        });
    }, [isInView]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="neo-card bg-ink text-cream p-5 md:p-6 font-mono text-xs md:text-sm relative overflow-hidden"
        >
            {/* Terminal header */}
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-cream/10">
                <div className="w-2.5 h-2.5 bg-hotpink" />
                <div className="w-2.5 h-2.5 bg-acid" />
                <div className="w-2.5 h-2.5 bg-electric" />
                <span className="ml-2 text-cream/30 text-[0.6rem] uppercase tracking-widest">kaavya_gala@arsenal</span>
            </div>

            {/* Lines */}
            <div className="space-y-2">
                {commands.slice(0, visibleLines).map((cmd, i) => {
                    const chars = typedChars[i] || 0;
                    const promptText = cmd.prompt.slice(0, chars);
                    const isComplete = chars >= cmd.prompt.length;
                    const isLast = i === commands.length - 1;

                    return (
                        <div key={i}>
                            <div className="flex items-start gap-0">
                                <span className="text-acid font-bold select-none">{promptText}</span>
                                {(!isComplete || (isLast && isComplete)) && (
                                    <span className="inline-block w-2 h-4 bg-acid animate-blink ml-0.5" />
                                )}
                            </div>
                            {isComplete && cmd.result && (
                                <motion.div
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3, delay: 0.2 }}
                                    className="text-cream/50 mt-0.5 pl-2 whitespace-pre-wrap"
                                >
                                    {cmd.result}
                                </motion.div>
                            )}
                        </div>
                    );
                })}
            </div>
        </motion.div>
    );
}
