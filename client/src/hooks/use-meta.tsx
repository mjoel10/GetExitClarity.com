import { useEffect } from 'react';

interface MetaData {
  title: string;
  description: string;
}

export const useMeta = (metaData: MetaData) => {
  useEffect(() => {
    // Update title
    document.title = metaData.title;
    
    // Update or create meta description
    let descriptionMeta = document.querySelector('meta[name="description"]');
    if (descriptionMeta) {
      descriptionMeta.setAttribute('content', metaData.description);
    } else {
      descriptionMeta = document.createElement('meta');
      descriptionMeta.setAttribute('name', 'description');
      descriptionMeta.setAttribute('content', metaData.description);
      document.head.appendChild(descriptionMeta);
    }
  }, [metaData.title, metaData.description]);
};