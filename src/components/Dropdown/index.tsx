import { useRef, useState } from 'react'

import Icons from 'components/Icons'
import utils from 'components/utils'
import useClickOutsideToClose from 'hooks/useClickOutsideToClose'

type DropdownProps = {
	label: string | React.ReactNode
	options: { name: string; image?: string }[]
}

const Dropdown = ({ label, options }: DropdownProps) => {
	const [isOpen, setIsOpen] = useState(false)

	const toggleDropdown = () => {
		setIsOpen(!isOpen)
	}

	const closeDropdown = () => {
		setIsOpen(false)
	}

	const dropdownContainerRef = useRef<HTMLDivElement>(null)
	useClickOutsideToClose(dropdownContainerRef, setIsOpen)

	return (
		<div className='relative inline' ref={dropdownContainerRef}>
			<button onClick={toggleDropdown} type='button'>
				<div className='flex flex-row items-center'>
					<p
						className={` mr-2 ${
							isOpen ? 'text-neutral-300' : ''
						} transition duration-300 ease-out hover:text-neutral-300`}
					>
						{label}
					</p>

					<div
						className={`flex items-center ${
							isOpen ? 'rotate-180' : 'rotate-0'
						} transition duration-300 ease-out`}
					>
						<Icons.ArrowDown
							stroke={
								isOpen
									? utils.Colors['neutral-300']
									: utils.Colors['neutral-200']
							}
						/>
					</div>
				</div>
			</button>

			<div
				className={`bg-white shadow-md rounded-md p-6 absolute top-10 left-0 ${
					isOpen ? 'opacity-100' : 'opacity-0'
				} transition duration-300 ease-out z-10`}
			>
				<ul className='space-y-6 text-neutral-200 max-w-[400px] w-max'>
					{options.map((option) => {
						return (
							<li className='flex flex-row items-center hover:text-neutral-300 hover:cursor-pointer'>
								{option.image && (
									<img src={option.image} className='h-4 mr-4' alt='' />
								)}
								<a href='/#' onClick={closeDropdown}>
									{option.name}
								</a>
							</li>
						)
					})}
				</ul>
			</div>
		</div>
	)
}

export default Dropdown
