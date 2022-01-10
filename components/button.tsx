interface ButtonProps {
  children: React.ReactNode
  type: 'button' | 'submit' | 'reset'
  variant?: 'primary' | 'secondary' | 'danger' | 'outline' | 'ghost'
  isDisabled?: boolean
  fullWidth?: boolean
  hasIconOnly?: boolean
  onClick: () => void
  className?: string
}

const Button = ({
  children,
  isDisabled = false,
  onClick,
  className,
  fullWidth,
  variant = 'primary',
  ...props
}: ButtonProps): JSX.Element => {
  const cx = [
    variant === 'outline' && 'border border-gray-500',
    variant === 'primary' &&
      'bg-red-600 text-white hover:bg-red-700 hover:text-gray-200',
    fullWidth && 'w-full',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <button
      className={`${cx} text-sm font-semibold  py-3 px-4 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-red-700 focus-visible:ring-offset-2 focus-visible:ring-offset-white flex justify-center leading-none`}
      {...props}
      onClick={onClick}
      disabled={isDisabled}
    >
      {children}
    </button>
  )
}

export { Button }
