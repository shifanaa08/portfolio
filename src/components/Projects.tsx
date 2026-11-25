import { projects } from '@/data/portfolio';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import ProjectCard from '@/components/ProjectCard';

const [featuredProject, ...otherProjects] = projects;

export default function Projects() {
  return (
    <section id="projects" className="section-shell">
      <Reveal>
        <SectionHeading
          eyebrow="Selected work"
          title={
            <>
              Featured <span className="text-gradient">projects</span>
            </>
          }
          id="projects-title"
        />
      </Reveal>

      <Reveal className="mt-20 md:mt-28">
        <ProjectCard project={featuredProject} featured />
      </Reveal>

      <div className="mt-28 grid gap-20 md:grid-cols-2 md:items-start md:gap-12">
        {otherProjects.map((project, index) => (
          <Reveal key={project.id} delay={index * 0.12} className={index % 2 === 1 ? 'md:mt-24' : ''}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
