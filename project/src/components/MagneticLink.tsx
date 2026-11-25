import { motion, useMotionValue, useReducedMotion, useSpring, type HTMLMotionProps } from 'framer-motion';
import type { PointerEvent } from 'react';

type MagneticLinkProps = Omit<HTMLMotionProps<'a'>, 'ref'>;

const SPRING = { stiffness: 220, damping: 16, mass: 0.4 };

export default function MagneticLink({ className, children, ...anchorProps }: MagneticLinkProps) {
  const reduceMotion = useReducedMotion();
  const x = useSpring(useMotionValue(0), SPRING);
  const y = useSpring(useMotionValue(0), SPRING);

  const handlePointerMove = (event: PointerEvent<HTMLAnchorElement>) => {
    if (reduceMotion || event.pointerType !== 'mouse') return;
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left - rect.width / 2) * 0.22);
    y.set((event.clientY - rect.top - rect.height / 2) * 0.3);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      className={className}
      style={{ x, y }}
      onPointerMove={handlePointerMove}
      onPointerLeave={reset}
      {...anchorProps}
    >
      {children}
    </motion.a>
  );
}
