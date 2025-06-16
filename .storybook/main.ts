import type { StorybookConfig } from '@storybook/nextjs-vite';

const config: StorybookConfig = {
	stories: ['../src/components/ui/**/*.stories.@(ts|tsx)'],
	framework: {
		name: '@storybook/nextjs-vite',
		options: {},
	},
};

export default config;
