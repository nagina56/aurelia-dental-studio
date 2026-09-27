'use client';

import { useEffect, useRef, useState } from 'react';
import type { Faq } from '@/lib/site';

type AccordionProps = {
  items: Faq[];
  /** Index open on first paint. */
  defaultOpen?: number | null;
};

/**
 * FAQ disclosure list.
 *
 * The panel height is measured from the inner content and written to the
 * element, which is what lets the `height` transition in CSS ease properly —
 * animating to `auto` is not something CSS can interpolate.
 */
export function Accordion({ items, defaultOpen = 0 }: AccordionProps) {
  const [open, setOpen] = useState<number | null>(defaultOpen);
  const panels = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    panels.current.forEach((panel, index) => {
      if (!panel) return;
      const inner = panel.firstElementChild as HTMLElement | null;
      panel.style.height = index === open ? `${inner?.offsetHeight ?? 0}px` : '0px';
    });
  }, [open, items]);

  return (
    <div className="accordion">
      {items.map((item, index) => {
        const expanded = index === open;
        return (
          <div className="accordion__item" key={item.question}>
            <button
              type="button"
              className="accordion__trigger"
              aria-expanded={expanded}
              aria-controls={`faq-panel-${index}`}
              id={`faq-trigger-${index}`}
              onClick={() => setOpen(expanded ? null : index)}
            >
              <span className="accordion__q">{item.question}</span>
              <span className="accordion__icon" aria-hidden="true" />
            </button>

            <div
              className="accordion__panel"
              id={`faq-panel-${index}`}
              role="region"
              aria-labelledby={`faq-trigger-${index}`}
              ref={(node) => {
                panels.current[index] = node;
              }}
            >
              <div className="accordion__panel-inner">
                <p>{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
