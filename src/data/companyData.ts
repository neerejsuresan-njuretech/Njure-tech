export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  shortDesc: string;
  scope: string[];
  keyOutcomes: string[];
  toolsSupported: string[];
}

export interface FutureTechItem {
  id: string;
  title: string;
  status: string;
  description: string;
  capabilities: string[];
}

export interface CareerItem {
  id: string;
  title: string;
  type: string;
  experience: string;
  location: string;
  summary: string;
  responsibilities: string[];
  qualifications: string[];
}

export const COMPANY_INFO = {
  name: 'Njure Tech',
  parentGroup: 'Njure Group',
  domain: 'tech.njuregroup.in',
  parentDomain: 'njuregroup.in',
  operatingModel: '100% Remote & Distributed Operations',
  email: 'info@njuregroup.in',
  inquiriesEmail: 'info@njuregroup.in',
  businessHours: '24/7 Follow-the-Sun Operations (Fully Distributed Across Time Zones)',
  tagline: 'Client-Budget-Oriented BPO & Scaled Remote Customer Operations',
  subTagline:
    'Njure Tech delivers dedicated customer care, back-office processing, and e-commerce operations engineered around your exact budget. We take zero agency cut—paying profits directly to our remote specialists as true business partners, not disposable employees.',
  partnershipModel: {
    headline: 'Client-Budget-Oriented & Zero Agency Cut',
    subheadline: 'We are Business Partners, not just an employee and a company.',
    description:
      'Traditional BPO agencies siphon off 50%–70% of client invoices while paying frontline workers minimal wages. At Njure Tech, we operate differently: we tailor operations strictly to your budget, take no agency cut, and pass project profits directly to our remote workforce. By treating specialists as genuine business partners, our clients enjoy unmatched dedication, near-zero turnover, and superior execution.',
    pillars: [
      {
        title: 'Client-Budget Oriented',
        description: 'Operations scoped precisely to your financial parameters without rigid minimum seat thresholds or agency bloat.',
      },
      {
        title: 'Zero Middleman Cut',
        description: 'We do not skim large corporate margins. Your investment goes straight to the frontline professionals executing your workflows.',
      },
      {
        title: 'Business Partners, Not Employees',
        description: 'Remote specialists share in the project profit as co-owners of client outcomes, generating authentic care and zero attrition.',
      },
      {
        title: 'Open-Book Transparency',
        description: 'Direct visibility into how resources are deployed with transparent unit economics and zero hidden platform markups.',
      },
    ],
  },
  governanceManifesto: {
    badge: 'Security by Design',
    headline: 'Security by Design & Transparent Operating Controls',
    certificationNotice: 'Njure Tech is currently not ISO 27001 or SOC 2 certified.',
    subheadline:
      'Our operating controls include appropriate access restrictions, endpoint policies, clean-desk practices, NDAs, client-controlled identity access, and supervisor-level quality controls. Client-specific security and compliance requirements are reviewed during onboarding before production access is granted.',
    points: [
      {
        title: 'Clear Certification Transparency',
        description:
          'Njure Tech is currently not ISO 27001 or SOC 2 certified. We communicate our operational posture transparently so clients can evaluate alignment with their specific compliance frameworks.',
      },
      {
        title: 'Endpoint Access Restrictions & Port Policies',
        description:
          'Workstations operate under endpoint policies that restrict external mass storage devices, enforce application whitelisting, and maintain clean-screen standards.',
      },
      {
        title: 'Client-Controlled Identity & Access (SSO / MFA)',
        description:
          'Specialists access client systems directly via role-based credentials managed by your organization, supporting multi-factor authentication (MFA) and instant revocation.',
      },
      {
        title: 'Bilateral Legally Enforceable NDAs',
        description:
          'Every remote specialist executes comprehensive, legally binding non-disclosure agreements prior to onboarding and accessing client workflows.',
      },
      {
        title: 'Supervisor-Level Quality Controls & Daily Standups',
        description:
          'Operational supervisors perform queue monitoring, call listening audits, and shift synchronization to ensure standard operating procedure (SOP) adherence.',
      },
      {
        title: 'Onboarding Security Review',
        description:
          'Client-specific security, data-handling, and compliance requirements are reviewed and confirmed during onboarding before production access is granted.',
      },
    ],
  },
  backgroundStory: {
    headline: 'Agile, Remote Operations Built on Client-Budget Alignment & Worker Partnership',
    origins:
      'Njure Tech was established as the remote-first business operations and technology services company of Njure Group. The venture operates entirely in the cloud—without the heavy overhead, geographic limits, and real estate bottlenecks of legacy call centers.',
    theProblem:
      'Modern digital companies need agile operational support without paying for bloated corporate commercial leases and rigid multi-year minimum seat lock-ins. Unvetted freelancers lack supervision and security, while traditional BPO firms pass massive physical infrastructure costs onto clients while underpaying their staff.',
    theApproach:
      'Njure Tech operates a client-budget-oriented, 100% remote model. We take zero agency cut—distributing project profits directly to our remote specialists as business partners. Equipped with zero-trust security tools and governed through daily supervisor standups, our teams function with deep personal ownership as a seamless extension of your business.',
    theRoadmap:
      'Our operational model pairs human customer care excellence with future digital automation. Workflow observations from front-line remote partners directly shape our upcoming software tools, custom client portals, and automated integrations via tech.njuregroup.in.',
  },
};

