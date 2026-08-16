import { ExternalLink } from "lucide-react";
import { Container, SectionLabel } from "./Container";
import { dsaCategories } from "../data/techStack";
import { siteConfig } from "../data/siteConfig";

export function Dsa() {
  return (
    <section id="dsa" className="py-24 border-t border-hairline">
      <Container>
        <SectionLabel>DSA</SectionLabel>
        <div className="rounded-md border border-hairline bg-ink-2 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold text-paper mb-2">120+ problems solved</h2>
            <p className="text-paper-dim text-sm max-w-md leading-relaxed mb-4">
              Regular interview-style practice across core data structures — kept sharp
              alongside production work, not a one-time prep sprint.
            </p>
            <div className="flex flex-wrap gap-2">
              {dsaCategories.map((c) => (
                <span
                  key={c}
                  className="font-mono-tight text-[11px] text-paper-dim border border-hairline rounded-sm px-2.5 py-1"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
          <a
            href={siteConfig.leetcode}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 shrink-0 bg-gold text-ink font-mono-tight text-sm px-4 py-2.5 rounded-sm hover:bg-gold/90 transition-colors self-start sm:self-auto"
          >
            LeetCode Profile <ExternalLink size={14} />
          </a>
        </div>
      </Container>
    </section>
  );
}
