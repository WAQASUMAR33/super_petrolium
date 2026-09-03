'use client';

import React, { useState, useEffect, useRef, forwardRef, useImperativeHandle } from 'react';

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
  rootMargin?: string;
  showSkeleton?: boolean;
  skeletonClassName?: string;
  containerClassName?: string;
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
      rootMargin = '200px',
      showSkeleton = true,
      skeletonClassName = '',
      containerClassName = '',
      className = '',
      style,
      onLoad,
      onError,
      ...rest
    },
    ref
  ) {
    const isEager = priority || loading === 'eager' || fetchPriority === 'high';
    const [isInView, setIsInView] = useState<boolean>(isEager);
    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    const [didError, setDidError] = useState<boolean>(false);
    const [currentSrc, setCurrentSrc] = useState<string>(isEager ? src : '');

    const imgRef = useRef<HTMLImageElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);

    useImperativeHandle(ref, () => imgRef.current as HTMLImageElement);

    // Intersection Observer for viewport detection and lazy loading
    useEffect(() => {
      if (isEager) {
        setIsInView(true);
        setCurrentSrc(src);
        return;
      }

      if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
        setIsInView(true);
        setCurrentSrc(src);
        return;
      }

      const target = containerRef.current || imgRef.current;
      if (!target) {
        setIsInView(true);
        setCurrentSrc(src);
        return;
      }

      const observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          if (entry && entry.isIntersecting) {
            setIsInView(true);
            setCurrentSrc(src);
            observer.disconnect();
          }
        },
        {
          rootMargin,
          threshold: 0.01,
        }
      );

      observer.observe(target);

      return () => {
        observer.disconnect();
      };
    }, [src, isEager, rootMargin]);

    // Handle src changes & check already cached images
    useEffect(() => {
      setDidError(false);
      if (isEager || isInView) {
        setCurrentSrc(src);
      }

      if (imgRef.current?.complete) {
        if (imgRef.current.naturalWidth === 0 && imgRef.current.naturalHeight === 0) {
          // Image failed to load
          setDidError(true);
          setIsLoaded(false);
        } else if (imgRef.current.naturalWidth > 0) {
          // Already loaded in browser cache
          setIsLoaded(true);
        }
      }
    }, [src, isInView, isEager]);

    const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
      setIsLoaded(true);
      setDidError(false);
      if (onLoad) {
        onLoad(e);
      }
    };

    const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
      if (fallbackSrc && currentSrc !== fallbackSrc) {
        setCurrentSrc(fallbackSrc);
      } else {
        setDidError(true);
        setIsLoaded(false);
      }
      if (onError) {
        onError(e);
      }
    };

    return (
      <div
        ref={containerRef}
        className={`relative inline-block overflow-hidden ${containerClassName}`}
        style={style}
      >
        {/* Shimmer skeleton placeholder */}
        {showSkeleton && !isLoaded && !didError && (
          <div
            aria-hidden="true"
            className={`absolute inset-0 z-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse ${skeletonClassName}`}
          />
        )}

        {/* Fallback error display */}
        {didError ? (
          <div
            className={`flex items-center justify-center bg-gray-100 text-gray-400 p-4 w-full h-full min-h-[120px] ${className}`}
          >
            <div className="flex flex-col items-center justify-center text-center">
              <img
                src={ERROR_IMG_SVG}
                alt="Failed to load image"
                className="w-12 h-12 opacity-60 mb-2"
                aria-hidden="true"
              />
              <span className="text-xs text-gray-500 font-medium">Image unavailable</span>
            </div>
          </div>
        ) : (
          /* Main image element */
          <img
            ref={imgRef}
            src={isInView ? currentSrc : undefined}
            alt={alt}
            className={`${className} ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            } transition-opacity duration-300 ease-in-out`}
            loading={priority ? 'eager' : loading}
            decoding={decoding}
            fetchPriority={priority ? 'high' : fetchPriority}
            onLoad={handleImageLoad}
            onError={handleImageError}
            {...rest}
          />
        )}
      </div>
    );
  }
);

ImageWithFallback.displayName = 'ImageWithFallback';

