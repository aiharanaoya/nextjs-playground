import type { Metadata } from 'next';
import '@/styles/global.css';
import 'destyle.css';

export const metadata: Metadata = {
	title: 'Next.js Playground',
	description: 'Next.js Playground',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
