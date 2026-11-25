import { motion } from 'framer-motion';
import { personal, about } from '@/data/portfolio';
import { fadeIn, scaleIn } from '@/lib/motion';
import HeroPortrait from '@/components/HeroPortrait';

const FLOAT_LABELS = [
  { label: personal.heroLabels[0], pos: 'left-[-6%] top-[14%]', delay: 0 },
  { label: personal.heroLabels[1], pos: 'right-[-8%] top-[36%]', delay: -1.4 },
  { label: personal.heroLabels[2], pos: 'left-[-10%] bottom-[26%]', delay: -2.6 },
  { label: personal.heroLabels[3], pos: 'right-[2%] bottom-[8%]', delay: -3.8 },
];

export default function HeroStage() {
  return (
    <motion.div variants={scaleIn} className="relative mx-auto aspect-square w-full max-w-[560px]">
      <motion.div
        variants={fadeIn}
        aria-hidden="true"
        className="pointer-events-none absolute inset-[-6%] rounded-[42%] border border-aurora-cyan/10 [mask-image:radial-gradient(closest-side,black,transparent)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-[2%] rounded-full border border-dashed border-aurora-lavender/15 animate-orbit-reverse"
      >
        <span className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-aurora-mint shadow-[0_0_14px_#5EEAD4]" />
      </div>

      <motion.div
        variants={fadeIn}
        className="relative h-full w-full overflow-hidden rounded-[2rem] border border-white/[0.07] bg-gradient-to-b from-indigo/40 to-midnight/60 backdrop-blur-sm"
      >
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 grid-texture opacity-[0.18] [mask-image:radial-gradient(closest-side,black,transparent_85%)]" />
        <div aria-hidden="true" className="pointer-events-none absolute -inset-10 bg-[radial-gradient(circle_at_50%_42%,rgba(124,58,237,0.28),transparent_60%)] animate-glow-pulse" />

        <HeroPortrait />

        <span aria-hidden="true" className="pointer-events-none absolute left-3 top-3 h-7 w-7 rounded-tl-lg border-l-2 border-t-2 border-aurora-cyan/50" />
        <span aria-hidden="true" className="pointer-events-none absolute right-3 top-3 h-7 w-7 rounded-tr-lg border-r-2 border-t-2 border-aurora-purple/50" />
        <span aria-hidden="true" className="pointer-events-none absolute bottom-3 left-3 h-7 w-7 rounded-bl-lg border-b-2 border-l-2 border-aurora-purple/50" />
        <span aria-hidden="true" className="pointer-events-none absolute bottom-3 right-3 h-7 w-7 rounded-br-lg border-b-2 border-r-2 border-aurora-cyan/50" />
      </motion.div>

      {FLOAT_LABELS.map(({ label, pos, delay }) => (
        <span
          key={label}
          className={`glass absolute whitespace-nowrap rounded-full px-3 py-1.5 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-ink animate-float sm:text-[0.68rem] ${pos}`}
          style={{ animationDelay: `${delay}s` }}
          aria-hidden="true"
        >
          <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-aurora-cyan align-middle" />
          {label}
        </span>
      ))}

      <motion.div variants={fadeIn} className="glass absolute -bottom-4 left-1/2 w-[88%] -translate-x-1/2 p-4 sm:w-[78%] sm:p-5">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-ink-subtle">Based in</p>
            <p className="mt-1 text-sm font-semibold text-ink">{personal.location}</p>
          </div>
          <div className="h-8 w-px bg-white/10" />
          <div>
            <p className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-ink-subtle">Focus</p>
            <p className="mt-1 text-sm font-semibold text-ink">{about.focus[0]}</p>
          </div>
          <div className="h-8 w-px bg-white/10" />
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping-slow rounded-full bg-aurora-mint/70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-aurora-mint" />
            </span>
            <span className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-aurora-mint">Open to work</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
