import React from 'react'

import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

import type { Preview } from '@storybook/react'
import 'tailwindcss/tailwind.css'

import utils from '../src/components/utils'

const CUSTOM_VIEWPORTS = {
	mobile_320: {
		name: 'Mobile 320',
		type: 'mobile',
		styles: {
			width: '320px',
			height: '780px',
		},
	},
	mobile_375: {
		name: 'Mobile 375',
		type: 'mobile',
		styles: {
			width: '375px',
			height: '780px',
		},
	},
	desktop_1440: {
		name: 'Desktop 1440',
		type: 'desktop',
		styles: {
			width: '1440px',
			height: '900px',
		},
	},
}

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
		options: {
			storySort: (a, b) =>
				a.id === b.id
					? 0
					: a.id.localeCompare(b.id, undefined, { numeric: true }),
		},
		viewport: {
			viewports: { ...INITIAL_VIEWPORTS, ...CUSTOM_VIEWPORTS },
		},
		// Remove padding aroun stories.
		// layout: 'fullscreen',
	},
	// TODO: Tailwind utilties are being ignored by Storybook.
	// decorators: [
	// 	(Story) => {
	// 		return (
	// 			<div
	// 				style={{
	// 					backgroundColor: utils.Colors['neutral-100'],
	// 					height: '100%',
	// 				}}
	// 			>
	// 				<Story />
	// 			</div>
	// 		)
	// 	},
	// ],
}

export default preview
