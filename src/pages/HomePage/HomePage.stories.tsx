import { Meta, StoryObj } from '@storybook/react'

import HomePage from '.'

const meta: Meta<typeof HomePage> = {
	title: 'Pages/Home',
	component: HomePage,
}

export default meta
type Story = StoryObj<typeof HomePage>

export const Default: Story = {}
