import type { ProjectData } from '@/data/portfolio';
import ProjectLink from '@/components/ProjectLink';
import ProjectMockup from '@/components/ProjectMockup';

interface ProjectCardProps {
  project: ProjectData;
  featured?: boolean;
}

export default function ProjectCard({ project, featured = false }: ProjectCardProps) {
  if (featured) {
    return (
      <article className="group grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:order-2 lg:col-span-7">
          <ProjectMockup project={project} featured />
        </div>
        <div className="lg:order-1 lg:col-span-5">
          <ProjectDetails project={project} featured />
        </div>
      </article>
    );
  }

  return (
    <article className="group flex h-full flex-col gap-10">
      <ProjectMockup project={project} featured={false} />
      <ProjectDetails project={project} featured={false} />
    </article>
  );
}

interface ProjectDetailsProps {
  project: ProjectData;
  featured: boolean;
}

function ProjectDetails({ project, featured }: ProjectDetailsProps) {
  return (
    <div>
      <div className="flex items-center justify-between gap-4">
        <span className="font-display text-5xl font-bold text-white/15">{project.number}</span>
        <span className="eyebrow text-right">{project.category}</span>
      </div>

      <h3
        className={`mt-6 text-balance transition-colors duration-500 group-hover:text-aurora-mint ${
          featured ? 'text-[clamp(2.5rem,4.6vw,4.25rem)]' : 'text-[clamp(2rem,3.4vw,2.9rem)]'
        }`}
      >
        {project.title}
      </h3>

      <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies used">
        {project.technologies.map((tech) => (
          <li
            key={tech}
            className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 font-mono text-[0.72rem] text-ink transition duration-300 hover:-translate-y-0.5 hover:border-aurora-cyan/50"
          >
            {tech}
          </li>
        ))}
      </ul>

      <p className="mt-6 text-base leading-[1.7] text-ink-muted">{project.description}</p>

      <div className="mt-8 flex flex-wrap gap-3">
        <ProjectLink href={project.links.source} kind="source" />
        <ProjectLink href={project.links.demo} kind="demo" />
      </div>
    </div>
  );
}
