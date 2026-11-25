import { motion } from 'framer-motion';
import { education } from '@/data/portfolio';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { lineDraw, viewportOnce } from '@/lib/motion';

export default function Education() {
  return (
    <section id="education" className="section-shell">
      <Reveal>
        <SectionHeading eyebrow="Foundations" title="Education" id="education-title" />
      </Reveal>

      <div className="relative mt-20 max-w-4xl">
        <motion.div
          aria-hidden="true"
          variants={lineDraw}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="absolute left-[9px] top-3 bottom-3 w-px origin-top bg-gradient-to-b from-aurora-cyan via-aurora-blue/50 to-transparent"
        />

        <ol className="space-y-6">
          {education.map((item, index) => (
            <li key={item.id} className="relative list-none pl-12 sm:pl-16">
              <span aria-hidden="true" className="absolute left-0 top-7 flex h-5 w-5 items-center justify-center">
                <span className="h-2.5 w-2.5 rounded-full bg-aurora-cyan shadow-[0_0_18px_rgba(34,211,238,0.9)]" />
              </span>

              <Reveal delay={index * 0.12}>
                <div className="glass group flex flex-col gap-5 p-6 transition duration-500 hover:-translate-y-1 hover:border-aurora-cyan/30 sm:flex-row sm:items-center sm:justify-between sm:p-8">
                  <div>
                    <h3 className="text-2xl sm:text-3xl">{item.title}</h3>
                    {item.institution && <p className="mt-2 text-base text-ink-muted">{item.institution}</p>}
                  </div>

                  {(item.period ?? item.result) && (
                    <dl className="flex shrink-0 items-center gap-8 font-mono text-xs uppercase tracking-[0.16em]">
                      {item.period && (
                        <div>
                          <dt className="text-ink-subtle">Period</dt>
                          <dd className="mt-1 text-ink">{item.period}</dd>
                        </div>
                      )}
                      {item.result && (
                        <div>
                          <dt className="text-ink-subtle">Result</dt>
                          <dd className="mt-1 text-2xl font-bold normal-case tracking-normal text-gradient">{item.result}</dd>
                        </div>
                      )}
                    </dl>
                  )}
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
