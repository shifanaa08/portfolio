import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navItems, personal } from '@/data/portfolio';
import { useActiveSection } from '@/hooks/useActiveSection';
import MagneticLink from '@/components/MagneticLink';

const observedIds = ['home', ...navItems.map((item) => item.id)];
const INDICATOR_SPRING = { type: 'spring', stiffness: 380, damping: 34 } as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeId = useActiveSection(observedIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-5">
      <nav
        aria-label="Primary"
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border px-4 py-2.5 backdrop-blur-2xl transition-all duration-700 sm:px-6 ${
          scrolled
            ? 'border-aurora-cyan/25 bg-midnight/80 shadow-[0_20px_60px_-24px_rgba(0,0,0,0.9)]'
            : 'border-white/10 bg-midnight/50'
        }`}
        style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
      >
        <a
          href="#home"
          onClick={closeMenu}
          aria-label="Shifana, back to top"
          className="group flex items-center gap-2 font-display text-xl font-bold tracking-tight text-ink"
        >
          <span className="h-2 w-2 rounded-full bg-aurora-cyan shadow-[0_0_14px_#22D3EE] transition duration-500 group-hover:scale-125" />
          {personal.brand}
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const isActive = activeId === item.id;
            return (
              <li key={item.id} className="relative">
                <a
                  href={`#${item.id}`}
                  aria-current={isActive ? 'true' : undefined}
                  className={`relative z-10 block rounded-full px-4 py-2 font-mono text-[0.78rem] uppercase tracking-[0.12em] transition duration-300 hover:text-ink ${
                    isActive ? 'text-ink' : 'text-ink-muted'
                  }`}
                >
                  {item.label}
                </a>
                {isActive && (
                  <>
                    <motion.span
                      layoutId="nav-pill"
                      transition={INDICATOR_SPRING}
                      className="absolute inset-0 rounded-full border border-white/15 bg-white/[0.07]"
                    />
                    <motion.span
                      layoutId="nav-line"
                      transition={INDICATOR_SPRING}
                      className="absolute inset-x-5 -bottom-px h-px rounded-full bg-gradient-to-r from-aurora-purple via-aurora-cyan to-aurora-mint"
                    />
                  </>
                )}
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <MagneticLink href="#contact" onClick={closeMenu} className="btn-primary hidden min-h-[40px] px-5 text-[0.8rem] lg:inline-flex">
            Let&apos;s Talk
          </MagneticLink>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className="relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-ink transition duration-500 hover:border-aurora-cyan/60 lg:hidden"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={menuOpen ? 'close' : 'open'}
                initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 90, scale: 0.6 }}
                transition={{ duration: 0.3 }}
                className="flex"
              >
                {menuOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-2 max-w-7xl origin-top overflow-hidden rounded-[28px] border border-white/10 bg-midnight/95 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.9)] backdrop-blur-2xl lg:hidden"
          >
            <ul className="flex flex-col p-3">
              {navItems.map((item, index) => {
                const isActive = activeId === item.id;
                return (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + index * 0.04, duration: 0.4 }}
                  >
                    <a
                      href={`#${item.id}`}
                      onClick={closeMenu}
                      aria-current={isActive ? 'true' : undefined}
                      className={`flex min-h-[52px] items-center justify-between rounded-2xl px-5 font-display text-xl font-medium transition duration-300 hover:bg-white/[0.05] hover:text-ink ${
                        isActive ? 'text-aurora-cyan' : 'text-ink-muted'
                      }`}
                    >
                      {item.label}
                      <span
                        aria-hidden="true"
                        className={`h-1.5 w-1.5 rounded-full bg-aurora-cyan transition duration-300 ${isActive ? 'opacity-100' : 'opacity-0'}`}
                      />
                    </a>
                  </motion.li>
                );
              })}
              <li className="pt-2">
                <a href="#contact" onClick={closeMenu} className="btn-primary w-full">
                  Let&apos;s Talk
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
