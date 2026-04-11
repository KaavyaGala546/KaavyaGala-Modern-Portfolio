"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const MONTHS = ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar"];

interface GitHubDay {
  contributionCount: number;
  contributionLevel: string;
  date: string;
}

export default function GitHubActivity() {
  const [data, setData] = useState<number[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchGitHubData() {
      try {
        setLoading(true);
        const response = await fetch("https://github-contributions-api.deno.dev/KaavyaGala546.json");
        if (!response.ok) throw new Error("Failed to fetch");
        
        const json = await response.json();
        
        // Flatten the weeks into days
        const allDays: GitHubDay[] = json.contributions.flat();
        
        // Map levels to 0-4
        const levels = allDays.map(day => {
          switch (day.contributionLevel) {
            case "FOURTH_QUARTILE": return 4;
            case "THIRD_QUARTILE": return 3;
            case "SECOND_QUARTILE": return 2;
            case "FIRST_QUARTILE": return 1;
            default: return 0;
          }
        });

        // We want to show the last 52*7 days to fit our grid
        setData(levels.slice(-364));
        setTotal(json.totalContributions);
        setLoading(false);
      } catch (err) {
        console.error("GitHub Fetch Error:", err);
        setError(true);
        // Fallback to simulation
        const mockData = Array.from({ length: 52 * 7 }, () => Math.floor(Math.random() * 5));
        setData(mockData);
        setTotal(1129);
        setLoading(false);
      }
    }

    fetchGitHubData();
  }, []);

  const getIntensityColor = (level: number) => {
    switch (level) {
      case 4: return "bg-acid shadow-[0_0_12px_rgba(204,255,0,0.4)]";
      case 3: return "bg-acid/90";
      case 2: return "bg-acid/60";
      case 1: return "bg-acid/30";
      default: return "bg-white/5";
    }
  };

  return (
    <div className="w-full">
      {/* Label above */}
      <div className="flex items-center gap-2 mb-2">
        <div className={`w-2.5 h-2.5 ${error ? 'bg-hotpink' : 'bg-acid'} animate-pulse shadow-[0_0_10px_rgba(204,255,0,0.6)]`} />
        <span className="font-mono text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-ink/40">
          {error ? "SYSTEM_PULSE // OFFLINE_MODE" : "LIVE PULSE"}
        </span>
        <div className="flex-grow h-[1px] bg-ink/10" />
      </div>

      {/* Main Card */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="neo-card bg-ink border-[3px] border-ink p-6 md:p-8 relative overflow-hidden shadow-neo-glow hover:shadow-none hover:translate-x-[6px] hover:translate-y-[6px] transition-all"
      >
        {loading ? (
          <div className="flex flex-col items-center justify-center py-12">
            <div className="w-8 h-8 border-[3px] border-cream/10 border-t-acid animate-spin mb-4" />
            <span className="font-mono text-[10px] font-bold text-cream/40 uppercase tracking-widest">CONNECTING_TO_GITHUB_SERVERS...</span>
          </div>
        ) : (
          <>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
              <h3 className="font-heading font-bold text-2xl md:text-3xl uppercase tracking-tight text-cream">
                GITHUB ACTIVITY_
              </h3>
              <div className="flex items-center gap-2 px-3 py-1 bg-acid text-ink border border-acid/50 rounded-full">
                <div className={`w-2 h-2 ${error ? 'bg-hotpink' : 'bg-ink'} rounded-full ${!error && 'animate-pulse'}`} />
                <span className="font-mono text-[10px] font-bold uppercase tracking-widest">
                  {error ? "USING_LOCAL_CACHE" : "SYNCED WITH GITHUB SERVER"}
                </span>
              </div>
            </div>

            <div className="w-full overflow-x-auto pb-4 scrollbar-hide">
              <div className="min-w-[700px]">
                {/* Months labels */}
                <div className="flex mb-3 text-[10px] font-mono text-cream/40 font-black uppercase tracking-wider">
                  {MONTHS.map((month, i) => (
                    <div key={i} className="flex-1 text-left">{month}</div>
                  ))}
                </div>

                {/* Heatmap Grid */}
                <div className="grid grid-flow-col grid-rows-7 gap-1.5 h-32">
                  {data.map((level, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: (i % 52) * 0.002 }}
                      className={`w-full h-full rounded-sm ${getIntensityColor(level)} border border-white/5 hover:border-acid active:scale-95 transition-all cursor-crosshair`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Legend and total */}
            <div className="flex flex-col md:flex-row justify-between items-end md:items-center mt-6 gap-4 border-t-[2px] border-white/5 pt-4">
              <div className="font-mono text-xs font-bold text-cream/70 flex items-center gap-2">
                <span className="text-ink font-black bg-acid px-1.5 py-0.5 shadow-[0_0_10px_rgba(204,255,0,0.3)]">{total}</span>
                <span>Contributions in the last year</span>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] text-cream/40 uppercase font-black">Less</span>
                  <div className="flex gap-1">
                    {[0, 1, 2, 3, 4].map((l) => (
                      <div key={l} className={`w-3.5 h-3.5 rounded-sm ${getIntensityColor(l)} border border-white/5`} />
                    ))}
                  </div>
                  <span className="font-mono text-[10px] text-cream/40 uppercase font-black">More</span>
                </div>
              </div>
            </div>

            {/* Footer Metrics */}
            <div className="flex justify-between items-center mt-8 font-mono text-[10px] font-black tracking-widest text-cream/20 uppercase border-t border-white/5 pt-4">
              <div className="flex gap-4">
                <div>TOTAL: <span className="text-electric">{total >= 1000 ? `${(total/1000).toFixed(1)}K+` : total}</span></div>
                <div>LEVEL: <span className="text-hotpink">SENIOR_OPS</span></div>
              </div>
              <div className="animate-pulse-dot text-acid shadow-[0_0_5px_rgba(204,255,0,0.2)]">// REAL-TIME PULSE</div>
            </div>
          </>
        )}
      </motion.div>
    </div>
  );
}
