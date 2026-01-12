export const productsData = {
  digisign: {
    id: 'digisign',
    name: 'DigiSign',
    tagline: 'Digital Trust & Security',
    shortDescription: 'Legally binding digital signatures, e-KYC, and blockchain-secured documents',
    longDescription: 'DigiSign is Kenya\'s first locally-hosted digital trust service, providing legally binding digital signatures, electronic identity verification, invoice authentication, and blockchain-based document security.',
    icon: 'shield-check',
    color: 'primary',
    heroImage: '/images/products/digisign-hero.jpg',
    
    challenge: {
      title: 'Traditional Document Signing is Broken',
      problems: [
        'Physical signatures require in-person meetings, causing delays',
        'Paper documents are easily forged or tampered with',
        'Manual identity verification is slow and error-prone',
        'Invoice fraud costs businesses millions annually',
        'No legal framework for digital transactions'
      ]
    },
    
    solution: {
      title: 'Secure, Legal, and Instant Digital Trust',
      benefits: [
        'Sign documents from anywhere in seconds',
        'Cryptographically sealed for tamper-evidence',
        'Automated e-KYC verification via government databases',
        'Blockchain anchoring for long-term proof',
        'Full compliance with Kenya Data Protection Act 2019'
      ]
    },
    
    features: [
      {
        title: 'Digital Signature Certificates',
        description: 'Legally binding X.509 v3 certificates for individuals and organizations',
        details: [
          'Advanced Electronic Signatures (AdES)',
          'Qualified Electronic Signatures (QES)',
          'Compatible with PDF/A, Microsoft Office, Adobe',
          'Certificate lifecycle management',
          'Multi-factor authentication'
        ],
        image: '/images/products/digisign-dsc.jpg',
        icon: 'certificate'
      },
      {
        title: 'Invoice Authentication',
        description: 'Cryptographically signed invoices for KRA e-TIMS compliance',
        details: [
          'PAdES standard implementation',
          'Automatic tax calculation',
          'KRA integration ready',
          'Fraud prevention',
          'Audit trail logging'
        ],
        image: '/images/products/digisign-invoice.jpg',
        icon: 'file-invoice'
      },
      {
        title: 'e-KYC Identity Verification',
        description: 'Automated identity verification via government databases',
        details: [
          'NIIMS (Huduma Namba) integration',
          'NTSA driving license verification',
          'OCR document scanning',
          'Facial recognition & liveness detection',
          'Real-time fraud detection'
        ],
        image: '/images/products/digisign-ekyc.jpg',
        icon: 'user-check'
      },
      {
        title: 'Blockchain Document Security',
        description: 'Immutable proof of document authenticity and integrity',
        details: [
          'Hyperledger Fabric architecture',
          'Timestamp anchoring',
          'Long-term validation (LTV)',
          'Independent verification portal',
          'Audit trail transparency'
        ],
        image: '/images/products/digisign-blockchain.jpg',
        icon: 'link'
      },
      {
        title: 'Mobile & Web Access',
        description: 'Sign and verify documents from any device',
        details: [
          'Android & iOS apps',
          'Web portal dashboard',
          'RESTful API access',
          'OAuth2/SAML SSO',
          'Offline signing capability'
        ],
        image: '/images/products/digisign-mobile.jpg',
        icon: 'mobile-alt'
      }
    ],
    
    useCases: [
      {
        title: 'Government & Public Sector',
        description: 'Secure citizen services and internal approvals',
        examples: [
          'e-Government permits and licenses',
          'Public procurement approvals',
          'Inter-agency document exchange',
          'Citizen identity verification',
          'Digital land registry'
        ],
        icon: 'landmark'
      },
      {
        title: 'Financial Services',
        description: 'Secure onboarding and transaction signing',
        examples: [
          'Customer onboarding (KYC)',
          'Loan agreements',
          'Insurance policy signing',
          'Mobile banking authentication',
          'Regulatory compliance reporting'
        ],
        icon: 'university'
      },
      {
        title: 'Legal & Compliance',
        description: 'Legally binding contracts and filings',
        examples: [
          'Contract signing and notarization',
          'Court document filing',
          'Legal correspondence',
          'Power of attorney documents',
          'Corporate resolutions'
        ],
        icon: 'gavel'
      },
      {
        title: 'CSOs & NGOs',
        description: 'Secure grant management and reporting',
        examples: [
          'Grant agreement signing',
          'Beneficiary verification',
          'Financial reporting',
          'Board resolutions',
          'Donor compliance documents'
        ],
        icon: 'hands-helping'
      },
      {
        title: 'Private Enterprises',
        description: 'Business process automation',
        examples: [
          'Employment contracts',
          'Supplier agreements',
          'Invoice processing',
          'HR document signing',
          'Board meeting minutes'
        ],
        icon: 'building'
      }
    ],
    
    integrations: [
      { name: 'NIIMS (Huduma Namba)', logo: '/images/integrations/niims.png' },
      { name: 'NTSA', logo: '/images/integrations/ntsa.png' },
      { name: 'KRA e-TIMS', logo: '/images/integrations/kra.png' },
      { name: 'eCitizen', logo: '/images/integrations/ecitizen.png' },
      { name: 'Adobe Acrobat', logo: '/images/integrations/adobe.png' },
      { name: 'Microsoft Office', logo: '/images/integrations/microsoft.png' },
      { name: 'SAP', logo: '/images/integrations/sap.png' },
      { name: 'Zoho', logo: '/images/integrations/zoho.png' }
    ],
    
    technicalSpecs: {
      security: [
        'FIPS 140-2 Level 3 HSM',
        'X.509 v3 certificates',
        'TLS 1.3 encryption',
        'AES-256 data encryption',
        'Multi-factor authentication'
      ],
      compliance: [
        'Kenya Data Protection Act 2019',
        'CAK e-Certification Guidelines',
        'ISO/IEC 27001',
        'CA/B Forum Baseline Requirements',
        'ETSI EN 319 411-1'
      ],
      architecture: [
        'Cloud-native on AWS/Azure',
        'Kubernetes orchestration',
        'Microservices design',
        'Multi-region redundancy',
        '99.95% uptime SLA'
      ]
    },
    
    pricing: {
      tiers: [
        {
          name: 'Individual',
          price: 'KES 500',
          period: 'per year',
          features: [
            '1 Digital Signature Certificate',
            'Unlimited document signing',
            'Mobile & web access',
            'Basic e-KYC verification',
            'Email support'
          ],
          cta: 'Get Started',
          popular: false
        },
        {
          name: 'Business',
          price: 'KES 2,000',
          period: 'per user/year',
          features: [
            'Organization certificates',
            'Invoice signing (e-TIMS ready)',
            'API access',
            'Advanced e-KYC (1000 checks/month)',
            'Priority support',
            'Blockchain timestamping'
          ],
          cta: 'Start Free Trial',
          popular: true
        },
        {
          name: 'Enterprise',
          price: 'Custom',
          period: 'contact sales',
          features: [
            'Unlimited certificates',
            'Dedicated HSM instance',
            'Custom integrations',
            'SLA guarantees',
            '24/7 phone support',
            'On-site training',
            'White-labeling options'
          ],
          cta: 'Contact Sales',
          popular: false
        }
      ],
      addOns: [
        { name: 'e-KYC Verification', price: 'KES 20 per check' },
        { name: 'Blockchain Timestamp', price: 'KES 5 per document' },
        { name: 'Long-term Validation', price: 'KES 10 per document' },
        { name: 'API Overage', price: 'KES 1-2 per call' }
      ]
    },
    
    faqs: [
      {
        question: 'Is DigiSign legally recognized in Kenya?',
        answer: 'Yes. DigiSign is fully compliant with Kenya\'s Data Protection Act 2019 and CAK e-Certification Guidelines. Our digital signatures have the same legal standing as handwritten signatures under Kenyan law.'
      },
      {
        question: 'How secure are DigiSign certificates?',
        answer: 'DigiSign uses FIPS 140-2 Level 3 certified Hardware Security Modules (HSMs) to protect cryptographic keys. All certificates are X.509 v3 compliant and use industry-standard encryption.'
      },
      {
        question: 'Can I use DigiSign with existing software?',
        answer: 'Yes. DigiSign works with Adobe Acrobat, Microsoft Office, and major ERP/CRM systems via our RESTful APIs.'
      },
      {
        question: 'How long does e-KYC verification take?',
        answer: 'Most e-KYC verifications complete in under 10 seconds via our integrations with NIIMS, NTSA, and other government databases.'
      },
      {
        question: 'What happens if I need to revoke a certificate?',
        answer: 'You can instantly revoke certificates through your dashboard. Revocation is published via OCSP and CRL within minutes.'
      }
    ]
  },
  
  elano: {
    id: 'elano',
    name: 'Elano',
    tagline: 'Governance & Intelligence',
    shortDescription: 'Cloud-based platform for institutional efficiency, transparency, and accountability',
    longDescription: 'Elano digitizes how organizations are structured, governed, funded, monitored, and evaluated. It unifies governance, strategy, finance, and performance management into one secure system.',
    icon: 'chart-network',
    color: 'secondary',
    heroImage: '/images/products/elano-hero.jpg',
    
    challenge: {
      title: 'Institutional Management is Fragmented and Opaque',
      problems: [
        'Organizations use disconnected tools for governance, finance, and M&E',
        'Manual reporting is time-consuming and error-prone',
        'Lack of real-time visibility into program performance',
        'Donor reporting requirements are overwhelming',
        'Compliance tracking is scattered across spreadsheets'
      ]
    },
    
    solution: {
      title: 'Unified Platform for Institutional Excellence',
      benefits: [
        'Single integrated system for all organizational functions',
        'Real-time dashboards for decision-making',
        'Automated compliance and donor reporting',
        'Complete audit trail and transparency',
        'Role-based access for secure collaboration'
      ]
    },
    
    features: [
      {
        title: 'Organization Registration',
        description: 'Complete digital registry of organizational structure',
        details: [
          'Legal entity registration',
          'Governance structure mapping',
          'Leadership and board management',
          'Regulatory compliance tracking',
          'Document repository'
        ],
        image: '/images/products/elano-registration.jpg',
        icon: 'sitemap'
      },
      {
        title: 'Strategic Planning',
        description: 'Align goals, programs, and resources',
        details: [
          'Strategic plan development',
          'Theory of Change mapping',
          'Program and project management',
          'Activity tracking',
          'Milestone monitoring'
        ],
        image: '/images/products/elano-planning.jpg',
        icon: 'tasks'
      },
      {
        title: 'MEARL Framework',
        description: 'Monitoring, Evaluation, Accountability, Research & Learning',
        details: [
          'Indicator tracking',
          'Data collection tools',
          'Performance dashboards',
          'Impact assessment',
          'Learning management'
        ],
        image: '/images/products/elano-mearl.jpg',
        icon: 'chart-line'
      },
      {
        title: 'Financial Management',
        description: 'Budgeting, tracking, and approval workflows',
        details: [
          'Budget creation and allocation',
          'Expenditure tracking',
          'Multi-currency support',
          'Approval workflows',
          'Financial reporting'
        ],
        image: '/images/products/elano-finance.jpg',
        icon: 'coins'
      },
      {
        title: 'Reporting & Analytics',
        description: 'Automated donor and compliance reporting',
        details: [
          'Customizable report templates',
          'Automated data aggregation',
          'Donor-specific formats',
          'Visual dashboards',
          'Export to Excel/PDF'
        ],
        image: '/images/products/elano-reporting.jpg',
        icon: 'file-chart-line'
      }
    ],
    
    useCases: [
      {
        title: 'Government Agencies',
        description: 'Public sector management and accountability',
        examples: [
          'Ministry strategic planning',
          'Program monitoring and evaluation',
          'Inter-agency coordination',
          'Citizen engagement tracking',
          'Compliance reporting'
        ],
        icon: 'landmark'
      },
      {
        title: 'NGOs & CSOs',
        description: 'Grant management and impact tracking',
        examples: [
          'Multi-donor program management',
          'Beneficiary tracking',
          'Impact measurement',
          'Grant compliance',
          'Board governance'
        ],
        icon: 'hands-helping'
      },
      {
        title: 'Development Partners',
        description: 'Portfolio oversight and impact assessment',
        examples: [
          'Grantee monitoring',
          'Portfolio dashboards',
          'Impact aggregation',
          'Risk management',
          'Knowledge management'
        ],
        icon: 'globe-africa'
      },
      {
        title: 'Enterprises',
        description: 'Corporate governance and project management',
        examples: [
          'Strategic execution tracking',
          'Project portfolio management',
          'Board meeting management',
          'Compliance monitoring',
          'ESG reporting'
        ],
        icon: 'building'
      }
    ],
    
    integrations: [
      { name: 'Government APIs', logo: '/images/integrations/gov.png' },
      { name: 'Donor Portals', logo: '/images/integrations/donors.png' },
      { name: 'QuickBooks', logo: '/images/integrations/quickbooks.png' },
      { name: 'Microsoft 365', logo: '/images/integrations/microsoft.png' },
      { name: 'Google Workspace', logo: '/images/integrations/google.png' },
      { name: 'Tableau', logo: '/images/integrations/tableau.png' }
    ],
    
    pricing: {
      tiers: [
        {
          name: 'Basic',
          price: 'KES 50,000',
          period: 'per year',
          features: [
            'Up to 10 users',
            'Organization registration',
            'Basic M&E tools',
            'Standard reporting',
            'Email support'
          ],
          cta: 'Get Started',
          popular: false
        },
        {
          name: 'Professional',
          price: 'KES 150,000',
          period: 'per year',
          features: [
            'Up to 50 users',
            'Full MEARL framework',
            'Financial management',
            'Custom workflows',
            'Priority support',
            'API access'
          ],
          cta: 'Start Free Trial',
          popular: true
        },
        {
          name: 'Enterprise',
          price: 'Custom',
          period: 'contact sales',
          features: [
            'Unlimited users',
            'Multi-organization support',
            'Advanced analytics',
            'Custom integrations',
            'Dedicated account manager',
            'On-premise deployment option'
          ],
          cta: 'Contact Sales',
          popular: false
        }
      ]
    }
  },
  
  prezio: {
    id: 'prezio',
    name: 'Prezio',
    tagline: 'Business Management Made Simple',
    shortDescription: 'Modern accounting, invoicing, and client management for SMEs',
    longDescription: 'Prezio is a web-based accounting and business management platform designed for individuals, freelancers, and SMEs. Think QuickBooks, but built for the Kenyan market.',
    icon: 'calculator',
    color: 'accent',
    heroImage: '/images/products/prezio-hero.jpg',
    
    challenge: {
      title: 'Small Businesses Struggle with Financial Management',
      problems: [
        'Accounting software is expensive and complex',
        'Manual invoicing is time-consuming',
        'Tracking clients and payments is chaotic',
        'Tax compliance is confusing',
        'No professional presentation of business documents'
      ]
    },
    
    solution: {
      title: 'Simple, Affordable, Professional',
      benefits: [
        'Create professional invoices in minutes',
        'Track all clients in one place',
        'Automatic tax calculations',
        'Multi-currency support',
        'Export reports for accountants'
      ]
    },
    
    features: [
      {
        title: 'Quotation & Invoice Creation',
        description: 'Professional documents in minutes',
        details: [
          'Customizable templates',
          'Your company branding',
          'Automatic calculations',
          'Tax and discount handling',
          'PDF generation',
          'QR code sharing'
        ],
        image: '/images/products/prezio-invoice.jpg',
        icon: 'file-invoice-dollar'
      },
      {
        title: 'Client Management',
        description: 'Keep all customer information organized',
        details: [
          'Client database',
          'Contact information',
          'Transaction history',
          'Document linking',
          'Quick search and filtering'
        ],
        image: '/images/products/prezio-clients.jpg',
        icon: 'users'
      },
      {
        title: 'Financial Tracking',
        description: 'Stay on top of your business finances',
        details: [
          'Income and expense tracking',
          'Payment status monitoring',
          'Financial reports',
          'Profit and loss statements',
          'Excel export for accountants'
        ],
        image: '/images/products/prezio-finance.jpg',
        icon: 'chart-pie'
      },
      {
        title: 'Multi-Currency Support',
        description: 'Work with clients across borders',
        details: [
          'KES, USD, EUR, UGX, TZS',
          'Automatic conversion',
          'Exchange rate updates',
          'Currency-specific formatting'
        ],
        image: '/images/products/prezio-currency.jpg',
        icon: 'exchange-alt'
      }
    ],
    
    useCases: [
      {
        title: 'Freelancers',
        description: 'Get paid faster with professional invoices',
        examples: [
          'Service quotations',
          'Time-based billing',
          'Client proposals',
          'Payment tracking',
          'Tax preparation'
        ],
        icon: 'laptop'
      },
      {
        title: 'SMEs',
        description: 'Manage finances without hiring an accountant',
        examples: [
          'Product and service invoicing',
          'Supplier management',
          'Cash flow tracking',
          'Sales reports',
          'VAT compliance'
        ],
        icon: 'store'
      },
      {
        title: 'Consultants',
        description: 'Professional service delivery',
        examples: [
          'Project proposals',
          'Milestone billing',
          'Client communications',
          'Service documentation',
          'Performance tracking'
        ],
        icon: 'briefcase'
      },
      {
        title: 'Startups',
        description: 'Scale your business affordably',
        examples: [
          'Investor-ready financials',
          'Revenue tracking',
          'Customer analytics',
          'Growth reporting',
          'Team collaboration'
        ],
        icon: 'rocket'
      }
    ],
    
    pricing: {
      tiers: [
        {
          name: 'Free',
          price: 'KES 0',
          period: 'forever',
          features: [
            'Up to 10 invoices/month',
            'Basic client management',
            'Standard templates',
            'PDF export',
            'Email support'
          ],
          cta: 'Start Free',
          popular: false
        },
        {
          name: 'Professional',
          price: 'KES 1,500',
          period: 'per month',
          features: [
            'Unlimited invoices',
            'Custom branding',
            'All currency support',
            'Financial reports',
            'Priority support',
            'API access'
          ],
          cta: 'Start Free Trial',
          popular: true
        },
        {
          name: 'Business',
          price: 'KES 5,000',
          period: 'per month',
          features: [
            'Multi-user access',
            'Advanced analytics',
            'Inventory management',
            'Custom integrations',
            'Dedicated support',
            'White-label options'
          ],
          cta: 'Contact Sales',
          popular: false
        }
      ]
    }
  }
};