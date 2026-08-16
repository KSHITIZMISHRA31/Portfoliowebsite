import { motion, AnimatePresence } from "framer-motion";
import { X, Github, ExternalLink } from "lucide-react";
import type { Project } from "../data/projects";
import { ArchitectureDiagram } from "./ArchitectureDiagram";

export function ProjectCaseStudy({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[60] bg-ink/80 backdrop-blur-sm flex items-start sm:items-center justify-center p-0 sm:p-6 overflow-y-auto"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-label={`${project.name} case study`}
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.25 }}
          onClick={(e) => e.stopPropagation()}
          className="w-full sm:max-w-3xl sm:rounded-md border border-hairline bg-ink min-h-screen sm:min-h-0 sm:my-10"
        >
          <div className="sticky top-0 bg-ink border-b border-hairline px-6 py-4 flex items-center justify-between z-10">
            <div>
              <p className="font-mono-tight text-[11px] uppercase tracking-wider text-gold mb-1">
                {project.status}
              </p>
              <h3 className="text-xl font-semibold text-paper">{project.name}</h3>
            </div>
            <button
              onClick={onClose}
              aria-label="Close case study"
              className="p-2 text-paper-dim hover:text-paper"
            >
              <X size={20} />
            </button>
          </div>

          <div className="px-6 py-6 space-y-8">
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="font-mono-tight text-[11px] text-paper-dim border border-hairline rounded-sm px-2 py-1"
                >
                  {t}
                </span>
              ))}
            </div>

            {project.problem && (
              <div>
                <p className="font-mono-tight text-xs uppercase tracking-wider text-paper-faint mb-2">Problem</p>
                <p className="text-paper-dim leading-relaxed">{project.problem}</p>
              </div>
            )}

            {project.solution && (
              <div>
                <p className="font-mono-tight text-xs uppercase tracking-wider text-paper-faint mb-2">Solution</p>
                <p className="text-paper-dim leading-relaxed">{project.solution}</p>
              </div>
            )}

            {project.architecture && (
              <div>
                <p className="font-mono-tight text-xs uppercase tracking-wider text-paper-faint mb-3">
                  Architecture — click a stage
                </p>
                <ArchitectureDiagram nodes={project.architecture} />
              </div>
            )}

            {project.engineeringDecisions && (
              <div>
                <p className="font-mono-tight text-xs uppercase tracking-wider text-paper-faint mb-3">
                  Engineering decisions
                </p>
                <div className="space-y-4">
                  {project.engineeringDecisions.map((d) => (
                    <div key={d.title} className="border-l-2 border-gold/40 pl-4">
                      <p className="text-paper text-sm font-medium mb-1">{d.title}</p>
                      <p className="text-paper-dim text-sm leading-relaxed">{d.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {project.challenges && (
              <div>
                <p className="font-mono-tight text-xs uppercase tracking-wider text-paper-faint mb-3">Challenges</p>
                <ul className="space-y-2">
                  {project.challenges.map((c, i) => (
                    <li key={i} className="flex gap-3 text-sm text-paper-dim leading-relaxed">
                      <span className="text-rust mt-1 shrink-0">▸</span>
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.futureImprovements && (
              <div>
                <p className="font-mono-tight text-xs uppercase tracking-wider text-paper-faint mb-3">
                  Future improvements
                </p>
                <ul className="space-y-2">
                  {project.futureImprovements.map((f, i) => (
                    <li key={i} className="flex gap-3 text-sm text-paper-dim leading-relaxed">
                      <span className="text-teal mt-1 shrink-0">▸</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex gap-3 pt-2">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border border-hairline hover:border-gold text-paper font-mono-tight text-sm px-4 py-2.5 rounded-sm transition-colors"
              >
                <Github size={15} /> View Code
              </a>
              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-gold text-ink font-mono-tight text-sm px-4 py-2.5 rounded-sm hover:bg-gold/90 transition-colors"
                >
                  <ExternalLink size={15} /> Live Demo
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
