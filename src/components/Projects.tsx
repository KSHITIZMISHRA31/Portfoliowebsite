import { useMemo, useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { Github, ArrowUpRight } from "lucide-react";
import { Container, SectionLabel } from "./Container";
import { projects, type ProjectCategory } from "../data/projects";
import { ProjectCaseStudy } from "./ProjectCaseStudy";

const filters: ("All" | ProjectCategory)[] = ["All", "Java", "Backend", "AI"];

export function Projects() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null);

  const visible = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.categories.includes(filter))),
    [filter]
  );

  const activeProject = projects.find((p) => p.id === activeProjectId) ?? null;

  return (
    <section id="projects" className="py-24 border-t border-hairline">
      <Container>
        <SectionLabel>Projects</SectionLabel>
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
          <h2 className="text-3xl font-semibold text-paper text-balance">Selected work</h2>
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`font-mono-tight text-xs uppercase tracking-wider px-3 py-2 rounded-sm border transition-colors ${
                  filter === f
                    ? "border-gold text-gold bg-gold/10"
                    : "border-hairline text-paper-dim hover:border-paper-faint"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <LayoutGroup>
          <motion.div layout className="grid sm:grid-cols-2 gap-5">
            <AnimatePresence mode="popLayout">
              {visible.map((p) => (
                <motion.div
                  layout
                  key={p.id}
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.25 }}
                  className={`rounded-md border bg-ink-2 p-5 flex flex-col ${
                    p.featured ? "border-gold/40 sm:col-span-2" : "border-hairline"
                  }`}
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="text-lg text-paper font-medium">{p.name}</h3>
                    <span className="shrink-0 font-mono-tight text-[10px] uppercase tracking-wide text-paper-faint border border-hairline rounded-sm px-2 py-1">
                      {p.status}
                    </span>
                  </div>
                  <p className="text-sm text-paper-dim leading-relaxed mb-4">{p.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {p.tech.slice(0, 6).map((t) => (
                      <span
                        key={t}
                        className="font-mono-tight text-[10px] text-paper-faint border border-hairline rounded-sm px-2 py-0.5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto flex items-center gap-3">
                    {p.featured && (
                      <button
                        onClick={() => setActiveProjectId(p.id)}
                        className="inline-flex items-center gap-1.5 bg-gold text-ink font-mono-tight text-xs px-3 py-2 rounded-sm hover:bg-gold/90 transition-colors"
                      >
                        Case Study <ArrowUpRight size={13} />
                      </button>
                    )}
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 border border-hairline hover:border-paper-faint text-paper-dim hover:text-paper font-mono-tight text-xs px-3 py-2 rounded-sm transition-colors"
                    >
                      <Github size={13} /> Code
                    </a>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>
      </Container>

      {activeProject && (
        <ProjectCaseStudy project={activeProject} onClose={() => setActiveProjectId(null)} />
      )}
    </section>
  );
}
