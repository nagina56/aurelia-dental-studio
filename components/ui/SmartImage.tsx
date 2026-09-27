import Image from 'next/image';
import { img, type Img } from '@/lib/images';

type SmartImageProps = {
  image: Img;
  /** Intrinsic ratio hint only — CSS owns the rendered size. */
  width?: number;
  height?: number;
  sizes?: string;
  className?: string;
  /** Media wrapper class, e.g. "media ratio-4x5 media--zoom". */
  wrapperClassName?: string;
  priority?: boolean;
  quality?: number;
};

export function SmartImage({
  image,
  width = 1200,
  height = 1500,
  sizes = '(max-width: 767px) 100vw, (max-width: 1199px) 50vw, 600px',
  className,
  wrapperClassName,
  priority = false,
  quality = 82,
}: SmartImageProps) {
  return (
    <div className={wrapperClassName}>
      <Image
        src={img(image)}
        alt={image.alt}
        width={width}
        height={height}
        sizes={sizes}
        quality={quality}
        priority={priority}
        loading={priority ? undefined : 'lazy'}
        className={className}
      />
    </div>
  );
}
