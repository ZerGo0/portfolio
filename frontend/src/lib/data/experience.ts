import { ContractType, type Experience } from '../types';
import Assets from './assets';
import { getSkills } from './skills';

export const items: Array<Experience> = [
  {
    slug: 'wishly-fullstack-engineer',
    company: 'Cassie Grey LLC',
    description:
      '- Architected and implemented complete Stripe embedded checkout integration with secure payment processing\n- Built RYE Product Worker with webhook support and queue management for handling product imports from luxury brands\n- Led full site redesign improving user experience and conversion rates\n- Developed key features: gift suggestions system, notifications with infinite scroll, following/followers functionality, custom collections, wishlist themes, and featured items\n- Implemented privacy-focused architecture allowing anonymous gifting while protecting creator information\n- Built scalable Next.js application with App Router, API routes, and server-side rendering on Vercel\n- Integrated multiple third-party services: Supabase for database, Resend for transactional emails, Mailchimp for marketing',
    contract: ContractType.FullTime,
    type: 'Software Development',
    location: 'Remote',
    period: { from: new Date(2025, 1, 3) },
    skills: getSkills(
      'nextjs',
      'react',
      'ts',
      'js',
      'stripe',
      'supabase',
      'postgresql',
      'drizzle',
      'resend',
      'vercel',
      'tailwind',
      'css',
      'html'
    ),
    name: 'Full Stack Engineer',
    color: 'purple',
    links: [{ label: 'Wish.ly', to: 'https://www.wish.ly', newTab: true }],
    logo: Assets.Wishly,
    shortDescription:
      'Building premium gift registry platform for creators with focus on privacy and luxury brands.'
  },
  {
    slug: 'fullstack-engineer',
    company: '4SELLERS GmbH',
    description:
      '- Multiple speed optimizations, including startup improvements that improved times from 2:30 min down to 1.5 seconds\n- Successfully migrated legacy .Net Framework 4.5.2 projects to the latest .Net 8, improving performance and enhancing scalability\n- Runtime type restrictions based on the user privacy cookie preferences, this allows the user to disable certain analysis providers instead of just the entire privacy cookie section\n- Internal Incident Handling',
    contract: ContractType.FullTime,
    type: 'Software Development',
    location: 'Leipzig, Germany - Remote',
    period: { from: new Date(2020, 8, 1), to: new Date(2025, 0, 31) },
    skills: getSkills(
      'dotnet',
      'js',
      'css',
      'less',
      'html',
      'js',
      'mssql',
      'azure-pipelines',
      'azure-devops',
      'dotTrace',
      'dotMemory'
    ),
    name: 'Software Developer .NET',
    color: 'blue',
    links: [{ label: '4SELLERS', to: 'https://www.4sellers.de', newTab: true }],
    logo: Assets.ForSellers,
    shortDescription: 'Working on the 4SELLERS Shopsystem and other tools.'
  },
  {
    slug: 'electrican',
    company: 'NAT Neuberger Anlangen-Technik AG',
    description:
      '- Deputy team leader BMW department\n- Organized and assigned work for multiple big projects, including replacing all A/C units to more efficient and environment friendly ones\n- Day-to-day business\n- 3 1/2 years apprenticeship',
    contract: ContractType.FullTime,
    type: 'Electrician',
    location: 'Leipzig, Germany',
    period: { from: new Date(2015, 8, 1), to: new Date(2020, 6, 1) },
    skills: [],
    name: 'Electrician',
    color: 'red',
    links: [{ label: 'NAT', to: 'https://www.nat.eu/', newTab: true }],
    logo: Assets.NAT,
    shortDescription: 'Day-to-day business, planing and preparing installations.'
  }
];

export const title = 'Experience';
