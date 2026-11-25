import { motion } from 'framer-motion';
import shifanaHero from '@/assets/shifana-hero.png';
import { fadeIn } from '@/lib/motion';

export default function HeroPortrait() {
  return (
    <motion.div
      variants={fadeIn}
      className="absolute inset-0 flex items-end justify-center overflow-hidden"
    >
      {/* Soft background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_55%,rgba(34,211,238,0.16)_0%,rgba(196,181,253,0.12)_38%,transparent_72%)]"
      />

      {/* Original Shifana PNG */}
      <img
        src={shifanaHero}
        alt="Shifana with her laptop"
        className="relative z-10 h-full w-full max-w-[620px] object-contain object-bottom drop-shadow-[0_18px_45px_rgba(34,211,238,0.14)]"
        draggable={false}
      />
    </motion.div>
  );
}