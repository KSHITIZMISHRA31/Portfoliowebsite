import { motion } from "framer-motion";
import { Container, SectionLabel } from "./Container";

const stats = [
  { value: "4 yrs", label: "Backend engineering, BFSI" },
  { value: "2", label: "Enterprise clients (Citi, Wells Fargo)" },
  { value: "8+", label: "Production REST APIs shipped" },
  { value: "120+", label: "DSA problems solved" },
];

export function About() {
  return (
    <section id="about" className="py-24 border-t border-hairline">
      <Container>
        <SectionLabel>About</SectionLabel>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-[1.3fr_1fr] gap-12 items-start"
        >
          <div className="space-y-5 text-paper-dim leading-relaxed text-[1.05rem]">
            <p>
              I'm a backend engineer who spends most of my time in Java and Spring Boot,
              currently four years into building systems for capital-markets operations at{" "}
              <span className="text-paper">Tata Consultancy Services</span>, engaged on the{" "}
              <span className="text-paper">Citi Bank</span> and{" "}
              <span className="text-paper">Wells Fargo</span> accounts. The work is mostly
              reconciliation engines, trade-reporting APIs, and SWIFT messaging automation —
              systems where a silent data mismatch is a real operational problem, not an
              inconvenience.
            </p>
            <p>
              That environment shaped how I approach engineering: query plans and indexing
              strategy matter as much as the code above them, test coverage isn't optional in
              financial systems, and production incidents get a root-cause writeup, not a
              patch-and-move-on.
            </p>
            <p>
              Outside client work, I'm building{" "}
              <span className="text-paper">Job Agent</span> on my own time — a Spring Boot
              backend that automates job discovery and resume matching using an LLM-backed
              extraction pipeline. It's also where I get to make architecture calls end-to-end
              instead of inheriting them.
            </p>
            <p>
              I keep my problem-solving sharp with regular DSA practice, and I think in terms
              of design patterns and system design by default — not because a resume should
              say so, but because it's how four years of production debugging trains you to
              read a codebase.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-md border border-hairline bg-ink-2 px-4 py-5"
              >
                <p className="font-mono-tight text-2xl text-gold">{s.value}</p>
                <p className="mt-1 text-xs text-paper-faint leading-snug">{s.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
