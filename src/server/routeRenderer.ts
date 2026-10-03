/**
 * Server-Side Route Renderer & Crawler Content Injector for Njure Tech
 * 
 * Provides prerendered semantic HTML, metadata, canonical URLs, and Schema.org
 * structured data for every route so that traditional search engines (Google, Bing)
 * and AI retrieval crawlers (Googlebot, GPTBot, ClaudeBot, Perplexity) extract 100+ lines
 * of structured content on initial HTTP GET/HEAD response without requiring JS execution.
 */

export interface RouteSEOData {
  path: string;
  title: string;
  description: string;
  h1: string;
  kicker: string;
  lead: string;
  breadcrumbs: { name: string; url: string }[];
  sections: {
    heading: string;
    subheading?: string;
    paragraphs?: string[];
    listItems?: string[];
    keyValuePairs?: { label: string; value: string }[];
  }[];
  faqs?: { q: string; a: string }[];
  schemaType: string;
}

export const ROUTE_REGISTRY: Record<string, RouteSEOData> = {
  '/': {
    path: '/',
    title: 'Njure Tech — Client-Budget BPO & Scaled Remote Operations',
    description: 'Client-budget-oriented BPO delivering dedicated customer care, back-office data processing, and e-commerce support. 100% remote with zero agency cut.',
    h1: 'Build your operations team around the budget you already have.',
    kicker: 'Client-Budget BPO Operations · Zero Agency Cut',
    lead: 'Njure Tech delivers dedicated remote operations pods for customer care, back-office data processing, e-commerce order support, and outbound telecalling. We align staffing directly with your monthly budget, sharing project revenues directly with our remote specialists as business partners for superior dedication and near-zero turnover.',
    breadcrumbs: [{ name: 'Home', url: 'https://tech.njuregroup.in/' }],
    schemaType: 'WebSite',
    sections: [
      {
        heading: 'Core BPO Operational Services',
        subheading: 'Dedicated remote pods calibrated to your workflows',
        listItems: [
          'Omnichannel Customer Support: Sub-2 minute live chat, voice helpdesk, email ticketing, and WhatsApp customer service across Zendesk, Freshdesk, Jira Service Management, and Zoho Desk.',
          'Back-Office Data Operations: KYC verification, spreadsheet cleanup, invoice audits, and catalog data entry with dual-pass 99.5%+ accuracy.',
          'E-Commerce Operations: Cash-on-Delivery (COD) verification, Non-Delivery Report (NDR) calling, and returns management reducing Return-to-Origin (RTO) by 25%–35%.',
          'Telecalling & Lead Qualification: Rapid inbound lead contact within 10 minutes and sales discovery meeting scheduling on account executive calendars.',
        ],
      },
      {
        heading: 'Why Njure Tech: A Business Partner Model',
        subheading: 'Four operational pillars replacing legacy agency markups',
        keyValuePairs: [
          { label: 'Client-Budget Oriented', value: 'Operations scoped precisely to your financial parameters without minimum-seat lock-ins.' },
          { label: 'Zero Middleman Cut', value: 'We do not skim 50%-70% agency overhead; investment flows straight to calibrated frontline talent.' },
          { label: 'Business Partners, Not Disposable Temps', value: 'Specialists share directly in project profits as co-owners of client SLA outcomes.' },
          { label: 'Open-Book Transparency', value: 'Clear unit economics, daily supervisor syncs, and client-controlled systems.' },
        ],
      },
      {
        heading: 'How It Works: 4-Step Onboarding to Scale',
        subheading: 'Low-risk, rapid deployment structured around your existing stack',
        listItems: [
          '01. Scoping: We analyze ticket volumes, languages needed, and shift coverage to engineer a staffing plan strictly inside your monthly budget.',
          '02. Induction: Brand guidelines, refund rules, and ticket workflows ingested into standardized SOPs for agent calibration.',
          '03. 7-Day Supervised Pilot: Controlled test queue with daily client QA syncs to audit response accuracy, tone, and resolution speed.',
          '04. Live Scaled Operations: Full production with daily attendance scorecards, 15-minute shift overlap handovers, and regular SLA reviews.',
        ],
      },
      {
        heading: 'Selected Capabilities & Operational Blueprints',
        subheading: 'Factual operational frameworks without fabricated client logos',
        listItems: [
          'E-Commerce COD Confirmation & NDR Logistics Exception Management: 3 dedicated specialists + 1 quality supervisor; < 30-min confirmation turnaround; 25%-35% reduction in RTO.',
          'High-Accuracy Back-Office Data Operations & KYC Document Verification: 4 data associates + 1 quality lead; dual-pass human validation; 99.5%+ field-level accuracy; same-day 500-unit batch closure.',
          'Omnichannel Customer Support & Technical Helpdesk: 3 specialists + 1 lead; 16-hour multi-shift coverage; sub-2 min live chat response; 95%+ first-contact resolution; JSM & Zendesk cross-linking.',
          'Inbound Lead Qualification & Sales Appointment Booking: 2 voice specialists + 1 campaign lead; speed-to-lead calling within 10 minutes; 45%-60% call connect rate; CRM disposition syncing.',
        ],
      },
    ],
    faqs: [
      {
        q: 'How does Njure Tech’s client-budget model work?',
        a: 'Instead of forcing clients into rigid minimum-seat contracts, we build dedicated remote operational pods specifically tailored to your exact monthly budget with zero agency cut, passing project profits directly to remote specialists.',
      },
      {
        q: 'Is Njure Tech ISO 27001 or SOC 2 certified?',
        a: 'Njure Tech is currently not ISO 27001 or SOC 2 certified. Operating safeguards include workstation port lockdowns, client-controlled SSO/MFA credentials, bilateral enforceable NDAs, clean-screen protocols, and supervisor queue audits.',
      },
      {
        q: 'How quickly can we launch a pilot team?',
        a: 'We can deploy a calibrated 1–3 agent pilot team within 7 business days following SOP signoff. The pilot allows you to audit responses and calibrate tone with zero long-term commitment.',
      },
    ],
  },

  '/about': {
    path: '/about',
    title: 'About Njure Tech — Zero-Cut Business Partner BPO Model',
    description: 'Learn how Njure Tech replaces traditional agencies. We operate within client budgets, take no middleman cut, and treat remote staff as co-owners.',
    h1: 'About Njure Tech: Agile Operations Built on Client-Budget Alignment',
    kicker: 'Company & Operating Model · Njure Group',
    lead: 'Njure Tech is the remote-first business process operations and technology arm of Njure Group (njuregroup.in). We replace rigid agency markups with dedicated operational pods, operating 100% in the cloud without physical call center real estate bloat.',
    breadcrumbs: [
      { name: 'Home', url: 'https://tech.njuregroup.in/' },
      { name: 'About Us', url: 'https://tech.njuregroup.in/about' },
    ],
    schemaType: 'AboutPage',
    sections: [
      {
        heading: '1. Company Heritage & Parent Organization',
        subheading: 'Operating under Njure Group (njuregroup.in)',
        paragraphs: [
          'Njure Tech is legally organized under Njure Group. While our parent entity oversees broader commercial ventures, Njure Tech specializes exclusively in cloud-based customer support operations, back-office data processing, e-commerce logistics support, and digital technology roadmaps.',
          'Traditional BPO agencies siphon 50%–70% of client invoices while paying frontline workers minimal wages. Njure Tech was established to eliminate this structural friction through a remote-first, client-budget-aligned delivery model.',
        ],
      },
      {
        heading: '2. Operating Model: 100% Remote & Distributed Cloud Operations',
        subheading: 'Infrastructure without commercial real estate overhead',
        listItems: [
          'Zero Real Estate Overhead: Client capital is invested directly into frontline specialists and supervisors rather than funding commercial leases and administrative bloat.',
          'Follow-the-Sun Coverage: 24/7 rotational shift schedules with mandatory 15-minute overlap handovers between supervisors ensure zero ticket aging across time zones.',
          'Multilingual Talent: Frontline fluency across professional English and Indian regional languages (Malayalam, Hindi, and Tamil) for domestic and international markets.',
          'Home Office Standards: Every specialist is vetted for primary fiber broadband (30+ Mbps), secondary 4G/5G mobile hotspot failover, and dedicated UPS power continuity.',
        ],
      },
      {
        heading: '3. Partner Model: Zero Agency Cut',
        subheading: 'Aligning client incentives directly with frontline talent',
        paragraphs: [
          'We do not treat our specialists as disposable temp workers. We take zero agency cut from client billables, distributing project earnings directly to our remote specialists as profit-sharing partners.',
          'This business partner structure produces near-zero turnover, high accountability, and authentic pride of ownership across every customer interaction.',
        ],
      },
      {
        heading: '4. Governance & Security by Design',
        subheading: 'Transparent posture and enforceable safeguards',
        paragraphs: [
          'Transparent Certification Disclosure: Njure Tech is currently not ISO 27001 or SOC 2 certified. We communicate our posture transparently so clients can review safeguards against internal compliance matrices.',
          'Safeguards include endpoint USB port lockdowns, client-managed SSO/MFA credentials with instant revocation, bilateral enforceable NDAs, clean-desk standards, and supervisor queue listening audits.',
        ],
      },
    ],
  },

  '/services': {
    path: '/services',
    title: 'BPO Services Directory — Omnichannel Support & Operations | Njure Tech',
    description: 'Dedicated customer care, catalog entry, COD verification, and lead qualification tailored to your budget with sub-2 minute response SLAs.',
    h1: 'BPO Operational Services Directory',
    kicker: 'Service Capabilities Directory · Zero Agency Cut',
    lead: 'Dedicated customer care, back-office data processing, e-commerce order management, and outbound telecalling teams engineered around your exact budget with zero agency cut.',
    breadcrumbs: [
      { name: 'Home', url: 'https://tech.njuregroup.in/' },
      { name: 'BPO Services', url: 'https://tech.njuregroup.in/services' },
    ],
    schemaType: 'Service',
    sections: [
      {
        heading: '1. Omnichannel Customer Support Outsourcing',
        subheading: '24/7 live chat, helpdesk ticketing, voice, and WhatsApp support',
        listItems: [
          'Target SLAs: Sub-2 minute first response time on live chat; < 1 hour email helpdesk response; 95%+ First Contact Resolution (FCR).',
          'Supported Platforms: Zendesk, Freshdesk, Jira Service Management (JSM), Zoho Desk, Intercom, Salesforce Service Cloud.',
          'Dedicated Page: https://tech.njuregroup.in/services/customer-support',
        ],
      },
      {
        heading: '2. Back-Office Data Operations & Processing',
        subheading: 'Dual-pass human validation with 99.5%+ accuracy guarantee',
        listItems: [
          'Execution Scope: KYC document verification, spreadsheet cleansing, catalog product onboarding, and invoice reconciliation.',
          'Target SLAs: 99.5%+ field accuracy; same-day document batch processing; zero rollover backlogs during peak volumes.',
          'Dedicated Page: https://tech.njuregroup.in/services/back-office',
        ],
      },
      {
        heading: '3. E-Commerce Support & RTO Reduction',
        subheading: 'COD order verification and 3PL courier delivery exception triage',
        listItems: [
          'Execution Scope: Pre-dispatch address and buyer confirmation; NDR calling; returns verification and warehouse photo checks.',
          'Target SLAs: 25%–35% reduction in Return-to-Origin (RTO); sub-30 minute confirmation on high-risk orders.',
          'Dedicated Page: https://tech.njuregroup.in/services/ecommerce-support',
        ],
      },
      {
        heading: '4. Telecalling & Inbound Lead Qualification',
        subheading: 'High-touch speed-to-lead outreach and calendar booking',
        listItems: [
          'Execution Scope: Inbound web lead calling within 10 minutes; BANT qualification; direct discovery booking on AE calendars.',
          'Target SLAs: Inbound lead contact within 10 minutes; 45%–60% connect rates; structured CRM disposition syncing.',
          'Dedicated Page: https://tech.njuregroup.in/services/telecalling',
        ],
      },
      {
        heading: '5. Technology & Supported Tools',
        subheading: 'Stack-agnostic connectivity or zero-license open-source ITSMs',
        listItems: [
          'Enterprise Helpdesks: Zendesk, Freshdesk, Jira JSM, Zoho Desk, Salesforce.',
          'E-Commerce & Logistics: Shopify, WooCommerce, Shiprocket, ClickPost, Delhivery.',
          'CRMs: HubSpot, Zoho CRM, LeadSquared, Salesforce Sales Cloud.',
          'Telephony PBX: Vicidial, Exotel, Knowlarity, Ozonetel.',
          'Open-Source ITSM: We deploy FreeScout or Zammad to eliminate per-seat SaaS license fees ($50–$120/seat/mo).',
        ],
      },
    ],
  },

  '/services/customer-support': {
    path: '/services/customer-support',
    title: 'Customer Support Outsourcing & Remote Helpdesk Services | Njure Tech',
    description: 'Scale your customer support with 24/7 dedicated remote agents. Sub-2 minute live chat, voice helpdesk, email ticketing, and WhatsApp support tailored to your budget.',
    h1: 'Omnichannel Customer Support Outsourcing & Remote Helpdesks',
    kicker: 'Service Domain 01 · 24/7 Follow-the-Sun Coverage',
    lead: 'Deliver exceptional customer experiences around the clock without bloated agency retainers. Njure Tech provides dedicated, calibrated remote customer care specialists across live chat, voice, email helpdesks, and WhatsApp.',
    breadcrumbs: [
      { name: 'Home', url: 'https://tech.njuregroup.in/' },
      { name: 'BPO Services', url: 'https://tech.njuregroup.in/services' },
      { name: 'Customer Support', url: 'https://tech.njuregroup.in/services/customer-support' },
    ],
    schemaType: 'Service',
    sections: [
      {
        heading: 'Core Support Channels & Capabilities',
        subheading: 'Seamless customer care across all modern communication touchpoints',
        listItems: [
          'Live Chat Support: Real-time website visitor assistance, pre-sale product guidance, and rapid issue resolution.',
          'Email Helpdesk Management: Ticket triage, macro-assisted answers, Tier-1 technical troubleshooting, and bug routing.',
          'Inbound Voice Support: Professional telephone helpline answering with active listening and clear conflict resolution.',
          'WhatsApp & Social Messaging: Conversational customer service meeting mobile consumers on their preferred channels.',
          'ITIL & ITSM Operations: Strict queue prioritization, incident lifecycle management, and SLA countdown monitoring.',
        ],
      },
      {
        heading: 'Target SLA Benchmarks',
        subheading: 'Measurable standards delivered across every shift',
        keyValuePairs: [
          { label: 'Live Chat Response', value: '< 2 Minutes First Response Time (FRT)' },
          { label: 'Email Helpdesk Response', value: '< 1 Hour Average Turnaround' },
          { label: 'First Contact Resolution', value: '95%+ on Tier-1 Inquiries' },
          { label: 'Customer Satisfaction (CSAT)', value: '4.8+ / 5.0 Average Rating' },
        ],
      },
    ],
    faqs: [
      {
        q: 'Can your team work directly inside our existing Jira Service Management (JSM) setup?',
        a: 'Yes. Our team leads and support specialists plug directly into your Atlassian Cloud or Data Center workspace, adhering to your configured ITIL queues, incident resolution workflows, and SLA countdown clocks.',
      },
      {
        q: 'How are shift handovers managed for round-the-clock coverage?',
        a: 'Every shift change includes a mandatory 15-minute overlap where outgoing and incoming supervisors review open high-priority tickets, escalations, and system release notices with standardized handover logs.',
      },
    ],
  },

  '/services/back-office': {
    path: '/services/back-office',
    title: 'Back-Office Outsourcing & Data Entry Processing Services | Njure Tech',
    description: 'Outsource your back-office data processing, KYC document verification, invoice audit, and catalog maintenance. 99.5%+ accuracy with dual-pass human validation.',
    h1: 'Back-Office Outsourcing & Data Processing Operations',
    kicker: 'Service Domain 02 · Dual-Pass 99.5%+ Accuracy',
    lead: 'Eliminate administrative backlogs, KYC document delays, and data discrepancies. Njure Tech delivers structured back-office operations pods governed by dual-pass human verification checklists.',
    breadcrumbs: [
      { name: 'Home', url: 'https://tech.njuregroup.in/' },
      { name: 'BPO Services', url: 'https://tech.njuregroup.in/services' },
      { name: 'Back-Office Operations', url: 'https://tech.njuregroup.in/services/back-office' },
    ],
    schemaType: 'Service',
    sections: [
      {
        heading: 'Execution Scope & Data Workflows',
        subheading: 'High-volume data transcription, verification, and audit',
        listItems: [
          'KYC & Identity Verification: Identity document cross-checking (Aadhaar, PAN, passports, corporate tax registries) against regulatory guidelines.',
          'Spreadsheet Cleansing & CRM Hygiene: De-duplication, format standardization, and data migration across Google Sheets, Excel, and CRM databases.',
          'Catalog & Product Data Entry: SKU creation, specification enrichment, image tagging, and marketplace attribute mapping.',
          'Invoice Audits & Bill Processing: Matching purchase orders with vendor receipts, line-item verification, and ERP ledger posting.',
        ],
      },
      {
        heading: 'Data Integrity & Accuracy Governance',
        subheading: 'Dual-pass human audit structure',
        keyValuePairs: [
          { label: 'Data Accuracy Benchmark', value: '99.5%+ field-level transcription accuracy guaranteed' },
          { label: 'Batch Processing Speed', value: 'Same-day turnaround for standard 500-unit daily queues' },
          { label: 'Endpoint Security Controls', value: 'Workstations operate with USB mass storage port lockdowns' },
          { label: 'Data Persistence Policy', value: 'Clean-desk protocols with zero local file storage on agent devices' },
        ],
      },
    ],
    faqs: [
      {
        q: 'How does dual-pass verification work?',
        a: 'Critical data records (such as identity numbers, bank accounts, or financial figures) are entered independently by a primary associate and validated by a secondary quality reviewer before submission to client databases.',
      },
    ],
  },

  '/services/ecommerce-support': {
    path: '/services/ecommerce-support',
    title: 'E-Commerce Support Outsourcing, COD Verification & NDR Calling | Njure Tech',
    description: 'Reduce Return-to-Origin (RTO) rates by 25%–35% with dedicated e-commerce operations. Cash-on-Delivery (COD) verification, NDR calling, and returns management.',
    h1: 'E-Commerce Operations, COD Verification & RTO Reduction',
    kicker: 'Service Domain 03 · 25%–35% RTO Reduction',
    lead: 'Protect margins and prevent dead shipping expenses with dedicated remote e-commerce operations pods. We verify Cash-on-Delivery orders, triage courier non-delivery reports (NDR) in real time, and process returns with warehouse photo checks.',
    breadcrumbs: [
      { name: 'Home', url: 'https://tech.njuregroup.in/' },
      { name: 'BPO Services', url: 'https://tech.njuregroup.in/services' },
      { name: 'E-Commerce Operations', url: 'https://tech.njuregroup.in/services/ecommerce-support' },
    ],
    schemaType: 'Service',
    sections: [
      {
        heading: 'Operational Scope for D2C Brands',
        subheading: 'End-to-end post-checkout operations management',
        listItems: [
          'Pre-Dispatch COD Confirmation: Outbound phone and WhatsApp verification of buyer address and purchase intent within 30 minutes of checkout.',
          'Courier NDR Triage & Re-Attempt Scheduling: Real-time contact when couriers report fake non-delivery exceptions (door closed, buyer unreachable).',
          'Returns & Exchange Processing: Inspecting buyer photos and coordinating reverse pickup logistics according to client store policies.',
          'Logistics Escalations: Coordinating directly with courier aggregators (Shiprocket, ClickPost, Delhivery, Bluedart) for stuck shipments.',
        ],
      },
      {
        heading: 'Operational Outcomes & Benchmarks',
        subheading: 'Direct impact on logistics P&L and customer retention',
        keyValuePairs: [
          { label: 'RTO Rate Reduction', value: '25% – 35% reduction vs unverified order baseline' },
          { label: 'Order Confirmation Speed', value: '< 30 minutes for high-risk flagged orders' },
          { label: 'NDR Triage Turnaround', value: 'Same-day buyer contact before courier returns package' },
          { label: 'Return Authorization SLA', value: '< 24 hours from buyer photo submission' },
        ],
      },
    ],
    faqs: [
      {
        q: 'Which e-commerce platforms and courier aggregators do you integrate with?',
        a: 'We work natively inside Shopify, WooCommerce, Shiprocket, ClickPost, Pickrr, Delhivery, and custom brand admin portals using client-managed staff accounts with zero permission leaks.',
      },
    ],
  },

  '/services/telecalling': {
    path: '/services/telecalling',
    title: 'Telecalling Services & Inbound Lead Qualification BPO | Njure Tech',
    description: 'Accelerate sales conversions with dedicated remote telecalling teams. Inbound lead qualification within 10 minutes, appointment booking, and customer feedback calling.',
    h1: 'Telecalling & Inbound Lead Qualification BPO',
    kicker: 'Service Domain 04 · Rapid 10-Minute Speed-to-Lead',
    lead: 'Bridge the critical gap between marketing lead generation and sales conversion. Njure Tech delivers articulate, trained remote voice specialists who contact inbound leads within 10 minutes, qualify prospects, and book discovery calls directly onto your account executives’ calendars.',
    breadcrumbs: [
      { name: 'Home', url: 'https://tech.njuregroup.in/' },
      { name: 'BPO Services', url: 'https://tech.njuregroup.in/services' },
      { name: 'Telecalling & Leads', url: 'https://tech.njuregroup.in/services/telecalling' },
    ],
    schemaType: 'Service',
    sections: [
      {
        heading: 'Outbound & Inbound Voice Capabilities',
        subheading: 'Calibrated voice calling adhering to strict objection handling scripts',
        listItems: [
          'Inbound Lead Qualification: Calling web inquiry submissions within 10 minutes while prospect interest is highest.',
          'BANT / MEDDPICC Qualification: Screening for budget, authority, need, and timeline before passing leads to senior sales.',
          'Discovery Call Scheduling: Booking confirmed meetings directly on Google Calendar / Calendly with zero scheduling friction.',
          'CRM Contact Hygiene: Logging call recordings, sentiment notes, and disposition tags into HubSpot, Zoho CRM, or LeadSquared.',
        ],
      },
      {
        heading: 'Performance Metrics & SLAs',
        subheading: 'Rigorous sales pipeline acceleration',
        keyValuePairs: [
          { label: 'Speed-to-Lead SLA', value: '< 10 minutes from web form submission' },
          { label: 'Average Call Connect Rate', value: '45% – 60% across standard calling cadence' },
          { label: 'Meeting Show-Up Rate Target', value: '80%+ with automated WhatsApp confirmation reminders' },
          { label: 'Supervised Audio Calibration', value: 'Daily supervisor listening audits and script coaching' },
        ],
      },
    ],
  },

  '/operations': {
    path: '/operations',
    title: 'Remote Operations Model & Delivery Architecture | Njure Tech',
    description: '100% distributed operations without commercial real estate bloat. Port-locked hardware endpoints, client SSO custody, and 24/7 shift coverage.',
    h1: 'Remote Operations: Workforce, QA, Shifts, Security & Reporting',
    kicker: 'Operational Delivery Architecture · 100% Distributed Cloud Model',
    lead: 'How Njure Tech governs a 100% distributed, remote workforce to deliver consistent SLA adherence without the commercial real estate overhead and rigid constraints of legacy call centers.',
    breadcrumbs: [
      { name: 'Home', url: 'https://tech.njuregroup.in/' },
      { name: 'Remote Operations', url: 'https://tech.njuregroup.in/operations' },
    ],
    schemaType: 'WebPage',
    sections: [
      {
        heading: '1. Workforce: Distributed Talent & Home Setup Standards',
        subheading: 'Strict home office requirements enforced across all specialists',
        listItems: [
          'Primary Fiber Broadband: Mandatory 30+ Mbps dedicated broadband connection.',
          'Secondary Failover: Pre-configured 4G/5G mobile hotspot failover preventing disconnects.',
          'Power Continuity: Dedicated UPS/inverter power backup guaranteeing 4+ hours of uninterrupted operation.',
          'Isolated Workspaces: Quiet home office room free from background noise, family observers, and physical distractions.',
        ],
      },
      {
        heading: '2. Quality Assurance: Dual-Pass Validation & Calibration',
        subheading: 'Systematic quality engineering across every shift',
        listItems: [
          'Dual-Pass Data Validation: Secondary human verification for critical KYC, invoice, and catalog fields guaranteeing 99.5%+ accuracy.',
          'Ticket & Call Audits: Supervisors audit 100% of newly onboarded responses and 20% of ongoing baseline volume.',
          'Daily Calibration Standups: Morning 1-on-1 coaching syncs reviewing edge-case tickets and updating knowledge macros.',
        ],
      },
      {
        heading: '3. Shifts: 24/7 Follow-the-Sun Rosters',
        subheading: 'Rotational schedules with mandatory 15-minute handovers',
        listItems: [
          'Domestic Daytime (09:00 - 18:00 IST): Customer support and order operations for Indian e-commerce and Gulf commercial accounts.',
          'Western Overnight (20:00 - 05:00 IST): Dedicated night teams serving US, UK, and European daytime customer bases.',
          '15-Minute Handover Overlap: Mandatory supervisor overlap during every shift change with documented handover logs.',
        ],
      },
      {
        heading: '4. Security & Endpoint Governance',
        subheading: 'Hardware port lockdowns and client-controlled identity',
        paragraphs: [
          'Workstations operate with external USB mass-storage port locks and clean-desk policies. Specialists access client tools directly via client-managed SSO/MFA credentials with instant revocation authority.',
          'Every remote specialist executes bilateral legally binding non-disclosure agreements prior to account induction.',
        ],
      },
      {
        heading: '5. Reporting & Operational Scorecards',
        subheading: 'Transparent metrics and daily attendance logs',
        listItems: [
          'Daily Attendance Logs: Login timestamps, active hours, and shift queue distribution.',
          'Weekly SLA Scorecards: First Contact Resolution (FCR), Average Handling Time (AHT), and CSAT scores by channel.',
          'Monthly Stakeholder Reviews: Executive syncs reviewing capacity planning, volume forecasts, and workflow optimizations.',
        ],
      },
    ],
  },

  '/security': {
    path: '/security',
    title: 'Security by Design, Endpoint Controls & Governance | Njure Tech',
    description: 'Transparent security controls: port lockdown endpoint policies, client-controlled SSO/MFA, bilateral NDAs, and clean-screen standards for remote operations.',
    h1: 'Security by Design & Operational Governance Controls',
    kicker: 'Trust, Compliance & Data Safeguards · Njure Tech',
    lead: 'Protecting client credentials, proprietary operational data, and customer records through technical endpoint lockdowns, client-managed identity access, and transparent operational governance.',
    breadcrumbs: [
      { name: 'Home', url: 'https://tech.njuregroup.in/' },
      { name: 'Security & Trust', url: 'https://tech.njuregroup.in/security' },
    ],
    schemaType: 'WebPage',
    sections: [
      {
        heading: 'Transparent Certification Disclosure',
        subheading: 'Clear communication of our operational posture',
        paragraphs: [
          'Njure Tech is currently not ISO 27001 or SOC 2 certified. We communicate our operational posture transparently so clients can evaluate alignment with their specific compliance policies.',
          'Rather than marketing empty badges, we enforce practical, auditable operating safeguards protecting client identity and customer data across every remote endpoint.',
        ],
      },
      {
        heading: 'Endpoint Security & Workstation Controls',
        subheading: 'Eliminating data leakage at the device level',
        listItems: [
          'Port Lockdown Policies: External USB mass-storage drives and unapproved removable media are blocked at the OS endpoint level.',
          'Browser Extension Restrictions: Only approved client tools and password managers can execute in the browser environment.',
          'Clean-Screen Standards: Remote specialists must operate in private rooms free from household observers; zero photography permitted.',
          'Zero Local Persistence: Production data remains exclusively in client cloud systems; zero local file downloads or persistence.',
        ],
      },
      {
        heading: 'Access Governance & Identity Management',
        subheading: 'Client-controlled credentials and role isolation',
        listItems: [
          'Client-Managed SSO & MFA: Specialists access client systems directly using credentials managed in your Okta, Google Workspace, or Azure AD.',
          'Instant Revocation Authority: Clients retain complete ownership of user accounts and can revoke access immediately at any moment.',
          'Bilateral Legally Binding NDAs: Comprehensive non-disclosure agreements executed prior to onboarding with strict confidentiality obligations.',
          'Least-Privilege Role Assignment: Agents receive only the minimum permissions necessary to execute their assigned ticket or data queue.',
        ],
      },
    ],
  },

  '/technology': {
    path: '/technology',
    title: 'Technology Architecture, Integrations & Systems | Njure Tech',
    description: 'Explore Njure Tech technology architecture: workflow observation, CRM/ITSM integrations, zero-trust endpoint security, and real-time operational telemetry.',
    h1: 'Technology, Integrations & Systems Architecture',
    kicker: 'Digital Engineering & Automation Roadmap · Njure Tech',
    lead: 'While our active operations deliver high-touch human BPO execution, our digital engineering arm bridges customer touchpoints, automated webhook pipelines, and operational telemetry via tech.njuregroup.in.',
    breadcrumbs: [
      { name: 'Home', url: 'https://tech.njuregroup.in/' },
      { name: 'Technology Architecture', url: 'https://tech.njuregroup.in/technology' },
    ],
    schemaType: 'TechArticle',
    sections: [
      {
        heading: '1. Workflow: Operations First, Automation Second',
        subheading: 'Real-world operational observation before software automation',
        listItems: [
          'Process Observation: Frontline specialists log handling friction, edge cases, and repetitive customer inquiries in production.',
          'Macro & Template Optimization: Standardizing response macros, address formatters, and dual-pass validation checklists.',
          'Targeted API Automation: Connecting event triggers and webhooks to eliminate repetitive administrative tasks without losing human empathy.',
        ],
      },
      {
        heading: '2. Integrations: Native Connectivity into Client Ecosystems',
        subheading: 'Operating seamlessly inside your existing tools',
        listItems: [
          'ITSM & Helpdesks: Zendesk, Freshdesk, Jira Service Management (JSM), Zoho Desk.',
          'E-Commerce & 3PL: Shopify, WooCommerce, Shiprocket, ClickPost, Delhivery.',
          'CRMs & Sales Tools: HubSpot, Zoho CRM, LeadSquared, Google Calendar.',
          'Telephony PBX: Vicidial, Exotel, Knowlarity, Ozonetel.',
        ],
      },
      {
        heading: '3. Security: Zero-Trust Remote Workspaces',
        subheading: 'Endpoint lockdowns, TLS 1.3 encryption, and client MFA custody',
        paragraphs: [
          'All network traffic between remote specialists and client systems is encrypted using modern TLS protocols. Production data remains strictly within client cloud storage.',
          'Workstations operate under endpoint policies that restrict external mass storage devices and unapproved browser extensions.',
        ],
      },
      {
        heading: '4. Reporting: Real-Time Operational Telemetry',
        subheading: 'Visibility into queue health, attendance, and SLA performance',
        listItems: [
          'Weekly CSAT & SLA Scorecards: Detailed breakdowns of First Contact Resolution (FCR), Average Handling Time (AHT), and CSAT.',
          'Shift Handover Overlap Logs: Documented 15-minute supervisor handover logs tracking high-priority disputes and system release updates.',
          'Planned Client Portals: Bespoke client web dashboards for real-time ticket analytics and automated invoice reconciliation.',
        ],
      },
    ],
  },

  '/careers': {
    path: '/careers',
    title: 'Remote Careers & Partnerships (100% WFH) | Njure Tech',
    description: 'Explore remote customer support and data operations roles across India. Profit-sharing business partner model, zero agency cut, and flexible work-from-home.',
    h1: 'Remote Careers & Business Partnerships',
    kicker: 'Join Our Remote Operational Pods · Zero Agency Cut',
    lead: 'Join a 100% remote operational pod where you are treated as a true business partner. We take zero agency cut from client contracts—project profits are shared directly with our remote specialists.',
    breadcrumbs: [
      { name: 'Home', url: 'https://tech.njuregroup.in/' },
      { name: 'Careers', url: 'https://tech.njuregroup.in/careers' },
    ],
    schemaType: 'WebPage',
    sections: [
      {
        heading: '1. Active Open Remote Positions',
        subheading: '100% remote positions reviewed directly by operations leads',
        listItems: [
          'Customer Support Executive (Voice / Non-Voice): Full-time remote; 0-2 years experience; manage calls, live chats, and email tickets with empathy; English and regional languages (Malayalam, Hindi).',
          'Back-Office Data Operations Specialist: Full-time remote; 0-2 years experience; KYC document verification, spreadsheet cleansing, and catalog data entry with 99.5%+ accuracy.',
          'E-Commerce Operations & Order Verification Associate: Full-time remote; 0-2 years experience; COD pre-dispatch verification, NDR triage calling, and returns management for D2C brands.',
        ],
      },
      {
        heading: '2. Working Model: Business Partners, Not Disposable Temp Workers',
        subheading: 'How our profit-sharing partner structure works',
        listItems: [
          '100% Work from Home: Zero commute. Work from your home office anywhere in India with power backup and stable broadband.',
          'Direct Profit Sharing: Zero agency cut. When our clients succeed and grow, project earnings flow directly into specialist compensation.',
          'Documented Induction: Structured scripts, CRM training, and supportive team leads who coach rather than micromanage.',
        ],
      },
      {
        heading: '3. Candidate Application via Email',
        subheading: 'Direct email submission with candidate Reference ID',
        paragraphs: [
          'Submit your application directly through our mail application form. An automatic candidate tracking Reference ID is generated and opens your mail client addressed to info@njuregroup.in. Simply attach your CV/Resume file.',
          'Central talent contact: info@njuregroup.in | Partner model agreement acknowledged on application.',
        ],
      },
    ],
  },

  '/contact': {
    path: '/contact',
    title: 'Contact Njure Tech — Request an Operations Proposal',
    description: 'Contact Njure Tech operations leadership for a custom BPO proposal tailored to your exact budget. Omnichannel customer support, back-office, and telecalling.',
    h1: 'Contact Njure Tech & Request an Operations Proposal',
    kicker: 'Client Inquiries & Budget Scoping · Fast Turnaround',
    lead: 'Connect directly with our remote operations leadership to discuss your support volume, schedule an operational scoping call, or request a budget-tailored proposal with zero agency cut.',
    breadcrumbs: [
      { name: 'Home', url: 'https://tech.njuregroup.in/' },
      { name: 'Contact Us', url: 'https://tech.njuregroup.in/contact' },
    ],
    schemaType: 'ContactPage',
    sections: [
      {
        heading: 'Direct Email Inquiry Desk',
        subheading: 'Structured inquiries with automatic tracking Reference IDs',
        paragraphs: [
          'Submit your project parameters through our inquiry form. An automatic tracking reference ID (e.g., NJ-INQ-2026-XXXX) is generated in the subject line addressed to info@njuregroup.in.',
          'Our operations leadership reviews your parameters and responds within 2–4 hours on business days with a tailored pod staffing plan.',
        ],
      },
      {
        heading: 'Operational Structure & Ground Truth',
        subheading: '100% remote delivery model under Njure Group',
        keyValuePairs: [
          { label: 'Operating Model', value: '100% Remote & Distributed Cloud Operations (Zero real estate bloat)' },
          { label: 'Parent Organization', value: 'Njure Group (njuregroup.in)' },
          { label: 'Official Domain', value: 'tech.njuregroup.in' },
          { label: 'Direct Inquiries Email', value: 'info@njuregroup.in' },
          { label: 'Business Hours', value: '24/7 Follow-the-Sun Shift Coverage across IST, Gulf & Western time zones' },
          { label: 'Confidentiality', value: 'Bilateral non-disclosure agreements executed prior to onboarding' },
        ],
      },
    ],
  },
};

