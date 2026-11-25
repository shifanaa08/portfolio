import { Github, Mail, MapPin, Phone, ArrowUpRight, type LucideIcon } from 'lucide-react';
import { contact, personal } from '@/data/portfolio';
import Reveal from '@/components/Reveal';
import ContactForm from '@/components/ContactForm';

const details = [
  { icon: Mail, label: 'Email', value: personal.email, href: `mailto:${personal.email}` },
  { icon: Phone, label: 'Phone', value: personal.phone, href: `tel:${personal.phone}` },
  { icon: MapPin, label: 'Location', value: personal.location, href: null },
  { icon: Github, label: 'GitHub', value: personal.github.replace('https://', ''), href: personal.github },
];

export default function Contact() {
  return (
    <section id="contact" className="section-shell overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-24 h-[620px] w-[620px] -translate-x-1/2 rounded-full border border-aurora-cyan/10 animate-orbit" />
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-24 h-[440px] w-[440px] -translate-x-1/2 rounded-full border border-dashed border-aurora-lavender/10 animate-orbit-reverse" />
      <div aria-hidden="true" className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-aurora-violet/25 blur-[120px] animate-glow-pulse" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-aurora-cyan/20 blur-[120px] animate-glow-pulse" />

      <div className="relative grid gap-16 lg:grid-cols-12 lg:gap-12">
        <Reveal className="lg:col-span-5">
          <p className="eyebrow">{contact.eyebrow}</p>
          <p className="mt-6 font-mono text-sm text-ink-subtle">{contact.headingLead}</p>
          <h2 className="mt-4 text-[clamp(2.75rem,6vw,5.5rem)] leading-[1.02] text-balance">
            <span className="text-gradient">{contact.headingAccent}</span>
          </h2>
          <p className="mt-8 max-w-md text-lg leading-[1.7] text-ink-muted">{contact.supporting}</p>

          <ul className="mt-12 divide-y divide-white/10 border-y border-white/10">
            {details.map(({ icon: Icon, label, value, href }) => (
              <li key={label}>
                <ContactDetail icon={Icon} label={label} value={value} href={href} />
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.15} className="lg:col-span-7">
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}

interface ContactDetailProps {
  icon: LucideIcon;
  label: string;
  value: string;
  href: string | null;
}

function ContactDetail({ icon: Icon, label, value, href }: ContactDetailProps) {
  const content = (
    <>
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-aurora-cyan transition duration-300 group-hover:border-aurora-cyan/40 group-hover:bg-aurora-cyan/10">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block font-mono text-xs uppercase tracking-[0.2em] text-ink-subtle">{label}</span>
        <span className="mt-1 block truncate text-base text-ink">{value}</span>
      </span>
      {href && (
        <ArrowUpRight className="h-4 w-4 text-ink-subtle transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-aurora-cyan" aria-hidden="true" />
      )}
    </>
  );

  const className = 'group flex items-center gap-4 py-5';

  if (!href) return <div className={className}>{content}</div>;

  const isExternal = href.startsWith('https://');
  return (
    <a
      href={href}
      className={`${className} transition duration-300 hover:pl-2`}
      {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {content}
      {isExternal && <span className="sr-only">(opens in a new tab)</span>}
    </a>
  );
}
