import {
  Smartphone,
  Globe,
  TrendingUp,
  GraduationCap,
  FileText,
  BookOpen,
  Cpu,
  Shield,
  Users,
  ClipboardCheck,
  DollarSign,
  Layers,
  MapPin,
  Mail,
  Phone,
  Linkedin,
  Instagram,
  FileSearch,
  Code2,
  Share2,
  Headset,
} from 'lucide-react';

/** Site-wide identity (used in copy + JSON-LD) */
export const SITE = {
  name: 'TechVistar',
  url: 'https://techvistar.com',
  description:
    'TechVistar provides software development, cloud-ready web and mobile applications, digital marketing, academic project support, and technical documentation for businesses and institutions in India and remotely.',
} as const;

// Navigation — About is a dedicated route; other anchors target home sections via /#…
export const NAV_LINKS = [
  { label: 'About', href: '/about' },
  { label: 'Internship', href: '/#internship' },
  { label: 'Services', href: '/#services' },
  { label: 'Process', href: '/#process' },
  { label: 'Work', href: '/#projects' },
  { label: 'Contact', href: '/#contact' },
] as const;

/** Homepage announcement ticker (shown below navbar) */
export const INTERNSHIP_MARQUEE_SEGMENTS = [
  'New batch open — 3-Month AI & Python Internship',
  'Limited seats — register now',
  '1 hour daily training · Guest lectures · Certificate · Real-time projects',
  'Call +91 9573157982 · techvistar.com',
] as const;

/** 3-month program — aligned with public internship poster */
export const INTERNSHIP_PROGRAM = {
  eyebrow: 'Professional internship',
  title: '3-Month AI & Python',
  titleAccent: 'Internship Program',
  subtitle:
    'A structured, twelve-week pathway from Python fundamentals through applied AI and generative systems—delivered with weekly learning outcomes, guided practice, and a capstone project suitable for your portfolio.',
  summaryStats: [
    { label: 'Duration', value: '3 months' },
    { label: 'Curriculum', value: '12 weeks' },
    { label: 'Daily cadence', value: '~1 hour' },
    { label: 'Format', value: 'Live + projects' },
  ],
  phases: [
    {
      key: 'phase-1',
      monthLabel: 'Month 1',
      title: 'Python programming foundation',
      weeks: [
        { label: 'Week 1', detail: 'Python setup, variables, and data types' },
        { label: 'Week 2', detail: 'Input handling and operators' },
        { label: 'Week 3', detail: 'Control flow statements' },
        { label: 'Week 4', detail: 'Functions and parameters' },
      ],
    },
    {
      key: 'phase-2',
      monthLabel: 'Month 2',
      title: 'Advanced Python & object-oriented programming',
      weeks: [
        { label: 'Week 5', detail: 'Classes, methods, and modules' },
        { label: 'Week 6', detail: 'Object-oriented programming concepts' },
        { label: 'Week 7', detail: 'File handling and exception handling' },
        { label: 'Week 8', detail: 'Introduction to Artificial Intelligence' },
      ],
    },
    {
      key: 'phase-3',
      monthLabel: 'Month 3',
      title: 'Generative AI & final project',
      weeks: [
        { label: 'Week 9', detail: 'Large Language Models (LLMs) and RAG' },
        { label: 'Week 10', detail: 'Transformers, embeddings, and vector databases' },
        { label: 'Week 11', detail: 'Fine-tuning and prompt engineering' },
        { label: 'Week 12', detail: 'Final industry-level project development' },
      ],
    },
  ],
  highlights: [
    '1 hour daily structured training',
    'Guest lectures on alternate weeks',
    'Internship certificate on completion',
    'Real-time project experience',
  ],
  audience: [
    'B.Tech / degree students',
    'Diploma students',
    'Final-year students',
    'Beginners interested in AI',
    'Job seekers switching to tech',
  ],
  cta: {
    urgent: 'Limited seats available — register now',
    phoneDisplay: '+91 9573157982',
    phoneTel: '+919573157982',
    website: 'https://www.techvistar.com',
  },
} as const;

export const HERO_COPY = {
  /** Line 1 + accent word + line 2 — Voxvertex-style two-line headline */
  headlineLine1: 'Making',
  headlineAccent: 'Technology',
  headlineLine2: 'Work for You',
  /** Single subline under H1 */
  tagline:
    'TechVistar designs and delivers software, integrations, and documentation—structured for teams that need accountable delivery.',
  ctaPrimary: 'Get in touch',
  ctaSecondary: 'View services',
  locationLine: 'Hyderabad · Remote worldwide',
} as const;

