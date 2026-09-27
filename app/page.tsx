import type { Metadata } from 'next';
import { Hero } from '@/components/home/Hero';
import { Introduction } from '@/components/home/Introduction';
import { FeaturedServices } from '@/components/home/FeaturedServices';
import { WhyAurelia } from '@/components/home/WhyAurelia';
import { GalleryPreview } from '@/components/home/GalleryPreview';
import { TeamPreview } from '@/components/home/TeamPreview';
import { TestimonialPreview } from '@/components/home/TestimonialPreview';
import { CtaBand } from '@/components/site/CtaBand';
import { DEMO_NOTE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Aurelia Dental Studio — Private Dental Care, Reimagined',
  description:
    'Modern dentistry designed around comfort, precision and the natural beauty of your smile. Cosmetic dentistry, implants, clear aligners and preventive care in a private London studio.',
  alternates: { canonical: '/' },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Introduction />
      <FeaturedServices />
      <WhyAurelia />
      <GalleryPreview />
      <TeamPreview />
      <TestimonialPreview />
      <CtaBand />
      <p className="sr-only">{DEMO_NOTE}</p>
    </>
  );
}
