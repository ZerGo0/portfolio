import type { Education } from '../types';
import Assets from './assets';

export const items: Array<Education> = [
  {
    degree: 'High School Diploma',
    description: 'German "Realschulabschluss',
    location: 'Germany',
    logo: Assets.Unknown,
    name: '',
    organization: '',
    period: { from: new Date(2008, 7, 1), to: new Date(2014, 6, 1) },
    shortDescription: '',
    slug: 'education-item',
    subjects: []
  }
];

export const title = 'Education';
