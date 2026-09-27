'use client';

import { useEffect, useRef, useState, type ElementType, type ReactNode } from 'react';

type RevealProps = {
  children: ReactNode;
  /** Direction the element travels from. `up` is the default fade-up. */
  from?: 'up' | 'left' | 'right' | 'scale';
  delay?: number;
  as?: ElementType;
  className?: string;
  style?: React.CSSProperties;
};

const OBSERVER_OPTIONS: IntersectionObserverInit = {
  threshold: 0.12,
  rootMargin: '0px 0px -8% 0px',
};

/**
 * Reveals children once they enter the viewport.
 *
 * The element starts hidden via CSS ([data-reveal]) and is marked visible here.
 * If IntersectionObserver is unavailable, or the user prefers reduced motion,
 * content is shown immediately — nothing is ever left invisible.
 */
export function Reveal({
  children,
  from = 'up',
  delay = 0,
  as: Tag = 'div',
  className,
  style,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduced || typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      }
    }, OBSERVER_OPTIONS);

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      data-reveal={from}
      className={className}
      style={{ ...style, transitionDelay: delay ? `${delay}ms` : undefined }}
      data-visible={visible ? 'true' : 'false'}
    >
      {children}
    </Tag>
  );
}

/**
 * Curtain reveal for media: the frame wipes open from the top.
 * Kept separate from `Reveal` so images can move independently of their
 * surrounding copy.
 */
export function RevealImage({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced || typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      }
    }, OBSERVER_OPTIONS);

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-reveal-img=""
      data-visible={visible ? 'true' : 'false'}
      className={className}
      style={{ transitionDelay: delay ? `${delay}ms` : undefined }}
    >
      {children}
    </div>
  );
}
