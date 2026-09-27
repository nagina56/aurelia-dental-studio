import type { Metadata } from 'next';
import { PageHero } from '@/components/site/PageHero';
import { CtaBand } from '@/components/site/CtaBand';
import { Accordion } from '@/components/site/Accordion';
import { Reveal } from '@/components/ui/Reveal';
import { SmartImage } from '@/components/ui/SmartImage';
import { FAQS, PAGE_IMAGES, SITE, STUDIO_IMAGES } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description:
    'Answers to the questions patients ask most — consultations, clear aligners, emergency appointments, payment options, treating children and booking a visit.',
  alternates: { canonical: '/faq' },
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="Questions"
        title="The things people ask first."
        text="If your question is not here, call the studio or send it through the appointment form — we answer written requests within one working day."
        image={PAGE_IMAGES.faq.image}
        imagePriority
        crumbs={[{ label: 'FAQ' }]}
      />

      <section className="section bg-white">
        <div className="container container--narrow">
          <Accordion items={FAQS} defaultOpen={0} />
        </div>
      </section>

      <section className="section bg-mist">
        <div className="container">
          <div className="split">
            <Reveal className="split__body">
              <p className="eyebrow">Still Unsure?</p>
              <h2 className="h2">Ask us directly.</h2>
              <div className="prose">
                <p>
                  The fastest answer is usually a phone call. Our patient care team knows
                  the schedule, the clinicians and what can realistically be done this
                  week.
                </p>
                <p>
                  If you would rather not call, send the question through the appointment
                  form with a note about what you need and we will reply in writing.
                </p>
              </div>

              <div className="info-list" style={{ marginTop: 'var(--sp-5)' }}>
                <div className="info-list__row">
                  <div>
                    <p className="info-list__label">Phone</p>
                    <p className="info-list__value">
                      <a href={`tel:${SITE.phoneHref}`}>{SITE.phone}</a>
                    </p>
                  </div>
                </div>
                <div className="info-list__row">
                  <div>
                    <p className="info-list__label">Email</p>
                    <p className="info-list__value">
                      <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal className="split__media framed" delay={90}>
              <SmartImage
                image={STUDIO_IMAGES.precision}
                width={1100}
                height={1375}
                sizes="(max-width: 899px) 100vw, 50vw"
                wrapperClassName="media media--zoom ratio-4x5"
              />
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand
        title="Ready when you are."
        text="Request an appointment and we will confirm a time that suits you within one working day."
        secondaryLabel="Visit The Studio"
        secondaryHref="/contact"
      />
    </>
  );
}
