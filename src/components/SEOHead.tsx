import React, { useEffect } from 'react';
import { COMPANY_INFO, BPO_SERVICES, CAREER_LISTINGS } from '../data/companyData';

interface SEOHeadProps {
  page: string;
}

interface PageMeta {
  title: string;
  description: string;
  path: string;
  schemaType: string;
}

const PAGE_META: Record<string, PageMeta> = {
  home: {
    title: 'Njure Tech — Client-Budget BPO & Scaled Remote Customer Operations',
    description:
      'Njure Tech delivers client-budget-oriented customer care, back-office data processing, and e-commerce operations. 100% remote with zero agency cut and profit-sharing partners.',
    path: '/',
    schemaType: 'Organization',
  },
  about: {
    title: 'About Njure Tech — Zero-Cut Business Partner BPO Model',
    description:
      'Discover how Njure Tech replaces traditional call centers. We tailor operations to your budget, take zero agency cut, and treat our remote team as true business partners.',
    path: '/about',
    schemaType: 'AboutPage',
  },
  services: {
    title: 'BPO Services — Omnichannel Support, Back-Office & E-Commerce | Njure Tech',
    description:
      'Client-budget-oriented BPO solutions: 24/7 omnichannel customer care, document verification, COD confirmation, and lead qualification with sub-2 minute responses.',
    path: '/services',
    schemaType: 'Service',
  },
  careers: {
    title: 'Remote Careers — 100% Work from Home Business Partnerships | Njure Tech',
    description:
      'Join Njure Tech as a remote business partner. We don’t take an agency cut—project profits are shared directly with our remote specialists. 100% remote across India.',
    path: '/careers',
    schemaType: 'JobPosting',
  },
  'delivery-center': {
    title: '100% Remote Operations & Cloud Infrastructure | Njure Tech',
    description:
      'Zero physical real estate overhead. Distributed remote BPO operations with zero-trust cloud workspaces, daily supervisor standups, and 24/7 follow-the-sun shift coverage.',
    path: '/remote-operations',
    schemaType: 'ItemPage',
  },
  'future-tech': {
    title: 'Technology Roadmap — Custom Web Applications & Automation | Njure Tech',
    description:
      'Explore Njure Tech’s technology roadmap: custom React & Next.js business apps, client analytics portals, and workflow automation copilots under tech.njuregroup.in.',
    path: '/future-tech',
    schemaType: 'ItemPage',
  },
  contact: {
    title: 'Contact Njure Tech — Request a Budget-Oriented BPO Proposal',
    description:
      'Connect directly with our remote operations team for a customized, budget-aligned BPO proposal. Same-day response for customer support and back-office requirements.',
    path: '/contact',
    schemaType: 'ContactPage',
  },
};

export const SEOHead: React.FC<SEOHeadProps> = ({ page }) => {
  const meta = PAGE_META[page] || PAGE_META.home;
  const baseUrl = 'https://tech.njuregroup.in';
  const canonicalUrl = `${baseUrl}${meta.path === '/' ? '' : meta.path}`;
  const logoUrl = `${baseUrl}/logo.png`;

  useEffect(() => {
    // 1. Update Document Title
    document.title = meta.title;

    // Helper to safely set meta tag attributes
    const setMetaTag = (attribute: 'name' | 'property', value: string, content: string) => {
      let element = document.querySelector(`meta[${attribute}="${value}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, value);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 2. Standard Meta Tags
    setMetaTag('name', 'description', meta.description);
    setMetaTag('name', 'robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');

    // 3. OpenGraph Social Cards
    setMetaTag('property', 'og:type', 'website');
    setMetaTag('property', 'og:site_name', 'Njure Tech');
    setMetaTag('property', 'og:title', meta.title);
    setMetaTag('property', 'og:description', meta.description);
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'og:image', logoUrl);
    setMetaTag('property', 'og:image:width', '456');
    setMetaTag('property', 'og:image:height', '174');
    setMetaTag('property', 'og:image:alt', 'Njure Tech — A Njure Group Company');

    // 4. Twitter / X Cards
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', meta.title);
    setMetaTag('name', 'twitter:description', meta.description);
    setMetaTag('name', 'twitter:image', logoUrl);

    // 5. Canonical Link Tag
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);

    // 6. Schema.org Structured Data (JSON-LD)
    let schemaScript = document.getElementById('njure-seo-schema') as HTMLScriptElement;
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.id = 'njure-seo-schema';
      schemaScript.type = 'application/ld+json';
      document.head.appendChild(schemaScript);
    }

    // Build tailored Schema.org JSON-LD structure
    const baseOrganization = {
      '@type': 'Organization',
      name: COMPANY_INFO.name,
      legalName: 'Njure Tech',
      parentOrganization: {
        '@type': 'Organization',
        name: COMPANY_INFO.parentGroup,
        url: 'https://njuregroup.in',
      },
      url: baseUrl,
      logo: logoUrl,
      email: COMPANY_INFO.inquiriesEmail,
      description: COMPANY_INFO.subTagline,
      sameAs: ['https://njuregroup.in'],
      areaServed: 'Worldwide',
      serviceType: ['Business Process Outsourcing', 'Customer Care', 'Back-Office Operations'],
    };

    let schemaData: Record<string, unknown> = {
      '@context': 'https://schema.org',
      ...baseOrganization,
    };

    if (page === 'services') {
      schemaData = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Njure Tech Business Process Outsourcing Services',
        provider: baseOrganization,
        serviceType: 'BPO and Customer Operations',
        description: meta.description,
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Core BPO Operational Services',
          itemListElement: BPO_SERVICES.map((s, index) => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: s.title,
              description: s.shortDesc,
            },
            position: index + 1,
          })),
        },
      };
    } else if (page === 'careers') {
      schemaData = {
        '@context': 'https://schema.org',
        '@graph': CAREER_LISTINGS.map(role => ({
          '@type': 'JobPosting',
          title: role.title,
          description: role.summary,
          datePosted: '2026-10-01',
          employmentType: 'FULL_TIME',
          hiringOrganization: baseOrganization,
          jobLocationType: 'TELECOMMUTE',
          applicantLocationRequirements: {
            '@type': 'Country',
            name: 'India',
          },
          jobBenefits: '100% Work from home, zero agency cut, project profit-sharing, broadband allowance',
        })),
      };
    } else if (page === 'contact') {
      schemaData = {
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        name: meta.title,
        description: meta.description,
        url: canonicalUrl,
        mainEntity: baseOrganization,
      };
    } else if (page === 'about') {
      schemaData = {
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        name: meta.title,
        description: meta.description,
        url: canonicalUrl,
        mainEntity: baseOrganization,
      };
    }

    schemaScript.textContent = JSON.stringify(schemaData, null, 2);
  }, [page, meta, canonicalUrl, logoUrl]);

  return null;
};
