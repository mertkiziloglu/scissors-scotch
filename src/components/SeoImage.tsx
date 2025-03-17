import Image, { ImageProps } from 'next/image';
import React from 'react';

interface SeoImageProps extends Omit<ImageProps, 'alt'> {
  alt: string; // Make alt text required
  className?: string;
  priority?: boolean;
}

export default function SeoImage({
  src,
  alt,
  width,
  height,
  fill,
  className,
  priority = false,
  ...props
}: SeoImageProps) {
  // Ensure alt text is provided and meaningful
  if (!alt || alt === '') {
    console.warn('SeoImage: Alt text is required for better SEO and accessibility');
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      fill={fill}
      className={className}
      priority={priority}
      loading={priority ? 'eager' : 'lazy'}
      sizes={props.sizes || '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'}
      {...props}
    />
  );
} 