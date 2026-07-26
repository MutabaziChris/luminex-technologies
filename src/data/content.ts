import type { CaseStudy, ServiceItem, PricingTier, BlogPost, FaqItem, Testimonial, IndustrySolution, TechStackCategory } from '../types';

export const COMPANY_INFO = {
  name: 'Luminex Technologies',
  tagline: 'Intelligent Software. Lasting Impact.',
  description: 'Luminex Technologies is a modern, remote-first software engineering and digital transformation studio specializing in enterprise web applications, small business & clinic websites, personal portfolios, AI solutions, mobile apps, and custom digital products.',
  mission: 'Empowering organizations and entrepreneurs through secure, scalable, and intelligent technology that transforms operations and drives sustainable growth.',
  vision: "To become Africa's most trusted software engineering and digital transformation studio recognized globally for innovation, accessibility, and long-term tech partnerships.",
  email: 'luminex.tech.rw@gmail.com',
  phone: '+250 781 367 769',
  whatsapp: '250781367769',
  address: 'Kigali, Rwanda (Remote-First Digital Studio • Online & In-Person Consultations)',
  founded: '2021',
  projectsCompleted: '140+',
  countriesServed: '12',
  uptimeSla: '99.99%',
  clientSatisfaction: '99.4%',
  coreValues: [
    { title: 'Innovation', desc: 'Pushing technical frontiers with continuous learning and modern architecture.' },
    { title: 'Integrity', desc: 'Uncompromising transparency, absolute IP security, and executive honesty.' },
    { title: 'Quality', desc: 'Zero-compromise engineering standards, peer-reviewed clean code, and automated QA.' },
    { title: 'Accessibility', desc: 'High-impact digital solutions tailored for startups, local businesses, and enterprises alike.' },
    { title: 'Scalability', desc: 'Cloud-native solutions architected to seamlessly grow alongside your business.' },
    { title: 'Customer Success', desc: 'Relentless dedication to measurable client ROI and long-term operational impact.' },
    { title: 'Continuous Improvement', desc: 'Agile iteration, continuous integration, and proactive system optimizations.' }
  ]
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'dental-clinic-website',
    title: 'KigaliCare Dental Clinic & Booking Portal',
    category: 'Healthcare',
    industry: 'Dental & Medical Clinics',
    clientType: 'Private Dental & Specialty Practice',
    tagline: 'Online Patient Appointment Scheduling, Doctor Profiles & WhatsApp Sync',
    summary: 'A fast, modern clinic website enabling online appointment bookings, automated SMS reminders, treatment pricing, and direct WhatsApp patient consultation.',
    challenge: 'High missed appointment rates (35%), phone line congestion during peak hours, and patients lacking clear information on treatment costs and dental services.',
    solution: 'Designed an interactive clinic website featuring 24/7 calendar appointment booking, doctor profile showcases, insurance coverage check, and instant WhatsApp booking confirmation.',
    architecture: [
      'React & TypeScript Patient Booking Frontend',
      'Supabase & PostgreSQL Patient Reservation Database',
      'Twilio / SMS Automated Appointment Reminder Pipeline',
      'Google Maps & Business Profile Synchronization'
    ],
    technologies: ['React', 'TypeScript', 'Supabase', 'PostgreSQL', 'Vite', 'Google Maps API'],
    impactMetrics: [
      { label: 'No-Show Rate', value: '-65%', detail: 'Automated SMS & WhatsApp reminders dramatically reduced missed appointments' },
      { label: 'Online Bookings', value: '78%', detail: 'Majority of new patients now book directly via the web portal' },
      { label: 'Patient Inquiries', value: '3.4x', detail: 'Increased monthly new patient consultations within 30 days of launch' }
    ],
    featured: true,
    accentColor: '#00F0FF',
    mockupType: 'portal',
    stats: {
      duration: '2 Weeks',
      teamSize: '3 Engineers',
      usersServed: '4.2K Patients/Mo',
      roi: '+45% New Revenue'
    },
    keyFeatures: [
      '24/7 Online Calendar Doctor Appointment Booking',
      'Instant WhatsApp Chat & Direct Emergency Booking Trigger',
      'Interactive Dental Treatment Price List & FAQ',
      'Patient Reviews, Doctor Profiles & Before/After Gallery',
      'Mobile-Optimized Responsive Experience'
    ]
  },
  {
    id: 'personal-portfolio-brand',
    title: 'Executive Personal Brand & Portfolio Flagship',
    category: 'Enterprise',
    industry: 'Consultants, Executives & Creators',
    clientType: 'Independent Architect & Business Leader',
    tagline: 'High-Converting Digital Resume, Case Studies & Media Press Kit',
    summary: 'An ultra-sleek personal brand website tailored for high-ticket consultants, speakers, and executives looking to win international advisory engagements.',
    challenge: 'Relying on generic PDF resumes and outdated LinkedIn profiles resulted in missed consulting contracts and poor personal brand authority.',
    solution: 'Engineered an interactive personal portfolio with dynamic project showcases, media features, downloadable capability deck, and direct meeting booking.',
    architecture: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel Cloud'],
    technologies: ['React', 'TypeScript', 'Next.js', 'Vite', 'Google Analytics'],
    impactMetrics: [
      { label: 'Lead Inquiries', value: '4.2x', detail: 'Increased high-value consulting inquiries from international clients' },
      { label: 'Page Load Speed', value: '0.4 Sec', detail: '99/100 Google Lighthouse score for lightning fast performance' },
      { label: 'Consulting Retainers', value: '+120%', detail: 'Higher client closing rate due to premium visual positioning' }
    ],
    featured: true,
    accentColor: '#F59E0B',
    mockupType: 'portal',
    stats: {
      duration: '1 Week',
      teamSize: '2 Engineers',
      usersServed: '15K Visitors/Mo',
      roi: '5.2x Engagement'
    },
    keyFeatures: [
      'Interactive Case Study & Project Showcase',
      'Integrated Calendly / Google Meeting Scheduler',
      'Downloadable PDF Resume & Capability Presentation',
      'Custom Blog & Thought Leadership Publication Engine',
      'SEO Optimized for High Google Search Ranking'
    ]
  },
  {
    id: 'hospital-management-platform',
    title: 'AegisHealth Enterprise Hospital Platform',
    category: 'Healthcare',
    industry: 'Healthcare & Public Health',
    clientType: 'National Hospital Network',
    tagline: 'Unified Telemedicine, Patient EHR & Multi-Ward Logistics Engine',
    summary: 'A high-concurrency electronic health records (EHR) and hospital management ecosystem operating across 14 regional referral hospitals with HL7/FHIR integration.',
    challenge: 'Fragmented paper-based records, high patient wait times (over 3 hours), and lack of real-time ICU & pharmaceutical inventory synchronization across regional medical facilities.',
    solution: 'Engineered an offline-first microservices platform built on Spring Boot, PostgreSQL, and React with end-to-end encrypted biometric patient authentication, automated drug dispatching, and telemedicine triage.',
    architecture: [
      'Spring Boot & Java 21 Microservices Network',
      'Event-Driven Kafka Telemetry Pipeline',
      'React & TypeScript High-Density Clinical UI',
      'HIPAA / GDPR Encrypted PostgreSQL Cluster'
    ],
    technologies: ['React', 'TypeScript', 'Java', 'Spring Boot', 'PostgreSQL', 'Docker', 'Kubernetes', 'AWS'],
    impactMetrics: [
      { label: 'Patient Wait Time', value: '-72%', detail: 'Reduced average triage & consultation check-in duration from 180 min to 50 min' },
      { label: 'EHR Synchronization', value: '< 200ms', detail: 'Real-time multi-branch record lookup across 14 hospital centers' },
      { label: 'Prescription Accuracy', value: '99.98%', detail: 'Eliminated pharmacy dispensing conflicts with automated AI drug interaction checks' }
    ],
    featured: true,
    accentColor: '#10B981',
    mockupType: 'dashboard',
    stats: {
      duration: '7 Months',
      teamSize: '12 Engineers',
      usersServed: '1.2M Patients',
      roi: '340% ROI in Y1'
    },
    keyFeatures: [
      'Biometric Patient Identification & Encrypted Card Sync',
      'Automated Telemedicine & Virtual Doctor Triage Room',
      'Multi-Pharmacy Inventory & Expiry AI Forecasting',
      'Real-Time Bed Availability & ICU Monitor Feeds',
      'National Health Insurance API Automated Billing'
    ]
  },
  {
    id: 'government-information-system',
    title: 'GovCore National Services & e-Permit Portal',
    category: 'GovTech',
    industry: 'Government & Public Sector',
    clientType: 'Ministry of Infrastructure & Urban Planning',
    tagline: 'Streamlined Citizen Services, Digital Permits & Automated Audits',
    summary: 'An enterprise-grade sovereign government portal enabling digitized land registration, building permit approvals, and identity-verified citizen service workflows.',
    challenge: 'Paper-intensive approval workflows taking up to 90 days, vulnerability to forgery, and lack of real-time auditability across municipal councils.',
    solution: 'Architected a secure digital government engine utilizing cryptographic document signing, automated AI zoning validation, and role-based citizen dashboards.',
    architecture: [
      'Next.js & React Sovereign Frontend',
      'Go & Node.js Encrypted Microservices',
      'Hyperledger Cryptographic Audit Ledger',
      'Sovereign Private Cloud Infrastructure'
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker', 'Google Cloud', 'OpenAI'],
    impactMetrics: [
      { label: 'Permit Approval Time', value: '3 Days', detail: 'Accelerated municipal building permit issuance from 90 days to 72 hours' },
      { label: 'Document Forgery', value: '0 Case', detail: 'Cryptographically sealed signatures verified via QR blockchain hashes' },
      { label: 'Annual Revenue Loss', value: '-85%', detail: 'Eliminated uncaptured permit fees with integrated mobile money & bank gateways' }
    ],
    featured: true,
    accentColor: '#3B82F6',
    mockupType: 'portal',
    stats: {
      duration: '9 Months',
      teamSize: '16 Engineers',
      usersServed: '4.5M Citizens',
      roi: '8.4B RWF Revenue Tracked'
    },
    keyFeatures: [
      'National Identity Card & Passport Single Sign-On (SSO)',
      'Automated CAD & Geospatial Building Zoning Scanner',
      'Digital Document Cryptographic QR Verification',
      'Integrated Mobile Money & Bank Revenue Reconciliation',
      'Multi-lingual Interface (Kinyarwanda, English, French)'
    ]
  },
  {
    id: 'banking-dashboard',
    title: 'ApexBank Omni-Channel Core Treasury & Analytics',
    category: 'FinTech',
    industry: 'Banking & Financial Services',
    clientType: 'Commercial Bank Consortium',
    tagline: 'Real-Time Interbank Payments, Fraud AI & Wealth Management',
    summary: 'An ultra-low latency core treasury management platform handling high-volume SWIFT transactions, mobile money clearings, and instant AI fraud detection.',
    challenge: 'Legacy mainframes causing delayed settlement cycles, batch transaction errors during peak hours, and vulnerability to sophisticated account takeover attacks.',
    solution: 'Deployed a modern event-driven banking engine with sub-50ms transaction processing, automated AI anomaly detection, and unified corporate liquidity dashboards.',
    architecture: [
      'High-Concurrency Java & Spring Boot Financial Kernel',
      'Apache Flink Real-Time Transaction Stream Processing',
      'React & Canvas Financial Visualization Engine',
      'PCI-DSS Compliant Multi-AZ Vault'
    ],
    technologies: ['React', 'TypeScript', 'Java', 'Spring Boot', 'PostgreSQL', 'Docker', 'AWS', 'OpenAI'],
    impactMetrics: [
      { label: 'Transaction Latency', value: '38ms', detail: 'Sub-second interbank payment processing and instant settlement' },
      { label: 'Fraud Detection Rate', value: '99.4%', detail: 'Real-time transaction scoring caught over 450M RWF in attempted fraud' },
      { label: 'System Uptime', value: '99.999%', detail: 'Zero unscheduled downtime during peak holiday trading periods' }
    ],
    featured: true,
    accentColor: '#F59E0B',
    mockupType: 'dashboard',
    stats: {
      duration: '10 Months',
      teamSize: '18 Engineers',
      usersServed: '850K Active Accounts',
      roi: '12B RWF Processed Daily'
    },
    keyFeatures: [
      'Real-Time SWIFT & ISO20022 Financial Messaging',
      'Instant Mobile Money (MTN / Airtel) Bulk Settlement Engine',
      'Machine Learning Fraud Anomaly Flagging Engine',
      'Multi-Currency Liquidity & Forex Forecasting',
      'Executive Boardroom Financial Analytics Portal'
    ]
  },
  {
    id: 'ai-customer-support-platform',
    title: 'OmniAssist Multilingual Enterprise AI Support Hub',
    category: 'AI & Cloud',
    industry: 'Telecommunications & Utilities',
    clientType: 'Telecom & Energy Enterprise',
    tagline: 'GenAI Knowledge Agent, WhatsApp Automation & Ticket Escalation',
    summary: 'An enterprise customer service hub utilizing LLM fine-tuning to handle customer inquiries in Kinyarwanda, Swahili, English, and French across WhatsApp, Web, and SMS.',
    challenge: 'Call centers overwhelmed with repetitive balance and outage queries, incurring high agent staffing costs and 45-minute average hold times.',
    solution: 'Built a retrieval-augmented generation (RAG) AI assistant integrated into WhatsApp, resolving 82% of customer requests autonomously.',
    architecture: ['Python OpenAI / Gemini RAG', 'Node.js', 'PostgreSQL Vector DB', 'WhatsApp Business API'],
    technologies: ['React', 'TypeScript', 'Node.js', 'Python', 'OpenAI', 'Gemini', 'PostgreSQL'],
    impactMetrics: [
      { label: 'Deflection Rate', value: '82%', detail: 'Inquiries resolved automatically without human call agent routing' },
      { label: 'First Response Time', value: '< 2 Sec', detail: 'Instant answers across WhatsApp, Web Chat, and SMS' },
      { label: 'Call Center Savings', value: '$380K/yr', detail: 'Significant reduction in outsourced call center operational spend' }
    ],
    featured: true,
    accentColor: '#00F0FF',
    mockupType: 'analytics',
    stats: {
      duration: '5 Months',
      teamSize: '8 Engineers',
      usersServed: '2.4M Queries/Mo',
      roi: '4.2x Cost Efficiency'
    },
    keyFeatures: [
      'Native Kinyarwanda, Swahili, English, French Natural Language AI',
      'WhatsApp Business API Multi-Agent Broadcast & Chatbot',
      'Vector Search Database over Enterprise Policy Docs',
      'Automated Ticket Escalation to Live Human Support Team',
      'Real-Time Customer Sentiment & CSAT Analytics Dashboard'
    ]
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'clinic-small-business-websites',
    iconName: 'Layout',
    title: 'Clinic & Small Business Websites',
    shortDesc: 'Bespoke, high-converting websites for dental clinics, medical centers, law firms, and local services with appointment booking.',
    fullDesc: 'We build tailored digital front doors for local clinics, professional services, and small businesses. Includes online calendar appointment scheduling, WhatsApp direct booking triggers, service price lists, patient/client reviews, and Google Maps location integration.',
    keyDeliverables: [
      '24/7 Online Calendar Appointment Booking Engine',
      'Instant WhatsApp Chat & Direct Inquiry Widget',
      'Google Business Profile & SEO Local Map Ranking',
      'Mobile-First 60fps Responsive UI Design',
      'Custom Domain & Free SSL Setup Assistance'
    ],
    recommendedTech: ['React', 'TypeScript', 'Supabase', 'Vite', 'Google Maps API'],
    targetAudience: 'Dental Clinics, Medical Practices, Law Offices, Salons, Local Businesses',
    category: 'Core'
  },
  {
    id: 'personal-portfolio-websites',
    iconName: 'Globe',
    title: 'Personal Portfolio & Executive Brands',
    shortDesc: 'Stunning personal websites for consultants, executives, architects, and creators to win high-value contracts.',
    fullDesc: 'Stand out from the crowd with a high-end personal brand website. Show off your projects, articles, speaking engagements, and consulting packages with embedded meeting scheduling and downloadable media kits.',
    keyDeliverables: [
      'Interactive Project Showcase & Case Study Layout',
      'Calendly / Google Meeting Scheduling Integration',
      'Downloadable PDF Resume & Capability Presentation',
      'Personal Blog / Thought Leadership Publishing',
      'Sub-Second Page Loads & 95+ Lighthouse Score'
    ],
    recommendedTech: ['React', 'Next.js', 'TypeScript', 'Vanilla CSS'],
    targetAudience: 'Independent Consultants, Executives, Designers, Freelancers',
    category: 'Core'
  },
  {
    id: 'enterprise-web-applications',
    iconName: 'Layout',
    title: 'Enterprise Web Applications & ERPs',
    shortDesc: 'Mission-critical, high-concurrency web systems architected for security, fault tolerance, and extreme scalability.',
    fullDesc: 'We design and engineer bespoke enterprise web platforms built to power complex business operations. Utilizing modern microservices, robust micro-frontends, and high-performance databases, our applications handle millions of transactions with zero compromise on speed or security.',
    keyDeliverables: [
      'Microservices & Distributed Systems Architecture',
      'Role-Based Granular Access Control (RBAC)',
      'Enterprise SSO & OAuth2 / SAML Integration',
      'Low-Latency Database Clustering & Caching',
      'Automated CI/CD Deployment Pipelines'
    ],
    recommendedTech: ['React', 'Next.js', 'Java', 'Spring Boot', 'TypeScript', 'PostgreSQL', 'Docker'],
    targetAudience: 'Governments, Banks, Universities, Enterprise Corporations',
    category: 'Core'
  },
  {
    id: 'artificial-intelligence-solutions',
    iconName: 'BrainCircuit',
    title: 'Artificial Intelligence Solutions',
    shortDesc: 'Custom GenAI models, predictive analytics engines, LLM fine-tuning, and machine learning process automation.',
    fullDesc: 'Transform raw enterprise data into decisive operational advantages. Luminex builds sovereign AI models, Retrieval-Augmented Generation (RAG) knowledge systems, computer vision inspection tools, and conversational AI tailored to local and international business environments.',
    keyDeliverables: [
      'Custom LLM Fine-Tuning & Localized RAG Systems',
      'Automated Document OCR & Natural Language Processing',
      'Predictive Analytics & Financial Forecasting Models',
      'Computer Vision Quality Inspection & Facial Recognition',
      'Enterprise Vector Database Integration'
    ],
    recommendedTech: ['Python', 'OpenAI API', 'Google Gemini', 'PyTorch', 'PostgreSQL Vector', 'Docker'],
    targetAudience: 'Telecoms, Insurance Companies, Banks, Healthcare Networks',
    category: 'Core'
  },
  {
    id: 'mobile-application-development',
    iconName: 'Smartphone',
    title: 'Mobile Application Development',
    shortDesc: 'Native and cross-platform mobile apps for iOS and Android delivering fluid 60fps performance and offline capability.',
    fullDesc: 'From high-concurrency mobile banking applications to logistics driver dispatch apps, we craft ultra-responsive mobile experiences with intuitive UI, offline data synchronization, biometric authentication, and enterprise backend integration.',
    keyDeliverables: [
      'iOS & Android Cross-Platform Apps (Flutter / React Native)',
      'Offline-First Data Storage & Automatic Sync',
      'Biometric Identification (Face ID / Fingerprint)',
      'Real-Time Push Notifications & In-App Messaging',
      'Mobile Money & Card Payment SDK Integrations'
    ],
    recommendedTech: ['Flutter', 'React Native', 'TypeScript', 'Node.js', 'Firebase', 'AWS'],
    targetAudience: 'FinTechs, Logistics, Retail Brands, Healthcare Providers',
    category: 'Core'
  },
  {
    id: 'cloud-infrastructure',
    iconName: 'Cloud',
    title: 'Cloud Infrastructure & DevOps',
    shortDesc: 'Sovereign cloud setup, Kubernetes orchestration, infrastructure as code, and 99.99% SLA uptime engineering.',
    fullDesc: 'Architecting resilient, self-healing cloud ecosystems across AWS, Google Cloud, Microsoft Azure, or private sovereign cloud datacenters. We implement automated CI/CD pipelines, zero-downtime rolling deployments, and round-the-clock monitoring.',
    keyDeliverables: [
      'Infrastructure as Code (Terraform / Ansible)',
      'Kubernetes Multi-Cluster Orchestration',
      'Automated Zero-Downtime CI/CD Pipelines',
      'Multi-Region Disaster Recovery & Automated Backups',
      '24/7 Security Operations & Log Monitoring'
    ],
    recommendedTech: ['Docker', 'Kubernetes', 'Google Cloud', 'AWS', 'Azure', 'Terraform'],
    targetAudience: 'High-Growth Tech Companies, Financial Institutions, Public Sector',
    category: 'Core'
  }
];

