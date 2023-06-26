import Header from 'components/Header'

type PageLayoutProps = {
	children: React.ReactNode | React.ReactNode[]
}

const PageLayout = ({ children }: PageLayoutProps) => {
	return (
		<>
			<Header />

			{children}
		</>
	)
}

export default PageLayout
