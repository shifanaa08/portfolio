import { useRef, type PointerEvent } from 'react';
import { useReducedMotion } from 'framer-motion';

export function useTilt<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const reducedMotion = useReducedMotion();

  const onPointerMove = (event: PointerEvent<T>) => {
    const node = ref.current;
    if (reducedMotion || !node || event.pointerType !== 'mouse') return;
    const rect = node.getBoundingClientRect();
    node.style.setProperty('--px', ((event.clientX - rect.left) / rect.width - 0.5).toFixed(3));
    node.style.setProperty('--py', ((event.clientY - rect.top) / rect.height - 0.5).toFixed(3));
  };

  const onPointerLeave = () => {
    ref.current?.style.setProperty('--px', '0');
    ref.current?.style.setProperty('--py', '0');
  };

  return { ref, onPointerMove, onPointerLeave };
}
