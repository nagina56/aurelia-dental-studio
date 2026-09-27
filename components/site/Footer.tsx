import Link from 'next/link';
import { FOOTER_NAV, SITE } from '@/lib/site';
import { ArrowRight, IconMail, IconPhone, IconPin, SOCIAL_ICONS } from '@/components/ui/Icons';

export function Footer() {
  const year = 2026;

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <p className="footer__wordmark">
              Aurelia
              <em>Dental Studio</em>
            </p>
            <p className="footer__blurb">
              A private dental studio built around unhurried consultations, digital
              precision and the natural beauty of your own smile.
            </p>
            <ul className="footer__social">
              {SITE.social.map((item) => {
                const Icon = SOCIAL_ICONS[item.label as keyof typeof SOCIAL_ICONS];
                return (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${item.label} (opens in a new tab)`}
                    >
                      <Icon />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <nav aria-labelledby="footer-nav-title">
            <h2 className="footer__col-title" id="footer-nav-title">
              Explore
            </h2>
            <ul className="footer__list">
              {FOOTER_NAV.slice(0, 5).map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="footer__col-title">More</h2>
            <ul className="footer__list">
              {FOOTER_NAV.slice(5).map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="footer__col-title">Visit the studio</h2>
            <address className="footer__address">
              <span
                style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}
              >
                <span style={{ marginTop: '0.28rem', flex: 'none' }}>
                  <IconPin />
                </span>
                <span>
                  {SITE.address.line1}
                  <br />
                  {SITE.address.line2}
                  <br />
                  {SITE.address.city} {SITE.address.postcode}
                </span>
              </span>
              <span
                style={{ display: 'flex', gap: '0.6rem', alignItems: 'center', marginTop: '0.85rem' }}
              >
                <span style={{ flex: 'none' }}>
                  <IconPhone />
                </span>
                <a href={`tel:${SITE.phoneHref}`}>{SITE.phone}</a>
              </span>
              <span
                style={{ display: 'flex', gap: '0.6rem', alignItems: 'center', marginTop: '0.6rem' }}
              >
                <span style={{ flex: 'none' }}>
                  <IconMail />
                </span>
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              </span>
            </address>
          </div>
        </div>

        <div className="footer__cta">
          <p className="footer__cta-text">
            <span className="footer__cta-title">Ready to feel good about your smile?</span>
          </p>
          <Link href="/appointment" className="btn btn--gold">
            Book Appointment
            <ArrowRight className="btn__arrow" />
          </Link>
        </div>

        <div className="footer__bottom">
          <div className="footer__legal">
            <p>
              © {year} {SITE.name} — Portfolio Demo
            </p>
            <p>Fictional content created for demonstration purposes.</p>
          </div>
          <dl className="footer__hours">
            {SITE.hours.map((row) => (
              <div key={row.days}>
                <dt>{row.days}</dt>
                <dd>{row.time}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </footer>
  );
}
