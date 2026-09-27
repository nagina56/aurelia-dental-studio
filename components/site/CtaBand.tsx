import Link from 'next/link';
import { Reveal } from '@/components/ui/Reveal';
import { ArrowRight } from '@/components/ui/Icons';
import { SITE } from '@/lib/site';

type CtaBandProps = {
  title?: string;
  text?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

/** Reusable dark-green conversion band. Used on every page for a consistent close. */
export function CtaBand({
  title = 'Ready to feel good about your smile?',
  text = 'Request a consultation and let our team help you explore your options.',
  primaryLabel = 'Request Appointment',
  primaryHref = '/appointment',
  secondaryLabel,
  secondaryHref,
}: CtaBandProps) {
  return (
    <section className="section cta-band on-dark">
      <div className="container">
        <div className="cta-band__inner">
          <Reveal className="cta-band__copy">
            <h2 className="cta-band__title">{title}</h2>
            <p className="cta-band__text">{text}</p>
            <p className="cta-band__text" style={{ fontSize: 'var(--fs-sm)', marginTop: 'var(--sp-3)' }}>
              Prefer to talk? Call{' '}
              <a href={`tel:${SITE.phoneHref}`} style={{ color: 'var(--c-gold-soft)' }}>
                {SITE.phone}
              </a>
              .
            </p>
          </Reveal>

          <Reveal className="cta-band__actions" delay={110}>
            <Link href={primaryHref} className="btn btn--gold">
              {primaryLabel}
              <ArrowRight className="btn__arrow" />
            </Link>
            {secondaryLabel && secondaryHref ? (
              <Link href={secondaryHref} className="btn btn--ghost-light">
                {secondaryLabel}
              </Link>
            ) : null}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
