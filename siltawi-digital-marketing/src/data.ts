/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Service, PortfolioItem, TeamMember, Testimonial, CompanyStat, FAQ } from './types';

export const SERVICES: Service[] = [
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    category: 'marketing',
    brief: 'Drive targeted traffic, run high-converting campaigns, and scale your brand with custom marketing solutions.',
    description: 'We develop results-oriented digital marketing campaigns tailored to your specific goals, using Facebook, Instagram, Google Ads, and optimized email funnels to generate leads and high-quality conversions.',
    iconName: 'Megaphone',
    features: [
      'Social Media Marketing Strategy',
      'Facebook & Instagram Ads Management',
      'Google Search & Display Ads',
      'Targeted Email Marketing Funnels',
      'Creator & Influencer Partnerships'
    ],
    subServices: [
      { name: 'Social Media Marketing', description: 'Establish a strong, consistent social media presence that resonates with your core audience.' },
      { name: 'Facebook & Instagram Ads', description: 'Hyper-targeted lead generation and brand awareness campaigns with maximum ROI.' },
      { name: 'Google Ads Management', description: 'Capture high-intent searches when buyers look for your products or services.' },
      { name: 'Email Marketing', description: 'Nurture leads, share newsletters, and automate responses to increase lifetime value.' },
      { name: 'Influencer Marketing', description: 'Partner with prominent creative voices in Ethiopia to amplify your reach.' }
    ]
  },
  {
    id: 'website-development',
    title: 'Website Development',
    category: 'webdev',
    brief: 'Stunning, fast, and secure websites engineered to capture leads and showcase your business products.',
    description: 'Your website is your 24/7 digital storefront. We design and build ultra-responsive, visually captivating, and security-hardened websites using modern frameworks to provide top-tier user experiences.',
    iconName: 'Globe',
    features: [
      'Bespoke Company Profile Websites',
      'Advanced E-commerce Platforms',
      'High-Conversion Landing Pages',
      'Creative Portfolios for Professionals',
      'Full Site Maintenance & Performance Audits'
    ],
    subServices: [
      { name: 'Company Profile Websites', description: 'Highly professional websites showcasing your company structure, vision, and offerings.' },
      { name: 'E-commerce Solutions', description: 'Secure shopping carts, local/international payment gateways (e.g., Chapa), and simple product catalogs.' },
      { name: 'Landing Pages', description: 'High-performance, single-focus landing pages designed for specific marketing campaigns.' },
      { name: 'Portfolio Websites', description: 'Elegant grids and pages for creative individuals, architects, or consultants.' },
      { name: 'Website Maintenance', description: 'Continuous updates, security checks, and optimized hosting so you never stay offline.' }
    ]
  },
  {
    id: 'branding-design',
    title: 'Branding & Design',
    category: 'branding',
    brief: 'Distinct visual identities, logos, and digital designs that leave an unforgettable impression.',
    description: 'We align visual aesthetics with business goals. From beautiful logos to complete corporate branding, our graphic design team shapes how your clients perceive and connect with your business.',
    iconName: 'Palette',
    features: [
      'Custom Logo & Icon Design',
      'Standard Brand Identity Guidelines',
      'Marketing & Print Collaterals',
      'High-Fidelity UI/UX Prototyping',
      'Digital Banner Ads & Content Graphics'
    ],
    subServices: [
      { name: 'Logo Design', description: 'A timeless, symbolic mark that encapsulates your brand story and works in all dimensions.' },
      { name: 'Brand Identity Design', description: 'Color palettes, font selections, and assets that keep your brand unified across all touchpoints.' },
      { name: 'Marketing Materials', description: 'Brochures, company profiles, banners, business cards, and digital presentation slide decks.' },
      { name: 'UI/UX Design', description: 'User-centered web and mobile mockups that blend gorgeous form with intuitive function.' }
    ]
  },
  {
    id: 'content-creation',
    title: 'Content Creation',
    category: 'content',
    brief: 'High-production photos, engaging video content, and copy that tells your unique story.',
    description: 'In a crowded feeds world, dynamic content rules. Our multi-media artists create beautiful photography, videos, and copywriting designed to grab attention and build community trust.',
    iconName: 'Video',
    features: [
      'Production-Ready Video ads',
      'Professional Brand Photography',
      'High-Engagement Social Creative Content',
      'Direct-Response Copywriting',
      'Corporate Interviews & Showreels'
    ],
    subServices: [
      { name: 'Social Media Content', description: 'Daily/weekly high-quality copy, graphic designs, and reels to keep your community active.' },
      { name: 'Video Production', description: 'Attention-grabbing TikToks, Reels, YouTube series, and television ads.' },
      { name: 'Photography', description: 'Crisp corporate headshots, product highlights, workspace features, and events coverage.' },
      { name: 'Copywriting', description: 'Persuasive website text, blog posts, and ad copy optimized to convert readers to active buyers.' }
    ]
  },
  {
    id: 'seo-services',
    title: 'SEO Services',
    category: 'seo',
    brief: 'Rank higher on Google, capture organic search traffic, and establish authority in your sector.',
    description: 'We optimize your entire web footprint. By building solid technical structures and highly valuable content, we help your business rank high for key local and global search terms.',
    iconName: 'TrendingUp',
    features: [
      'In-Depth SEO Keyword Architecture',
      'On-Page Optimization & Structure',
      'Technical SEO Auditing',
      'Local SEO (Google Business Profile)',
      'High-Authority Link Profile Building'
    ],
    subServices: [
      { name: 'On-Page SEO', description: 'Structuring title tags, meta descriptions, headings, and internal links for perfect search reading.' },
      { name: 'Technical SEO', description: 'Accelerate site load times, improve mobile accessibility, resolve index errors, and submit sitemaps.' },
      { name: 'Local SEO', description: 'Optimizing your Google Business profile so physical clients can find you easily across Addis Ababa.' },
      { name: 'SEO Audits', description: 'In-depth diagnostic analysis explaining what holds your site back from ranking first.' }
    ]
  }
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'habesha-brew-coffee',
    title: 'Abyssinia Golden Roast Brand Strategy & Web',
    category: 'webdev',
    categoryLabel: 'Website & Branding',
    client: 'Abyssinia Golden Roast Coffee',
    year: '2025',
    summary: 'A complete brand overhaul and e-commerce platform for an Ethiopian premium coffee exporter.',
    description: 'We redesigned Abyssinia Golden Roast’s logo, designed a warm, earthy brand identity guide, and built or developed a fast Gatsby e-commerce portal coupled with an integrated shipping tracker to serve global bulk orders.',
    imageUrl: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&q=80&w=800',
    stats: { label: 'Online Bulk Queries Raised', value: '+140%' },
    tags: ['E-Commerce', 'Branding', 'Next.js', 'Premium UI']
  },
  {
    id: 'zola-real-estate',
    title: 'Zola Modern Apartments Digital Campaign',
    category: 'marketing',
    categoryLabel: 'Digital Advertising',
    client: 'Zola Real Estate Addis',
    year: '2024',
    summary: 'A targeted lead-generation social ad strategy resulting in the booking of luxury duplex units.',
    description: 'By crafting gorgeous video walkthroughs, targeting upper-middle-class demographics in major urban centers, and managing high-performance Facebook/Instagram lead forms, we filled the client pipeline with highly qualified buyers.',
    imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800',
    stats: { label: 'Qualified Local Leads', value: '450+' },
    tags: ['Facebook Ads', 'Video Showreels', 'Lead Generation']
  },
  {
    id: 'sheger-bites-delivery',
    title: 'Sheger Bites Brand Identity & Copywriting',
    category: 'branding',
    categoryLabel: 'Corporate Identity',
    client: 'Sheger Bites Delivery',
    year: '2023',
    summary: 'Vibrant, playful visual identity for Addis Ababa’s fastest organic food-delivery service.',
    description: 'We created an energetic color scheme, a customized friendly mascot logo, modern custom takeout boxes layout, and catchy corporate copywriting guidelines that established them as a trendy urban favorite.',
    imageUrl: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=800',
    stats: { label: 'Brand Interaction Scale', value: '10x' },
    tags: ['Logo Design', 'Packaging Layout', 'Brand Voice']
  },
  {
    id: 'tana-tech',
    title: 'Tana Tech Holdings Corporate Platform',
    category: 'seo',
    categoryLabel: 'Web Dev & Search Rank',
    client: 'Tana Technologies plc',
    year: '2024',
    summary: 'Fully responsive cloud software showcase optimized for search visibility.',
    description: 'We designed a slick glassmorphic corporate profile website for Tana Tech and implemented comprehensive on-page and technical SEO, allowing them to rank page-one for "Enterprise Cloud Solutions Addis".',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    stats: { label: 'Organic Site Traffic', value: '+300%' },
    tags: ['Corporate Web', 'Technical SEO', 'Local Search']
  },
  {
    id: 'kuriftu-lounge-promo',
    title: 'High-Impact Promotional Multi-Media',
    category: 'content',
    categoryLabel: 'Video & Media Production',
    client: 'Kuriftu Lounge Addis',
    year: '2025',
    summary: 'A series of high-definition reels and promotional photography highlighting their rooftop experience.',
    description: 'We deployed our professional creative videography crew to capture the atmosphere, cocktails, and cultural performances, compiling a viral social video campaign that garnered huge regional views.',
    imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800',
    stats: { label: 'Organic Reels Views', value: '250K+' },
    tags: ['Video Prod', 'Photography', 'Social Engagement']
  },
  {
    id: 'awash-finance',
    title: 'Awash Micro-Investment Landing Page UX',
    category: 'webdev',
    categoryLabel: 'UI/UX Design & Landing Web',
    client: 'Awash Investment Partners',
    year: '2024',
    summary: 'Mobile-first onboarding landing page for a new consumer saving application.',
    description: 'We designed the layout focusing on responsive ease of access for local customers, ensuring low data footprint overhead, clean icons, and a highly streamlined signup funnel.',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    stats: { label: 'Registration Conversion Rate', value: '18.4%' },
    tags: ['UI/UX Design', 'Landing Setup', 'Mobile Optimization']
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'ceo-founder',
    name: 'Henok Tsegaye',
    role: 'CEO & Founder',
    department: 'Executive Leadership',
    bio: 'Leads company strategy and business development. Passionate about empowering local startups through cutting-edge digital expansion.',
    imageUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600',
    socials: {
      linkedin: 'https://linkedin.com/sample',
      twitter: 'https://twitter.com/sample',
      email: 'henok@siltawi.com'
    }
  },
  {
    id: 'marketing-manager',
    name: 'Helina Kebede',
    role: 'Marketing Manager',
    department: 'Campaigns & Accounts',
    bio: 'Oversees complex marketing campaigns, paid ad targeting, and client program success with metrics-focused strategy.',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600',
    socials: {
      linkedin: 'https://linkedin.com/sample',
      instagram: 'https://instagram.com/sample',
      email: 'helina@siltawi.com'
    }
  },
  {
    id: 'web-dev-lead',
    name: 'Yared Solomon',
    role: 'Lead Web Developer',
    department: 'Development Team',
    bio: 'Crafts fast, secure, and responsive web applications. Expert in TypeScript, React, and e-commerce database API setups.',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600',
    socials: {
      linkedin: 'https://linkedin.com/sample',
      twitter: 'https://twitter.com/sample',
      email: 'yared@siltawi.com'
    }
  },
  {
    id: 'graphic-dev-lead',
    name: 'Fasika Tesfaye',
    role: 'Senior Brand Designer',
    department: 'Creative Design Team',
    bio: 'Transforms abstract ideas into striking corporate visuals. Specialist in clean minimalist logos and packaging design.',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600',
    socials: {
      linkedin: 'https://linkedin.com/sample',
      instagram: 'https://instagram.com/sample',
      email: 'fasika@siltawi.com'
    }
  },
  {
    id: 'content-creator-lead',
    name: 'Abenezer Girma',
    role: 'Multi-Media Producer',
    department: 'Content Creation Team',
    bio: 'Captures and delivers vivid high-definition brand documentaries, viral micro-videos, and creative corporate photography.',
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=600',
    socials: {
      instagram: 'https://instagram.com/sample',
      twitter: 'https://twitter.com/sample',
      email: 'abenezer@siltawi.com'
    }
  },
  {
    id: 'seo-specialist',
    name: 'Saron Daniel',
    role: 'Search Engine Specialist',
    department: 'SEO Team',
    bio: 'Optimizes web setups to dominate organic research engines. Expert in local maps discoverability and detailed core audits.',
    imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=600',
    socials: {
      linkedin: 'https://linkedin.com/sample',
      email: 'saron@siltawi.com'
    }
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'testimonial-1',
    quote: 'Siltawi helped us increase our online sales by 200% within six months of taking over our digital marketing structure and e-commerce redesign.',
    author: 'Michael Bekele',
    role: 'Managing Director & Founder',
    company: 'Abyssinia Roasted Beans',
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 'testimonial-2',
    quote: 'Their modern website design and data-driven marketing services completely transformed our brand presence, bringing in high-value local property clients.',
    author: 'Zola Birru',
    role: 'CEO & Founder',
    company: 'Zola Real Estate Group',
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 'testimonial-3',
    quote: 'Fantastic team structure. Communication was incredibly transparent, project delivery was extremely rapid, and their marketing insights added genuine direct value.',
    author: 'Dr. Semeneh Alene',
    role: 'General Manager',
    company: 'City Center Dental Clinic',
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 'testimonial-4',
    quote: 'The branding, custom social media templates, and outstanding video production they launched for our launch received amazing reviews and high active views.',
    author: 'Lydia Daniel',
    role: 'Co-Founder',
    company: 'Sheger Bites Delivery',
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200'
  }
];