export const ABOUT_COPY = {
  tag: 'About us',
  /** Short line under the brand — plain language */
  subtitle: 'Technology services: software delivery, documentation, and support—structured for real-world operations.',
  /** One paragraph only — who we are */
  summary:
    'We are a Hyderabad-based team helping startups, SMEs, and academic clients ship digital products. Work is scoped in writing, demonstrated on a regular cadence, and signed off before go-live—so you always know what is included.',
  mission: {
    title: 'Mission',
    text: 'Ship secure, maintainable software and clear guidance so every technology investment is understandable and auditable.',
  },
  vision: {
    title: 'Vision',
    text: 'Be the partner teams call when they need dependable delivery—not just ideas—across applications and technical documentation.',
  },
  locationLine: 'Hyderabad, Telangana, India',
  closing:
    'We favour maintainability, knowledge transfer, and steady communication over one-off drops and undocumented handoffs.',
} as const;

/** Dedicated About page — extended copy */
export const ABOUT_PAGE = {
  hero: {
    eyebrow: 'Company',
    title: 'About TechVistar',
    lead:
      'We are a technology services team based in Hyderabad, helping organizations ship software, documentation, and digital campaigns with clear scope, accountable delivery, and documentation you can rely on after go-live.',
  },
  overview: {
    title: 'Who we are',
    paragraphs: [
      ABOUT_COPY.summary,
      'Across engagements we align engineering practices with your operational reality: security and testing expectations, stakeholder review cycles, and handover artefacts are agreed in writing—not assumed. That keeps delivery predictable for your teams and auditable for your stakeholders.',
    ] as const,
  },
  focusAreas: [
    {
      title: 'Software & platforms',
      description:
        'Web and mobile applications, APIs, and integrations—scoped with milestones, demos on a regular cadence, and acceptance criteria before release.',
    },
    {
      title: 'Documentation & knowledge transfer',
      description:
        'SRS, architecture notes, API docs, and runbooks maintained alongside the product so operations and future development are not blocked by tacit knowledge.',
    },
    {
      title: 'Marketing & digital presence',
      description:
        'Search, content, and analytics tied to measurable goals so campaigns connect to funnel and reporting—not vanity metrics alone.',
    },
    {
      title: 'Academic & research support',
      description:
        'Structured help for project builds and manuscript-adjacent work: clear problem statements, reproducible artefacts where applicable, and submission-ready packaging.',
    },
  ] as const,
  principles: [
    'Scope, assumptions, and exclusions are captured before build-heavy work begins; changes flow through an agreed change path.',
    'You see working software on a predictable rhythm—so there are no surprise “big reveals” at the deadline.',
    'Security, testing, and observability are matched to the sensitivity of your data and deployment environment.',
    'Handover includes what your team needs to operate and extend the system: docs, access patterns, and transition checkpoints.',
  ] as const,
  principlesIntro:
    'These principles show up in statements of work, demo agendas, and sign-off—so delivery stays understandable at every stage.',
} as const;

/** Service catalog — aligned with JSON-LD OfferCatalog */
export const SERVICES = [
  {
    icon: Smartphone,
    title: 'Mobile application development',
    description:
      'Native and cross-platform mobile apps for Android and iOS: discovery, UX implementation, API integration, store submission, and release management.',
    deliverables: ['Kotlin / Swift / Flutter', 'REST & GraphQL APIs', 'CI-friendly builds', 'Store listing support'],
  },
  {
    icon: Globe,
    title: 'Web applications & platforms',
    description:
      'Responsive web apps and internal tools: single-page applications, SSR where appropriate, role-based access, and integration with your identity and data stack.',
    deliverables: ['React / modern stacks', 'APIs & microservices fit', 'Cloud-ready deployment', 'Performance & SEO basics'],
  },
  {
    icon: TrendingUp,
    title: 'Digital marketing & brand presence',
    description:
      'Search, content, social, and analytics aligned to your funnel—so traffic and campaigns connect to measurable business goals.',
    deliverables: ['SEO & content', 'Paid & organic social', 'Analytics setup', 'Brand-consistent assets'],
  },
  {
    icon: GraduationCap,
    title: 'Academic & industry projects',
    description:
      'Structured support for final-year and research-led builds: problem definition, implementation, evaluation, and viva-ready documentation.',
    deliverables: ['Scope & ethics alignment', 'Implementation support', 'Results & reporting', 'Demo preparation'],
  },
  {
    icon: FileText,
    title: 'Research & manuscript support',
    description:
      'Formatting, reproducibility of experiments where applicable, illustration of results, and submission-ready packaging for conferences and journals.',
    deliverables: ['LaTeX / Word workflows', 'Figure & citation hygiene', 'Reviewer response support', 'Code artifacts'],
  },
  {
    icon: BookOpen,
    title: 'Technical documentation',
    description:
      'SRS, architecture decision records, API docs, user manuals, and onboarding guides—maintained alongside the product lifecycle.',
    deliverables: ['SRS & HLD/LLD', 'API & SDK docs', 'Ops runbooks', 'Release notes'],
  },
] as const;

