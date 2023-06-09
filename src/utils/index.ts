const Colors = {
	'neutral-100': 'hsl(0, 0%, 98%)',
	'neutral-200': 'hsl(0, 0%, 41%)',
	'neutral-300': 'hsl(0, 0%, 8%)',
}

const NAVIGATION_LINKS: {
	name: string
	subLinks?: { name: string; image?: string }[]
}[] = [
	{
		name: 'Features',
		subLinks: [
			{ name: 'Todo List', image: 'assets/images/icon-todo.svg' },
			{ name: 'Calendar', image: 'assets/images/icon-calendar.svg' },
			{ name: 'Reminders', image: 'assets/images/icon-reminders.svg' },
			{ name: 'Planning', image: 'assets/images/icon-planning.svg' },
		],
	},
	{
		name: 'Company',
		subLinks: [{ name: 'History' }, { name: 'Our Team' }, { name: 'Blog' }],
	},
	{ name: 'Careers' },
	{ name: 'About' },
]

const FEATURED_CLIENTS = [
	{ name: 'databiz', image: 'assets/images/client-databiz.svg' },
	{ name: 'audiophile', image: 'assets/images/client-audiophile.svg' },
	{ name: 'meet', image: 'assets/images/client-meet.svg' },
	{ name: 'maker', image: 'assets/images/client-maker.svg' },
]

export default {
	Colors,
	NAVIGATION_LINKS,
	FEATURED_CLIENTS,
}