/**
 * Generate full Schema.org structured data graph for a route
 */
export function generateSchemaGraph(seo: RouteSEOData): string {
  const graph: any[] = [
    {
      '@type': 'Organization',
      '@id': 'https://tech.njuregroup.in/#organization',
      name: 'Njure Tech',
      legalName: 'Njure Tech',
      parentOrganization: {
        '@type': 'Organization',
        name: 'Njure Group',
        url: 'https://njuregroup.in',
      },
      url: 'https://tech.njuregroup.in',
      logo: 'https://tech.njuregroup.in/logo.png',
      email: 'info@njuregroup.in',
      description: 'Client-budget-oriented remote business process outsourcing company under Njure Group with zero agency cut.',
      areaServed: 'Worldwide',
      sameAs: [
        'https://njuregroup.in',
        'https://www.linkedin.com/company/njuregroup',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://tech.njuregroup.in/#website',
      name: 'Njure Tech',
      url: 'https://tech.njuregroup.in',
      description: 'Client-Budget-Oriented BPO & Scaled Remote Customer Operations',
      publisher: {
        '@id': 'https://tech.njuregroup.in/#organization',
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `https://tech.njuregroup.in${seo.path}#breadcrumb`,
      itemListElement: seo.breadcrumbs.map((b, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        name: b.name,
        item: b.url,
      })),
    },
  ];

  if (seo.schemaType === 'Service') {
    graph.push({
      '@type': 'Service',
      '@id': `https://tech.njuregroup.in${seo.path}#service`,
      name: seo.h1,
      description: seo.description,
      provider: {
        '@id': 'https://tech.njuregroup.in/#organization',
      },
      serviceType: seo.h1,
      areaServed: 'Worldwide',
    });
  }

  if (seo.faqs && seo.faqs.length > 0) {
    graph.push({
      '@type': 'FAQPage',
      '@id': `https://tech.njuregroup.in${seo.path}#faq`,
      mainEntity: seo.faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: f.a,
        },
      })),
    });
  }

  return JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }, null, 2);
}