export const BPO_SERVICES: ServiceItem[] = [
  {
    id: 'customer-support',
    title: 'Omnichannel Customer Support',
    tagline: 'Empathetic, sub-2 minute customer resolution across phone, live chat, email, and messaging.',
    shortDesc:
      'Dedicated remote support specialists managing customer touchpoints 24/7. We resolve inquiries, handle complex escalations, and protect your brand reputation.',
    scope: [
      'Inbound customer helpline & outbound callback support',
      'Live website chat assistance & proactive visitor engagement',
      'Email helpdesk ticket triage and resolution',
      'WhatsApp Business API messaging & social customer service',
      'Tier-1 technical troubleshooting & onboarding assistance',
      'Escalation matrix handling & supervisor reviews',
    ],
    keyOutcomes: [
      'Sub-2 minute average first response time',
      '95%+ First Contact Resolution (FCR) target',
      'Consistent 4.8+ CSAT satisfaction rating',
    ],
    toolsSupported: [
      'Jira Service Management (JSM)',
      'Zendesk',
      'Freshdesk',
      'Zoho Desk',
      'Intercom',
      'Free & Open-Source ITSM (FreeScout/Zammad)',
      'Custom Client Portals',
    ],
  },
  {
    id: 'back-office',
    title: 'Back-Office & Business Process Operations',
    tagline: 'High-velocity document verification, catalog maintenance, and structured data entry.',
    shortDesc:
      'Eliminate administrative backlogs with disciplined remote data operations teams trained to handle complex verification, indexing, and reconciliation with 99.5%+ accuracy.',
    scope: [
      'KYC document verification, identity validation & fraud checks',
      'Spreadsheet cleanup, record deduplication & CRM hygiene',
      'Vendor invoice audits, bill transcription & reconciliation',
      'Product catalog enrichment, tagging & category indexing',
      'Digital transcription & PDF-to-database structured entry',
      'Compliance log maintenance & auditing support',
    ],
    keyOutcomes: [
      '99.5%+ accuracy with dual-pass human validation',
      'Same-day turnaround for standard batches',
      'Zero backlog accumulation during peak processing cycles',
    ],
    toolsSupported: ['MS Excel Advanced', 'Google Workspace', 'QuickBooks', 'SAP / ERP Modules', 'Custom Admin Portals'],
  },
  {
    id: 'ecommerce-operations',
    title: 'E-Commerce Order & Fulfillment Support',
    tagline: 'Proactive Cash-on-Delivery confirmation, NDR calling, and delivery exception resolution.',
    shortDesc:
      'Comprehensive post-purchase operations for D2C brands and marketplace sellers designed to reduce RTO losses and elevate repeat customer retention.',
    scope: [
      'Automated and manual Cash-on-Delivery (COD) order verification',
      'Non-Delivery Report (NDR) triage & customer address re-verification',
      'Courier tracking coordination & delay resolution with 3PLs',
      'Returns, replacements, exchange, and refund verification',
      'Customer order inquiries & shipping status updates',
      'Marketplace seller account review & customer question moderation',
    ],
    keyOutcomes: [
      '25% – 35% reduction in Return-to-Origin (RTO) rates',
      'Under 30-minute confirmation for high-value COD orders',
      'Streamlined refund processing within 24 hours of warehouse check',
    ],
    toolsSupported: ['Shopify', 'Shiprocket', 'ClickPost', 'WooCommerce', 'Amazon Seller Central', 'Zoho Commerce'],
  },
  {
    id: 'telecalling',
    title: 'Telecalling & Outbound Lead Qualification',
    tagline: 'Targeted lead warm-up, discovery call scheduling, and customer retention campaigns.',
    shortDesc:
      'Professional remote voice representatives conducting structured calling campaigns to qualify inbound prospects, gather critical customer feedback, and reactivate dormant accounts.',
    scope: [
      'Rapid qualification of inbound website & ad campaign leads',
      'Sales discovery meeting booking on account executives’ calendars',
      'Customer onboarding walkthrough calls & setup assistance',
      'Net Promoter Score (NPS) & post-service feedback surveys',
      'Lapsed customer win-back & renewal reminder calling',
      'Data verification calling to validate B2B business records',
    ],
    keyOutcomes: [
      'Inbound lead contact within 10 minutes of form submission',
      'Higher sales show-up rates with proactive call reminders',
      'Clean, CRM-ready lead records with detailed call notes',
    ],
    toolsSupported: ['HubSpot CRM', 'Zoho CRM', 'LeadSquared', 'Vicidial / Cloud Telephony', 'Google Calendar'],
  },
];

