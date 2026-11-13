export const profile = {
  name: 'Musa Akande Ojo',
  brand: 'MUSA',
  title: 'Backend Engineer | Fintech & Enterprise Systems',
  location: 'Agege, Lagos',
  phone: '08031984289',
  email: 'musaakandeojo@gmail.com',
  github: 'https://github.com/musmax',
  linkedin: 'https://www.linkedin.com/in/akande-musa-ojo-846360344',
  summary:
    'From cross-border fintech to nationwide benefit delivery, I turn complex operations into dependable software.',
  about:
    "I'm Musa — a backend engineer with 5+ years building high-availability systems across Fintech, Crypto, and GovTech. I work primarily with TypeScript, JavaScript, Java, and Python, designing microservices, resilient queues, and payment rails that hold up under real operational pressure.",
};

export const skills = [
  'Node.js',
  'NestJS',
  'Express',
  'Spring Boot',
  'Django',
  'PostgreSQL',
  'MySQL',
  'MongoDB',
  'Redis',
  'AWS',
  'Docker',
  'Git',
  'TypeORM',
  'Paystack',
  'Flutterwave',
  'Remita',
];

export const projects = [
  {
    id: 'music-banq',
    title: 'Music Banq',
    description:
      'Multi-tenant rights management platform for artists, labels, and publishers — ownership tracking, royalties, and isolated tenant environments on a shared NestJS + MongoDB stack.',
    tags: ['NestJS', 'MongoDB', 'Music Tech'],
    tone: 'sage' as const,
    links: [
      { label: 'Visit platform', href: 'https://musicbanq.org/' },
      {
        label: 'Google Play',
        href: 'https://play.google.com/store/apps/details?id=com.musicbank.app',
      },
    ],
  },
  {
    id: 'viarduct',
    title: 'Viarduct',
    description:
      'CAC-registered, SCUML-certified P2P crypto and Naira exchange with real-time monitoring, multi-wallet support (BTC, USDT, ETH, BNB), and automated disbursements.',
    tags: ['Node.js', 'Express', 'Crypto'],
    tone: 'slate' as const,
    links: [
      { label: 'Visit platform', href: 'https://www.viarduct.com/' },
      {
        label: 'Google Play',
        href: 'https://play.google.com/store/apps/details?id=com.viarduct.app',
      },
    ],
  },
  {
    id: 'nbds',
    title: 'National Benefits Delivery System',
    description:
      'Nationwide social intervention platform with a Remita-powered disbursement engine, resilient retry queues, and state-level reporting across all 36 states.',
    tags: ['Java', 'Spring Boot', 'GovTech'],
    tone: 'sand' as const,
    links: [{ label: 'Visit platform', href: 'https://ibdms.ncto.gov.ng/sign-in' }],
  },
  {
    id: 'parapo',
    title: 'Parapó',
    description:
      'Cloud EHR by AyoFill — patient & doctor management, subscriptions, invoicing, platform–hospital split payments, and multi-hospital family cards where members can belong to different cards across facilities.',
    tags: ['HealthTech', 'EHR', 'Multi-tenant'],
    tone: 'blush' as const,
    links: [{ label: 'Visit platform', href: 'https://emr.realparapo.com' }],
  },
  {
    id: 'entwuit',
    title: 'Entwuit',
    description:
      'Learning and hackathon platform — course management, subscriptions and purchases, tests and certifications, robust hackathon workflows, and payouts to educators who create courses on the system.',
    tags: ['Express.js', 'MySQL', 'Paystack', 'Redis', 'Twilio'],
    tone: 'fog' as const,
    links: [{ label: 'Visit platform', href: 'https://entwuit.com/' }],
  },
  {
    id: 'mydockethub',
    title: 'myDockethub',
    description:
      'Nigerian property platform for buying and selling land and homes, booking consultants (lawyers, surveyors, architects), MarketHub materials and trades, and lawyer workflows for clients and cases.',
    tags: ['PropTech', 'Marketplace', 'Consultants'],
    tone: 'mist' as const,
    links: [{ label: 'Visit platform', href: 'https://mydockethub.com/' }],
  },
  {
    id: 'fodus',
    title: 'Fodus Foods (UK)',
    description:
      'Ecommerce storefront for a homemade food brand — product catalog, cart checkout, and delivery flows for freshly baked goods and Naija snacks.',
    tags: ['E-commerce', 'JavaScript', 'Express.js', 'React', 'Apple Pay', 'Aiven Cloud'],
    tone: 'clay' as const,
    links: [{ label: 'Visit platform', href: 'https://fodusfood.netlify.app/' }],
  },
];

export const stats = [
  { value: '₦50B+', label: 'Disbursed via NBDS payment rails' },
  { value: '1M+', label: 'Beneficiaries reached nationwide' },
  { value: '99.9%', label: 'Payment success with retry queues' },
];

export const experience = [
  {
    company: 'Dola — UK',
    role: 'Backend Engineer',
    period: 'Mar 2025 – Present',
    summary:
      'High-performance matching engine, wallet withdrawals, and Spring Boot order management with Kratos + Veriff KYC.',
  },
  {
    company: 'Music Banq',
    role: 'Backend Engineer (Contract)',
    period: '2025 – 2026',
    summary:
      'Multi-tenant rights management — ownership splits, royalties, and isolated tenant data on NestJS + MongoDB.',
  },
  {
    company: 'Viarduct',
    role: 'Backend Engineer',
    period: '2025 – Present',
    summary:
      'P2P crypto/Naira exchange — real-time monitoring, escrow, multi-chain wallets, and automated disbursements.',
  },
  {
    company: 'NCTO / NBDS',
    role: 'Backend Engineer',
    period: '2023 – 2025',
    summary:
      'Disbursement engine and resilient queue system processing ₦50B+ to 1M+ beneficiaries at 99.9% success.',
  },
  {
    company: 'KSolution NG',
    role: 'Software Developer',
    period: 'Feb 2023 – Present',
    summary:
      'Enterprise B2B platforms — hospital, hotel, law, and arrest-record systems with NIMC, AWS S3, and payments.',
  },
  {
    company: 'TribeSquare',
    role: 'Backend Developer',
    period: 'Jun 2023 – Dec 2023',
    summary:
      'Logistics onboarding redesign that cut drop-off by 40%, plus Paystack and Flutterwave payment flows.',
  },
];

export const education = [
  {
    title: 'B.Sc. Computer Science',
    org: 'University of Ibadan',
    period: '2017 – 2021',
  },
  {
    title: 'Full-Stack Web Development',
    org: 'TIIDELab · 1,300+ hours',
    period: '2022',
  },
  {
    title: 'Frontend Developer Program',
    org: 'AltSchool Africa',
    period: '2022',
  },
  {
    title: 'Software Developer Training',
    org: 'ALX Africa',
    period: '2022',
  },
];
