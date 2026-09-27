import Link from 'next/link';
import { DEMO_NOTE, GALLERY } from '@/lib/site';
import { Reveal, RevealImage } from '@/components/ui/Reveal';
import { SmartImage } from '@/components/ui/SmartImage';
import { ArrowRight } from '@/components/ui/Icons';

export function GalleryPreview() {
  // First four entries double as the homepage collage.
  const items = GALLERY.slice(0, 4);
  const classes = ['collage__item--a', 'collage__item--b', 'collage__item--c', 'collage__item--d'];

  return (
    <section className="section bg-mist" id="gallery">
      <div className="container">
        <div className="section-head section-head--row">
          <div>
            <Reveal as="p" className="eyebrow">
              Explore Our Work
            </Reveal>
            <Reveal as="h2" className="h2" delay={70}>
              Smiles, thoughtfully transformed.
            </Reveal>
          </div>
          <Reveal as="p" className="lead" delay={130}>
            A small selection of case work. Every entry below is a fictional case created
            for this portfolio — the photography is licensed stock standing in for a real
            patient&rsquo;s journey.
          </Reveal>
        </div>

        <div className="collage">
          {items.map((item, index) => (
            <RevealImage
              key={item.title}
              className={classes[index]}
              delay={index * 80}
            >
              <Link href="/gallery" aria-label={`${item.title} — view the smile gallery`}>
                <SmartImage
                  image={item.image}
                  width={900}
                  height={index === 1 ? 1400 : 700}
                  sizes="(max-width: 767px) 50vw, 34vw"
                  wrapperClassName="media media--zoom"
                />
                <span className="collage__tag">{item.category}</span>
              </Link>
            </RevealImage>
          ))}
        </div>

        <div className="gallery-preview__foot">
          <Reveal>
            <span className="demo-note">{DEMO_NOTE}</span>
          </Reveal>
          <Reveal delay={90}>
            <Link href="/gallery" className="btn btn--outline">
              View Smile Gallery
              <ArrowRight className="btn__arrow" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
