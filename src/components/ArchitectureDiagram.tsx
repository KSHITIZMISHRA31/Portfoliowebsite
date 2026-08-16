import { useState } from "react";
import { motion } from "framer-motion";
import type { ArchitectureNode } from "../data/projects";

export function ArchitectureDiagram({ nodes }: { nodes: ArchitectureNode[] }) {
  const [activeId, setActiveId] = useState<string>(nodes[0]?.id ?? "");
  const active = nodes.find((n) => n.id === activeId) ?? nodes[0];

  return (
    <div className="rounded-md border border-hairline bg-ink-2 p-5">
      <div className="flex flex-col gap-2">
        {nodes.map((node, i) => (
          <div key={node.id}>
            <button
              onClick={() => setActiveId(node.id)}
              aria-pressed={activeId === node.id}
              className={`w-full text-left font-mono-tight text-sm px-4 py-3 rounded-sm border transition-colors ${
                activeId === node.id
                  ? "border-gold bg-gold/10 text-paper"
                  : "border-hairline text-paper-dim hover:border-paper-faint"
              }`}
            >
              {node.label}
            </button>
            {i < nodes.length - 1 && (
              <div className="flex justify-center py-1 text-paper-faint text-xs" aria-hidden>
                │
              </div>
            )}
          </div>
        ))}
      </div>

      <motion.div
        key={active?.id}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        className="mt-5 border-t border-hairline pt-4"
      >
        <p className="text-xs font-mono-tight uppercase tracking-wider text-gold mb-2">
          {active?.label}
        </p>
        <p className="text-sm text-paper-dim leading-relaxed">{active?.detail}</p>
      </motion.div>
    </div>
  );
}
