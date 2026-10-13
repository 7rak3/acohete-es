import type { Metadata } from "next";

export const SITE_URL = "https://acohete.es";
export const CL_SITE_URL = "https://agenciacohete.cl";
export const SITE_NAME = "acohete.es";

interface CreateMetadataProps {
  title: string;
  description: string;
  path: string;
  clPath?: string;
  keywords?: string[];
  ogImage?: string;
  type?: "website" | "article";
}

/**
 * Generates unified Next.js metadata with strict hreflang bidirectional mappings
 * and canonical self-referencing to prevent duplicate content penalties between ES and CL.
 */
export function constructMetadata({
  title,
  description,
  path,
  clPath,
  keywords = [],
  ogImage = "/img/logo.png",
  type = "website",
}: CreateMetadataProps): Metadata {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  const canonicalUrl = `${SITE_URL}${cleanPath === "/" ? "" : cleanPath}`;
  const chileanPath = clPath ? (clPath.startsWith("/") ? clPath : `/${clPath}`) : cleanPath;
  const chileanUrl = `${CL_SITE_URL}${chileanPath === "/" ? "" : chileanPath}`;

  const defaultKeywords = [
    "agencia marketing digital espana",
    "agencia google ads espana",
    "agencia seo espana",
    "desarrollo web madrid",
    "desarrollo web barcelona",
    "crecimiento digital b2b",
    "optimizacion seo generativo",
    "acohete",
    "acohete espana",
  ];

  return {
    title,
    description,
    keywords: [...keywords, ...defaultKeywords],
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: canonicalUrl,
      languages: {
        "es-ES": canonicalUrl,
        "es-CL": chileanUrl,
        "x-default": canonicalUrl,
      },
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: SITE_NAME,
      locale: "es_ES",
      type,
      images: [
        {
          url: ogImage.startsWith("http") ? ogImage : `${SITE_URL}${ogImage}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage.startsWith("http") ? ogImage : `${SITE_URL}${ogImage}`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

/**
 * Standard Schema.org JSON-LD generators for Spanish entities
 */
export function generateProfessionalServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "acohete.es — Agencia de Marketing Digital & Growth Engineering",
    alternateName: "Agencia Cohete España",
    image: `${SITE_URL}/img/logo.png`,
    url: SITE_URL,
    telephone: "+56946527753",
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      addressCountry: "ES",
      addressRegion: "Comunidad de Madrid",
      addressLocality: "Madrid",
    },
    areaServed: [
      {
        "@type": "Country",
        name: "España",
      },
      {
        "@type": "AdministrativeArea",
        name: "Unión Europea",
      },
    ],
    sameAs: [
      "https://partnersdirectory.withgoogle.com/partners/6942800870",
      "https://agenciacohete.cl",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios de Marketing Digital y Desarrollo en España",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Gestión de Campañas Google Ads y Performance Max",
            url: `${SITE_URL}/ads`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Posicionamiento SEO Técnico y Motores Generativos GEO",
            url: `${SITE_URL}/seo`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Diseño y Desarrollo Web de Alto Rendimiento",
            url: `${SITE_URL}/web`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Social Paid Media & Meta Ads",
            url: `${SITE_URL}/redes`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Producción Audiovisual Publicitaria",
            url: `${SITE_URL}/audiovisual`,
          },
        },
      ],
    },
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${SITE_URL}${item.url}`,
    })),
  };
}

export function generateFaqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
