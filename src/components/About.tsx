import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { about } from '@/data/portfolio';
import AboutOrbit from '@/components/AboutOrbit';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { lineGrow, viewportOnce } from '@/lib/motion';

export default function About() {
  return (
    <section id="about" className="section-shell">
      <Reveal>
        <SectionHeading
          eyebrow={about.eyebrow}
          id="about-title"
          title={
            <>
              Technology is more than code. <span className="text-aurora">It&apos;s about solving problems.</span>
            </>
          }
        />
      </Reveal>

      <div className="mt-20 grid gap-16 lg:grid-cols-12 lg:gap-12">
        <div className="space-y-8 lg:col-span-6 lg:col-start-1 lg:mt-12">
          {about.paragraphs.map((paragraph, index) => (
            <Reveal key={paragraph.slice(0, 24)} delay={index * 0.1}>
              <div className="relative pl-7">
                <motion.span
                  aria-hidden="true"
                  variants={lineGrow}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOnce}
                  className="absolute left-0 top-2 h-[calc(100%-0.5rem)] w-px origin-top bg-gradient-to-b from-aurora-purple to-transparent"
                />
                <p className="text-[1.05rem] leading-[1.8] text-ink-muted sm:text-lg">{paragraph}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="lg:col-span-5 lg:col-start-8">
          <Reveal>
            <AboutOrbit />
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-10">
              <p className="eyebrow">{about.focusTitle}</p>
              <ul className="mt-6 divide-y divide-white/10 border-y border-white/10">
                {about.focus.map((item, index) => (
                  <li key={item} className="group flex items-center justify-between gap-4 py-4 transition duration-500 hover:pl-2">
                    <span className="flex items-center gap-4">
                      <span className="font-mono text-xs text-aurora-lavender/80">0{index + 1}</span>
                      <span className="font-display text-lg text-ink sm:text-xl">{item}</span>
                    </span>
                    <Check className="h-4 w-4 shrink-0 text-aurora-mint opacity-0 transition duration-500 group-hover:opacity-100" aria-hidden="true" />
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
