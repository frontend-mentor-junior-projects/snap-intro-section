import React from 'react'

import type { Preview } from '@storybook/react'
import 'tailwindcss/tailwind.css'
import lib from './lib'

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
			viewports: { ...lib.CUSTOM_VIEWPORTS },
		},
	},
}

export default preview
