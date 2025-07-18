import { Platform } from '$lib/types';
import { getSkills, items } from './skills';

export const title = 'Home';

export const name = 'Florian';

export const lastName = 'Kühne';

export const description =
  'Hello, I am a software engineer from Germany. I am passionate about any kind of software development. I am always eager to learn new things and improve my skills.';

export const links: Array<{ platform: Platform; link: string }> = [
  { platform: Platform.GitHub, link: 'https://github.com/ZerGo0' },
  {
    platform: Platform.Linkedin,
    link: 'https://www.linkedin.com/in/florian-kühne-3435b1320/'
  },
  {
    platform: Platform.Email,
    link: 'florian.kuehne.taucha@gmail.com'
  }
];

export const skills = getSkills(...items.map((it) => it.slug));
