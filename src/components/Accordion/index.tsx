import { useState } from 'react'

import Icons from 'components/Icons'

type AccordionProps = {
	children: string
	content: React.ReactNode | React.ReactNode[]
}

const Accordion = ({ children, content }: AccordionProps) => {
	const [isAccordionOpen, setIsAccordionOpen] = useState(false)

	const toggleAccordion = () => {
		setIsAccordionOpen(!isAccordionOpen)
	}

	return (
		<div>
			<div
				className='flex flex-row items-center'
				onClick={toggleAccordion}
				role='button'
				tabIndex={0}
				aria-hidden='true'
			>
				<p className='mr-4 text-neutral-200'>{children}</p>

				<div
					className={`${
						isAccordionOpen ? 'rotate-180' : 'rotate-0'
					} transition duration-300 ease-in-out flex items-center`}
				>
					<Icons.ArrowUp />
				</div>
			</div>

			<div
				className={`px-6 pt-0 overflow-hidden transition-all duration-300 ease-in ${
					isAccordionOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-50'
				}`}
			>
				<div className='pt-8'>{content}</div>
			</div>
		</div>
	)
}

export default Accordion
