import type { ReactNode } from 'react';

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  id?: string;
}

export default function SectionHeading({ eyebrow, title, id }: SectionHeadingProps) {
  return (
    <div className="max-w-4xl">
      <div className="flex items-center gap-4">
        <span aria-hidden="true" className="h-px w-12 bg-gradient-to-r from-aurora-purple to-aurora-cyan" />
        <p className="eyebrow">{eyebrow}</p>
      </div>
      <h2 id={id} className="mt-7 text-[clamp(2.5rem,5.6vw,5.25rem)] text-balance">
        {title}
      </h2>
    </div>
  );
}
