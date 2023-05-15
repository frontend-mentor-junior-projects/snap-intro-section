import { useRef, useState } from 'react'

import Icons from 'components/Icons'
import useClickOutsideToClose from 'hooks/useClickOutsideToClose'
import utils from 'utils'

type DropdownProps = {
	label: string | React.ReactNode
	options: { name: string; image?: string }[]
}

const Dropdown = ({ label, options }: DropdownProps) => {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false)

	const toggleDropdown = () => {
		setIsDropdownOpen(!isDropdownOpen)
	}

	const closeDropdown = () => {
		setIsDropdownOpen(false)
	}

	const dropdownContainerRef = useRef<HTMLDivElement>(null)
	useClickOutsideToClose(dropdownContainerRef, setIsDropdownOpen)

	return (
		<div className='relative inline' ref={dropdownContainerRef}>
			<button onClick={toggleDropdown} type='button'>
				<div className='flex flex-row items-center'>
					<p
						className={` mr-2 ${
							isDropdownOpen ? 'text-neutral-300' : ''
						} transition duration-300 ease-out hover:text-neutral-300`}
					>
						{label}
					</p>

					<div
						className={`flex items-center ${
							isDropdownOpen ? 'rotate-180' : 'rotate-0'
						} transition duration-300 ease-out`}
					>
						<Icons.ArrowDown
							stroke={
								isDropdownOpen
									? utils.Colors['neutral-300']
									: utils.Colors['neutral-200']
							}
						/>
					</div>
				</div>
			</button>

			<div
				className={`bg-white shadow-xl rounded-md p-6 absolute top-10 left-0 ${
					isDropdownOpen ? 'opacity-100' : 'opacity-0'
				} transition duration-300 ease-out z-10`}
			>
				<ul className='space-y-6 text-neutral-200 max-w-[400px] w-max'>
					{options.map((option) => {
						return (
							<li
								key={option.name}
								className='flex flex-row items-center hover:text-neutral-300 hover:cursor-pointer'
							>
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
