import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Container, SectionLabel } from "./Container";
import { experience } from "../data/experience";

export function Experience() {
  const [openId, setOpenId] = useState<string | null>(experience[0]?.id ?? null);

  return (
    <section id="experience" className="py-24 border-t border-hairline">
      <Container>
        <SectionLabel>Experience</SectionLabel>
        <h2 className="text-3xl font-semibold text-paper mb-10 text-balance">
          Tata Consultancy Services — Capital Markets
        </h2>

        <div className="space-y-4">
          {experience.map((role) => {
            const isOpen = openId === role.id;
            return (
              <div key={role.id} className="rounded-md border border-hairline bg-ink-2 overflow-hidden">
                <button
                  onClick={() => setOpenId(isOpen ? null : role.id)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 px-5 py-5 text-left"
                >
                  <div>
                    <p className="font-mono-tight text-xs uppercase tracking-wider text-gold mb-1.5">
                      {role.client}
                    </p>
                    <p className="text-lg text-paper font-medium">{role.role}</p>
                    <p className="text-sm text-paper-faint mt-1">{role.dates}</p>
                  </div>
                  <motion.span animate={{ rotate: isOpen ? 180 : 0 }} className="shrink-0 text-paper-dim">
                    <ChevronDown size={20} />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-6 border-t border-hairline pt-5">
                        <p className="text-paper-dim mb-4 leading-relaxed">{role.summary}</p>
                        <ul className="space-y-2.5 mb-5">
                          {role.bullets.map((b, i) => (
                            <li key={i} className="flex gap-3 text-sm text-paper-dim leading-relaxed">
                              <span className="text-gold mt-1.5 shrink-0">▸</span>
                              {b}
                            </li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-2">
                          {role.tech.map((t) => (
                            <span
                              key={t}
                              className="font-mono-tight text-[11px] text-paper-dim border border-hairline rounded-sm px-2 py-1"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
