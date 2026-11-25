import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { experience } from '@/data/portfolio';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { lineDraw, viewportOnce } from '@/lib/motion';

export default function Experience() {
  return (
    <section id="experience" className="section-shell">
      <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
        <Reveal className="lg:sticky lg:top-32 lg:col-span-4 lg:self-start">
          <SectionHeading eyebrow={experience.eyebrow} title={experience.title} id="experience-title" />
        </Reveal>

        <div className="relative lg:col-span-7 lg:col-start-6">
          <motion.div
            aria-hidden="true"
            variants={lineDraw}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="absolute left-[9px] top-4 bottom-4 w-px origin-top bg-gradient-to-b from-aurora-purple via-aurora-cyan to-aurora-mint/30"
          />

          <Reveal className="relative pl-12 sm:pl-16">
            <span aria-hidden="true" className="absolute left-0 top-9 flex h-5 w-5 items-center justify-center rounded-full bg-midnight ring-1 ring-aurora-cyan/60">
              <span className="h-2 w-2 rounded-full bg-gradient-to-br from-aurora-purple to-aurora-cyan" />
              <span className="absolute inset-0 rounded-full border border-aurora-cyan/60 animate-ping-slow" />
            </span>

            <article className="glass group relative overflow-hidden p-7 transition duration-700 hover:border-aurora-cyan/30 sm:p-10">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-aurora-violet/25 blur-3xl transition duration-700 group-hover:bg-aurora-cyan/20"
              />

              <p className="font-mono text-xs uppercase tracking-[0.2em] text-aurora-mint">Full-time experience</p>
              <h3 className="mt-5 text-3xl sm:text-4xl">{experience.role}</h3>
              <p className="mt-3 text-lg font-semibold text-aurora-cyan">{experience.company}</p>

              <ul className="mt-10 space-y-6">
                {experience.responsibilities.map((item, index) => (
                  <li key={item} className="flex gap-5 text-base leading-[1.7] text-ink-muted">
                    <span className="mt-0.5 font-mono text-xs text-aurora-lavender/80">0{index + 1}</span>
                    <span className="flex-1 border-l border-white/10 pl-5">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 border-t border-white/10 pt-8">
                <p className="flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-ink-muted">
                  <ChevronRight className="h-3.5 w-3.5 text-aurora-mint" aria-hidden="true" />
                  Technology stack
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {experience.technologies.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 font-mono text-[0.72rem] text-ink transition duration-300 hover:-translate-y-0.5 hover:border-aurora-mint/50 hover:text-aurora-mint"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
