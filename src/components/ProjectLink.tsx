import { ArrowUpRight, Clock, Github } from 'lucide-react';
import { isLinkConfigured } from '@/lib/links';

interface ProjectLinkProps {
  href: string;
  kind: 'source' | 'demo';
}

export default function ProjectLink({ href, kind }: ProjectLinkProps) {
  const isSource = kind === 'source';
  const label = isSource ? 'View Source Code' : 'Live Demo';

  if (!isLinkConfigured(href)) {
    return (
      <span
        className="inline-flex min-h-[44px] cursor-not-allowed items-center gap-2 rounded-full border border-dashed border-white/15 px-5 text-sm text-ink-muted"
        title={`${label}: link coming soon`}
      >
        <Clock className="h-4 w-4" aria-hidden="true" />
        Link coming soon
      </span>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="btn-glass group min-h-[44px] px-5 text-sm"
    >
      {isSource ? (
        <Github className="h-4 w-4 transition duration-300 group-hover:scale-110" aria-hidden="true" />
      ) : (
        <ArrowUpRight className="h-4 w-4 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
      )}
      {label}
      <span className="sr-only">(opens in a new tab)</span>
    </a>
  );
}
