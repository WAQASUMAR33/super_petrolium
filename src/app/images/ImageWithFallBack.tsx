'use client';

import React, { useState, useEffect, forwardRef } from 'react';

const ERROR_IMG_SVG =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjOTRhM2I4IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuNSIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIyLjUiPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iOCIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4=';

export interface ImageWithFallbackProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallbackSrc?: string;
  loading?: 'lazy' | 'eager';
  decoding?: 'async' | 'auto' | 'sync';
  fetchPriority?: 'high' | 'low' | 'auto';
  priority?: boolean;
}

export const ImageWithFallback = forwardRef<HTMLImageElement, ImageWithFallbackProps>(
  function ImageWithFallback(
    {
      src,
      alt,
      fallbackSrc,
      loading = 'lazy',
      decoding = 'async',
      fetchPriority = 'auto',
      priority = false,
      className = '',
      style,
      onError,
      onLoad,
      ...rest
    },
    ref
  ) {
    const [imgSrc, setImgSrc] = useState<string>(src);
    const [hasError, setHasError] = useState<boolean>(false);

    // Sync imgSrc if src prop changes
    useEffect(() => {
      setImgSrc(src);
      setHasError(false);
    }, [src]);

    const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
      if (!hasError) {
        if (fallbackSrc && imgSrc !== fallbackSrc) {
          setImgSrc(fallbackSrc);
        } else {
          setImgSrc(ERROR_IMG_SVG);
          setHasError(true);
        }
      }
      if (onError) {
        onError(e);
      }
    };

    // Strip any opacity-0 class to ensure image is always 100% visible
    const cleanClassName = (className || '')
      .replace(/\bopacity-\d+\b/g, '')
      .trim();

    return (
      <img
        ref={ref}
        src={imgSrc}
        alt={alt}
        className={cleanClassName}
        style={{ opacity: 1, ...style }}
        loading={priority ? 'eager' : loading}
        decoding={decoding}
        fetchPriority={priority ? 'high' : fetchPriority}
        onError={handleError}
        onLoad={onLoad}
        {...rest}
      />
    );
  }
);

ImageWithFallback.displayName = 'ImageWithFallback';


