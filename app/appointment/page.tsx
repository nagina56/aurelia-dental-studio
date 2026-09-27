import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/site/PageHero';
import { CtaBand } from '@/components/site/CtaBand';
import { AppointmentForm } from '@/components/site/AppointmentForm';
import { Reveal } from '@/components/ui/Reveal';
import { IconCheck, IconClock, IconPhone } from '@/components/ui/Icons';
import { PAGE_IMAGES, SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Book Appointment',
  description:
    'Request an appointment at Aurelia Dental Studio. Send your preferred date and time and the patient care team will confirm within one working day.',
  alternates: { canonical: '/appointment' },
};

const REASSURANCE = [
  {
    title: 'No obligation',
    text: 'Requesting a time does not commit you to treatment. You will get an itemised fee in writing before anything begins.',
  },
  {
    title: 'A full hour first',
    text: 'New patients are booked for sixty minutes so the assessment is never rushed.',
  },
  {
    title: 'Urgent? Call instead',
    text: 'Pain, swelling or a knocked-out tooth should always be phoned through so we can hold a same-day slot.',
  },
];

export default function AppointmentPage() {
  return (
    <>
      <PageHero
        eyebrow="Book Appointment"
        title="Request a time that suits you."
        text="Tell us what you need and when you are free. Our patient care team confirms every written request within one working day."
        image={PAGE_IMAGES.appointment.image}
        imagePriority
        crumbs={[{ label: 'Appointment' }]}
      />

      <section className="section bg-mist">
        <div className="container">
          <div className="booking">
            <div className="booking__aside">
              <div>
                <p className="eyebrow">Before You Book</p>
                <h2 className="h2">What to expect.</h2>
              </div>

              <ul className="spec-list">
                {REASSURANCE.map((item) => (
                  <Reveal as="li" key={item.title} delay={70}>
                    <IconCheck />
                    <span>
                      <strong style={{ color: 'var(--c-charcoal)' }}>{item.title}.</strong>{' '}
                      {item.text}
                    </span>
                  </Reveal>
                ))}
              </ul>

              <div className="info-list">
                <div className="info-list__row">
                  <IconPhone />
                  <div>
                    <p className="info-list__label">Prefer to call?</p>
                    <p className="info-list__value">
                      <a href={`tel:${SITE.phoneHref}`}>{SITE.phone}</a>
                    </p>
                  </div>
                </div>
                <div className="info-list__row">
                  <IconClock />
                  <div>
                    <p className="info-list__label">Opening hours</p>
                    <dl className="hours-table" style={{ marginTop: 'var(--sp-2)' }}>
                      {SITE.hours.slice(0, 3).map((slot) => (
                        <div key={slot.days}>
                          <dt>{slot.days}</dt>
                          <dd>{slot.time}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>
              </div>

              <p className="text-muted" style={{ fontSize: 'var(--fs-sm)' }}>
                Not sure which service you need?{' '}
                <Link href="/services" style={{ textDecoration: 'underline' }}>
                  Browse what we treat
                </Link>{' '}
                or just describe the problem in the message field.
              </p>
            </div>

            <div className="booking__panel">
              <AppointmentForm />
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Questions before you book?"
        text="Most first-visit questions are answered on the FAQ page, and the team is happy to talk it through."
        primaryLabel="Read The FAQ"
        primaryHref="/faq"
        secondaryLabel="Contact The Studio"
        secondaryHref="/contact"
      />
    </>
  );
}
