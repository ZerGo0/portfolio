import { omit, type StringWithAutoComplete } from '@riadh-adrani/utils';
import svelte from '../md/svelte.md?raw';
import type { Skill, SkillCategory } from '../types';
import Assets from './assets';

const defineSkillCategory = <S extends string>(data: SkillCategory<S>): SkillCategory<S> => data;

const categories = [
  defineSkillCategory({ name: 'Programming Languages', slug: 'pro-lang' }),
  defineSkillCategory({ name: 'Frameworks', slug: 'framework' }),
  defineSkillCategory({ name: 'Libraries', slug: 'library' }),
  defineSkillCategory({ name: 'Langauges', slug: 'lang' }),
  defineSkillCategory({ name: 'Databases', slug: 'db' }),
  defineSkillCategory({ name: 'ORMs', slug: 'orm' }),
  defineSkillCategory({ name: 'DevOps', slug: 'devops' }),
  defineSkillCategory({ name: 'Testing', slug: 'test' }),
  defineSkillCategory({ name: 'Dev Tools', slug: 'devtools' }),
  defineSkillCategory({ name: 'Markup & Style', slug: 'markup-style' }),
  defineSkillCategory({ name: 'Design', slug: 'design' }),
  defineSkillCategory({ name: 'Soft Skills', slug: 'soft' })
] as const;

const defineSkill = <S extends string>(
  skill: Omit<Skill<S>, 'category'> & {
    category?: StringWithAutoComplete<(typeof categories)[number]['slug']>;
  }
): Skill<S> => {
  const out: Skill<S> = omit(skill, 'category');

  if (skill.category) {
    out.category = categories.find((it) => it.slug === skill.category);
  }

  return out;
};

