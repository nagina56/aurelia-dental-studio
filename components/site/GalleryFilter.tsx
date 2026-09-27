'use client';

import { useMemo, useState } from 'react';
import { GALLERY, GALLERY_CATEGORIES, DEMO_NOTE } from '@/lib/site';
import { Reveal } from '@/components/ui/Reveal';
import { SmartImage } from '@/components/ui/SmartImage';

const ALL = GALLERY_CATEGORIES[0];

/**
 * Gallery grid with category chips.
 *
 * The chip row, the grid and the card treatment are all pre-existing classes
 * (`.filter-bar`, `.chip`, `.gallery-grid`, `.case-card`) — this only supplies
 * the missing state that wires them to the `GALLERY_CATEGORIES` content.
 */
export function GalleryFilter() {
  const [active, setActive] = useState<string>(ALL);

  const cases = useMemo(
    () => (active === ALL ? GALLERY : GALLERY.filter((item) => item.category === active)),
    [active],
  );

  return (
    <>
      <div className="filter-bar" role="group" aria-label="Filter cases by category">
        {GALLERY_CATEGORIES.map((category) => (
          <button
            key={category}
            type="button"
            className="chip"
            aria-pressed={active === category}
            onClick={() => setActive(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="gallery-grid">
        {cases.map((item, index) => (
          <Reveal
            key={item.title}
            className={`case-card ${item.tall ? 'case-card--tall' : ''}`}
            delay={(index % 3) * 80}
          >
            <SmartImage
              image={item.image}
              width={item.tall ? 800 : 1200}
              height={item.tall ? 1067 : 900}
              sizes="(max-width: 599px) 100vw, (max-width: 899px) 50vw, 33vw"
              wrapperClassName="media media--zoom"
            />

            <div className="case-card__body">
              <p className="case-card__cat">{item.category}</p>
              <h3 className="case-card__title">{item.title}</h3>
              <div className="case-card__meta">
                <span>{item.treatment}</span>
                <span>{item.duration}</span>
              </div>
              <p className="case-card__note">{item.note}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <p className="demo-note" style={{ marginTop: 'clamp(2rem, 1rem + 2vw, 3rem)' }}>
        {DEMO_NOTE}
      </p>
    </>
  );
}
