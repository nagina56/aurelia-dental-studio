type IconProps = { className?: string };

/** Thin champagne-gold line icons, drawn to a 24px grid. */

export function ArrowRight({ className }: IconProps) {
  return (
    <svg
      className={className}
      width="15"
      height="12"
      viewBox="0 0 15 12"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M9.5 1 14 6l-4.5 5M14 6H1"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ArrowDown({ className }: IconProps) {
  return (
    <svg
      className={className}
      width="12"
      height="16"
      viewBox="0 0 12 16"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M6 1v14M1.5 10.5 6 15l4.5-4.5"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconCompass({ className }: IconProps) {
  return (
    <svg className={className} width="30" height="30" viewBox="0 0 30 30" fill="none" aria-hidden="true" focusable="false">
      <circle cx="15" cy="15" r="12.25" stroke="currentColor" strokeWidth="1" opacity=".45" />
      <path d="m19.5 10.5-2.6 6.4-6.4 2.6 2.6-6.4 6.4-2.6Z" stroke="currentColor" strokeWidth="1.1" strokeLinejoin="round" />
      <circle cx="15" cy="15" r="1.1" fill="currentColor" />
    </svg>
  );
}

export function IconScan({ className }: IconProps) {
  return (
    <svg className={className} width="30" height="30" viewBox="0 0 30 30" fill="none" aria-hidden="true" focusable="false">
      <path d="M4 10V6.5A2.5 2.5 0 0 1 6.5 4H10M20 4h3.5A2.5 2.5 0 0 1 26 6.5V10M26 20v3.5a2.5 2.5 0 0 1-2.5 2.5H20M10 26H6.5A2.5 2.5 0 0 1 4 23.5V20" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
      <path d="M8 20c2.5-1 3.5-4 4.5-7s2-4.5 3.5-5.5c1-.7 2-1 3-1" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" opacity=".7" />
      <circle cx="9" cy="20.5" r="1.3" fill="currentColor" />
    </svg>
  );
}

export function IconHands({ className }: IconProps) {
  return (
    <svg className={className} width="30" height="30" viewBox="0 0 30 30" fill="none" aria-hidden="true" focusable="false">
      <path d="M11 13V5.8a1.6 1.6 0 0 1 3.2 0V12m0-.6V4.9a1.6 1.6 0 0 1 3.2 0V12m0-.4V6.6a1.6 1.6 0 0 1 3.2 0V15c0 6-2.4 9.5-6.6 9.5-3.4 0-5.2-1.6-7-4.4l-1.6-2.5a1.6 1.6 0 0 1 2.6-1.8L11 18V8.2" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconSpark({ className }: IconProps) {
  return (
    <svg className={className} width="30" height="30" viewBox="0 0 30 30" fill="none" aria-hidden="true" focusable="false">
      <path d="M15 3.5 17.4 12 26 14.5 17.4 17 15 25.5 12.6 17 4 14.5 12.6 12 15 3.5Z" stroke="currentColor" strokeWidth="1.1" strokeLinejoin="round" />
      <path d="M23.5 4v4M25.5 6h-4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity=".6" />
    </svg>
  );
}

export function IconPhone({ className }: IconProps) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" focusable="false">
      <path d="M5.2 2.5H3.4c-.7 0-1.3.5-1.4 1.2-.5 4 2.3 7.9 6.3 8.4.7.1 1.2-.7 1.2-1.4v-1.8l-2.2-.9-1 1a8.1 8.1 0 0 1-3.6-3.6l1-1-.9-2.2Z" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconMail({ className }: IconProps) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" focusable="false">
      <rect x="1.75" y="3.25" width="12.5" height="9.5" rx="1.25" stroke="currentColor" strokeWidth="1.1" />
      <path d="m2.4 4.4 5.6 4 5.6-4" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconPin({ className }: IconProps) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" focusable="false">
      <path d="M13 6.8c0 3.4-5 8-5 8s-5-4.6-5-8a5 5 0 0 1 10 0Z" stroke="currentColor" strokeWidth="1.1" strokeLinejoin="round" />
      <circle cx="8" cy="6.75" r="1.75" stroke="currentColor" strokeWidth="1.1" />
    </svg>
  );
}

export function IconClock({ className }: IconProps) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" focusable="false">
      <circle cx="8" cy="8" r="6.25" stroke="currentColor" strokeWidth="1.1" />
      <path d="M8 4.5V8l2.5 1.5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconQuote({ className }: IconProps) {
  return (
    <svg className={className} width="40" height="30" viewBox="0 0 40 30" fill="none" aria-hidden="true" focusable="false">
      <path d="M0 30V17.6C0 7.9 5.2 1.6 15.6 0l1.9 5.1c-6 1.6-9 5-9 9.9H16V30H0Zm24 0V17.6C24 7.9 29.2 1.6 39.6 0l1.9 5.1c-6 1.6-9 5-9 9.9H40V30H24Z" fill="currentColor" />
    </svg>
  );
}

export function IconCheck({ className }: IconProps) {
  return (
    <svg className={className} width="18" height="14" viewBox="0 0 18 14" fill="none" aria-hidden="true" focusable="false">
      <path d="m1.5 7 5 5 10-11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconAlert({ className }: IconProps) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true" focusable="false">
      <circle cx="9" cy="9" r="7.25" stroke="currentColor" strokeWidth="1.2" />
      <path d="M9 5.5v4.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="9" cy="12.6" r=".85" fill="currentColor" />
    </svg>
  );
}

export function IconSpinner({ className }: IconProps) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" focusable="false">
      <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.6" opacity=".28" />
      <path d="M8 1.5A6.5 6.5 0 0 1 14.5 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function IconInstagram({ className }: IconProps) {
  return (
    <svg className={className} width="17" height="17" viewBox="0 0 17 17" fill="none" aria-hidden="true" focusable="false">
      <rect x="1.4" y="1.4" width="14.2" height="14.2" rx="4" stroke="currentColor" strokeWidth="1.15" />
      <circle cx="8.5" cy="8.5" r="3.3" stroke="currentColor" strokeWidth="1.15" />
      <circle cx="12.6" cy="4.5" r=".95" fill="currentColor" />
    </svg>
  );
}

