import { expect } from '@storybook/jest'
import { Meta, StoryObj } from '@storybook/react'
import { userEvent, within } from '@storybook/testing-library'

import Header from '.'

const meta: Meta<typeof Header> = {
	title: 'Components/Header',
	component: Header,
	parameters: {
		layout: 'fullscreen',
	},
}

export default meta
type Story = StoryObj<typeof Header>

export const Default: Story = {
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)

		const mobileMenu = canvas.getByRole('button', {})
		await userEvent.click(mobileMenu)

		const sideBar = canvas.getByText('Login')

		await expect(sideBar).toBeInTheDocument()
	},
}
