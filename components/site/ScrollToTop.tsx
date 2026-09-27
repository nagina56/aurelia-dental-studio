'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Next.js preserves scroll position across client navigations, which means a new
 * route can render halfway down the page. This resets it on every route change,
 * while still honouring in-page hash links.
 */
export function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.location.hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);

  return null;
}
