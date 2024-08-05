import type { Project } from '../types';
import Assets from './assets';
import { getSkills } from './skills';

export const items: Array<Project> = [
	{
		slug: 'fansly-bot',
		color: 'blue',
		description:
			'A sophisticated livestream chatbot designed for Fansly. The Platform allows creators to set up automated messages, commands, and much more. It also offers stream overlays and integrates seamlessly with third-party providers such as StreamElements, Streamlabs, and Discord. It is utilized by over 600 creators, collectively reaching an audience of more than 500,000 followers.' +
			'\nFeatures include:' +
			'\n- Automated messages' +
			'\n- Commands' +
			'\n- 3rd party integrations' +
			'\n- much more',
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
				src: '/assets/projects/fansly-bot/1.png'
			},
			{
				label: 'Settings Tab',
				src: '/assets/projects/fansly-bot/2.png'
			},
			{
				label: 'Tip Goals Overlay',
				src: '/assets/projects/fansly-bot/3.png'
			},
			{
				label: 'Chat Overlay',
				src: '/assets/projects/fansly-bot/4.png'
			},
			{
				label: 'Documentation',
				src: '/assets/projects/fansly-bot/5.png'
			},
			{
				label: 'CI / CD',
				src: '/assets/projects/fansly-bot/6.png'
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
				src: '/assets/projects/ftv/1.png'
			},
			{
				label: 'Light Theme',
				src: '/assets/projects/ftv/2.png'
			}
		]
	}
];

export const title = 'Projects';
