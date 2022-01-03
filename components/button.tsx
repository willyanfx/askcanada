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
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button {...props} disabled={isDisabled}>
      {children}
    </button>
  )
}

export { Button }
