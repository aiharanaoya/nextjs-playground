import type { Preview } from '@storybook/nextjs-vite';
// import '@/styles/global.css';
// import 'destyle.css';

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
	tags: ['autodocs'],
};

export default preview;
