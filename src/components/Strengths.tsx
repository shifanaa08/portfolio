import { motion } from 'framer-motion';
import { languages, strengths } from '@/data/portfolio';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { staggerParent, fadeUp, viewportOnce } from '@/lib/motion';

export default function Strengths() {
  return (
    <section id="strengths" className="section-shell">
      <Reveal>
        <SectionHeading
          eyebrow="Beyond the code"
          title={
            <>
              Languages &amp; <span className="text-gradient">personal strengths</span>
            </>
          }
          id="strengths-title"
        />
      </Reveal>

      <div className="mt-20 grid gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <h3 className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-ink-subtle">Languages</h3>
          <ul className="mt-6 divide-y divide-white/10 border-y border-white/10">
            {languages.map((language, index) => (
              <li
                key={language}
                className="group flex items-center justify-between gap-6 py-6 transition duration-500 hover:pl-3"
              >
                <span className="font-display text-3xl font-semibold text-ink transition duration-500 group-hover:text-aurora-mint sm:text-4xl">
                  {language}
                </span>
                <span className="font-mono text-xs text-ink-subtle">0{index + 1}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="lg:col-span-6 lg:col-start-7">
          <h3 className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-ink-subtle">Strengths</h3>
          <motion.ul
            variants={staggerParent(0.08)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mt-6 flex flex-wrap gap-3"
          >
            {strengths.map((strength) => (
              <motion.li
                key={strength}
                variants={fadeUp}
                className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-base text-ink transition duration-300 hover:-translate-y-0.5 hover:border-aurora-lavender/50 hover:bg-white/[0.06]"
              >
                {strength}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
