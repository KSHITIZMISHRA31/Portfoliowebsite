import { motion } from "framer-motion";
import { Container, SectionLabel } from "./Container";
import { techStack } from "../data/techStack";

export function TechStack() {
  return (
    <section id="stack" className="py-24 border-t border-hairline">
      <Container>
        <SectionLabel>Tech Stack</SectionLabel>
        <h2 className="text-3xl font-semibold text-paper mb-10 text-balance">
          What I actually build with
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {techStack.map((group, gi) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: gi * 0.05 }}
              className="rounded-md border border-hairline bg-ink-2 p-5"
            >
              <p className="font-mono-tight text-xs uppercase tracking-wider text-paper-faint mb-4">
                {group.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-sm text-paper-dim border border-hairline rounded-sm px-2.5 py-1.5 hover:border-gold hover:text-paper transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
