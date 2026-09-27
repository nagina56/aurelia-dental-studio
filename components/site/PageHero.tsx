import Image from 'next/image';
import Link from 'next/link';
import { img, type Img } from '@/lib/images';
import { Reveal } from '@/components/ui/Reveal';

type Crumb = { label: string; href?: string };

type PageHeroProps = {
  eyebrow: string;
  title: string;
  text?: string;
  image: Img;
  imagePriority?: boolean;
  crumbs?: Crumb[];
  meta?: { label: string; value: string }[];
  children?: React.ReactNode;
};

/**
 * Shared hero for every inner page.
 *
 * Every page opens with one of these, which is what lets the navigation sit
 * transparent-over-image at the top of the page and only turn solid on scroll.
 * The dark scrim is baked into `.page-hero::after` so the white nav type keeps
 * its contrast on every route.
 */
export function PageHero({
  eyebrow,
  title,
  text,
  image,
  imagePriority = true,
  crumbs,
  meta,
  children,
}: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="page-hero__media">
        <Image
          src={img(image)}
          alt={image.alt}
          fill
          sizes="100vw"
          quality={80}
          priority={imagePriority}
        />
      </div>

      <div className="page-hero__inner on-dark">
        {crumbs ? (
          <nav aria-label="Breadcrumb">
            <ol className="crumbs">
              <li>
                <Link href="/">Home</Link>
              </li>
              {crumbs.map((crumb) => (
                <li key={crumb.label}>
                  {crumb.href ? <Link href={crumb.href}>{crumb.label}</Link> : crumb.label}
                </li>
              ))}
            </ol>
          </nav>
        ) : null}

        <Reveal as="p" className="eyebrow" from="up">
          {eyebrow}
        </Reveal>

        <Reveal as="h1" className="display page-hero__title" delay={80}>
          {title}
        </Reveal>

        {text ? (
          <Reveal as="p" className="page-hero__text" delay={150}>
            {text}
          </Reveal>
        ) : null}

        {children}

        {meta && meta.length > 0 ? (
          <Reveal as="dl" className="page-hero__meta" delay={220}>
            {meta.map((item) => (
              <div key={item.label}>
                <dt>
                  <strong>{item.label}</strong>
                </dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
