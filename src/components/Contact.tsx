import { Mail, Github, Linkedin } from "lucide-react";
import { Container, SectionLabel } from "./Container";
import { siteConfig } from "../data/siteConfig";

export function Contact() {
  return (
    <section id="contact" className="py-24 border-t border-hairline">
      <Container>
        <SectionLabel>Contact</SectionLabel>
        <h2 className="text-3xl sm:text-4xl font-semibold text-paper mb-4 text-balance">
          Open to Java backend & SDE roles.
        </h2>
        <p className="text-paper-dim max-w-lg mb-10 leading-relaxed">
          The fastest way to reach me is email — happy to walk through the reconciliation
          engine work or the Job Agent architecture in more detail.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-flex items-center gap-2 bg-gold text-ink font-mono-tight text-sm px-5 py-3 rounded-sm hover:bg-gold/90 transition-colors"
          >
            <Mail size={16} /> {siteConfig.email}
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
            href={siteConfig.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border border-hairline hover:border-paper-faint text-paper font-mono-tight text-sm px-5 py-3 rounded-sm transition-colors"
          >
            <Github size={16} /> GitHub
          </a>
        </div>
      </Container>
    </section>
  );
}