export const items = [
  defineSkill({
    slug: 'js',
    color: 'yellow',
    description:
      'JavaScript is a programming language that is used to create interactive effects within web browsers.',
    logo: Assets.JavaScript,
    name: 'Javascript',
    category: 'pro-lang'
  }),
  defineSkill({
    slug: 'ts',
    color: 'blue',
    description: 'TypeScript is a superset of JavaScript that compiles to plain JavaScript.',
    logo: Assets.TypeScript,
    name: 'Typescript',
    category: 'pro-lang'
  }),
  defineSkill({
    slug: 'css',
    color: 'blue',
    description:
      'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML.',
    logo: Assets.CSS,
    name: 'CSS',
    category: 'markup-style'
  }),
  defineSkill({
    slug: 'html',
    color: 'orange',
    description:
      'HTML is the standard markup language for documents designed to be displayed in a web browser.',
    logo: Assets.HTML,
    name: 'HTML',
    category: 'markup-style'
  }),
  defineSkill({
    slug: 'sass',
    color: 'pink',
    description:
      'Sass is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets (CSS).',
    logo: Assets.Sass,
    name: 'Sass',
    category: 'markup-style'
  }),
  defineSkill({
    slug: 'svelte',
    color: 'orange',
    description: svelte,
    logo: Assets.Svelte,
    name: 'Svelte',
    category: 'library'
  }),
  defineSkill({
    slug: 'dotnet',
    color: 'blue',
    description:
      '.NET is a free, cross-platform, open-source developer platform for building many different types of applications.',
    logo: Assets.DotNet,
    name: '.NET',
    category: 'pro-lang'
  }),
  defineSkill({
    slug: 'go',
    color: 'blue',
    description:
      'Go is an open source programming language that makes it easy to build simple, reliable, and efficient software.',
    logo: Assets.Go,
    name: 'Go',
    category: 'pro-lang'
  }),
  defineSkill({
    slug: 'mssql',
    color: 'yellow',
    description:
      'Microsoft SQL Server is a relational database management system developed by Microsoft.',
    logo: Assets.MSSQL,
    name: 'Microsoft SQL Server',
    category: 'db'
  }),
  defineSkill({
    slug: 'azure-pipelines',
    color: 'blue',
    description:
      'Azure Pipelines is a cloud service that you can use to automatically build and test your code project and make it available to other users.',
    logo: Assets.AzurePipelines,
    name: 'Azure Pipelines',
    category: 'devops'
  }),
  defineSkill({
    slug: 'azure-devops',
    color: 'blue',
    description:
      'Azure DevOps is a set of services for teams to share code, track work, and ship software.',
    logo: Assets.AzureDevOps,
    name: 'Azure DevOps',
    category: 'devops'
  }),
  defineSkill({
    slug: 'dotTrace',
    color: 'blue',
    description: 'dotTrace is a performance and memory usage profiler for .NET applications.',
    logo: Assets.DotTrace,
    name: 'DotTrace',
    category: 'devtools'
  }),
  defineSkill({
    slug: 'dotMemory',
    color: 'blue',
    description: 'dotMemory is a memory usage profiler for .NET applications.',
    logo: Assets.DotMemory,
    name: 'DotMemory',
    category: 'devtools'
  }),
  defineSkill({
    slug: 'mysql',
    color: 'red',
    description: 'MySQL is an open-source relational database management system.',
    logo: Assets.MySql,
    name: 'MySQL',
    category: 'db'
  }),
  defineSkill({
    slug: 'github-actions',
    color: 'green',
    description: 'GitHub Actions makes it easy to automate all your software workflows.',
    logo: Assets.GithubActions,
    name: 'GitHub Actions',
    category: 'devops'
  }),
  defineSkill({
    slug: 'docker',
    color: 'blue',
    description: 'Docker is an open platform for developing, shipping, and running applications.',
    logo: Assets.Docker,
    name: 'Docker',
    category: 'devops'
  }),
  defineSkill({
    slug: 'redis',
    color: 'red',
    description:
      'Redis is an open-source, in-memory data structure store used as a database, cache, and message broker.',
    logo: Assets.Redis,
    name: 'Redis',
    category: 'db'
  }),
  defineSkill({
    slug: 'cloudflare',
    color: 'green',
    description:
      'Cloudflare is a web infrastructure and website security company that provides content delivery network services.',
    logo: Assets.Cloudflare,
    name: 'Cloudflare',
    category: 'devops'
  }),
  defineSkill({
    slug: 'tailwind',
    color: 'blue',
    description:
      'Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces.',
    logo: Assets.Tailwind,
    name: 'Tailwind CSS',
    category: 'framework'
  }),
  defineSkill({
    slug: 'less',
    color: 'blue',
    description:
      'Less is a dynamic preprocessor style sheet language that can be compiled into Cascading Style Sheets (CSS).',
    logo: Assets.Less,
    name: 'Less',
    category: 'markup-style'
  }),
  defineSkill({
    slug: 'nextjs',
    color: 'black',
    description:
      'Next.js is a React framework that enables functionality such as server-side rendering and generating static websites.',
    logo: Assets.NextJs,
    name: 'Next.js',
    category: 'framework'
  }),
  defineSkill({
    slug: 'react',
    color: 'blue',
    description:
      'React is a JavaScript library for building user interfaces, particularly single-page applications.',
    logo: Assets.ReactJs,
    name: 'React',
    category: 'library'
  }),
  defineSkill({
    slug: 'stripe',
    color: 'purple',
    description:
      'Stripe is a technology company that builds economic infrastructure for the internet, specializing in payment processing.',
    logo: Assets.Stripe,
    name: 'Stripe',
    category: 'library'
  }),
  defineSkill({
    slug: 'supabase',
    color: 'green',
    description:
      'Supabase is an open-source Firebase alternative providing database, authentication, storage, and edge functions.',
    logo: Assets.Supabase,
    name: 'Supabase',
    category: 'db'
  }),
  defineSkill({
    slug: 'drizzle',
    color: 'green',
    description:
      'Drizzle is a TypeScript ORM that provides type-safe database queries and schema management.',
    logo: Assets.Drizzle,
    name: 'Drizzle ORM',
    category: 'orm'
  }),
  defineSkill({
    slug: 'resend',
    color: 'black',
    description:
      'Resend is a modern email API for developers, designed to make sending transactional emails simple and reliable.',
    logo: Assets.Resend,
    name: 'Resend',
    category: 'library'
  }),
  defineSkill({
    slug: 'postgresql',
    color: 'blue',
    description:
      'PostgreSQL is a powerful, open-source object-relational database system with strong reliability and data integrity.',
    logo: Assets.PostgreSQL,
    name: 'PostgreSQL',
    category: 'db'
  }),
  defineSkill({
    slug: 'vercel',
    color: 'black',
    description:
      'Vercel is a cloud platform for static sites and serverless functions that enables developers to deploy instantly.',
    logo: Assets.Vercel,
    name: 'Vercel',
    category: 'devops'
  }),
  defineSkill({
    slug: 'mariadb',
    color: 'brown',
    description:
      'MariaDB is an open-source relational database management system, forked from MySQL with enhanced features.',
    logo: Assets.MariaDB,
    name: 'MariaDB',
    category: 'db'
  }),
  defineSkill({
    slug: 'chartjs',
    color: 'pink',
    description:
      'Chart.js is a simple yet flexible JavaScript charting library for designers and developers.',
    logo: Assets.ChartJs,
    name: 'Chart.js',
    category: 'library'
  }),
  defineSkill({
    slug: 'sveltekit',
    color: 'orange',
    description:
      'SvelteKit is a framework for building web applications with Svelte, providing routing, SSR, and more.',
    logo: Assets.SvelteKit,
    name: 'SvelteKit',
    category: 'framework'
  }),
  defineSkill({
    slug: 'gorm',
    color: 'blue',
    description:
      'GORM is a developer-friendly ORM library for Go, providing a simple API for database operations.',
    logo: Assets.GORM,
    name: 'GORM',
    category: 'orm'
  }),
  defineSkill({
    slug: 'fiber',
    color: 'blue',
    description:
      'Fiber is an Express-inspired web framework for Go, built on top of Fasthttp for extreme performance.',
    logo: Assets.Fiber,
    name: 'Fiber',
    category: 'framework'
  }),
  defineSkill({
    slug: 'zap',
    color: 'yellow',
    description:
      'Zap is a blazing fast, structured, leveled logging library for Go with minimal allocations.',
    logo: Assets.Zap,
    name: 'Zap',
    category: 'library'
  }),
  defineSkill({
    slug: 'csharp',
    color: 'purple',
    description:
      'C# is a modern, object-oriented programming language developed by Microsoft for the .NET platform.',
    logo: Assets.Csharp,
    name: 'C#',
    category: 'pro-lang'
  }),
  defineSkill({
    slug: 'vite',
    color: 'purple',
    description:
      'Vite is a fast build tool that provides instant server start and lightning-fast HMR for modern web projects.',
    logo: Assets.Vite,
    name: 'Vite',
    category: 'devtools'
  }),
  defineSkill({
    slug: 'unocss',
    color: 'gray',
    description:
      'UnoCSS is an instant on-demand atomic CSS engine with unified syntax and flexible presets.',
    logo: Assets.Unocss,
    name: 'UnoCSS',
    category: 'framework'
  }),
  defineSkill({
    slug: 'streamerbot',
    color: 'purple',
    description:
      'Streamer.bot is a powerful automation tool for streamers, enabling custom actions and integrations.',
    logo: Assets.StreamerBot,
    name: 'Streamer.bot',
    category: 'devtools'
  })
  // defineSkill({
  // 	slug: 'placeholder',
  // 	color: 'blue',
  // 	description:
  // 		'',
  // 	logo: Assets.Unknown,
  // 	name: 'Placeholder',
  // 	category: 'others'
  // })
] as const;

export const title = 'Skills';

export const getSkills = (
  ...slugs: Array<StringWithAutoComplete<(typeof items)[number]['slug']>>
): Array<Skill> => items.filter((it) => slugs.includes(it.slug));

export const groupByCategory = (
  query: string
): Array<{ category: SkillCategory; items: Array<Skill> }> => {
  const out: ReturnType<typeof groupByCategory> = [];

  const others: Array<Skill> = [];

  items.forEach((item) => {
    if (query.trim() && !item.name.toLowerCase().includes(query.trim().toLowerCase())) return;

    // push to others if item does not have a category
    if (!item.category) {
      others.push(item);
      return;
    }

    // check if category exists
    let category = out.find((it) => it.category.slug === item.category?.slug);

    if (!category) {
      category = { items: [], category: item.category };

      out.push(category);
    }

    category.items.push(item);
  });

  if (others.length !== 0) {
    out.push({ category: { name: 'Others', slug: 'others' }, items: others });
  }

  return out;
};