export function IconLinkedIn({ className }: IconProps) {
  return (
    <svg className={className} width="17" height="17" viewBox="0 0 17 17" fill="none" aria-hidden="true" focusable="false">
      <rect x="1.4" y="1.4" width="14.2" height="14.2" rx="2.4" stroke="currentColor" strokeWidth="1.15" />
      <path d="M4.6 7.4v5M4.6 5.1v.05M7.6 12.4V7.4m0 2.1c0-1.16.79-2.1 1.97-2.1s1.83.94 1.83 2.1v2.9" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
    </svg>
  );
}

export function IconPinterest({ className }: IconProps) {
  return (
    <svg className={className} width="17" height="17" viewBox="0 0 17 17" fill="none" aria-hidden="true" focusable="false">
      <circle cx="8.5" cy="8.5" r="7.1" stroke="currentColor" strokeWidth="1.15" />
      <path d="M6.6 14.4c.4-1.2.9-3 1.1-3.9-.5-.8-.2-2.3.6-2.3.7 0 1 .6 1 1.2 0 .7-.5 1.8-.7 2.8-.2.8.4 1.4 1.2 1.4 1.4 0 2.3-1.8 2.3-3.6 0-1.9-1.6-3.4-3.9-3.4-2.8 0-4.4 2-4.4 4.2 0 .8.2 1.5.6 2 .2.2.2.3.1.6l-.2.7" stroke="currentColor" strokeWidth="1.05" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export const SOCIAL_ICONS = {
  Instagram: IconInstagram,
  LinkedIn: IconLinkedIn,
  Pinterest: IconPinterest,
} as const;
