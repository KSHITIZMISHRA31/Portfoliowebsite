import { motion } from "framer-motion";
import { Github, Linkedin, Download, ArrowDown } from "lucide-react";
import { Container } from "./Container";
import { siteConfig } from "../data/siteConfig";

const ledgerLines = [
  { entry: "trade.lookup.latency", value: "-35%", status: "RECONCILED" as const },
  { entry: "swift.mt564.automation", value: "-60% effort", status: "RECONCILED" as const },
  { entry: "spring.boot.rest_apis", value: "8+ shipped", status: "RECONCILED" as const },
  { entry: "leetcode.dsa_practice", value: "120+ solved", status: "RECONCILED" as const },
  { entry: "job-agent.frontend", value: "in progress", status: "PENDING" as const },
];

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* faint background grid, purely decorative */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-paper) 1px, transparent 1px), linear-gradient(90deg, var(--color-paper) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <Container className="relative grid lg:grid-cols-[1.15fr_0.85fr] gap-14 items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-mono-tight text-xs uppercase tracking-[0.25em] text-gold mb-5"
          >
            {siteConfig.location} · Available for backend/SDE roles
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-5xl sm:text-6xl font-semibold tracking-tight text-paper text-balance"
          >
            {siteConfig.name}
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-4 text-xl sm:text-2xl text-paper-dim font-mono-tight text-balance"
          >
            Java Backend Engineer — {siteConfig.tagline}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-6 max-w-xl text-paper-dim leading-relaxed"
          >
            4 years building Java/Spring Boot backends for BFSI capital-markets systems at TCS,
            engaged on Citi Bank and Wells Fargo. Currently building an AI-powered job discovery
            platform independently.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-gold text-ink font-mono-tight text-sm px-5 py-3 rounded-sm hover:bg-gold/90 transition-colors"
            >
              View Projects <ArrowDown size={15} />
            </a>
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-hairline hover:border-paper-faint text-paper font-mono-tight text-sm px-5 py-3 rounded-sm transition-colors"
            >
              <Github size={16} /> GitHub
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-hairline hover:border-paper-faint text-paper font-mono-tight text-sm px-5 py-3 rounded-sm transition-colors"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
            <a
              href={siteConfig.resumeUrl}
              download
              className="inline-flex items-center gap-2 text-paper-dim hover:text-paper font-mono-tight text-sm px-3 py-3 transition-colors"
            >
              <Download size={16} /> Resume
            </a>
          </motion.div>
        </div>

        {/* Signature element: a settling reconciliation ledger, using his own facts */}
        <motion.div
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-md border border-hairline bg-ink-2 overflow-hidden"
          role="img"
          aria-label="An animated ledger showing career highlights being marked as reconciled"
        >
          <div className="flex items-center gap-2 border-b border-hairline px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-rust/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-gold/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-teal/70" />
            <span className="ml-2 font-mono-tight text-[11px] text-paper-faint">
              reconciliation_engine.log
            </span>
          </div>
          <ul className="divide-y divide-hairline">
            {ledgerLines.map((line, i) => (
              <motion.li
                key={line.entry}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.14 }}
                className="flex items-center justify-between gap-3 px-4 py-3 font-mono-tight text-xs"
              >
                <span className="text-paper-dim truncate">{line.entry}</span>
                <span className="text-paper-faint shrink-0 hidden sm:inline">{line.value}</span>
                <span
                  className={`shrink-0 rounded-sm px-2 py-0.5 text-[10px] tracking-wide ${
                    line.status === "RECONCILED"
                      ? "bg-teal/10 text-teal"
                      : "bg-rust/10 text-rust"
                  }`}
                >
                  {line.status}
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </Container>
    </section>
  );
}
