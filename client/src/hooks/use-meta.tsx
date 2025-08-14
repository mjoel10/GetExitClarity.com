import { useEffect } from 'react';

interface MetaProps {
  title?: string;
  description?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogType?: string;
  ogUrl?: string;
  ogImage?: string;
  articleAuthor?: string;
  articlePublishedTime?: string;
  articleSection?: string;
}

export function useMeta({
  title,
  description,
  ogTitle,
  ogDescription,
  ogType = 'website',
  ogUrl,
  ogImage,
  articleAuthor,
  articlePublishedTime,
  articleSection
}: MetaProps) {
  useEffect(() => {
    if (title) {
      document.title = title;
    }

    const updateMeta = (selector: string, content: string) => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        const name = selector.includes('property') ? 'property' : 'name';
        const value = selector.split('=')[1].replace(/['"]/g, '');
        element.setAttribute(name, value);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    if (description) {
      updateMeta('meta[name="description"]', description);
    }

    if (ogTitle || title) {
      updateMeta('meta[property="og:title"]', ogTitle || title || '');
    }

    if (ogDescription || description) {
      updateMeta('meta[property="og:description"]', ogDescription || description || '');
    }

    if (ogType) {
      updateMeta('meta[property="og:type"]', ogType);
    }

    if (ogUrl) {
      updateMeta('meta[property="og:url"]', ogUrl);
    }

    if (ogImage) {
      updateMeta('meta[property="og:image"]', ogImage);
    }

    if (articleAuthor) {
      updateMeta('meta[property="article:author"]', articleAuthor);
    }

    if (articlePublishedTime) {
      updateMeta('meta[property="article:published_time"]', articlePublishedTime);
    }

    if (articleSection) {
      updateMeta('meta[property="article:section"]', articleSection);
    }
  }, [title, description, ogTitle, ogDescription, ogType, ogUrl, ogImage, articleAuthor, articlePublishedTime, articleSection]);
}