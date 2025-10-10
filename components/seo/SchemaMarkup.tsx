'use client';

import { usePathname } from 'next/navigation';

interface SchemaMarkupProps {
  type: 'Organization' | 'Article' | 'BlogPosting' | 'BreadcrumbList' | 'WebSite';
  data?: any;
}

export default function SchemaMarkup({ type, data }: SchemaMarkupProps) {
  const pathname = usePathname();

  const getSchemaData = () => {
    const baseUrl = 'https://linkerpro.com';
    
    switch (type) {
      case 'Organization':
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "LinkerPro",
          "alternateName": ["Linker Pro", "LinkerPro Blog"],
          "url": baseUrl,
          "logo": {
            "@type": "ImageObject",
            "url": `${baseUrl}/logo.png`,
            "width": 200,
            "height": 60
          },
          "description": "Tu fuente confiable de información sobre seguridad industrial y equipos de protección personal. Guías, reseñas y consejos de expertos.",
          "contactPoint": {
            "@type": "ContactPoint",
            "email": "linkerpro.notifications@gmail.com",
            "contactType": "Customer Service",
            "availableLanguage": ["Spanish"]
          },
          "sameAs": [
            "https://linkerpro.com",
            "https://linkerpro.com/blog",
            "https://linkerpro.com/guias"
          ],
          "foundingDate": "2024",
          "numberOfEmployees": {
            "@type": "QuantitativeValue",
            "value": "1-10"
          },
          "industry": "Industrial Safety",
          "keywords": "seguridad industrial, EPP, equipos protección personal, blog seguridad, guías seguridad laboral"
        };

      case 'WebSite':
        return {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "LinkerPro",
          "alternateName": "LinkerPro Blog de Seguridad Industrial",
          "url": baseUrl,
          "description": "Tu fuente confiable de información sobre seguridad industrial y EPP. Guías, reseñas y consejos de expertos para crear ambientes de trabajo más seguros.",
          "inLanguage": "es-ES",
          "copyrightYear": 2024,
          "copyrightHolder": {
            "@type": "Organization",
            "name": "LinkerPro"
          },
          "potentialAction": {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": `${baseUrl}/blog?search={search_term_string}`
            },
            "query-input": "required name=search_term_string"
          },
          "mainEntity": {
            "@type": "Blog",
            "name": "Blog de Seguridad Industrial",
            "description": "Artículos especializados en seguridad industrial, equipos de protección personal y normativas laborales"
          }
        };

      case 'Article':
      case 'BlogPosting':
        if (!data) return null;
        return {
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": data.title,
          "description": data.description,
          "image": data.image || `${baseUrl}/images/default-article.jpg`,
          "author": {
            "@type": "Organization",
            "name": "LinkerPro Team",
            "url": baseUrl
          },
          "publisher": {
            "@type": "Organization",
            "name": "LinkerPro",
            "logo": {
              "@type": "ImageObject",
              "url": `${baseUrl}/logo.png`,
              "width": 200,
              "height": 60
            }
          },
          "datePublished": data.publishDate || new Date().toISOString().split('T')[0],
          "dateModified": data.modifiedDate || data.publishDate || new Date().toISOString().split('T')[0],
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `${baseUrl}${pathname}`
          },
          "url": `${baseUrl}${pathname}`,
          "articleSection": data.category || "Seguridad Industrial",
          "keywords": data.keywords || data.tags?.join(', ') || "seguridad industrial, EPP, equipos protección personal",
          "wordCount": data.wordCount || 1500,
          "inLanguage": "es-ES",
          "about": {
            "@type": "Thing",
            "name": data.category || "Seguridad Industrial"
          },
          "mentions": data.products?.map((product: any) => ({
            "@type": "Product",
            "name": product.name,
            "description": product.description,
            "brand": product.brand
          })) || []
        };

      case 'BreadcrumbList':
        if (!data?.breadcrumbs) return null;
        return {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": data.breadcrumbs.map((crumb: any, index: number) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": crumb.name,
            "item": `${baseUrl}${crumb.url}`
          }))
        };

      default:
        return null;
    }
  };

  const schemaData = getSchemaData();

  if (!schemaData) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schemaData, null, 2)
      }}
    />
  );
}