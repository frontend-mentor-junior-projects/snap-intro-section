import { Meta, StoryObj } from '@storybook/react'

import Button from '.'

const meta: Meta<typeof Button> = {
	title: 'Components/Button',
	component: Button,
	args: {
		children: 'Learn more',
	},
}

export default meta
type Story = StoryObj<typeof Button>

export const Filled: Story = {
	args: {
		type: 'filled',
	},
}

export const Outline: Story = {
	args: {
		type: 'outline',
	},
}
