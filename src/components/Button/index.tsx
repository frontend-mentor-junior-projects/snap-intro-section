type ButtonProps = {
	children: string
	type: 'filled' | 'outline'
	onClick: () => void
	// eslint-disable-next-line react/require-default-props
	className?: string
}

const Button = ({ children, type, onClick, className = '' }: ButtonProps) => {
	return (
		<button
			type='button'
			className={`h-12 px-6 rounded-2xl font-bold transition ease-out duration-500 hover:border-neutral-300 hover:bg-neutral-100 hover:text-neutral-300
        ${
					type === 'filled'
						? 'bg-neutral-300 text-neutral-100 hover:border'
						: ''
				}
        ${
					type === 'outline' ? 'border border-neutral-200 text-neutral-200' : ''
				}
        ${className}
      `}
			onClick={onClick}
		>
			{children}
		</button>
	)
}

export default Button
