import React, { useEffect } from 'react';
import { COMPANY_INFO } from '../data/content';

interface SeoHeadProps {
  title?: string;
  description?: string;
  path?: string;
}

export const SeoHead: React.FC<SeoHeadProps> = ({
  title = `${COMPANY_INFO.name} | Intelligent Software. Lasting Impact. (luminex.rw)`,
  description = COMPANY_INFO.description,
  path = '/'
}) => {
  useEffect(() => {
    // 1. Update Title & Meta Description
    document.title = title;
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // 2. Canonical URL Tag
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', `https://luminex.rw${path}`);

    // 3. Open Graph Title & Description
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', title);

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (!ogDesc) {
      ogDesc = document.createElement('meta');
      ogDesc.setAttribute('property', 'og:description');
      document.head.appendChild(ogDesc);
    }
    ogDesc.setAttribute('content', description);

    // 4. Multi-Schema JSON-LD Structured Data for Google Search Indexing
    let schemaScript = document.getElementById('jsonld-schema');
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.id = 'jsonld-schema';
      schemaScript.setAttribute('type', 'application/ld+json');
      document.head.appendChild(schemaScript);
    }

    const schemaGraph = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebSite",
          "@id": "https://luminex.rw/#website",
          "url": "https://luminex.rw",
          "name": "Luminex Technologies",
          "alternateName": ["Luminex", "Luminex Tech Rwanda", "luminex.rw"],
          "description": COMPANY_INFO.description,
          "publisher": { "@id": "https://luminex.rw/#organization" },
          "inLanguage": "en-US"
        },
        {
          "@type": ["Organization", "ProfessionalService", "LocalBusiness"],
          "@id": "https://luminex.rw/#organization",
          "name": COMPANY_INFO.name,
          "url": "https://luminex.rw",
          "logo": "https://luminex.rw/luminex-logo-exact.png",
          "image": "https://luminex.rw/luminex-logo-exact.png",
          "email": COMPANY_INFO.email,
          "telephone": COMPANY_INFO.phone,
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Kigali",
            "addressCountry": "RW"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "-1.9441",
            "longitude": "30.0619"
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "08:00",
            "closes": "20:00"
          },
          "priceRange": "$$",
          "offers": [
            {
              "@type": "Offer",
              "name": "Personal Portfolio & Brand Website",
              "price": "250000",
              "priceCurrency": "RWF",
              "description": "Personal website for consultants, executives, and architects."
            },
            {
              "@type": "Offer",
              "name": "Clinic & Small Business Website",
              "price": "500000",
              "priceCurrency": "RWF",
              "description": "Dental clinic, medical center, and small business website with 24/7 calendar appointment booking and WhatsApp sync."
            },
            {
              "@type": "Offer",
              "name": "Enterprise Corporate Portal",
              "price": "1500000",
              "priceCurrency": "RWF",
              "description": "Enterprise corporate website with CMS and multi-language support."
            }
          ],
          "sameAs": [
            "https://linkedin.com/company/luminex-technologies",
            "https://github.com/luminex-tech"
          ]
        }
      ]
    };

    schemaScript.textContent = JSON.stringify(schemaGraph);
  }, [title, description, path]);

  return null;
};
