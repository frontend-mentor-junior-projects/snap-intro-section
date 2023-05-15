import { useState } from 'react'

import Button from 'components/Button'
import Dropdown from 'components/Dropdown'
import Logo from 'components/Logo'
import utils from 'utils'

import Sidebar from './components/Sidebar'

const Header = () => {
	const [showSidebar, setShowSidebar] = useState(false)

	const toggleSidebar = () => {
		setShowSidebar(!showSidebar)
	}

	const dismissSidebar = () => {
		setShowSidebar(false)
	}

	return (
		<header className='text-neutral-200 pt-6 px-4 lg:pt-8 lg:px-10 mb-6 lg:mb-16'>
			<div className='flex flex-row justify-between items-center lg:justify-normal'>
				<div className='md:mr-14'>
					<Logo />
				</div>

				<button id='mobile menu' type='button' onClick={toggleSidebar}>
					<img
						src='assets/images/icon-menu.svg'
						alt='mobile menu'
						className='lg:hidden'
					/>
				</button>

				<nav className='hidden lg:flex lg:flex-1 lg:flex-row lg:items-center lg:justify-between'>
					<ul className='flex flex-row space-x-10'>
						{utils.NAVIGATION_LINKS.map((link) => {
							if (link.subLinks && link.subLinks.length !== 0) {
								return (
									<li key={link.name}>
										<Dropdown label={link.name} options={link.subLinks} />
									</li>
								)
							}

							return (
								<li
									key={link.name}
									className='hover:text-neutral-300 hover:-translate-y-1 transition duration-300 ease-out'
								>
									<a href='/#'>{link.name}</a>
								</li>
							)
						})}
					</ul>

					<div className='flex flex-row space-x-10 items-center'>
						<a
							href='/#'
							onClick={dismissSidebar}
							className='hover:text-neutral-300 hover:-translate-y-1 transition duration-300 ease-out'
						>
							Login
						</a>

						<Button
							type='outline'
							onClick={dismissSidebar}
							className='self-center'
						>
							Register
						</Button>
					</div>
				</nav>
			</div>

			{/* Sidebar. */}
			<Sidebar visible={showSidebar} onDismiss={dismissSidebar} />
		</header>
	)
}

export default Header
