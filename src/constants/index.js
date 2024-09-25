import {  
  yourlogo,
} from '../assets';
export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'Services',
    href: '#services',
  },
  {
    id: 3,
    name: 'Reviews',
    href: '#reviews',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
  {
    id: 5,
    name: 'Portfolio',
    href: '/portfolio',
  },
];
export const clientReviews = [
  {
    id: 1,
    name: 'Sarah Thompson',
    position: 'Creative Director, PixelWave Studio',
    img: 'assets/review1.png',
    review:
      'Working with CrumbLab on our logo design and brand guidelines was a seamless experience. They not only understood our vision but elevated it, delivering stunning designs that reflect our brand perfectly. Their professionalism and eye for detail made the entire process a breeze!',
  },
  {
    id: 2,
    name: 'James Martinez',
    position: 'Owner, SocialBoost Agency',
    img: 'assets/review2.png',
    review:
      'CrumbLab completely transformed our social media presence! The banners and product posts they designed were spot-on with our branding. Their ability to blend creativity with our brand voice helped us stand out across all digital platforms. Absolutely recommend them!',
  },
  {
    id: 3,
    name: 'Linda Carter',
    position: 'Founder, BrightFocus Marketing',
    img: 'assets/review3.png',
    review:
      'CrumbLab’s SEO optimization and schema markup services were game changers for us. Our website’s performance and rankings saw significant improvements almost immediately. The team is incredibly skilled, responsive, and truly invested in helping us succeed.',
  },
  {
    id: 4,
    name: 'Daniel Clark',
    position: 'CEO, MotionPlus Media',
    img: 'assets/review4.png',
    review:
      'The CrumbLab team took our video content to the next level. Their video editing and marketing video services were phenomenal, turning our footage into a polished final product that resonated with our audience. Their attention to detail and creative vision were unmatched!',
  },
  {
    id: 5,
    name: 'McQueens Bargain',
    position: 'Company',
    img: 'assets/review5.jpg',
    review:
      'CrumbLab did an amazing job designing our new logo. They took our vision and turned it into a simple, yet impactful design that truly represents our brand. We couldn’t be happier with the final result!',
  },
  {
    id: 6,
    name: 'ListLeap',
    position: 'Company',
    img: 'assets/review6.jpg',
    review:
      'CrumbLab nailed both our logo and website design! They created a fresh, modern look that perfectly aligns with our brand. Their attention to detail and creativity made all the difference, and we love how everything turned out.',
  },
];

export const myProjects = [
  {
    title: 'Podcastr - AI-Powered Podcast Creation',
    desc: 'Podcastr is an innovative SaaS platform redefining podcast production with AI-driven features. It enables creators to effortlessly generate diverse voiceovers from a single text input using multi-voice technology.',
    subdesc:
      'Powered by Next.js 14, Tailwind CSS, TypeScript, Framer Motion, and Convex, Podcastr delivers top-tier performance, offering a scalable solution for podcast enthusiasts and professionals.',
    href: 'https://www.youtube.com/@WebMindsYT/',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      { id: 1, name: 'React.js', path: '/assets/react.svg' },
      { id: 2, name: 'TailwindCSS', path: 'assets/tailwindcss.png' },
      { id: 3, name: 'TypeScript', path: '/assets/typescript.png' },
      { id: 4, name: 'Framer Motion', path: '/assets/framer.png' },
    ],
  },
  {
    title: 'LiveDoc - Real-Time Collaborative Docs',
    desc: 'LiveDoc revolutionizes real-time document editing by supporting millions of simultaneous collaborators. It takes collaboration beyond Google Docs with a seamless experience that captures every edit in real time.',
    subdesc:
      'Built using Next.js and the latest Liveblocks features, LiveDoc ensures a flawless, lag-free collaboration environment for teams of any size.',
    href: 'https://www.youtube.com/@WebMindsYT/',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      { id: 1, name: 'React.js', path: '/assets/react.svg' },
      { id: 2, name: 'TailwindCSS', path: 'assets/tailwindcss.png' },
      { id: 3, name: 'TypeScript', path: '/assets/typescript.png' },
      { id: 4, name: 'Framer Motion', path: '/assets/framer.png' },
    ],
  },
  {
    title: 'CarePulse - Advanced Healthcare Platform',
    desc: 'CarePulse is a cutting-edge health management system designed to streamline patient care. It enhances the user experience by simplifying patient registration, appointment booking, and medical record management.',
    subdesc:
      'Leveraging technologies like Next.js, Appwrite, Twilio, and Sentry, CarePulse improves operational workflows with automated forms and SMS notifications.',
    href: 'https://www.youtube.com/@WebMindsYT/',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      { id: 1, name: 'React.js', path: '/assets/react.svg' },
      { id: 2, name: 'TailwindCSS', path: 'assets/tailwindcss.png' },
      { id: 3, name: 'TypeScript', path: '/assets/typescript.png' },
      { id: 4, name: 'Framer Motion', path: '/assets/framer.png' },
    ],
  },
  {
    title: 'Horizon - All-In-One Online Banking',
    desc: 'Horizon is a comprehensive online banking platform offering users complete control over their financial ecosystem. With Horizon, users can connect multiple accounts, monitor transactions, and transfer money seamlessly.',
    subdesc:
      'Powered by Next.js 14, Appwrite, Dwolla, and Plaid, Horizon ensures a secure, intuitive, and modern banking experience tailored for today’s digital-savvy users.',
    href: 'https://www.youtube.com/@WebMindsYT/',
    texture: '/textures/project/project4.mp4',
    logo: '/assets/project-logo4.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      { id: 1, name: 'React.js', path: '/assets/react.svg' },
      { id: 2, name: 'TailwindCSS', path: 'assets/tailwindcss.png' },
      { id: 3, name: 'TypeScript', path: '/assets/typescript.png' },
      { id: 4, name: 'Framer Motion', path: '/assets/framer.png' },
    ],
  },
  {
    title: 'Imaginify - AI-Driven Photo Manipulation',
    desc: 'Imaginify is an advanced SaaS platform enabling users to create stunning photo manipulations with AI technology. It features an AI-powered image editor, a credit-based payment model, and built-in e-commerce integration.',
    subdesc:
      'Built using Next.js 14, Cloudinary AI, Clerk, and Stripe, Imaginify allows users to easily generate high-quality images and turn their creative ideas into a profitable business.',
    href: 'https://www.youtube.com/@WebMindsYT/',
    texture: '/textures/project/project5.mp4',
    logo: '/assets/project-logo5.png',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      { id: 1, name: 'React.js', path: '/assets/react.svg' },
      { id: 2, name: 'TailwindCSS', path: 'assets/tailwindcss.png' },
      { id: 3, name: 'TypeScript', path: '/assets/typescript.png' },
      { id: 4, name: 'Framer Motion', path: '/assets/framer.png' },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};  

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];
 
