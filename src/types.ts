export interface DeliveryHub {
  id: string;
  city: string;
  country: string;
  region: 'Americas' | 'EMEA' | 'APAC';
  coordinates: { x: number; y: number }; // percentage coordinates for visual map
  headcount: string;
  focus: string[];
  certifications: string[];
  timezone: string;
  status: 'Operational' | 'Primary Hub';
}

export interface IndustryData {
  id: string;
  name: string;
  tagline: string;
  iconName: string;
  challenges: string[];
  engineeringSolution: string;
  operationsSolution: string;
  metrics: { label: string; value: string }[];
  caseStudy: {
    client: string;
    description: string;
    impact: string;
  };
}

export interface CareerRole {
  id: string;
  title: string;
  department: 'Engineering' | 'Operations' | 'Cloud & AI' | 'Strategy & Product';
  location: string;
  type: string;
  experience: string;
  overview: string;
  responsibilities: string[];
  requirements: string[];
}

export interface InquiryFormData {
  fullName: string;
  workEmail: string;
  companyName: string;
  jobTitle: string;
  serviceInterest: 'Digital Engineering' | 'Intelligent Operations' | 'Integrated Dual-Pillar' | 'Advisory & Strategy';
  projectScale: 'Enterprise Pilot ($50k-$250k)' | 'Full Modernization ($250k-$1M)' | 'Global Scale ($1M+)';
  timeline: 'Immediate (< 30 days)' | '1-3 Months' | 'Exploring FY2026/2027';
  message: string;
}