export const PRICING_TIERS: PricingTier[] = [
  {
    id: 'personal-portfolio',
    title: 'Personal Portfolio & Brand',
    subtitle: 'For independent consultants, executives, architects & creators.',
    priceRWF: 250000,
    priceUSD: 200,
    timeline: '3 - 5 Days',
    targetClients: 'Consultants, Designers, Freelancers, Executive Leaders',
    deliverables: [
      'Up to 4 Custom Designed & Engineered Pages',
      'Interactive Case Study / Project Showcase Layout',
      'Calendly / Google Meeting Scheduling Integration',
      'Downloadable PDF Resume & Capability Link',
      'WhatsApp & Email Direct Contact Buttons',
      'Sub-Second Page Load Speed Optimization',
      '1 Month Free Support & Minor Updates'
    ],
    features: [
      'High-converting personal landing page',
      'Clean modern dark/light styling',
      'Mobile & tablet responsive design',
      'Source code & domain guidance'
    ]
  },
  {
    id: 'clinic-small-business',
    title: 'Clinic & Small Business Website',
    subtitle: 'For dental clinics, law offices, medical practices, salons & local services.',
    priceRWF: 500000,
    priceUSD: 400,
    popular: true,
    timeline: '1 - 2 Weeks',
    targetClients: 'Dental Clinics, Medical Centers, Law Firms, Retail Stores',
    deliverables: [
      'Up to 8 Custom Designed & Engineered Pages',
      '24/7 Online Doctor / Service Appointment Booking',
      'WhatsApp Instant Booking & Consultation Trigger',
      'Services & Dental Treatment Price List Display',
      'Google Maps & Local SEO Map Search Optimization',
      'Patient / Client Testimonials & Review Section',
      'Multi-Language Support (Kinyarwanda / EN / FR)',
      '2 Months Maintenance & Free Backup Setup'
    ],
    features: [
      '24/7 appointment calendar',
      'Direct WhatsApp booking button',
      'Google Maps & local search optimization',
      'Responsive medical/business styling'
    ]
  },
  {
    id: 'corporate-website',
    title: 'Enterprise Corporate Portal',
    subtitle: 'For established corporations, universities & multi-branch institutions.',
    priceRWF: 1500000,
    priceUSD: 1200,
    timeline: '3 - 5 Weeks',
    targetClients: 'Corporations, Institutions, Multi-Branch Businesses',
    deliverables: [
      'Up to 18 Custom Designed Pages & Sections',
      'Integrated Headless CMS for Content Management',
      'Interactive Case Studies / Project Showcase Gallery',
      'Multi-Category News / Blog Publishing Engine',
      'Full SEO Suite (Schema markup, OpenGraph, Sitemap)',
      'Multi-Language Switcher (Kinyarwanda/EN/FR)',
      'Lead Estimator / Interactive ROI Tool Integration',
      'Newsletter Subscription & Email CRM Integration',
      '3 Months SLA Support & Maintenance'
    ],
    features: [
      'Complete content management system',
      'Custom graphics & 3D mockups',
      'Advanced search & filter capabilities',
      'WCAG AA accessibility compliance',
      '24/7 Uptime monitoring'
    ]
  },
  {
    id: 'business-web-application',
    title: 'Business Web App / Startup MVP',
    subtitle: 'Custom web software powering daily operations, payments, and automation.',
    priceRWF: 3000000,
    priceUSD: 2400,
    timeline: '6 - 10 Weeks',
    targetClients: 'FinTechs, Hospitals, Logistics, Hotels, E-Commerce',
    deliverables: [
      'Full Custom Web Application Architecture',
      'Role-Based Admin & User Dashboard Portals',
      'Payment Gateway Integration (MTN MoMo, Airtel, Visa/Mastercard)',
      'PostgreSQL Database Architecture & Automated Backups',
      'RESTful / GraphQL API Development',
      'Automated SMS & Email Notification Service',
      'Exportable PDF / Excel Reporting Engine',
      'Security Audit & Data Encryption Protocols',
      '6 Months Enterprise SLA & System Upgrades'
    ],
    features: [
      'Multi-role access management',
      'Real-time data synchronization',
      'Custom database topology',
      'Scalable cloud containerization',
      'Dedicated lead developer'
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't0',
    name: '',
    role: 'Managing Director & Lead Dentist',
    organization: 'Dental & Specialty Practice Partner',
    industry: 'Healthcare',
    avatar: '',
    content: 'Luminex built our dental clinic website with online booking and WhatsApp chat in under 2 weeks. Our patient no-show rate dropped by 65% and our monthly appointment bookings doubled immediately!',
    metric: '-65%',
    metricLabel: 'Patient No-Show Rate',
    rating: 5
  },
  {
    id: 't1',
    name: '',
    role: 'Chief Information Officer',
    organization: 'Regional Enterprise Hospital Network',
    industry: 'Healthcare',
    avatar: '',
    content: 'Luminex Technologies completely modernized our hospital records across regional facilities. Patient check-in wait times dropped by 72% within 60 days of launch. Their engineering precision is unmatched in the region.',
    metric: '-72%',
    metricLabel: 'Patient Wait Time',
    rating: 5
  },
  {
    id: 't2',
    name: '',
    role: 'Director of Digital Transformation',
    organization: 'Commercial Banking & Treasury Partner',
    industry: 'Banking',
    avatar: '',
    content: 'When we needed a core treasury engine capable of handling high-volume daily transactions, Luminex delivered a flawless solution. Their adherence to financial security and zero-downtime deployment set a new standard.',
    metric: '12B RWF',
    metricLabel: 'Daily Volume Processed',
    rating: 5
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-0',
    question: 'Can Luminex build affordable websites for small businesses, dental clinics, and personal portfolios?',
    answer: 'Absolutely! In addition to enterprise platforms, we offer accessible packages specifically tailored for local small businesses, dental clinics, medical practices, law offices, and personal portfolios starting from 250,000 RWF to 500,000 RWF. You receive the exact same high-quality code and design as our enterprise clients.',
    category: 'General'
  },
  {
    id: 'faq-1',
    question: 'Why should leaders choose Luminex over international freelancers or offshore agencies?',
    answer: 'Luminex Technologies combines world-class Silicon Valley engineering methodologies with deep local African presence, security, and context. Unlike freelancers, we provide full legal accountability, dedicated senior engineering teams, SLA guarantees, sovereign data protection, and ongoing support.',
    category: 'General'
  },
  {
    id: 'faq-2',
    question: 'How does Luminex handle Intellectual Property (IP) ownership?',
    answer: 'Upon final settlement, 100% of the custom source code, architecture documentation, design files, and intellectual property are fully transferred to your organization. Luminex claims no ongoing code rights.',
    category: 'Security & IP'
  },
  {
    id: 'faq-3',
    question: 'What is your typical project delivery timeline?',
    answer: 'Timeline varies by project scope: Personal Portfolios take 3–5 days, Dental & Small Business Websites take 1–2 weeks, Enterprise Portals 3–5 weeks, and custom Web Applications 6–10 weeks.',
    category: 'Process & Timeline'
  },
  {
    id: 'faq-5',
    question: 'How are project payments structured in Rwandan Francs (RWF)?',
    answer: 'We offer structured milestone-based payments: typically 30% upon signing and requirements sign-off, 40% after core sprint milestone delivery, and 30% upon final acceptance and deployment.',
    category: 'Pricing & SLAs'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'b0',
    title: 'How Dental & Medical Clinics Can Double Appointments with Online Booking',
    category: 'Digital Transformation',
    date: 'July 24, 2026',
    readTime: '4 min read',
    author: {
      name: 'Diane Uwase',
      role: 'Lead Digital Strategist',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80'
    },
    excerpt: 'Why traditional phone-call bookings cause 30%+ patient drop-off and how 24/7 web calendars and WhatsApp triggers transform local clinic revenue.',
    content: 'Patients in modern cities expect instant, hassle-free booking. Integrating automated WhatsApp reminders and online calendar booking reduces no-shows and increases new patient intake...',
    tags: ['Healthcare', 'Small Business', 'Local SEO', 'Automation']
  },
  {
    id: 'b1',
    title: 'Architecting High-Concurrency Sovereign Cloud Platforms for African Governments',
    category: 'Digital Transformation',
    date: 'July 18, 2026',
    readTime: '6 min read',
    author: {
      name: 'Patrick Nsengiyumva',
      role: 'Principal Cloud Architect',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80'
    },
    excerpt: 'How modern sovereign cloud design and Kubernetes orchestration ensure national data privacy while serving millions of citizens during high-demand permit cycles.',
    content: 'Building sovereign digital infrastructure requires balancing raw computing throughput with uncompromising regulatory data residency compliance...',
    tags: ['GovTech', 'Cloud', 'Kubernetes', 'Cybersecurity']
  }
];

export const TECH_STACK_CATEGORIES: TechStackCategory[] = [
  {
    name: 'Frontend Excellence',
    items: [
      { name: 'React', icon: 'Atom', description: 'Interactive component architecture with ultra-fast virtual DOM rendering.', level: 'Expert' },
      { name: 'Next.js', icon: 'Zap', description: 'Server-side rendering, static site generation, and optimal SEO performance.', level: 'Expert' },
      { name: 'TypeScript', icon: 'FileCode', description: 'Strict static typing eliminating runtime errors across enterprise codebases.', level: 'Expert' },
      { name: 'Vue.js', icon: 'Layers', description: 'Lightweight reactive frontend interfaces for high-density web dashboards.', level: 'Enterprise Verified' },
      { name: 'Vanilla CSS & Tailwind', icon: 'Palette', description: 'High-performance glassmorphism, micro-animations, and design token systems.', level: 'Expert' }
    ]
  },
  {
    name: 'Backend & APIs',
    items: [
      { name: 'Java & Spring Boot', icon: 'Coffee', description: 'Battle-tested high-concurrency microservices for core banking & government portals.', level: 'Expert' },
      { name: 'Node.js & Express', icon: 'Server', description: 'Event-driven asynchronous I/O powering real-time APIs and WebSockets.', level: 'Expert' },
      { name: 'Go (Golang)', icon: 'Cpu', description: 'Ultra-low latency microservices handling tens of thousands of requests per second.', level: 'Enterprise Verified' },
      { name: 'Python', icon: 'Terminal', description: 'Machine learning, data processing pipelines, and AI model orchestration.', level: 'Expert' }
    ]
  },
  {
    name: 'Databases & Storage',
    items: [
      { name: 'PostgreSQL', icon: 'Database', description: 'ACID-compliant relational database with JSONB and pgvector AI embedding support.', level: 'Expert' },
      { name: 'Supabase', icon: 'Flame', description: 'Open-source Firebase alternative with real-time subscriptions and row-level security.', level: 'Expert' },
      { name: 'Redis', icon: 'Activity', description: 'In-memory caching and session store for sub-millisecond query responses.', level: 'Expert' }
    ]
  }
];

export const INDUSTRIES: IndustrySolution[] = [
  { id: 'ind-clinic', title: 'Dental & Medical Clinics', icon: 'HeartPulse', description: '24/7 online calendar booking portals, doctor profiles, patient SMS alerts, and WhatsApp sync.', useCases: ['Dental Booking', 'Doctor Schedules', 'WhatsApp Intake'], keyBenefit: 'Reduce patient no-shows by up to 65%.' },
  { id: 'ind-personal', title: 'Personal Brands & Consultants', icon: 'GraduationCap', description: 'High-converting portfolio websites, case study showcases, and Calendly meeting schedulers.', useCases: ['Consultant Site', 'Media Decks', 'Booking Schedulers'], keyBenefit: 'Multiply high-ticket client consulting leads.' },
  { id: 'ind-gov', title: 'Government & Public Sector', icon: 'Landmark', description: 'Sovereign e-governance platforms, permit portals, and digital citizen identity workflows.', useCases: ['National e-Permits', 'Tax Revenue Portals', 'Civil Registries'], keyBenefit: 'Accelerate citizen service delivery by up to 80%.' },
  { id: 'ind-bank', title: 'Banking & Financial Services', icon: 'Building2', description: 'Core treasury engines, interbank payment bridges, Mobile Money APIs, and AI fraud prevention.', useCases: ['Core Banking APIs', 'Fraud Detection', 'Wealth Portals'], keyBenefit: 'Process transactions with sub-50ms latency.' },
  { id: 'ind-logistics', title: 'Logistics & Transportation', icon: 'Truck', description: 'GPS fleet tracking, courier route solvers, mobile proof-of-delivery, and customs documentation.', useCases: ['Courier Dispatch', 'Fleet Telemetry', 'Parcel Tracking'], keyBenefit: 'Lower last-mile fuel spend by 25-30%.' },
  { id: 'ind-const', title: 'Construction & Real Estate', icon: 'HardHat', description: 'Site equipment IoT monitoring, raw material ERPs, and 3D virtual tour property portals.', useCases: ['Construction ERP', 'Virtual 3D Tours', 'Tenant Portals'], keyBenefit: 'Prevent budget overruns and track raw inventory.' }
];

export const PROCESS_STAGES = [
  { step: '01', title: 'Discovery & Client Requirements', desc: 'We clarify your exact goals, target audience, brand aesthetic, and feature requirements during a quick online scoping call.' },
  { step: '02', title: 'Agile Design & Prototype', desc: 'Our designers craft modern glassmorphic layouts, high-res mockups, and interactive component prototypes for your approval.' },
  { step: '03', title: 'High-Performance Coding', desc: 'We engineer clean, fast, and responsive code utilizing modern frameworks, optimized images, and secure database layers.' },
  { step: '04', title: 'Quality Assurance & Testing', desc: 'We test performance across mobile, tablet, and desktop devices, verifying sub-second load times and form validation.' },
  { step: '05', title: 'Launch & Domain Setup', desc: 'We deploy your site live to cloud hosting, connect your custom domain or Gmail contact routing, and set up Google search indexing.' }
];
