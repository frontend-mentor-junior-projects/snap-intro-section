import Accordion from 'components/Accordion'
import Button from 'components/Button'
import utils from 'utils'

type SidebarProps = {
	visible: boolean
	onDismiss: () => void
}

const Sidebar = ({ visible, onDismiss }: SidebarProps) => {
	return (
		<div
			className={`w-full h-full fixed inset-0  ${
				visible ? '' : 'invisible'
			} text-[14px]`}
		>
			<div
				className={`w-full h-full bg-black absolute inset-0 ${
					visible ? 'opacity-50' : 'opacity-0'
				} transition ease-in-out duration-300`}
			/>
			<nav
				className={`bg-neutral-100 px-6 pt-6 absolute h-full top-0 right-0 w-[240px]  ${
					visible ? 'translate-x-0 ' : 'translate-x-full'
				} transition ease-in-out duration-500`}
			>
				<div className='flex flex-col'>
					<button type='button' className='mb-8 self-end' onClick={onDismiss}>
						<img src='assets/images/icon-close-menu.svg' alt='' />
					</button>

					<ul className='space-y-6 mb-10'>
						{utils.NAVIGATION_LINKS.map((link) => {
							if (link.subLinks && link.subLinks.length !== 0) {
								return (
									<li key={link.name}>
										<Accordion
											content={
												<div>
													<ul className='space-y-6 text-neutral-200'>
														{link.subLinks.map((subLink) => {
															return (
																<li
																	key={subLink.name}
																	className='flex flex-row items-center'
																>
																	{subLink.image && (
																		<img
																			src={subLink.image}
																			className='h-4 mr-4'
																			alt=''
																		/>
																	)}
																	<a href='/#' onClick={onDismiss}>
																		{subLink.name}
																	</a>
																</li>
															)
														})}
													</ul>
												</div>
											}
										>
											{link.name}
										</Accordion>
									</li>
								)
							}

							return (
								<li key={link.name}>
									<a href='/#' onClick={onDismiss}>
										{link.name}
									</a>
								</li>
							)
						})}
					</ul>
				</div>

				<div className='flex flex-col items-center'>
					<a href='/#' className='mb-4' onClick={onDismiss}>
						Login
					</a>
					<Button
						type='outline'
						onClick={onDismiss}
						className='self-center w-full'
					>
						Register
					</Button>
				</div>
			</nav>
		</div>
	)
}

export default Sidebar
