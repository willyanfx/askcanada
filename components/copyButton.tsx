import { Button } from './button'
import copy from '../assets/copy.svg'
import Image from 'next/image'

interface CopyButtonProps {
  text: string
}

const CopyButton = ({ text }: CopyButtonProps) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(text)
  }

  return (
    <div>
      <Button onClick={handleCopy} hasIconOnly type="button">
        <Image src={copy} width={16} height={16} alt="copy" />
      </Button>
      <input type="text" value={text} />
    </div>
  )
}

export { CopyButton }
