import { ArrowUp, Github, Mail } from 'lucide-react';
import { footer, personal } from '@/data/portfolio';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10">
      <div className="container-shell flex flex-col gap-10 py-14 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-4xl font-bold tracking-wide text-ink">{personal.brand}</p>
          <p className="mt-3 text-sm text-ink-muted">{footer.tagline}</p>
          <p className="mt-1 text-sm text-ink-subtle">{personal.location}</p>
        </div>

        <nav aria-label="Footer" className="flex flex-wrap items-center gap-3">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glass group min-h-[44px] px-5 text-sm"
          >
            <Github className="h-4 w-4 transition duration-300 group-hover:scale-110" aria-hidden="true" />
            GitHub
            <span className="sr-only">(opens in a new tab)</span>
          </a>
          <a href={`mailto:${personal.email}`} className="btn-glass group min-h-[44px] px-5 text-sm">
            <Mail className="h-4 w-4 transition duration-300 group-hover:scale-110" aria-hidden="true" />
            Email
          </a>
          <a href="#home" className="btn-glass group min-h-[44px] px-5 text-sm">
            <ArrowUp className="h-4 w-4 transition duration-300 group-hover:-translate-y-0.5" aria-hidden="true" />
            Back to top
          </a>
        </nav>
      </div>

      <div className="container-shell border-t border-white/5 py-6">
        <p className="text-xs text-ink-subtle">
          &copy; {year} {personal.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
