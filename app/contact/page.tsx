import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/site/PageHero';
import { CtaBand } from '@/components/site/CtaBand';
import { Reveal } from '@/components/ui/Reveal';
import {
  IconClock,
  IconMail,
  IconPhone,
  IconPin,
  ArrowRight,
} from '@/components/ui/Icons';
import { PAGE_IMAGES, SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact & Visit',
  description:
    'Find Aurelia Dental Studio in Notting Hill Gate, London. Phone, email, opening hours and directions for your first visit.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Come and see the studio."
        text="We are a short walk from Notting Hill Gate station. Ring the bell marked Aurelia and someone will come down for you."
        image={PAGE_IMAGES.contact.image}
        imagePriority
        crumbs={[{ label: 'Contact' }]}
      />

      <section className="section bg-white">
        <div className="container">
          <div className="contact-grid">
            <div>
              <p className="eyebrow">Reach Us</p>
              <h2 className="h2">However suits you.</h2>
              <p className="lead" style={{ marginTop: 'var(--sp-4)' }}>
                For anything urgent — pain, swelling or a knocked-out tooth — call rather
                than emailing. We hold same-day slots back for exactly that.
              </p>

              <div className="info-list" style={{ marginTop: 'var(--sp-6)' }}>
                <div className="info-list__row">
                  <IconPhone />
                  <div>
                    <p className="info-list__label">Phone</p>
                    <p className="info-list__value">
                      <a href={`tel:${SITE.phoneHref}`}>{SITE.phone}</a>
                    </p>
                  </div>
                </div>

                <div className="info-list__row">
                  <IconMail />
                  <div>
                    <p className="info-list__label">Email</p>
                    <p className="info-list__value">
                      <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
                    </p>
                  </div>
                </div>

                <div className="info-list__row">
                  <IconPin />
                  <div>
                    <p className="info-list__label">Address</p>
                    <address className="info-list__value" style={{ fontStyle: 'normal' }}>
                      {SITE.address.line1}
                      <br />
                      {SITE.address.line2}
                      <br />
                      {SITE.address.city} {SITE.address.postcode}
                      <br />
                      {SITE.address.country}
                    </address>
                  </div>
                </div>

                <div className="info-list__row">
                  <IconClock />
                  <div style={{ width: '100%' }}>
                    <p className="info-list__label">Opening hours</p>
                    <dl className="hours-table" style={{ marginTop: 'var(--sp-2)' }}>
                      {SITE.hours.map((slot) => (
                        <div key={slot.days}>
                          <dt>{slot.days}</dt>
                          <dd>{slot.time}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>
              </div>

              <Reveal style={{ marginTop: 'var(--sp-6)' }}>
                <Link href="/appointment" className="btn">
                  Request Appointment
                  <ArrowRight className="btn__arrow" />
                </Link>
              </Reveal>
            </div>

            <Reveal delay={90}>
              <div className="map-placeholder">
                <div className="map-placeholder__pin">
                  <IconPin />
                  <p className="info-list__label">Aurelia Dental Studio</p>
                  <p className="info-list__value">
                    {SITE.address.line1}, {SITE.address.city} {SITE.address.postcode}
                  </p>
                  <p className="text-muted" style={{ fontSize: 'var(--fs-xs)', marginTop: 'var(--sp-2)' }}>
                    Six minutes on foot from Notting Hill Gate station.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand
        title="Planning your first visit?"
        text="Tell us what you need and we will find a time that works, including short-notice emergency slots."
        secondaryLabel="Read The FAQ"
        secondaryHref="/faq"
      />
    </>
  );
}