/**
 * Generate semantic crawler HTML for the target route to inject into <div id="root">
 */
export function generateSemanticRouteHtml(seo: RouteSEOData): string {
  const breadcrumbHtml = seo.breadcrumbs
    .map((b, i) => (i === seo.breadcrumbs.length - 1 ? `<span>${b.name}</span>` : `<a href="${b.url}" class="hover:underline text-blue-700">${b.name}</a>`))
    .join(' <span class="text-slate-400">/</span> ');

  const sectionsHtml = seo.sections
    .map((sec) => {
      let content = '';
      if (sec.paragraphs) {
        content += sec.paragraphs.map((p) => `<p class="text-xs text-slate-700 leading-relaxed mb-3">${p}</p>`).join('');
      }
      if (sec.listItems) {
        content += `<ul class="space-y-2 text-xs text-slate-700 list-disc pl-5 mb-4">${sec.listItems.map((li) => `<li>${li}</li>`).join('')}</ul>`;
      }
      if (sec.keyValuePairs) {
        content += `<div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">${sec.keyValuePairs
          .map(
            (kv) =>
              `<div class="p-3 bg-slate-50 border border-slate-200 rounded"><span class="font-bold text-slate-900 block text-xs mb-0.5">${kv.label}</span><span class="text-slate-600 text-xs">${kv.value}</span></div>`
          )
          .join('')}</div>`;
      }

      return `
        <section class="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 mb-6">
          <h2 class="text-xl font-bold text-slate-900 mb-1">${sec.heading}</h2>
          ${sec.subheading ? `<p class="text-xs text-blue-700 font-semibold mb-4">${sec.subheading}</p>` : ''}
          ${content}
        </section>
      `;
    })
    .join('');

  let faqsHtml = '';
  if (seo.faqs && seo.faqs.length > 0) {
    faqsHtml = `
      <section class="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 mb-6">
        <h2 class="text-xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
        <div class="space-y-4">
          ${seo.faqs
            .map(
              (f, i) => `
            <div class="border-b border-slate-100 pb-3">
              <h3 class="text-sm font-bold text-slate-900 mb-1">0${i + 1}. ${f.q}</h3>
              <p class="text-xs text-slate-600 leading-relaxed">${f.a}</p>
            </div>
          `
            )
            .join('')}
        </div>
      </section>
    `;
  }

  return `
    <div class="min-h-screen bg-slate-50 p-4 sm:p-8 font-sans">
      <header class="max-w-7xl mx-auto w-full mb-8">
        <div class="border-b border-slate-200 pb-3 mb-4 flex items-center justify-between text-xs font-mono">
          <span class="font-bold text-slate-900">Njure Tech · Njure Group</span>
          <span class="text-blue-700">${seo.path}</span>
        </div>
        <nav aria-label="Breadcrumb" class="mb-4 text-xs font-semibold text-slate-600 flex items-center gap-1.5">
          ${breadcrumbHtml}
        </nav>
        <div class="inline-block px-2.5 py-1 rounded bg-blue-50 text-blue-800 text-xs font-bold uppercase tracking-wider mb-2">
          ${seo.kicker}
        </div>
        <h1 class="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
          ${seo.h1}
        </h1>
        <p class="text-base text-slate-600 max-w-3xl leading-relaxed mb-6 font-normal">
          ${seo.lead}
        </p>
        <nav class="flex flex-wrap gap-2 text-xs font-semibold text-blue-700 pb-4 border-b border-slate-200">
          <a href="/" class="hover:underline">Home</a>
          <span>·</span>
          <a href="/about" class="hover:underline">About</a>
          <span>·</span>
          <a href="/services" class="hover:underline">Services Directory</a>
          <span>·</span>
          <a href="/services/customer-support" class="hover:underline">Customer Support</a>
          <span>·</span>
          <a href="/services/back-office" class="hover:underline">Back-Office</a>
          <span>·</span>
          <a href="/services/ecommerce-support" class="hover:underline">E-Commerce</a>
          <span>·</span>
          <a href="/services/telecalling" class="hover:underline">Telecalling</a>
          <span>·</span>
          <a href="/operations" class="hover:underline">Operations</a>
          <span>·</span>
          <a href="/security" class="hover:underline">Security</a>
          <span>·</span>
          <a href="/technology" class="hover:underline">Technology</a>
          <span>·</span>
          <a href="/careers" class="hover:underline">Careers</a>
          <span>·</span>
          <a href="/contact" class="hover:underline">Contact</a>
        </nav>
      </header>

      <main class="max-w-7xl mx-auto w-full">
        ${sectionsHtml}
        ${faqsHtml}
      </main>

      <footer class="max-w-7xl mx-auto w-full mt-10 pt-6 border-t border-slate-200 text-xs text-slate-500">
        <p>© 2026 Njure Tech. A venture of Njure Group (<a href="https://njuregroup.in" class="text-blue-700 hover:underline">njuregroup.in</a>). Central Inquiries: <a href="mailto:info@njuregroup.in" class="text-blue-700 font-mono">info@njuregroup.in</a></p>
      </footer>
    </div>
  `;
}

