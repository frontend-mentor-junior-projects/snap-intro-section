import { Meta, StoryObj } from '@storybook/react'

import Accordion from '.'

const meta: Meta<typeof Accordion> = {
	title: 'Components/Accordion',
	component: Accordion,
	args: {
		children: 'Company',
		content: (
			<div>
				<ul className='space-y-6 text-neutral-200'>
					<li>History</li>
					<li>Our Team</li>
					<li>Blog</li>
				</ul>
			</div>
		),
	},
}

export default meta
type Story = StoryObj<typeof Accordion>

export const Default: Story = {}
