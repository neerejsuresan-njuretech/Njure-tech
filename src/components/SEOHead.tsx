import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { COMPANY_INFO, BPO_SERVICES, CAREER_LISTINGS } from '../data/companyData';

interface RouteMetadata {
  title: string;
  description: string;
  path: string;
  breadcrumbName: string;
}

const ROUTE_METADATA: Record<string, RouteMetadata> = {
  '/': {
    title: 'Njure Tech — Client-Budget BPO & Scaled Remote Operations',
    description: 'Client-budget-oriented BPO delivering omnichannel customer care, data processing, and e-commerce support. 100% remote with zero agency cut.',
    path: '/',
    breadcrumbName: 'Home',
  },
  '/about': {
    title: 'About Njure Tech — Zero-Cut Business Partner BPO Model',
    description: 'Learn how Njure Tech replaces traditional agencies. We operate within client budgets, take no middleman cut, and treat remote staff as co-owners.',
    path: '/about',
    breadcrumbName: 'About Us',
  },
  '/services': {
    title: 'BPO Services — Omnichannel Support & Data Processing | Njure Tech',
    description: 'Dedicated customer care, catalog entry, COD verification, and lead qualification tailored to your budget with sub-2 minute response SLAs.',
    path: '/services',
    breadcrumbName: 'BPO Services',
  },
  '/operations': {
    title: 'Remote Operations & Endpoint Security | Njure Tech',
    description: '100% distributed operations without commercial real estate bloat. Port-locked hardware endpoints, client SSO custody, and 24/7 shift coverage.',
    path: '/operations',
    breadcrumbName: 'Remote Operations',
  },
  '/technology': {
    title: 'Technology Roadmap — Workflow Automation & Software | Njure Tech',
    description: 'Our digital engineering roadmap: custom React dashboards, CRM webhook connectors, and practical workflow copilots grounded in front-line operations.',
    path: '/technology',
    breadcrumbName: 'Technology Roadmap',
  },
  '/careers': {
    title: 'Remote Careers — 100% Work from Home Partnerships | Njure Tech',
    description: 'Apply for 100% remote customer service and back-office roles across India. Profit-sharing business partner model with zero agency cut.',
    path: '/careers',
    breadcrumbName: 'Careers',
  },
  '/contact': {
    title: 'Contact Njure Tech — Request a Budget-Oriented BPO Proposal',
    description: 'Request a customized BPO proposal tailored to your operational budget. Direct consultation with same-business-day response from our operations desk.',
    path: '/contact',
    breadcrumbName: 'Contact Us',
  },
};

export const SEOHead: React.FC = () => {
  const location = useLocation();
  const pathname = location.pathname.endsWith('/') && location.pathname !== '/'
    ? location.pathname.slice(0, -1)
    : location.pathname;

  const meta = ROUTE_METADATA[pathname] || ROUTE_METADATA['/'];
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

    // Shared Base Organization Schema (Ground Truth - Zero Fabrication)
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
      serviceType: [
        'Omnichannel Customer Support',
        'Back-Office Data Operations',
        'E-Commerce Order Management',
        'Telecalling & Lead Qualification'
      ],
    };

    // Breadcrumb Schema
    const breadcrumbList = {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: `${baseUrl}/`,
        },
        ...(meta.path !== '/'
          ? [
              {
                '@type': 'ListItem',
                position: 2,
                name: meta.breadcrumbName,
                item: canonicalUrl,
              },
            ]
          : []),
      ],
    };

    // WebSite / WebPage Schema
    const webSiteSchema = {
      '@type': 'WebSite',
      name: 'Njure Tech',
      url: baseUrl,
      description: COMPANY_INFO.tagline,
      publisher: baseOrganization,
    };

    const webPageSchema = {
      '@type': 'WebPage',
      name: meta.title,
      description: meta.description,
      url: canonicalUrl,
      isPartOf: {
        '@type': 'WebSite',
        url: baseUrl,
      },
      breadcrumb: breadcrumbList,
    };

    // Build Page-Specific Schema Graph
    const schemaGraph: any[] = [baseOrganization, webSiteSchema, webPageSchema, breadcrumbList];

    if (meta.path === '/services') {
      schemaGraph.push({
        '@type': 'Service',
        name: 'Njure Tech Remote BPO Operations',
        provider: baseOrganization,
        serviceType: 'Business Process Outsourcing',
        description: meta.description,
        areaServed: 'Worldwide',
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Core BPO Operational Services',
          itemListElement: BPO_SERVICES.map((s, idx) => ({
            '@type': 'Offer',
            position: idx + 1,
            itemOffered: {
              '@type': 'Service',
              name: s.title,
              description: s.shortDesc,
            },
          })),
        },
      });
    } else if (meta.path === '/careers') {
      CAREER_LISTINGS.forEach((role) => {
        schemaGraph.push({
          '@type': 'JobPosting',
          title: role.title,
          description: `${role.summary} Responsibilities: ${role.responsibilities.join(' ')} Qualifications: ${role.qualifications.join(' ')}`,
          datePosted: '2026-10-01',
          validThrough: '2027-10-01',
          employmentType: 'FULL_TIME',
          hiringOrganization: baseOrganization,
          jobLocationType: 'TELECOMMUTE',
          applicantLocationRequirements: {
            '@type': 'Country',
            name: 'India',
          },
          jobBenefits: '100% Work from Home, Zero Agency Cut, Project Profit-Sharing, High-Speed Broadband Support',
        });
      });
    } else if (meta.path === '/contact') {
      schemaGraph.push({
        '@type': 'ContactPage',
        name: meta.title,
        description: meta.description,
        url: canonicalUrl,
        mainEntity: baseOrganization,
      });
    }

    schemaScript.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': schemaGraph,
    }, null, 2);
  }, [meta, canonicalUrl, logoUrl]);

  return null;
};
