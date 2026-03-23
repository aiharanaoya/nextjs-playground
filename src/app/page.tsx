import { Button } from '@/components/ui/Button';

export default function Home() {
	return (
		<div className="">
			<h1>Next.js App</h1>
			<Button text="Click me" onClick={() => alert('Button Clicked!')} />
		</div>
	);
}
