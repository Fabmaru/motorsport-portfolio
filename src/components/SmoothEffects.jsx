import React, { useEffect, useRef, useState } from 'react';

export function ScrollReveal({
  children,
  delay = 0,
  direction = 'up',
  className = '',
  style = {},
  as: Component = 'div',
  ...rest
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -30px 0px'
      }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Component
      ref={ref}
      className={`scroll-reveal scroll-reveal-${direction} ${isVisible ? 'is-visible' : ''} ${className}`.trim()}
      style={{
        ...style,
        transitionDelay: delay ? `${delay}ms` : style.transitionDelay
      }}
      {...rest}
    >
      {children}
    </Component>
  );
}

export function SmoothImage({
  src,
  alt,
  className = '',
  style = {},
  wrapperStyle = {},
  loading = 'lazy',
  ...rest
}) {
  const imgRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(false);
    if (imgRef.current && imgRef.current.complete && imgRef.current.naturalWidth > 0) {
      setLoaded(true);
    }
  }, [src]);

  return (
    <img
      ref={imgRef}
      src={src}
      alt={alt}
      loading={loading}
      decoding="async"
      onLoad={() => setLoaded(true)}
      onError={() => setLoaded(true)}
      className={`smooth-img ${loaded ? 'is-loaded' : ''} ${className}`.trim()}
      style={style}
      {...rest}
    />
  );
}
