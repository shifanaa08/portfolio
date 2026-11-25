import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { personal } from '@/data/portfolio';
import HeroBackdrop from '@/components/HeroBackdrop';
import HeroStage from '@/components/HeroStage';
import MagneticLink from '@/components/MagneticLink';
import { fadeUp, letterIn, scaleIn, slideFromLeft, staggerParent } from '@/lib/motion';

const splitWords = (text: string) => text.split(' ').filter(Boolean);

export default function Hero() {
  const { headline } = personal;
  const headlineWords = [
    ...splitWords(headline.before).map((word) => ({ word, accent: false })),
    ...splitWords(headline.highlight).map((word) => ({ word, accent: true })),
    ...splitWords(headline.after).map((word) => ({ word, accent: false })),
  ];
  return (
    <section id="home" className="relative isolate flex min-h-[100svh] items-center overflow-hidden pb-24 pt-32 md:pt-36">
      <HeroBackdrop />

      <p
        aria-hidden="true"
        className="pointer-events-none absolute right-5 top-1/2 hidden -translate-y-1/2 font-mono text-[0.65rem] uppercase tracking-[0.4em] text-ink-subtle [writing-mode:vertical-rl] xl:block"
      >
        {personal.title}
      </p>

      <p
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-4 left-0 select-none font-display text-[clamp(4.5rem,15vw,12.5rem)] font-extrabold leading-none tracking-[-0.04em] text-transparent [-webkit-text-stroke:1px_rgba(196,181,253,0.2)]"
      >
        {personal.brand}
      </p>

      <motion.div
        className="container-shell relative grid items-center gap-16 lg:grid-cols-12 lg:gap-10"
        variants={staggerParent(0.14, 0.1)}
        initial="hidden"
        animate="visible"
      >
        <div className="lg:col-span-7">
          <motion.p variants={slideFromLeft} className="flex items-center gap-4 font-mono text-xs uppercase tracking-[0.2em] text-aurora-mint">
            <span className="text-ink-subtle">01 /</span>
            {personal.eyebrow}
          </motion.p>

          <p className="mt-7 font-display text-2xl font-semibold tracking-[0.02em] text-ink-muted sm:text-3xl" aria-label={personal.name}>
            {personal.name.split('').map((letter, index) => (
              <motion.span key={`${letter}-${index}`} custom={index} variants={letterIn} className="inline-block text-ink">
                {letter}
              </motion.span>
            ))}
          </p>

          <h1 className="mt-5 text-[clamp(2.9rem,6.6vw,6.1rem)] leading-[1.02] tracking-[-0.03em]">
            {headlineWords.map(({ word, accent }, index) => (
              <motion.span key={`${word}-${index}`} variants={fadeUp} className={`mr-[0.22em] inline-block ${accent ? 'text-aurora' : ''}`}>
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p variants={fadeUp} className="mt-8 max-w-xl text-lg leading-[1.7] text-ink-muted">
            {personal.intro}
          </motion.p>

          <motion.p variants={fadeUp} className="mt-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-ink-muted">
            <span className="h-px w-8 bg-aurora-mint/60" aria-hidden="true" />
            {personal.location}
            <span className="text-aurora-lavender">·</span>
            {personal.title}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-3 sm:gap-4">
            <MagneticLink href="#projects" className="btn-primary group">
              Explore My Work
              <ArrowDown className="h-4 w-4 transition duration-500 group-hover:translate-y-0.5" aria-hidden="true" />
            </MagneticLink>
            <MagneticLink href="#contact" className="btn-glass">
              Let&apos;s Connect
            </MagneticLink>
            <a href={personal.resumePath} download className="group inline-flex min-h-[48px] items-center gap-2 px-2 text-sm font-semibold text-ink-muted transition duration-300 hover:text-aurora-mint">
              <span className="relative">
                Download Resume
                <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-aurora-mint transition duration-500 group-hover:scale-x-100" />
              </span>
            </a>
          </motion.div>

          <motion.ul variants={staggerParent(0.06, 0.2)} className="mt-12 flex flex-wrap gap-2.5" aria-label="Core technologies">
            {personal.techLine.map((tech) => (
              <motion.li
                key={tech}
                variants={scaleIn}
                className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 font-mono text-[0.72rem] uppercase tracking-[0.12em] text-ink-muted transition duration-300 hover:border-aurora-cyan/50 hover:text-ink"
              >
                {tech}
              </motion.li>
            ))}
          </motion.ul>
        </div>

        <motion.div variants={fadeUp} className="relative aspect-square w-full max-w-[600px] justify-self-center lg:col-span-5 lg:justify-self-end">
          <HeroStage />
        </motion.div>
      </motion.div>

      <a
        href="#about"
        aria-label="Scroll to About section"
        className="group absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 font-mono text-[0.65rem] uppercase tracking-[0.3em] text-ink-muted transition hover:text-ink md:flex"
      >
        Scroll
        <span className="relative flex h-14 w-px justify-center overflow-hidden bg-white/15">
          <span className="absolute left-0 top-0 h-5 w-px bg-gradient-to-b from-transparent via-aurora-cyan to-aurora-mint animate-scroll-light" />
        </span>
      </a>
    </section>
  );
}
