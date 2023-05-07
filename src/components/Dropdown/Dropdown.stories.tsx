import { Meta, StoryObj } from '@storybook/react'

import Dropdown from '.'

const meta: Meta<typeof Dropdown> = {
	title: 'Components/Dropdown',
	component: Dropdown,
	args: {
		label: 'Company',
		options: [{ name: 'History' }, { name: 'Our Team' }, { name: 'Blog' }],
	},
}

export default meta
type Story = StoryObj<typeof Dropdown>

export const Default: Story = {}
