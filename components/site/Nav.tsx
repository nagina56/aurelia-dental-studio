'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useRef, useState } from 'react';
import { NAV, SITE } from '@/lib/site';
import { ArrowRight } from '@/components/ui/Icons';

const SCROLL_THRESHOLD = 40;

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const toggleRef = useRef<HTMLButtonElement | null>(null);

  /* --- Solid background once past the top of the hero ------------------- */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* --- Close the panel whenever the route changes ----------------------- */
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  /* --- Lock background scroll while the panel is open ------------------- */
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  /* --- Escape closes, and focus returns to the trigger ------------------ */
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
        return;
      }

      if (event.key !== 'Tab' || !panelRef.current) return;

      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input, select, textarea',
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open]);

  const isActive = useCallback(
    (href: string) =>
      href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(`${href}/`),
    [pathname],
  );

  return (
    <>
      <header
        className={`nav ${scrolled || open ? 'nav--solid' : 'nav--overlay'}`}
        data-testid="site-nav"
      >
        <div className="nav__inner">
          {/* Wordmark */}
          <Link href="/" className="brand" aria-label={`${SITE.name} — home`}>
            <span className="brand__mark" aria-hidden="true">
              <span className="brand__mark-inner" />
            </span>
            <span className="brand__text">
              <span className="brand__name">Aurelia</span>
              <span className="brand__sub">Dental Studio</span>
            </span>
          </Link>

          {/* Desktop links */}
          <nav className="nav__links" aria-label="Primary">
            {NAV.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="nav__link"
                  aria-current={active ? 'page' : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="nav__cta">
            <Link
              href="/appointment"
              className="btn btn--gold nav__cta-btn"
              aria-current={pathname === '/appointment' ? 'page' : undefined}
            >
              Book Appointment
            </Link>
          </div>

          {/* Mobile trigger */}
          <button
            ref={toggleRef}
            type="button"
            className="nav__toggle"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
            <span className="nav__toggle-bars" data-open={open} aria-hidden="true">
              <span />
              <span />
            </span>
          </button>
        </div>
      </header>

      {/* Mobile panel */}
      <div
        id="mobile-nav"
        ref={panelRef}
        className={`mobile-nav ${open ? 'is-open' : ''}`}
        data-open={open}
        hidden={!open}
      >
        <nav className="mobile-nav__links" aria-label="Mobile">
          {NAV.map((item, index) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className="mobile-nav__link"
                aria-current={active ? 'page' : undefined}
                style={{ transitionDelay: open ? `${90 + index * 45}ms` : '0ms' }}
                tabIndex={open ? 0 : -1}
              >
                <span className="mobile-nav__num">{String(index + 1).padStart(2, '0')}</span>
                <span className="mobile-nav__label">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="mobile-nav__foot">
          <Link
            href="/appointment"
            className="btn btn--gold btn--block"
            tabIndex={open ? 0 : -1}
          >
            Book Appointment
            <ArrowRight className="btn__arrow" />
          </Link>

          <div className="mobile-nav__contact">
            <a href={`tel:${SITE.phoneHref}`} tabIndex={open ? 0 : -1}>
              {SITE.phone}
            </a>
            <a href={`mailto:${SITE.email}`} tabIndex={open ? 0 : -1}>
              {SITE.email}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
