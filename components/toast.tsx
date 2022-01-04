import { useState } from 'react'
import { Button } from './button'

interface ToastProps {
  children: React.ReactChild
  hasCloseButton: boolean
  show: boolean
}

const Toast = ({ children, hasCloseButton, show }: ToastProps): JSX.Element => {
  const [close, setClose] = useState(false)
  const handleCloseButton = () => {
    setClose(true)
  }
  return (
    <div>
      {children}
      {hasCloseButton && (
        <Button type="button" onClick={handleCloseButton}>
          X
        </Button>
      )}
    </div>
  )
}
