import Button from 'components/Button'
import Header from 'components/Header'
import utils from 'utils'

function App() {
	return (
		<main className='min-h-screen'>
			<Header />

			<section className='flex flex-col-reverse lg:flex-row lg:justify-between xl:w-[1152px] mx-auto lg:mb-[124px] lg:px-10 xl:px-0 '>
				<div className='flex flex-col px-4 items-center lg:items-start lg:justify-between lg:px-0'>
					<div className='lg:mt-[104px] flex flex-col items-center lg:items-start'>
						<h1 className='text-[28px] font-bold mb-6 lg:text-[64px] leading-none lg:mb-[72px] '>
							Make <br className='lg:block hidden' /> remote work
						</h1>

						<p className='mb-6 text-center text-neutral-200 sm:px-32 lg:px-0 lg:text-left xl:mb-14 lg:w-[424px]'>
							Get your team in sync, no matter your location. Streamline
							processes, create team rituals, and watch productivity soar.
						</p>

						<Button type='filled' onClick={() => {}} className='mb-12'>
							Learn more
						</Button>
					</div>

					<div className='flex flex-row space-x-6 mb-24 lg:mb-0'>
						{utils.FEATURED_CLIENTS.map((featuredClient) => {
							return (
								<img
									key={featuredClient.name}
									src={featuredClient.image}
									alt={featuredClient.name}
									className='h-4 lg:h-5 inline-block'
								/>
							)
						})}
					</div>
				</div>

				<img
					src='assets/images/image-hero-mobile.png'
					alt='hero'
					className='mb-12 lg:hidden'
				/>

				<img
					src='assets/images/image-hero-desktop.png'
					alt='hero'
					className='hidden lg:block h-[640px]'
				/>
			</section>
		</main>
	)
}

export default App
