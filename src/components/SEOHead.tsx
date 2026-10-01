import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { COMPANY_INFO, DETAILED_SERVICES, CAREER_LISTINGS, GENERAL_FAQS } from '../data/companyData';

interface RouteMetadata {
  title: string;
  description: string;
  path: string;
  breadcrumbName: string;
  parentPath?: string;
  parentBreadcrumbName?: string;
  schemaType?: string;
  serviceKey?: keyof typeof DETAILED_SERVICES;
}

const ROUTE_METADATA: Record<string, RouteMetadata> = {
  '/': {
    title: 'Njure Tech — Client-Budget BPO & Scaled Remote Operations',
    description: 'Client-budget-oriented BPO delivering omnichannel customer care, back-office data processing, and e-commerce support. 100% remote with zero agency cut.',
    path: '/',
    breadcrumbName: 'Home',
    schemaType: 'WebPage',
  },
  '/about': {
    title: 'About Njure Tech — Zero-Cut Business Partner BPO Model',
    description: 'Learn how Njure Tech replaces traditional agencies. We operate within client budgets, take no middleman cut, and treat remote staff as co-owners.',
    path: '/about',
    breadcrumbName: 'About Us',
    schemaType: 'AboutPage',
  },
  '/services': {
    title: 'BPO Services Directory — Omnichannel Support & Operations | Njure Tech',
    description: 'Dedicated customer care, catalog entry, COD verification, and lead qualification tailored to your budget with sub-2 minute response SLAs.',
    path: '/services',
    breadcrumbName: 'BPO Services',
    schemaType: 'Service',
  },
  '/services/customer-support': {
    title: 'Customer Support Outsourcing & Remote Helpdesk Services | Njure Tech',
    description: 'Scale your customer support with 24/7 dedicated remote agents. Sub-2 minute live chat, voice helpdesk, email ticketing, and WhatsApp support tailored to your budget.',
    path: '/services/customer-support',
    breadcrumbName: 'Customer Support',
    parentPath: '/services',
    parentBreadcrumbName: 'BPO Services',
    schemaType: 'Service',
    serviceKey: 'customer-support',
  },
  '/services/back-office': {
    title: 'Back-Office Outsourcing & Data Entry Processing Services | Njure Tech',
    description: 'Outsource your back-office data processing, KYC document verification, invoice audit, and catalog maintenance. 99.5%+ accuracy with dual-pass human validation.',
    path: '/services/back-office',
    breadcrumbName: 'Back-Office Operations',
    parentPath: '/services',
    parentBreadcrumbName: 'BPO Services',
    schemaType: 'Service',
    serviceKey: 'back-office',
  },
  '/services/ecommerce-support': {
    title: 'E-Commerce Support Outsourcing, COD Verification & NDR Calling | Njure Tech',
    description: 'Reduce Return-to-Origin (RTO) rates by 25%–35% with dedicated e-commerce operations. Cash-on-Delivery (COD) verification, NDR calling, and returns management.',
    path: '/services/ecommerce-support',
    breadcrumbName: 'E-Commerce Operations',
    parentPath: '/services',
    parentBreadcrumbName: 'BPO Services',
    schemaType: 'Service',
    serviceKey: 'ecommerce-operations',
  },
  '/services/telecalling': {
    title: 'Telecalling Services & Inbound Lead Qualification BPO | Njure Tech',
    description: 'Accelerate sales conversions with dedicated remote telecalling teams. Inbound lead qualification within 10 minutes, appointment booking, and customer feedback calling.',
    path: '/services/telecalling',
    breadcrumbName: 'Telecalling & Leads',
    parentPath: '/services',
    parentBreadcrumbName: 'BPO Services',
    schemaType: 'Service',
    serviceKey: 'telecalling',
  },
  '/operations': {
    title: 'Remote Operations Model & Delivery Architecture | Njure Tech',
    description: '100% distributed operations without commercial real estate bloat. Port-locked hardware endpoints, client SSO custody, and 24/7 shift coverage.',
    path: '/operations',
    breadcrumbName: 'Remote Operations',
    schemaType: 'WebPage',
  },
  '/security': {
    title: 'Security by Design, Endpoint Controls & Governance | Njure Tech',
    description: 'Transparent security controls: port lockdown endpoint policies, client-controlled SSO/MFA, bilateral NDAs, and clean-screen standards for remote operations.',
    path: '/security',
    breadcrumbName: 'Security & Trust',
    schemaType: 'WebPage',
  },
  '/technology': {
    title: 'Technology Roadmap — Workflow Automation & Software | Njure Tech',
    description: 'Our digital engineering roadmap: custom React dashboards, CRM webhook connectors, and practical workflow copilots grounded in front-line operations.',
    path: '/technology',
    breadcrumbName: 'Technology Roadmap',
    schemaType: 'WebPage',
  },
  '/careers': {
    title: 'Remote Careers — 100% Work from Home Partnerships | Njure Tech',
    description: 'Apply for 100% remote customer service and back-office roles across India. Profit-sharing business partner model with zero agency cut.',
    path: '/careers',
    breadcrumbName: 'Careers',
    schemaType: 'WebPage',
  },
  '/contact': {
    title: 'Contact Njure Tech — Request a Budget-Oriented BPO Proposal',
    description: 'Request a customized BPO proposal tailored to your operational budget. Direct consultation with same-business-day response from our operations desk.',
    path: '/contact',
    breadcrumbName: 'Contact Us',
    schemaType: 'ContactPage',
  },
};

