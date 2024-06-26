import { Card } from '@/components/ui/card'

export default function HomePage() {
	return (
		<main className="flex flex-col min-h-[100dvh]">
			<section className="flex flex-col items-center justify-center flex-1 bg-gradient-to-r from-[#6366F1] to-[#9333EA] px-4 md:px-6">
				<div className="max-w-3xl text-center space-y-4">
					<h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
						AWS Amplify Simple Stripe Checkout
					</h1>
					<p className="text-lg text-gray-200 md:text-xl">
						Leverage the power of Amplify Gen 2 to build your next Stripe
						checkout flow for digital products!
					</p>
					<a
						className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-base font-medium text-[#6366F1] shadow-md transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#6366F1]"
						href="https://buy.stripe.com/test_bIY7uVfVU2sw3qU28d"
					>
						Get Your Song 🎵
					</a>
				</div>
			</section>
			<section className=" flex justify-center py-12 md:py-16 lg:py-20">
				<div className="container grid grid-cols-1 md:grid-cols-2 gap-6">
					<Card className="shadow-md">
						<div className="flex items-center space-x-4">
							<div className="text-3xl">🚀</div>
							<div>
								<h3 className="text-xl font-semibold">Stripe Webhooks</h3>
								<p className="text-gray-500">
									A simple Lambda function connected to your S3 bucket raises
									the bar on how to build a robust checkout solution.
								</p>
							</div>
						</div>
					</Card>
					<Card className="shadow-md">
						<div className="flex items-center space-x-4">
							<div className="text-3xl">🗒️</div>
							<div>
								<h3 className="text-xl font-semibold">
									Piecemeal solutions for your next project
								</h3>
								<p className="text-gray-500">
									The concepts here will serve as guides to help build out your
									next application.
								</p>
							</div>
						</div>
					</Card>
				</div>
			</section>
			<footer className="flex justify-center bg-gray-100 py-6 dark:bg-gray-800">
				<p className="text-sm text-gray-500 dark:text-gray-400">
					© 2024 Made with ❤️ by Focus Otter 🦦
				</p>
			</footer>
		</main>
	)
}
