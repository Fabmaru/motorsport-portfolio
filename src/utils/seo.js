import { useEffect } from 'react';

export function setPageMeta(title, description) {
  if (title) {
    document.title = title;
  }
  if (description) {
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);
  }

  let canonicalLink = document.querySelector('link[rel="canonical"]');
  if (!canonicalLink) {
    canonicalLink = document.createElement('link');
    canonicalLink.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalLink);
  }
  const canonicalUrl = `https://fabmaruphoto.com${window.location.pathname}`;
  canonicalLink.setAttribute('href', canonicalUrl);
}

export function useDocumentMeta(title, description) {
  useEffect(() => {
    setPageMeta(title, description);
  }, [title, description]);
}
