export interface ServiceDetail {
  id: string;
  slug: string;
  title: string;
  navTitle: string;
  heroKicker: string;
  tagline: string;
  shortDesc: string;
  metaTitle: string;
  metaDescription: string;
  answerSummary: string; // Answer-first paragraph for AI search engines & snippets
  scope: string[];
  keyOutcomes: string[];
  slaBenchmarks: { metric: string; target: string; note: string }[];
  toolsSupported: string[];
  workflowSteps: { step: number; title: string; desc: string }[];
  faqs: { question: string; answer: string }[];
  relatedServiceIds: string[];
}

export interface FutureTechItem {
  id: string;
  title: string;
  status: 'In Development' | 'Planned Horizon' | 'Research Phase';
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

export interface FAQItem {
  question: string;
  answer: string;
  category: 'Model & Pricing' | 'Security & Controls' | 'Operations' | 'Services' | 'General';
}

export interface SelectedCapability {
  id: string;
  badge: string;
  title: string;
  clientIndustry: string;
  problem: string;
  scope: string[];
  team: string;
  workflow: string;
  implementation: string;
  measuredOutcome: string;
  timePeriod: string;
}

export const COMPANY_INFO = {
  name: 'Njure Tech',
  legalName: 'Njure Tech',
  parentGroup: 'Njure Group',
  domain: 'tech.njuregroup.in',
  parentDomain: 'njuregroup.in',
  canonicalBaseUrl: 'https://tech.njuregroup.in',
  operatingModel: '100% Remote & Distributed Operations',
  email: 'info@njuregroup.in',
  inquiriesEmail: 'info@njuregroup.in',
  businessHours: '24/7 Follow-the-Sun Operations (Fully Distributed Across Time Zones)',
  tagline: 'Client-Budget-Oriented BPO & Scaled Remote Customer Operations',
  subTagline:
    'Njure Tech delivers dedicated customer care, back-office data processing, e-commerce support, and outbound telecalling engineered around your exact budget. We take zero agency cut—paying project profits directly to our remote specialists as true business partners.',
  establishedYear: '2025',
  headquarters: 'Kerala, India (100% Remote Distributed Workforce)',
  sameAs: [
    'https://njuregroup.in',
    'https://www.linkedin.com/company/njuregroup'
  ],
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

export const DETAILED_SERVICES: Record<string, ServiceDetail> = {
  'customer-support': {
    id: 'customer-support',
    slug: 'customer-support',
    title: 'Omnichannel Customer Support Outsourcing',
    navTitle: 'Customer Support',
    heroKicker: 'Omnichannel Voice, Chat & Email Helpdesk',
    tagline: 'Empathetic, sub-2 minute customer resolution across phone, live chat, email, and messaging.',
    shortDesc:
      'Dedicated remote support specialists managing customer touchpoints 24/7. We resolve inquiries, handle complex escalations, and protect your brand reputation.',
    metaTitle: 'Customer Support Outsourcing & Remote Helpdesk Services | Njure Tech',
    metaDescription:
      'Scale your customer support with 24/7 dedicated remote agents. Sub-2 minute live chat, voice helpdesk, email ticketing, and WhatsApp support tailored to your budget.',
    answerSummary:
      'Njure Tech provides dedicated, 24/7 omnichannel customer support outsourcing across live chat, inbound telephone helpdesks, email ticketing, and WhatsApp messaging. Tailored to the client’s exact budget with zero agency markup, our remote specialists maintain sub-2 minute response times and 95%+ first-contact resolution.',
    scope: [
      'Inbound customer helpline & outbound callback support',
      'Live website chat assistance & proactive visitor engagement',
      'Email helpdesk ticket triage, categorization, and resolution',
      'WhatsApp Business API messaging & social customer service',
      'Tier-1 technical troubleshooting & customer onboarding assistance',
      'Escalation matrix routing & supervisor quality review',
    ],
    keyOutcomes: [
      'Sub-2 minute average first response time across live channels',
      '95%+ First Contact Resolution (FCR) on standard inquiries',
      'Consistent 4.8+ / 5.0 CSAT customer satisfaction benchmark',
    ],
    slaBenchmarks: [
      { metric: 'Live Chat / WhatsApp Response', target: '< 90 Seconds', note: 'Immediate conversational triage' },
      { metric: 'Inbound Phone Answer Speed', target: '< 45 Seconds', note: 'Low queue abandonment' },
      { metric: 'Email / Ticket SLA', target: '< 2 Hours', note: 'Standard priority resolution' },
      { metric: 'QA Audit Sample', target: '100% of New Agents / 20% Baseline', note: 'Supervisor call & ticket review' },
    ],
    toolsSupported: [
      'Zendesk Support & Chat',
      'Freshdesk & Freshchat',
      'Jira Service Management (JSM)',
      'Zoho Desk',
      'Intercom',
      'FreeScout / Zammad (Open-Source ITSM)',
      'Custom Client Helpdesk Portals',
    ],
    workflowSteps: [
      { step: 1, title: 'Knowledge Base & SOP Ingestion', desc: 'We absorb your brand guidelines, product catalogs, escalation matrix, and customer personas.' },
      { step: 2, title: 'Identity & Helpdesk Setup', desc: 'Specialists connect via client SSO/MFA credentials directly within your existing ticketing stack.' },
      { step: 3, title: 'Supervised Pilot Launch', desc: 'A 7-day live pilot where supervisors shadow tickets in real time to calibrate tone and response quality.' },
      { step: 4, title: 'Full SLA Production & Reporting', desc: '24/7 shift coverage with daily standups, weekly CSAT reports, and ongoing supervisor QA audits.' },
    ],
    faqs: [
      {
        question: 'What channels does Njure Tech support for customer care?',
        answer: 'We support all major omnichannel touchpoints including live chat, inbound and outbound telephony, email helpdesks, WhatsApp Business API, Instagram/Facebook messaging, and custom client portals.',
      },
      {
        question: 'Do we need to migrate our existing ticketing tool to work with Njure Tech?',
        answer: 'No migration is needed. Our remote specialists work directly inside your existing ticketing software (such as Zendesk, Freshdesk, Jira Service Management, Zoho Desk, or Intercom) using client-controlled user accounts.',
      },
      {
        question: 'How quickly can a remote customer support pod be onboarded?',
        answer: 'Standard onboarding and pilot launch take between 3 to 7 business days, depending on the complexity of your standard operating procedures (SOPs) and product training requirements.',
      },
      {
        question: 'What languages are supported by your customer care agents?',
        answer: 'Our frontline specialists are fluent in professional English and regional Indian languages including Malayalam, Hindi, and Tamil, supporting both domestic and international customer bases.',
      },
    ],
    relatedServiceIds: ['back-office', 'ecommerce-operations', 'telecalling'],
  },
  'back-office': {
    id: 'back-office',
    slug: 'back-office',
    title: 'Back-Office Operations & Data Processing',
    navTitle: 'Back-Office Operations',
    heroKicker: 'High-Velocity Data Processing & Verification',
    tagline: 'High-velocity document verification, catalog maintenance, and structured data entry.',
    shortDesc:
      'Eliminate administrative backlogs with disciplined remote data operations teams trained to handle complex verification, indexing, and reconciliation with 99.5%+ accuracy.',
    metaTitle: 'Back-Office Outsourcing & Data Entry Processing Services | Njure Tech',
    metaDescription:
      'Outsource your back-office data processing, KYC document verification, invoice audit, and catalog maintenance. 99.5%+ accuracy with dual-pass human validation.',
    answerSummary:
      'Njure Tech delivers back-office outsourcing and high-accuracy data processing services including KYC customer verification, invoice reconciliation, product catalog indexing, and spreadsheet deduplication. Operating under strict clean-desk NDA controls, our remote teams achieve 99.5%+ accuracy via dual-pass validation.',
    scope: [
      'KYC document verification, identity validation & fraud checks',
      'Spreadsheet cleanup, record deduplication & CRM database hygiene',
      'Vendor invoice audits, bill transcription & accounts payable reconciliation',
      'Product catalog enrichment, tagging, categorization & SEO indexing',
      'Digital transcription & unstructured PDF-to-database structured entry',
      'Compliance log maintenance & ongoing record audit support',
    ],
    keyOutcomes: [
      '99.5%+ field accuracy with dual-pass human validation workflows',
      'Same-day processing turnaround for standard daily data batches',
      'Zero backlog accumulation during peak processing and seasonal cycles',
    ],
    slaBenchmarks: [
      { metric: 'Data Entry Accuracy', target: '99.5%+', note: 'Dual-pass human audit verification' },
      { metric: 'Standard Batch Turnaround', target: 'Same-Day (6–12 Hours)', note: 'Based on agreed daily volume' },
      { metric: 'Urgent KYC Verification', target: '< 15 Minutes', note: 'Priority queue for customer onboarding' },
      { metric: 'Error Correction SLA', target: '< 2 Hours', note: 'Immediate remediation of flagged items' },
    ],
    toolsSupported: [
      'MS Excel Advanced & Power Query',
      'Google Workspace & Google Sheets',
      'QuickBooks & Tally',
      'SAP / ERP Data Entry Modules',
      'HubSpot & Salesforce CRM Records',
      'Custom Internal Web Admin Portals',
    ],
    workflowSteps: [
      { step: 1, title: 'Data Mapping & Field Rules', desc: 'We establish exact field-level validation criteria, error thresholds, and batch formatting standards.' },
      { step: 2, title: 'Secure Endpoint Access', desc: 'Specialists access your databases through client-managed roles, restricted VPNs, and NDA controls.' },
      { step: 3, title: 'Dual-Pass Processing', desc: 'Primary data entry followed by secondary supervisor sampling to guarantee 99.5%+ accuracy.' },
      { step: 4, title: 'Daily Batch Reconciliation', desc: 'End-of-day batch reconciliation reports detailing processed units, error flags, and queue status.' },
    ],
    faqs: [
      {
        question: 'How do you ensure data confidentiality and prevent unauthorized downloads?',
        answer: 'All remote workstations adhere to strict endpoint policies: local mass storage USB ports are locked down, screenshot restrictions are applied, all specialists sign legally binding NDAs, and production data remains within your client-controlled cloud environments.',
      },
      {
        question: 'Can you handle irregular or fluctuating batch volumes?',
        answer: 'Yes. Because our workforce is structured in modular remote pods with cross-trained specialists, we can dynamically scale processing bandwidth up during peak periods and adjust during lighter months.',
      },
      {
        question: 'What is dual-pass data validation?',
        answer: 'Dual-pass validation is a quality assurance process where critical data fields are verified independently by a second analyst or sampled by an operations supervisor, ensuring an accuracy rate exceeding 99.5%.',
      },
    ],
    relatedServiceIds: ['customer-support', 'ecommerce-operations', 'telecalling'],
  },
  'ecommerce-operations': {
    id: 'ecommerce-operations',
    slug: 'ecommerce-support',
    title: 'E-Commerce Order & Fulfillment Support',
    navTitle: 'E-Commerce Operations',
    heroKicker: 'Post-Purchase Operations & RTO Reduction',
    tagline: 'Proactive Cash-on-Delivery confirmation, NDR calling, and delivery exception resolution.',
    shortDesc:
      'Comprehensive post-purchase operations for D2C brands and marketplace sellers designed to reduce RTO losses and elevate repeat customer retention.',
    metaTitle: 'E-Commerce Support Outsourcing, COD Verification & NDR Calling | Njure Tech',
    metaDescription:
      'Reduce Return-to-Origin (RTO) rates by 25%–35% with dedicated e-commerce operations. Cash-on-Delivery (COD) verification, NDR calling, and returns management.',
    answerSummary:
      'Njure Tech provides specialized e-commerce operations support for D2C brands, Shopify merchants, and marketplace sellers. Our services focus on Cash-on-Delivery (COD) address verification, Non-Delivery Report (NDR) escalation calling, 3PL courier tracking, and return/refund processing—reducing Return-to-Origin (RTO) rates by 25% to 35%.',
    scope: [
      'Automated & manual Cash-on-Delivery (COD) order verification',
      'Non-Delivery Report (NDR) triage & customer address re-verification calling',
      'Courier tracking coordination & transit delay resolution with 3PL logistics',
      'Returns, replacements, exchange, and refund ticket verification',
      'Customer order inquiries, order modifications & shipping status updates',
      'Marketplace seller account review & product review/question moderation',
    ],
    keyOutcomes: [
      '25% – 35% reduction in Return-to-Origin (RTO) logistics losses',
      'Under 30-minute confirmation for high-value COD purchase orders',
      'Streamlined refund processing within 24 hours of warehouse return check',
    ],
    slaBenchmarks: [
      { metric: 'COD Order Verification Speed', target: '< 30 Minutes', note: 'Outbound call/WhatsApp verification' },
      { metric: 'NDR Exception Resolution', target: '< 3 Hours', note: 'Re-attempt scheduling with 3PL' },
      { metric: 'Refund Authorization', target: '< 24 Hours', note: 'Post warehouse receipt validation' },
      { metric: 'RTO Rate Reduction', target: '25% – 35% Average', note: 'Compared to baseline unverified orders' },
    ],
    toolsSupported: [
      'Shopify & Shopify Plus Admin',
      'Shiprocket & ClickPost Logistics',
      'WooCommerce Admin',
      'Amazon Seller Central',
      'Flipkart Seller Hub',
      'Zoho Commerce & Zoho Inventory',
    ],
    workflowSteps: [
      { step: 1, title: 'Store & Logistics Integration', desc: 'Direct access to your Shopify/WooCommerce store and 3PL courier dashboard (Shiprocket, ClickPost).' },
      { step: 2, title: 'COD Risk Scoring & Calling', desc: 'Orders flagged with risk markers receive immediate outbound verification calls or interactive WhatsApp messages.' },
      { step: 3, title: 'Real-Time NDR Escalation', desc: 'When couriers mark delivery exceptions, agents immediately contact the buyer to correct addresses and re-trigger dispatch.' },
      { step: 4, title: 'Returns & Refund Audit', desc: 'Verification of returned items against warehouse photos before authorizing payment gateway refunds.' },
    ],
    faqs: [
      {
        question: 'How does COD verification reduce RTO (Return to Origin) for D2C brands?',
        answer: 'Many COD orders fail due to incorrect addresses, impulse purchases, or unavailable buyers. By immediately contacting the customer via phone and WhatsApp to confirm intent, correct pin codes, and schedule delivery windows, fake or unviable orders are cancelled before dispatch, saving significant shipping and reverse-logistics fees.',
      },
      {
        question: 'Which courier and logistics platforms can your team manage?',
        answer: 'Our remote operations specialists manage all leading 3PL and shipping aggregators including Shiprocket, ClickPost, Delhivery, Blue Dart, Shadowfax, Xpressbees, and DHL.',
      },
      {
        question: 'Can your team manage both customer service tickets and logistics coordination?',
        answer: 'Yes. Our e-commerce pods handle the complete lifecycle: answering pre-sale customer questions, tracking shipments, calling customers during delivery delays, and processing returns and refunds.',
      },
    ],
    relatedServiceIds: ['customer-support', 'back-office', 'telecalling'],
  },
  'telecalling': {
    id: 'telecalling',
    slug: 'telecalling',
    title: 'Telecalling & Outbound Lead Qualification',
    navTitle: 'Telecalling & Leads',
    heroKicker: 'Targeted Outbound Voice & Lead Qualification',
    tagline: 'Targeted lead warm-up, discovery call scheduling, and customer retention campaigns.',
    shortDesc:
      'Professional remote voice representatives conducting structured calling campaigns to qualify inbound prospects, gather critical customer feedback, and reactivate dormant accounts.',
    metaTitle: 'Telecalling Services & Inbound Lead Qualification BPO | Njure Tech',
    metaDescription:
      'Accelerate sales conversions with dedicated remote telecalling teams. Inbound lead qualification within 10 minutes, appointment booking, and customer feedback calling.',
    answerSummary:
      'Njure Tech provides professional remote telecalling and outbound voice operations tailored to B2B and B2C sales teams. Our callers qualify inbound marketing leads within 10 minutes, book discovery appointments on account executives’ calendars, conduct NPS feedback surveys, and execute account reactivation campaigns.',
    scope: [
      'Rapid qualification of inbound website & ad campaign leads within 10 minutes',
      'Sales discovery meeting booking directly on account executives’ calendars',
      'Customer onboarding walkthrough calls & initial product setup assistance',
      'Net Promoter Score (NPS) & post-service customer satisfaction surveys',
      'Lapsed customer win-back & subscription renewal reminder calling',
      'Data verification calling to validate B2B corporate contact records',
    ],
    keyOutcomes: [
      'Inbound lead contact within 10 minutes of initial web form submission',
      'Higher sales show-up rates through proactive pre-meeting reminder calls',
      'Clean, CRM-ready lead records enriched with actionable qualification notes',
    ],
    slaBenchmarks: [
      { metric: 'Speed-to-Lead Response', target: '< 10 Minutes', note: 'Immediate inbound form followup' },
      { metric: 'Call Connectivity Target', target: '45% – 60%', note: 'Multi-touch cadence across times of day' },
      { metric: 'CRM Update Latency', target: 'Instant (< 5 Min)', note: 'Structured disposition tagging' },
      { metric: 'Calendar Booking QA', target: '100% Verified Criteria', note: 'BANT / MEDDPICC qualification check' },
    ],
    toolsSupported: [
      'HubSpot CRM & Sales Hub',
      'Zoho CRM & Bigin',
      'LeadSquared',
      'Vicidial / Cloud Telephony PBX (Exotel, Knowlarity, Ozonetel)',
      'Google Calendar & Calendly',
    ],
    workflowSteps: [
      { step: 1, title: 'Script & BANT Criteria Alignment', desc: 'We co-develop objection handling frameworks, qualification checklists, and calendar booking criteria.' },
      { step: 2, title: 'Telephony & CRM Integration', desc: 'Callers log in through cloud telephony routing with automatic call recording and CRM disposition logging.' },
      { step: 3, title: 'Multi-Touch Outreach Cadence', desc: 'Structured calling sequence combining voice calls, WhatsApp notes, and calendar invites.' },
      { step: 4, title: 'Weekly Conversion Optimization', desc: 'Review call recordings with supervisors to refine scripts and increase qualification conversion rates.' },
    ],
    faqs: [
      {
        question: 'Do you conduct cold calling or qualified lead followups?',
        answer: 'We specialize in warm inbound lead qualification, event/webinar followup calling, existing customer feedback surveys, and B2B database verification. We operate strictly in compliance with applicable telemarketing regulations and DND guidelines.',
      },
      {
        question: 'How do qualified leads get handed off to our sales team?',
        answer: 'When a lead meets your qualification criteria (e.g., budget, timeline, authority), our callers book a live meeting directly onto your sales representative’s calendar (Google Calendar / Calendly / HubSpot) and sync full call notes into your CRM.',
      },
      {
        question: 'Are phone calls recorded for quality assurance?',
        answer: 'Yes. All calls conducted through cloud telephony integrations are recorded and audited by operations supervisors to ensure adherence to scripts, compliance, and professional communication standards.',
      },
    ],
    relatedServiceIds: ['customer-support', 'back-office', 'ecommerce-operations'],
  },
};

export const BPO_SERVICES = Object.values(DETAILED_SERVICES).map((d) => ({
  id: d.id,
  title: d.title,
  tagline: d.tagline,
  shortDesc: d.shortDesc,
  scope: d.scope,
  keyOutcomes: d.keyOutcomes,
  toolsSupported: d.toolsSupported,
}));

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

export const GENERAL_FAQS: FAQItem[] = [
  {
    category: 'Model & Pricing',
    question: 'How does Njure Tech’s client-budget model work?',
    answer:
      'Instead of forcing clients into rigid minimum-seat contracts or bloated agency retainers, we build dedicated remote operational pods specifically tailored to your exact monthly budget. We take zero agency cut, distributing project revenues directly to our frontline remote specialists as business partners.',
  },
  {
    category: 'Model & Pricing',
    question: 'What does "Zero Agency Cut / Business Partner" mean?',
    answer:
      'Traditional BPO agencies take 50%–70% of client fees as corporate overhead and profit margins while paying frontline staff low hourly wages. At Njure Tech, we operate without physical call center real estate costs and pass project revenues directly to our remote specialists as profit-sharing partners. This results in superior agent dedication, near-zero turnover, and higher quality of service for clients.',
  },
  {
    category: 'Security & Controls',
    question: 'Is Njure Tech ISO 27001 or SOC 2 certified?',
    answer:
      'Njure Tech is currently not ISO 27001 or SOC 2 certified. We disclose this transparently so clients can evaluate alignment with their specific compliance policies. Our operating controls include port lockdown endpoint policies, client-controlled SSO/MFA access, bilateral enforceable NDAs, clean-desk standards, and supervisor-level queue audits.',
  },
  {
    category: 'Operations',
    question: 'How does a 100% remote BPO ensure accountability and quality?',
    answer:
      'We maintain structured governance through daily virtual supervisor standups, real-time queue monitoring, dual-pass quality audits, and weekly CSAT scorecards. Our profit-sharing model means agents are financially invested in achieving client retention and satisfaction benchmarks.',
  },
  {
    category: 'Services',
    question: 'What services does Njure Tech offer?',
    answer:
      'Njure Tech specializes in four core business process outsourcing (BPO) domains: 1) Omnichannel Customer Support (voice, chat, email, WhatsApp), 2) Back-Office Data Operations (KYC verification, catalog entry, invoice audits), 3) E-Commerce Order Support (COD confirmation, NDR calling, returns processing), and 4) Telecalling & Inbound Lead Qualification.',
  },
  {
    category: 'General',
    question: 'How is Njure Tech related to Njure Group?',
    answer:
      'Njure Tech is the dedicated technology and business process operations company under Njure Group (njuregroup.in). It operates independently in the cloud to provide agile, client-budget-oriented operational execution for modern digital businesses worldwide.',
  },
];

export const SELECTED_CAPABILITIES: SelectedCapability[] = [
  {
    id: 'ecommerce-rto-reduction',
    badge: 'Operational Capability Blueprint 01',
    title: 'E-Commerce COD Confirmation & NDR Logistics Exception Management',
    clientIndustry: 'D2C Consumer Retail & Marketplace Merchandising',
    problem:
      'High Return-to-Origin (RTO) rates on Cash-on-Delivery (COD) orders and delayed courier delivery exception triage leading to dead shipping spend, blocked inventory, and elevated buyer disputes.',
    scope: [
      'Pre-dispatch telephone & WhatsApp order address and buyer intent confirmation',
      '3PL courier Non-Delivery Report (NDR) triage and immediate buyer re-scheduling',
      'Courier tracking escalation with aggregators (Shiprocket / ClickPost / Delhivery)',
      'Returns verification and warehouse photo check prior to refund authorization',
    ],
    team: '3 Dedicated Remote E-Commerce Specialists + 1 Rotating Quality Supervisor (Dual-shift coverage: 09:00 - 21:00 IST)',
    workflow:
      'Orders flagged by risk heuristics -> outbound phone and WhatsApp confirmation within 30 minutes -> address corrections updated in Shopify -> dispatch released -> real-time NDR webhook notification triggers instant buyer contact to re-attempt delivery.',
    implementation:
      'Standardized 7-day onboarding connecting directly to client store admin and 3PL courier dashboards via client-issued roles; clean-screen workstation policies enforced; bilateral NDAs executed prior to access.',
    measuredOutcome:
      '25% – 35% reduction in Return-to-Origin (RTO) orders compared to unverified baseline, < 30-minute confirmation turnaround for high-risk orders, and sub-24-hour return ticket authorization.',
    timePeriod: '14-day calibrated pilot transitioning into monthly rolling operational delivery.',
  },
  {
    id: 'backoffice-kyc-verification',
    badge: 'Operational Capability Blueprint 02',
    title: 'High-Accuracy Back-Office Data Operations & KYC Document Verification',
    clientIndustry: 'Fintech & Regulated Digital Platforms',
    problem:
      'Rapid influx of customer onboarding documents and vendor bills accumulating in administrative queues, threatening regulatory turnaround compliance and causing vendor payment reconciliation delays.',
    scope: [
      'Customer identity document validation (Aadhaar / PAN / Corporate registry)',
      'Multi-pass spreadsheet data cleansing, deduplication, and CRM hygiene',
      'Vendor invoice matching, line-item transcription, and ledger reconciliation',
      'Continuous compliance audit logging and discrepancy reporting',
    ],
    team: '4 Dedicated Remote Data Operations Associates + 1 Quality Lead (Dual-pass human validation structure)',
    workflow:
      'Batch ingestion via secure client cloud drive -> primary structured data transcription -> automated validation check -> secondary independent supervisor verification -> daily batch closure report.',
    implementation:
      'Client-managed identity with multi-factor authentication (MFA); USB mass-storage port locks on all endpoints; clean-desk standards with zero local file persistence; comprehensive data governance agreement.',
    measuredOutcome:
      '99.5%+ field-level data entry accuracy guaranteed through dual-pass human audit; same-day processing for standard 500-unit daily document batches; zero backlog rollover during peak cycles.',
    timePeriod: 'Ongoing monthly sprints with daily batch unit reconciliation logs.',
  },
  {
    id: 'customer-support-omnichannel',
    badge: 'Operational Capability Blueprint 03',
    title: 'Omnichannel Customer Support & Technical Helpdesk Operations',
    clientIndustry: 'B2B SaaS & Digital Consumer Platforms',
    problem:
      'Inbound support volume overwhelming internal product team; first response times on live chat and email helpdesk exceeding 4 hours, creating user friction and elevated churn risk.',
    scope: [
      'Live website chat assistance & proactive customer engagement',
      'Inbound telephone helpline & outbound callback support',
      'Email ticket triage, classification, and Tier-1 technical resolution',
      'Jira Service Management (JSM) & Zendesk bug ticket cross-linking',
    ],
    team: '3 Dedicated Customer Care Specialists + 1 Operational Team Lead (16-hour multi-shift coverage)',
    workflow:
      'Customer ticket ingested -> instant automatic acknowledgment -> triage against SOP knowledge base -> resolution within sub-2 minutes on chat -> bug escalation directly into engineering Jira queue -> supervisor QA score on closed tickets.',
    implementation:
      '5-day SOP ingestion and script calibration; integration into client Zendesk/JSM workspace with role-restricted credentials; daily 15-minute shift overlap logs ensuring zero dropped context.',
    measuredOutcome:
      'Sub-2 minute first response time across live channels, 95%+ first-contact resolution on standard inquiries, and consistent 4.8+/5.0 CSAT rating target.',
    timePeriod: '7-day test queue pilot expanding into full monthly production roster.',
  },
  {
    id: 'telecalling-lead-qualification',
    badge: 'Operational Capability Blueprint 04',
    title: 'Inbound Lead Qualification & Sales Discovery Appointment Booking',
    clientIndustry: 'B2B Professional Services & Commercial Accounts',
    problem:
      'Inbound marketing ad leads turning cold due to delayed follow-ups (> 4 hours); high-cost sales account executives spending valuable hours cold-calling instead of closing qualified opportunities.',
    scope: [
      'Rapid speed-to-lead calling within 10 minutes of web form submission',
      'BANT / MEDDPICC qualification check against client criteria',
      'Live discovery meeting booking on account executives’ calendars',
      'CRM contact enrichment and detailed conversation disposition tagging',
    ],
    team: '2 Dedicated Remote Voice Specialists + 1 Campaign Lead',
    workflow:
      'Inbound lead webhook received -> dialer contact initiated within 10 minutes -> structured discovery conversation -> qualification criteria confirmed -> calendar invite sent -> detailed disposition synced to HubSpot/Zoho CRM.',
    implementation:
      'Cloud telephony PBX routing; script objection handling workshop; call recording review and daily calibration standups; bilateral NDAs.',
    measuredOutcome:
      'Inbound lead contact within 10 minutes of submission; 45%–60% call connect rate across standard cadence; clean CRM records with structured meeting notes.',
    timePeriod: 'Flexible month-to-month campaign pacing aligned with client marketing pipeline.',
  },
];

