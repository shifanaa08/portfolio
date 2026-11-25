import type { AccentTone, ProjectData } from '@/data/portfolio';
import { useTilt } from '@/hooks/useTilt';

const ACCENT_GLOW: Record<AccentTone, string> = {
  purple: 'bg-aurora-purple/30',
  cyan: 'bg-aurora-cyan/30',
  blue: 'bg-aurora-blue/30',
  mint: 'bg-aurora-mint/30',
  lavender: 'bg-aurora-lavender/30',
};

interface ProjectMockupProps {
  project: ProjectData;
  featured: boolean;
}

export default function ProjectMockup({ project, featured }: ProjectMockupProps) {
  const tilt = useTilt<HTMLDivElement>();

  return (
    <div
      ref={tilt.ref}
      onPointerMove={tilt.onPointerMove}
      onPointerLeave={tilt.onPointerLeave}
      className="relative w-full [perspective:1400px]"
      aria-hidden="true"
    >
      <div className={`absolute -inset-8 rounded-[48px] opacity-50 blur-3xl transition duration-700 group-hover:opacity-90 ${ACCENT_GLOW[project.accent]}`} />

      <div className="relative transition-transform duration-500 ease-out will-change-transform [transform:rotateX(calc(var(--py,0)*-7deg))_rotateY(calc(var(--px,0)*9deg))]">
        <div className="overflow-hidden rounded-[22px] border border-white/10 bg-midnight/95 shadow-[0_50px_100px_-30px_rgba(0,0,0,0.9)] ring-1 ring-white/5">
          <div className="flex items-center gap-3 border-b border-white/10 bg-white/[0.02] px-4 py-3">
            <span className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            </span>
            <span className="ml-2 h-5 flex-1 rounded-md bg-white/[0.05] font-mono text-[0.65rem] leading-5 text-ink-subtle">
              <span className="pl-3">{project.category}</span>
            </span>
          </div>

          <div className={`grid gap-3 p-5 sm:p-7 ${featured ? 'sm:grid-cols-2' : 'grid-cols-2'}`}>
            {project.features.map((feature, index) => (
              <div
                key={feature}
                className="group/tile flex flex-col gap-3 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-transparent p-4 transition duration-500 hover:border-aurora-cyan/40"
              >
                <span className="font-mono text-[0.65rem] text-aurora-cyan/80">{String(index + 1).padStart(2, '0')}</span>
                <span className="text-sm font-semibold leading-snug text-ink">{feature}</span>
                <span className="mt-auto h-1.5 w-2/3 rounded-full bg-white/10" />
              </div>
            ))}
          </div>
        </div>

        <span className="absolute -bottom-5 -left-3 rounded-full border border-white/15 bg-midnight/90 px-4 py-2 font-mono text-[0.7rem] uppercase tracking-[0.12em] text-aurora-mint shadow-2xl [transform:translate3d(calc(var(--px,0)*-26px),calc(var(--py,0)*-18px),0)] transition-transform duration-500 ease-out">
          {project.technologies[0]}
        </span>

        <span className="absolute -right-3 -top-5 font-display text-5xl font-bold text-white/25 [transform:translate3d(calc(var(--px,0)*30px),calc(var(--py,0)*22px),0)] transition-transform duration-500 ease-out">
          {project.number}
        </span>
      </div>
    </div>
  );
}
