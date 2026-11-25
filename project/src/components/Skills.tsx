import { motion } from 'framer-motion';
import { skillGroups } from '@/data/portfolio';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import SkillGroup from '@/components/SkillGroup';
import { staggerParent, viewportOnce } from '@/lib/motion';

const layoutClasses = ['lg:col-span-3', 'lg:col-span-3', 'lg:col-span-2', 'lg:col-span-2', 'md:col-span-2 lg:col-span-2'];

export default function Skills() {
  return (
    <section id="skills" className="section-shell">
      <Reveal>
        <SectionHeading
          eyebrow="Skills"
          id="skills-title"
          title={
            <>
              A structured technology <span className="text-aurora">ecosystem</span>
            </>
          }
        />
      </Reveal>

      <motion.div
        variants={staggerParent(0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mt-20 grid gap-5 md:grid-cols-2 lg:grid-cols-6"
      >
        {skillGroups.map((group, index) => (
          <div key={group.id} className={`h-full ${layoutClasses[index]}`}>
            <SkillGroup group={group} />
          </div>
        ))}
      </motion.div>
    </section>
  );
}
