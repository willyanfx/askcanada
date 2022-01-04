interface TagProps {
  text: string
  isRound: boolean
  size: 'sm' | 'md' | 'lg'
  variant: 'info' | 'success' | 'danger' | 'warning' | 'ghost'
  onRemove: () => void
  icon: string
}

const Tag = ({ text, isRound, size, variant, onRemove, icon }: TagProps) => {
  return <div>{text}</div>
}

export { Tag }
