import { Container } from "./Container";
import { siteConfig } from "../data/siteConfig";

export function Footer() {
  return (
    <footer className="border-t border-hairline py-8">
      <Container className="flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="font-mono-tight text-xs text-paper-faint">
          {siteConfig.name} — {new Date().getFullYear()}
        </p>
        <p className="font-mono-tight text-xs text-paper-faint">Built with React, TypeScript &amp; Tailwind</p>
      </Container>
    </footer>
  );
}
