import { useEffect } from 'react';

const DEFAULT_OG_IMAGE = 'https://fabmaruphoto.com/assets/logo_main.png';

function setMetaTag(attributeName, attributeValue, content) {
  if (typeof document === 'undefined') return;
  try {
    let element = document.querySelector(`meta[${attributeName}="${attributeValue}"]`);
    if (!element) {
      element = document.createElement('meta');
      element.setAttribute(attributeName, attributeValue);
      document.head.appendChild(element);
    }
    element.setAttribute('content', content || '');
  } catch (e) {
    // Fallback if querySelector fails for any reason
    let metas = Array.from(document.querySelectorAll('meta'));
    let element = metas.find(m => m.getAttribute(attributeName) === attributeValue);
    if (!element) {
      element = document.createElement('meta');
      element.setAttribute(attributeName, attributeValue);
      document.head.appendChild(element);
    }
    element.setAttribute('content', content || '');
  }
}

export function setPageMeta(title, description, customOgImage) {
  if (typeof document === 'undefined') return;

  if (title) {
    document.title = title;
    setMetaTag('property', 'og:title', title);
    setMetaTag('name', 'twitter:title', title);
  }

  if (description) {
    setMetaTag('name', 'description', description);
    setMetaTag('property', 'og:description', description);
    setMetaTag('name', 'twitter:description', description);
  }

  const ogImage = customOgImage || DEFAULT_OG_IMAGE;
  setMetaTag('property', 'og:image', ogImage);
  setMetaTag('name', 'twitter:image', ogImage);

  // Canonical tag
  try {
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    const canonicalUrl = `https://fabmaruphoto.com${window.location.pathname}`;
    canonicalLink.setAttribute('href', canonicalUrl);
    setMetaTag('property', 'og:url', canonicalUrl);
  } catch (e) {
    console.error('Error setting canonical URL:', e);
  }
}

export function useDocumentMeta(title, description, customOgImage) {
  useEffect(() => {
    setPageMeta(title, description, customOgImage);
  }, [title, description, customOgImage]);
}


