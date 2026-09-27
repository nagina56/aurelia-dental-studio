import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="section bg-mist">
      <div className="container container--narrow">
        <p className="eyebrow">Error 404</p>
        <h1 className="h1" style={{ marginTop: 'var(--sp-4)' }}>
          This page has moved on.
        </h1>
        <p className="lead" style={{ marginTop: 'var(--sp-4)' }}>
          The page you were looking for isn&rsquo;t here. The rest of the studio is exactly
          where you left it.
        </p>
        <div
          style={{
            marginTop: 'var(--sp-6)',
            display: 'flex',
            gap: 'var(--sp-3)',
            flexWrap: 'wrap',
          }}
        >
          <Link href="/" className="btn">
            Back to home
          </Link>
          <Link href="/services" className="btn btn--outline">
            Explore services
          </Link>
        </div>
      </div>
    </section>
  );
}