export const SECTION_SERVICES = {
  tag: 'Our services',
  title: 'Solutions that move your product',
  highlight: 'from idea to production',
  description:
    'We design and build software, integrations, and documentation with clear scope—so teams know what ships, when, and how it is supported.',
  cta: 'Request a scoped proposal or SOW discussion',
} as const;

/** Delivery process — homepage process block */
export const SECTION_PROCESS = {
  tag: 'Delivery process',
  title: 'Structured, professional',
  highlight: 'delivery',
  description:
    'A four-phase framework with defined outputs, documented assumptions, and accountable ownership at each step—so delivery stays predictable as scope and teams grow.',
} as const;

export const PROCESS_PILLARS = ['Structured', 'Professional', 'Scalable'] as const;

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Discovery & scope',
    description:
      'We align on goals, constraints, and success criteria—then produce a written scope, milestone plan, and risk register.',
    icon: FileSearch,
    deliverables: [
      'Scope, milestones, and assumptions in writing',
      'Risk register and dependency map',
      'Agreed demo and reporting cadence',
    ] as const,
  },
  {
    step: '02',
    title: 'Design & build',
    description:
      'Iterative delivery with demos, code review, and test evidence. You see progress on a steady cadence—not a black box.',
    icon: Code2,
    deliverables: [
      'Incremental builds with review checkpoints',
      'Automated tests matched to critical paths',
      'Traceable backlog and release notes',
    ] as const,
  },
  {
    step: '03',
    title: 'Integration & handover',
    description:
      'Deployment to your environments, runbooks, and knowledge transfer so your team can operate and extend what we ship.',
    icon: Share2,
    deliverables: [
      'Environment-specific deploy and rollback paths',
      'Runbooks and operational checklists',
      'Handover sessions and documentation',
    ] as const,
  },
  {
    step: '04',
    title: 'Support & optimization',
    description:
      'Post-launch fixes, minor enhancements, and performance tuning—with SLAs and escalation paths you can rely on.',
    icon: Headset,
    deliverables: [
      'Defined response times and escalation',
      'Triage for defects vs enhancements',
      'Ongoing performance and cost visibility',
    ] as const,
  },
] as const;

/** Benefits grid — mirrors “Key benefits” style landing pages */
export const SECTION_BENEFITS = {
  tag: 'Benefits',
  title: 'Why teams choose',
  highlight: 'structured delivery',
  description:
    'Predictable delivery comes from explicit scope, disciplined engineering practice, and communication your stakeholders can audit—so timelines and outcomes stay aligned from kickoff to handover.',
} as const;

export const BENEFITS = [
  {
    icon: Cpu,
    title: 'Engineering discipline',
    description:
      'Version control, environments that mirror production, and repeatable releases—so deploys are boring in the right way.',
  },
  {
    icon: Shield,
    title: 'Security & reliability',
    description:
      'Threat-aware design, sensible defaults, and testing matched to your risk profile and compliance needs.',
  },
  {
    icon: Users,
    title: 'Stakeholder alignment',
    description:
      'Shared visibility on backlog, demos, and documentation so everyone agrees on what “done” means.',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality & handover',
    description:
      'Test evidence, runbooks, and training so your internal team can own the system after go-live.',
  },
  {
    icon: DollarSign,
    title: 'Transparent commercial terms',
    description:
      'Effort-based or milestone billing with written assumptions—no surprise line items without prior approval.',
  },
  {
    icon: Layers,
    title: 'Full-stack continuity',
    description:
      'One partner for UI, APIs, data, and docs reduces integration risk and speeds root-cause resolution.',
  },
] as const;

export const SECTION_PROJECTS = {
  tag: 'Case highlights',
  title: 'Representative work',
  highlight: 'engineering samples',
  description:
    'Route, ecosystem, translation, and finance samples sit alongside other ML/NLP builds—illustrative of how we scope, build, and hand over production-minded software. Details anonymized where required.',
} as const;