export const COMPANY_STATS: CompanyStat[] = [
  {
    id: 'projects-completed',
    label: 'Projects Completed',
    value: 100,
    suffix: '+',
    description: 'Successful regional and international corporate operations',
    iconName: 'CheckCircle'
  },
  {
    id: 'active-clients',
    label: 'Active Clients',
    value: 50,
    suffix: '+',
    description: 'Retained businesses partnering for constant expansion',
    iconName: 'Users'
  },
  {
    id: 'team-members',
    label: 'Team Members',
    value: 15,
    suffix: '',
    description: 'Talented designers, builders, and advertisers based in Ethiopia',
    iconName: 'Award'
  },
  {
    id: 'years-experience',
    label: 'Years of Experience',
    value: 3,
    suffix: '+',
    description: 'Providing outstanding technical and advertising value since 2023',
    iconName: 'Calendar'
  },
  {
    id: 'satisfaction-rate',
    label: 'Client Satisfaction',
    value: 95,
    suffix: '%',
    description: 'Our top success priority is keeping our partnerships satisfied',
    iconName: 'Heart'
  }
];

export const FAQS: FAQ[] = [
  {
    id: 'faq-1',
    question: 'How long does a standard Company Profile website project take to deliver?',
    answer: 'A standard custom-designed corporate company profile website is typically fully finalized and delivered in 10 to 14 business days. This includes brand alignment, copy structure, responsive mobile testing, and final hosting deployment.'
  },
  {
    id: 'faq-2',
    question: 'Do you configure local e-commerce payment integrations like Chapa or CBE Birr?',
    answer: 'Yes! Our web development team integrates local high-tier Ethiopian payment APIs (such as Chapa, CBE Birr, Telebirr) alongside international structures like Stripe or PayPal for clients seeking cross-border setups.'
  },
  {
    id: 'faq-3',
    question: 'How do you measure digital advertising campaign performance and success?',
    answer: 'We operate with full data transparency. Siltawi provides straightforward bi-weekly and monthly analytical reports mapping exact ad spends, clicks, lead-generation acquisition costs, and estimated conversion returns.'
  },
  {
    id: 'faq-4',
    question: 'Can you work with startups and small local businesses outside of Addis Ababa?',
    answer: 'Absolutely. While our creative studio is located in Addis Ababa, Ethiopia, we collaborate seamlessly with regional startups, non-profits, and established enterprises throughout East Africa via virtual alignment boards.'
  },
  {
    id: 'faq-5',
    question: 'What happens after completing website delivery? Is ongoing support provided?',
    answer: 'Every web contract features a standard 30-day post-launch support guarantee to manage fine-tuning. We also offer highly affordable ongoing maintenance agreements for security management and content uploads.'
  }
];