export const FUTURE_ROADMAP: FutureTechItem[] = [
  {
    id: 'software-dev',
    title: 'Custom Web & Business Application Development',
    status: 'In Development',
    description:
      'Bespoke web applications, internal operational dashboards, and client portals built to automate repetitive workflow bottlenecks.',
    capabilities: [
      'Responsive React & Next.js frontend applications',
      'REST & GraphQL API integrations with third-party software',
      'Secure client reporting portals and executive analytics dashboards',
      'Database architecture & cloud deployment pipelines',
    ],
  },
  {
    id: 'cloud-infra',
    title: 'Managed Cloud Infrastructure & Maintenance',
    status: 'Planned Horizon',
    description:
      'Continuous server monitoring, database performance tuning, and managed cloud deployments to keep client applications running smoothly.',
    capabilities: [
      'AWS & Google Cloud environment management',
      'Automated daily backup and disaster recovery procedures',
      'Continuous system uptime monitoring and incident response',
      'SSL, DNS, and security patch governance',
    ],
  },
  {
    id: 'process-automation',
    title: 'Workflow Automation & Smart Business Tools',
    status: 'Research Phase',
    description:
      'Integrating smart workflow triggers, webhook pipelines, and AI copilot tools directly into client customer support and back-office stacks.',
    capabilities: [
      'Automated email ticket routing and sentiment triage',
      'OCR-assisted document data extraction pipelines',
      'CRM-to-Helpdesk bi-directional synchronization triggers',
      'Custom conversational chat assistants for common Tier-1 FAQs',
    ],
  },
];

export const CAREER_LISTINGS: CareerItem[] = [
  {
    id: 'role-1',
    title: 'Customer Support Executive (Voice / Non-Voice)',
    type: 'Full-Time · 100% Remote',
    experience: '0 – 2 Years (Freshers Welcome)',
    location: '100% Remote (Work from Home)',
    summary:
      'Deliver friendly, structured customer assistance across telephone, live chat, and email helpdesks from your home office for our retail and tech clients.',
    responsibilities: [
      'Manage incoming customer calls, support tickets, and live chats with empathy and speed.',
      'Log interaction details, troubleshooting notes, and customer sentiment into CRM software.',
      'Follow client-specific standard operating procedures (SOPs) to ensure first-contact resolution.',
      'Attend daily virtual supervisor standups and participate in QA coaching sessions.',
    ],
    qualifications: [
      'Fluent verbal and written communication in English and Malayalam (Hindi or Tamil is a plus).',
      'Reliable home broadband connection (minimum 30 Mbps) and dedicated quiet workspace.',
      'Basic keyboard proficiency (30+ WPM) and comfort navigating cloud applications.',
      'Willingness to work in flexible rotating day or evening remote shifts.',
    ],
  },
  {
    id: 'role-2',
    title: 'Operations Team Lead / Quality Supervisor',
    type: 'Full-Time · 100% Remote',
    experience: '2 – 5 Years',
    location: '100% Remote (Work from Home)',
    summary:
      'Supervise a distributed pod of 10–15 remote customer care executives, perform weekly QA audits, and ensure client SLA benchmarks are consistently exceeded.',
    responsibilities: [
      'Conduct daily queue monitoring, call listening audits, and virtual agent 1-on-1 coaching.',
      'Manage remote agent shift rosters, attendance, break schedules, and peak-hour load balancing.',
      'Serve as the primary escalation point for complex disputes and VIP client inquiries.',
      'Prepare weekly client performance scorecards covering CSAT, FCR, and average handle times.',
    ],
    qualifications: [
      'Minimum 2 years of prior experience in BPO / call center operations as a Team Lead or Senior Agent.',
      'Strong organizational, analytical reporting, and remote team mentoring skills.',
      'Proficiency in ticketing platforms (Zendesk, Freshdesk, Jira JSM, or Zoho) and Google Sheets.',
      'Self-driven with proven ability to lead high-performing distributed teams.',
    ],
  },
  {
    id: 'role-3',
    title: 'Back-Office & Data Processing Associate',
    type: 'Full-Time · 100% Remote',
    experience: '0 – 2 Years',
    location: '100% Remote (Work from Home)',
    summary:
      'Execute high-accuracy data entry, KYC document verification, invoice reconciliation, and catalog management for e-commerce and commercial clients remotely.',
    responsibilities: [
      'Verify digital records, customer IDs, and invoices against compliance standards.',
      'Input structured product, order, and inventory data into client cloud databases with 99.5%+ accuracy.',
      'Identify and flag data discrepancies, incomplete documentation, or potential billing errors.',
      'Meet daily unit quotas while maintaining strict data confidentiality guidelines.',
    ],
    qualifications: [
      'Solid working knowledge of MS Excel and Google Sheets (VLOOKUP, basic formulas, filters).',
      'Keen eye for detail, speed, and accuracy in numerical data entry.',
      'Reliable home PC/laptop with high-speed internet and power backup (UPS/Inverter).',
      'Graduate in any discipline (B.Com, B.Sc, BCA, B.A., or equivalent).',
    ],
  },
];
