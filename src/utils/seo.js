import { useEffect } from 'react';

const DEFAULT_OG_IMAGE = 'https://fabmaruphoto.com/assets/logo_main.png';
const SITE_NAME = 'Fabmaru Photo';

function setMetaTag(attributeName, attributeValue, content) {
  let element = document.querySelector(`meta[${attributeName}="${attributeValue}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attributeName, attributeValue);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

export function setPageMeta(title, description, customOgImage) {
  if (title) {
    document.title = title;
    setMetaTag('og:title', 'og:title', title);
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
  let canonicalLink = document.querySelector('link[rel="canonical"]');
  if (!canonicalLink) {
    canonicalLink = document.createElement('link');
    canonicalLink.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalLink);
  }
  const canonicalUrl = `https://fabmaruphoto.com${window.location.pathname}`;
  canonicalLink.setAttribute('href', canonicalUrl);
  setMetaTag('property', 'og:url', canonicalUrl);
}

export function useDocumentMeta(title, description, customOgImage) {
  useEffect(() => {
    setPageMeta(title, description, customOgImage);
  }, [title, description, customOgImage]);
}

