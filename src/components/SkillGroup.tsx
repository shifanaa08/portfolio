import { Brain, BarChart3, Database, Globe, Wrench, type LucideIcon } from 'lucide-react';
import type { PointerEvent } from 'react';
import type { AccentTone, SkillGroupData, SkillIconKey } from '@/data/portfolio';
import { fadeUp } from '@/lib/motion';
import { motion } from 'framer-motion';

interface SkillGroupProps {
  group: SkillGroupData;
}

const icons: Record<SkillIconKey, LucideIcon> = {
  database: Database,
  globe: Globe,
  brain: Brain,
  chart: BarChart3,
  wrench: Wrench,
};

const accentHex: Record<AccentTone, string> = {
  purple: '#A855F7',
  cyan: '#22D3EE',
  blue: '#3B82F6',
  mint: '#5EEAD4',
  lavender: '#C4B5FD',
};

export default function SkillGroup({ group }: SkillGroupProps) {
  const Icon = icons[group.icon];
  const accent = accentHex[group.tone];

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty('--mx', `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty('--my', `${event.clientY - rect.top}px`);
  };

  return (
    <motion.article variants={fadeUp} className="skill-frame group h-full" style={{ ['--accent' as string]: accent }}>
      <div
        onPointerMove={handlePointerMove}
        className="spotlight relative h-full overflow-hidden rounded-[27px] bg-[#0A0E20] p-7 sm:p-8"
      >
        <header className="flex items-start justify-between gap-4">
          <span
            className="flex h-12 w-12 items-center justify-center rounded-2xl ring-1 transition duration-500 group-hover:-translate-y-1 group-hover:rotate-6"
            style={{ color: accent, backgroundColor: `color-mix(in srgb, ${accent} 12%, transparent)`, boxShadow: `inset 0 0 0 1px color-mix(in srgb, ${accent} 35%, transparent)` }}
          >
            <Icon className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="font-mono text-xs text-ink-muted/60" aria-hidden="true">
            {group.number}
          </span>
        </header>

        <h3 className="mt-8 text-xl font-semibold text-ink sm:text-2xl">{group.title}</h3>
        <span className="mt-3 block h-px w-10 transition-all duration-700 group-hover:w-full" style={{ backgroundColor: accent }} aria-hidden="true" />

        <ul className="mt-6 grid gap-x-6 sm:grid-cols-2">
          {group.items.map((item) => (
            <li key={item} className="flex items-center gap-3 border-b border-white/[0.06] py-2.5 font-mono text-[0.8rem] text-ink-muted transition duration-300 hover:text-ink">
              <span aria-hidden="true" className="h-1 w-1 shrink-0 rounded-full" style={{ backgroundColor: accent }} />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}