/**
 * Main prerender function to inject route-specific SEO tags & extractable content
 */
export function injectPrerenderedRoute(htmlTemplate: string, requestedPath: string): string {
  // Normalize path
  let path = requestedPath.split('?')[0].split('#')[0];
  if (path.length > 1 && path.endsWith('/')) {
    path = path.slice(0, -1);
  }

  // Synonym / Legacy redirects normalization
  if (path === '/home') path = '/';
  if (path === '/bpo-services') path = '/services';
  if (path === '/services/ecommerce-operations') path = '/services/ecommerce-support';
  if (path === '/delivery-center' || path === '/remote-operations') path = '/operations';
  if (path === '/trust' || path === '/compliance') path = '/security';
  if (path === '/future-tech') path = '/technology';

  const seo = ROUTE_REGISTRY[path] || ROUTE_REGISTRY['/'];
  const canonicalUrl = `https://tech.njuregroup.in${seo.path === '/' ? '' : seo.path}`;
  const schemaJson = generateSchemaGraph(seo);
  const semanticHtml = generateSemanticRouteHtml(seo);

  let output = htmlTemplate;

  // 1. Replace <title>
  output = output.replace(/<title>.*?<\/title>/is, `<title>${seo.title}</title>`);

  // 2. Replace meta description
  output = output.replace(
    /<meta\s+name="description"\s+content=".*?"\s*\/?>/is,
    `<meta name="description" content="${seo.description}" />`
  );

  // 3. Replace canonical URL
  output = output.replace(
    /<link\s+rel="canonical"\s+href=".*?"\s*\/?>/is,
    `<link rel="canonical" href="${canonicalUrl}" />`
  );

  // 4. Replace OpenGraph & Twitter tags
  output = output.replace(/<meta\s+property="og:title"\s+content=".*?"\s*\/?>/is, `<meta property="og:title" content="${seo.title}" />`);
  output = output.replace(/<meta\s+property="og:description"\s+content=".*?"\s*\/?>/is, `<meta property="og:description" content="${seo.description}" />`);
  output = output.replace(/<meta\s+property="og:url"\s+content=".*?"\s*\/?>/is, `<meta property="og:url" content="${canonicalUrl}" />`);
  output = output.replace(/<meta\s+name="twitter:title"\s+content=".*?"\s*\/?>/is, `<meta name="twitter:title" content="${seo.title}" />`);
  output = output.replace(/<meta\s+name="twitter:description"\s+content=".*?"\s*\/?>/is, `<meta name="twitter:description" content="${seo.description}" />`);

  // 5. Replace Schema.org JSON-LD
  output = output.replace(
    /<script id="njure-seo-schema" type="application\/ld\+json">.*?<\/script>/is,
    `<script id="njure-seo-schema" type="application/ld+json">\n${schemaJson}\n    </script>`
  );

  // 6. Replace <div id="root">...</div> with route-specific semantic HTML
  output = output.replace(
    /<div id="root">[\s\S]*?<\/div>\s*(?=(?:<!--\s*No-Script|<noscript>|<\/body>))/is,
    `<div id="root">${semanticHtml}</div>\n    `
  );

  return output;
}
