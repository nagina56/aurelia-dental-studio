import type { Metadata } from 'next';
import { PageHero } from '@/components/site/PageHero';
import { CtaBand } from '@/components/site/CtaBand';
import { GalleryFilter } from '@/components/site/GalleryFilter';
import { PAGE_IMAGES } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Smile Gallery',
  description:
    'A selection of fictional smile transformation cases — smile design, cosmetic work, clear aligners and restorative treatment planned at Aurelia Dental Studio.',
  alternates: { canonical: '/gallery' },
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Explore Our Work"
        title="Smiles, thoughtfully transformed."
        text="Every case below is a fictional example created for this portfolio. The photography is licensed stock standing in for a real patient journey."
        image={PAGE_IMAGES.gallery.image}
        imagePriority
        crumbs={[{ label: 'Smile Gallery' }]}
      />

      <section className="section bg-mist">
        <div className="container">
          <GalleryFilter />
        </div>
      </section>

      <CtaBand
        title="Want a smile like these?"
        text="Every case here started with a one-hour consultation and a plan you were free to take away."
        secondaryLabel="Read Patient Stories"
        secondaryHref="/testimonials"
      />
    </>
  );
}