export const TESTIMONIALS = [
  {
    name: 'Surender G.',
    role: 'Founder',
    company: 'Early-stage product company',
    content:
      'TechVistar translated an ambiguous brief into a shippable mobile release. Written scope, demo cadence, and documentation made stakeholder alignment straightforward from sprint one to store submission.',
    rating: 5,
  },
  {
    name: 'Shailaja Swamy',
    role: 'Marketing lead',
    company: 'B2B services firm',
    content:
      'Our web rebuild and analytics instrumentation finally gave leadership a clear view of conversion paths. Communication was crisp, milestones landed on time, and handover did not leave us dependent on tacit knowledge.',
    rating: 5,
  },
  {
    name: 'Pavan Reddy',
    role: 'Graduate student',
    company: 'Engineering programme',
    content:
      'Structured support on my capstone—from problem statement through implementation and final report—meant I could defend the work with evidence, not slides alone.',
    rating: 5,
  },
  {
    name: 'Rajesh G.',
    role: 'Owner',
    company: 'Local services business',
    content:
      'A pragmatic site and enquiry funnel our front desk can update without calling a developer. Training and written handover matched what we were promised at kickoff.',
    rating: 5,
  },
  {
    name: 'Ananya Krishnan',
    role: 'Product manager',
    company: 'Health-tech SaaS',
    content:
      'They integrated with our existing backlog and release train instead of inventing a parallel process. API work, QA notes, and release checklists were audit-ready for our ISO prep.',
    rating: 5,
  },
  {
    name: 'Vikram S.',
    role: 'CTO',
    company: 'Logistics scale-up',
    content:
      'We needed a partner who could read our runbooks and improve them. Delivery included environment-specific deploy paths and rollback steps—not just “it works on my machine.”',
    rating: 5,
  },
  {
    name: 'Meera Iyer',
    role: 'Operations director',
    company: 'Professional services group',
    content:
      'Internal tooling for approvals and reporting replaced a fragile spreadsheet stack. Change requests were quoted before build, which kept finance and IT aligned.',
    rating: 5,
  },
  {
    name: 'Rahul Verma',
    role: 'Engineering lead',
    company: 'Fintech team',
    content:
      'Security expectations were taken seriously from day one: threat modeling notes, test evidence for critical paths, and sensible secrets handling. Rare in mid-size vendor engagements.',
    rating: 5,
  },
  {
    name: 'Deepa N.',
    role: 'Programme head',
    company: 'Ed-tech nonprofit',
    content:
      'Content workflows and a modest LMS integration shipped on the agreed date for our intake cycle. Their documentation made volunteer developers productive within a week.',
    rating: 5,
  },
  {
    name: 'Karthik M.',
    role: 'IT manager',
    company: 'Manufacturing SME',
    content:
      'Vendor onboarding and SSO were painful internally; TechVistar adapted to our IdP constraints and produced integration notes our infra team could sign off without rework.',
    rating: 5,
  },
] as const;

export const SECTION_TESTIMONIALS = {
  tag: 'Client references',
  title: 'What organizations',
  highlight: 'say about working with us',
  description:
    'A curated set of post-engagement feedback from product, engineering, operations, and academic clients. Identifiers are summarized where confidentiality agreements apply; fuller references are available when mutually agreed.',
} as const;

export const TESTIMONIAL_AGGREGATE = [
  { value: '98%', label: 'On-time milestone delivery' },
  { value: '60+', label: 'Completed engagements' },
  { value: '4.9/5', label: 'Post-project satisfaction' },
] as const;

export const CONTACT_INFO = [
  {
    icon: MapPin,
    title: 'Office',
    details: 'Hyderabad, Telangana, India',
  },
  {
    icon: Mail,
    title: 'Business inquiries',
    details: 'support@techvistar.com',
  },
  {
    icon: Phone,
    title: 'Phone',
    details: '+91 9573157982',
  },
] as const;

export const SECTION_CONTACT = {
  tag: 'Contact',
  title: 'Start a',
  highlight: 'structured conversation',
  description:
    'Share your goals, timeline, budget band, and constraints. We will respond with clarifying questions, a suggested approach, and—where appropriate—a proposal or statement of work.',
} as const;

export const CONTACT_SIDEBAR = {
  title: 'Business & project inquiries',
  lead:
    'For RFPs, vendor onboarding, or project kickoff, use the form. We route messages to the right practice lead within one business day.',
  slaTitle: 'First response',
  slaBody:
    'We acknowledge new business inquiries within one business day (IST). For urgent production issues from existing clients, please call and reference your engagement ID.',
} as const;

export const FOOTER_DESCRIPTION =
  'TechVistar delivers software development, web and mobile applications, digital marketing, academic project support, and technical documentation for organizations that require reliable delivery and clear communication.';

export const FOOTER_LINKS = {
  services: [
    { label: 'Mobile Development', href: '/#services' },
    { label: 'Web & APIs', href: '/#services' },
    { label: 'Digital Marketing', href: '/#services' },
    { label: 'Documentation', href: '/#services' },
  ],
  company: [
    { label: 'About', href: '/about' },
    { label: 'Internship', href: '/#internship' },
    { label: 'Process', href: '/#process' },
    { label: 'Benefits', href: '/#benefits' },
    { label: 'Clients', href: '/#testimonials' },
    { label: 'Contact', href: '/#contact' },
  ],
  social: [
    { icon: Linkedin, href: 'https://www.linkedin.com/company/techvistar', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/tech_vistar?igsh=MThpMTJnZ2ZlcWVvcw==', label: 'Instagram' },
    { icon: Mail, href: 'mailto:support@techvistar.com', label: 'Email' },
  ],
} as const;