export const SEOHead: React.FC = () => {
  const location = useLocation();
  const pathname = location.pathname.endsWith('/') && location.pathname !== '/'
    ? location.pathname.slice(0, -1)
    : location.pathname;

  const meta = ROUTE_METADATA[pathname] || ROUTE_METADATA['/'];
  const baseUrl = COMPANY_INFO.canonicalBaseUrl;
  const canonicalUrl = `${baseUrl}${meta.path === '/' ? '' : meta.path}`;
  const logoUrl = `${baseUrl}/logo.png`;

  useEffect(() => {
    // 1. Document Title
    document.title = meta.title;

    // Helper to safely set or create meta tag
    const setMetaTag = (attribute: 'name' | 'property', value: string, content: string) => {
      let element = document.querySelector(`meta[${attribute}="${value}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, value);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 2. Standard Search Metadata
    setMetaTag('name', 'description', meta.description);
    setMetaTag('name', 'robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    setMetaTag('name', 'author', 'Njure Tech');

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

    // Base Organization Schema (Ground Truth - Zero Fabrication)
    const baseOrganization = {
      '@type': 'Organization',
      '@id': `${baseUrl}/#organization`,
      name: COMPANY_INFO.name,
      legalName: COMPANY_INFO.legalName,
      parentOrganization: {
        '@type': 'Organization',
        name: COMPANY_INFO.parentGroup,
        url: `https://${COMPANY_INFO.parentDomain}`,
      },
      url: baseUrl,
      logo: {
        '@type': 'ImageObject',
        url: logoUrl,
        width: 456,
        height: 174,
      },
      email: COMPANY_INFO.inquiriesEmail,
      description: COMPANY_INFO.subTagline,
      sameAs: COMPANY_INFO.sameAs,
      areaServed: 'Worldwide',
      serviceType: [
        'Omnichannel Customer Support Outsourcing',
        'Back-Office Data Operations',
        'E-Commerce Fulfillment Support & COD Verification',
        'Telecalling & Inbound Lead Qualification',
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        email: COMPANY_INFO.inquiriesEmail,
        contactType: 'customer support and sales inquiries',
        availableLanguage: ['English', 'Malayalam', 'Hindi', 'Tamil'],
        areaServed: 'Worldwide',
      },
    };

    // BreadcrumbList Schema
    const breadcrumbItems = [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: `${baseUrl}/`,
      },
    ];

    if (meta.parentPath && meta.parentBreadcrumbName) {
      breadcrumbItems.push({
        '@type': 'ListItem',
        position: 2,
        name: meta.parentBreadcrumbName,
        item: `${baseUrl}${meta.parentPath}`,
      });
      breadcrumbItems.push({
        '@type': 'ListItem',
        position: 3,
        name: meta.breadcrumbName,
        item: canonicalUrl,
      });
    } else if (meta.path !== '/') {
      breadcrumbItems.push({
        '@type': 'ListItem',
        position: 2,
        name: meta.breadcrumbName,
        item: canonicalUrl,
      });
    }

    const breadcrumbList = {
      '@type': 'BreadcrumbList',
      '@id': `${canonicalUrl}#breadcrumb`,
      itemListElement: breadcrumbItems,
    };

    // WebSite & WebPage Schema
    const webSiteSchema = {
      '@type': 'WebSite',
      '@id': `${baseUrl}/#website`,
      name: 'Njure Tech',
      url: baseUrl,
      description: COMPANY_INFO.tagline,
      publisher: {
        '@id': `${baseUrl}/#organization`,
      },
    };

    const webPageSchema: Record<string, any> = {
      '@type': meta.schemaType || 'WebPage',
      '@id': `${canonicalUrl}#webpage`,
      name: meta.title,
      description: meta.description,
      url: canonicalUrl,
      isPartOf: {
        '@id': `${baseUrl}/#website`,
      },
      breadcrumb: {
        '@id': `${canonicalUrl}#breadcrumb`,
      },
      about: {
        '@id': `${baseUrl}/#organization`,
      },
    };

    const schemaGraph: any[] = [baseOrganization, webSiteSchema, webPageSchema, breadcrumbList];

    // Page-Specific Rich Schemas
    if (meta.serviceKey && DETAILED_SERVICES[meta.serviceKey]) {
      const srv = DETAILED_SERVICES[meta.serviceKey];
      schemaGraph.push({
        '@type': 'Service',
        '@id': `${canonicalUrl}#service`,
        name: srv.title,
        provider: {
          '@id': `${baseUrl}/#organization`,
        },
        serviceType: 'Business Process Outsourcing',
        description: srv.shortDesc,
        areaServed: 'Worldwide',
        termsOfService: 'Client-Budget-Oriented & Zero Agency Cut',
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: `${srv.title} Capabilities`,
          itemListElement: srv.scope.map((item, idx) => ({
            '@type': 'Offer',
            position: idx + 1,
            itemOffered: {
              '@type': 'Service',
              name: item,
            },
          })),
        },
      });

      // FAQPage Schema for service
      if (srv.faqs && srv.faqs.length > 0) {
        schemaGraph.push({
          '@type': 'FAQPage',
          '@id': `${canonicalUrl}#faq`,
          mainEntity: srv.faqs.map((f) => ({
            '@type': 'Question',
            name: f.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: f.answer,
            },
          })),
        });
      }
    } else if (meta.path === '/') {
      schemaGraph.push({
        '@type': 'FAQPage',
        '@id': `${baseUrl}/#faq`,
        mainEntity: GENERAL_FAQS.map((f) => ({
          '@type': 'Question',
          name: f.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: f.answer,
          },
        })),
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
          hiringOrganization: {
            '@id': `${baseUrl}/#organization`,
          },
          jobLocationType: 'TELECOMMUTE',
          applicantLocationRequirements: {
            '@type': 'Country',
            name: 'India',
          },
          jobBenefits: '100% Work from Home, Zero Agency Cut, Project Profit-Sharing, High-Speed Broadband Support',
        });
      });
    }

    schemaScript.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': schemaGraph,
    }, null, 2);
  }, [meta, canonicalUrl, logoUrl, baseUrl]);

  return null;
};
