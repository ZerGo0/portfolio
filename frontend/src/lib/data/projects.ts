import type { Project } from '../types';
import Assets from './assets';
import { getSkills } from './skills';

export const items: Array<Project> = [
  {
    slug: 'ftoolbox',
    color: 'green',
    description: `A comprehensive web-based toolbox application built with modern technologies. FToolbox provides a collection of useful tools and utilities accessible through a fast and responsive web interface.

Key Technologies:
- Frontend: Built with Svelte 5 and SvelteKit 2 for optimal performance
- Styling: Tailwind CSS 4 with advanced UI components (Bits-ui, Lucide icons)
- Backend: High-performance Go backend using Fiber v2 framework
- Database: MariaDB with GORM ORM for efficient data management
- Deployment: Cloudflare Workers for global edge deployment

Features include:
- Modern, responsive UI with theme switching
- Data visualization with Chart.js
- Form management with Formsnap and Superforms
- Toast notifications with Svelte Sonner
- High-performance backend with Zap logging
- Brotli compression for optimized delivery`,
    shortDescription: 'A modern web-based toolbox with various utilities and tools.',
    links: [
      { to: 'https://github.com/ZerGo0/FToolbox', label: 'GitHub' },
      { to: 'https://ftoolbox.zergo0.dev/', label: 'Website' }
    ],
    logo: Assets.Unknown,
    name: 'FToolbox',
    period: {
      from: new Date(2025, 5, 11)
    },
    skills: getSkills(
      'svelte',
      'sveltekit',
      'ts',
      'tailwind',
      'go',
      'fiber',
      'mysql',
      'mariadb',
      'gorm',
      'chartjs',
      'vite',
      'docker',
      'cloudflare'
    ),
    type: 'Web Application'
  },
  {
    slug: 'fansly-streamerbot',
    color: 'purple',
    description: `A specialized Streamer.bot extension that bridges Fansly chat with streaming automation workflows. This plugin enables streamers to integrate Fansly chat events directly into their Streamer.bot setup, allowing for automated responses and interactions.

Technical Implementation:
- Language: C# (.NET)
- Real-time WebSocket connection for live chat processing
- Event-driven architecture with modular handlers
- Comprehensive event support (messages, tips, subscriptions)

Key Features:
- Real-time Fansly chat integration
- Three main event types: Chat messages, Tips/donations, Subscription events
- Detailed metadata tracking (username, user ID, message content, tip amounts)
- Custom trigger system for Streamer.bot automation
- Built-in debugging and diagnostic logging
- Easy installation with GitHub releases`,
    shortDescription: 'Streamer.bot extension for Fansly livestream chat integration.',
    links: [{ to: 'https://github.com/ZerGo0/fansly.streamerbot', label: 'GitHub' }],
    logo: Assets.Unknown,
    name: 'Fansly Streamer.bot Extension',
    period: {
      from: new Date(2025, 6, 3)
    },
    skills: getSkills('csharp', 'dotnet', 'streamerbot'),
    type: 'Streaming Tool / Extension',
    screenshots: [
      {
        label: 'Extension Interface',
        src: '/assets/projects/fansly-streamerbot/1.webp'
      }
    ]
  },
  {
    slug: 'fansly-bot',
    color: 'blue',
    description: `A sophisticated livestream chatbot designed for Fansly. The Platform allows creators to set up automated messages, commands, and much more. It also offers stream overlays and integrates seamlessly with third-party providers such as StreamElements, Streamlabs, and Discord. It is utilized by over 600 creators, collectively reaching an audience of more than 500,000 followers.
Features include:
- Automated messages
- Commands
- 3rd party integrations
- much more`,
    shortDescription: 'A chatbot for Fansly.com similar to other chatbots for other platforms.',
    links: [
      { to: 'https://zergo0_bot.zergo0.dev/', label: 'Website' },
      { to: 'https://fansly.com/ZerGo0_Bot', label: 'Fansly' }
    ],
    logo: Assets.Unknown,
    name: 'Fansly Bot',
    period: {
      from: new Date(2023, 0, 1)
    },
    skills: getSkills(
      'go',
      'ts',
      'tailwind',
      'svelte',
      'mysql',
      'github-actions',
      'docker',
      'redis',
      'cloudflare',
      'html',
      'css'
    ),
    type: 'Chatbot / Platform',
    screenshots: [
      {
        label: 'Automated Messages',
        src: '/assets/projects/fansly-bot/1.webp'
      },
      {
        label: 'Settings Tab',
        src: '/assets/projects/fansly-bot/2.webp'
      },
      {
        label: 'Tip Goals Overlay',
        src: '/assets/projects/fansly-bot/3.webp'
      },
      {
        label: 'Chat Overlay',
        src: '/assets/projects/fansly-bot/4.webp'
      },
      {
        label: 'Documentation',
        src: '/assets/projects/fansly-bot/5.webp'
      },
      {
        label: 'CI / CD',
        src: '/assets/projects/fansly-bot/6.webp'
      }
    ]
  },
  {
    slug: 'ftv-browser-extension',
    color: 'blue',
    description:
      'A browser extension that enhances Fansly by adding support for Twitch and third-party emote providers. This is another project I dedicate my free time to, and it is currently used by over 600 users.',
    shortDescription: 'A emote extension for Fansly.com',
    links: [
      { to: 'https://github.com/ZerGo0/Ftv-extension', label: 'GitHub' },
      {
        to: 'https://chromewebstore.google.com/detail/ftv/bgoellhnolkmeggkhcepjajapdkkckmi',
        label: 'Chrome Web Store'
      },
      { to: 'https://addons.mozilla.org/en-US/firefox/addon/ftv/', label: 'Firefox Web Store' }
    ],
    logo: Assets.Unknown,
    name: 'FTV (Emote Browser Extension)',
    period: {
      from: new Date(2023, 0, 1)
    },
    skills: getSkills('svelte', 'ts', 'tailwind', 'html', 'css'),
    type: 'Browser Extension',
    screenshots: [
      {
        label: 'Dark Theme',
        src: '/assets/projects/ftv/1.webp'
      },
      {
        label: 'Light Theme',
        src: '/assets/projects/ftv/2.webp'
      }
    ]
  },
  {
    slug: 'wakatime-profile-stats',
    color: 'blue',
    description: 'A GitHub Action that updates your README.md with your WakaTime stats.',
    shortDescription: 'A GitHub Action that updates your README.md with your WakaTime stats.',
    links: [{ to: 'https://github.com/ZerGo0/wakatime-profile-stats', label: 'GitHub' }],
    logo: Assets.Unknown,
    name: 'WakaTime Profile Stats',
    period: {
      from: new Date(2024, 9, 4)
    },
    skills: getSkills('go', 'docker', 'github-actions'),
    type: 'GitHub Action',
    screenshots: [
      {
        label: 'Example',
        src: '/assets/projects/wakatime-profile-stats/1.webp'
      }
    ]
  },
  {
    slug: 'fontsourcedownloader',
    color: 'blue',
    description:
      'A command line tool that downloads all fonts from Fontsource.org based on the provided criterias.',
    shortDescription:
      'A command line tool that downloads all fonts from Fontsource.org based on the provided criterias.',
    links: [{ to: 'https://github.com/ZerGo0/fontsourcedownloader', label: 'GitHub' }],
    logo: Assets.Unknown,
    name: 'Fontsource Downloader',
    period: {
      from: new Date(2024, 8, 25)
    },
    skills: getSkills('go', 'docker'),
    type: 'Command Line Tool',
    screenshots: []
  },
  {
    slug: 'discord-proxy-bot',
    color: 'blue',
    description:
      'A Discord bot that provides the user with a list of working proxies. The bot is used by over 3600 servers. It also scrapes more than 100 websites for proxies and checks them every 15 minutes.',
    shortDescription: 'A Discord bot that provides the user with a list of working proxies.',
    links: [],
    logo: Assets.Unknown,
    name: 'Proxy Bot',
    period: {
      from: new Date(2018, 0, 1)
    },
    skills: getSkills('go', 'mysql'),
    type: 'Discord Bot',
    screenshots: []
  },
  {
    slug: 'gumroad-discord-bot',
    color: 'blue',
    description:
      'A Discord bot post every new product from Gumroad and Booth.pm to a Discord channel. The bot is used by over 200 servers.',
    shortDescription: 'A Discord bot that posts new products',
    links: [],
    logo: Assets.Unknown,
    name: 'Gumroad Discord Bot',
    period: {
      from: new Date(2022, 0, 1)
    },
    skills: getSkills('go', 'mysql'),
    type: 'Discord Bot',
    screenshots: []
  },
  {
    slug: 'taobao-discord-bot',
    color: 'blue',
    description:
      'A Discord bot that converts Taobao mobile links to desktop links so that users can view the products properly. The bot is used by over 100 servers.',
    shortDescription: 'A Discord bot that converts Taobao mobile links',
    links: [],
    logo: Assets.Unknown,
    name: 'Taobao Discord Bot',
    period: {
      from: new Date(2018, 0, 1)
    },
    skills: getSkills('go', 'mysql'),
    type: 'Discord Bot',
    screenshots: []
  },
  {
    slug: 'minebot-plugins',
    color: 'blue',
    description: `A collection of plugins for the Minecraft server software "Minebot". The plugins include a variety of features:
- AreaFiller
- AutoEquiper
- AutoSplashPotion
- CactusFarmBuilder
- DebugPlugin
- MacroComment
- MobAura
- PvPWandererBot
- TreeFarmer`,
    shortDescription: 'A collection of plugins for the Minecraft server software "Minebot".',
    links: [{ to: 'https://github.com/ZerGo0/OQ.MineBot.Plugins', label: 'GitHub' }],
    logo: Assets.Unknown,
    name: 'Minebot Plugins',
    period: {
      from: new Date(2018, 0, 1)
    },
    skills: getSkills('dotnet'),
    type: 'Minebot Plugins',
    screenshots: []
  },
  {
    slug: 'private-projects',
    color: 'blue',
    description: `Projects that I have worked on in my free time. These projects are not public and are not listed on my GitHub profile. They include a variety of projects:
- Ring Monitor (local ring recordings)
- gitSync (auto git push/pull)
- Telegram Parceltracker (Reverse enginered API)
- AutoVac (motion controlled vacuum robot)
- ... (a ton of abandond projects)`,
    shortDescription: 'Projects that I have worked on in my free time.',
    links: [],
    logo: Assets.Unknown,
    name: 'Private Projects',
    period: {
      from: new Date(2018, 0, 1)
    },
    skills: getSkills('go', 'ts', 'js'),
    type: 'Private Projects',
    screenshots: []
  }
  // {
  // 	slug: 'placeholder',
  // 	color: 'blue',
  // 	description: '',
  // 	shortDescription: '',
  // 	links: [],
  // 	logo: Assets.Unknown,
  // 	name: 'Placeholder',
  // 	period: {
  // 		from: new Date(2023, 0, 1)
  // 	},
  // 	skills: getSkills(),
  // 	type: 'Placeholder',
  // 	screenshots: []
  // }
];

export const title = 'Projects';
