import { useRef } from 'react'

import Header from 'components/Header'

type PageLayoutProps = {
	mainContentRef: React.RefObject<HTMLElement>
	children: React.ReactNode | React.ReactNode[]
}

const PageLayout = ({ mainContentRef, children }: PageLayoutProps) => {
	const skipLinkRef = useRef<HTMLAnchorElement>(null)

	return (
		<>
			<a
				ref={skipLinkRef}
				href='#main-content'
				className='skip-link'
				onClick={() => {
					mainContentRef.current?.focus()
				}}
			>
				Skip to content
			</a>

			<Header />

			{children}
		</>
	)
}

export default PageLayout
