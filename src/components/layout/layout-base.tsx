import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface LayoutBaseProps {
  className?: string
  children?: React.ReactNode
}

const LayoutBase = ({ children, className }: LayoutBaseProps) => {
  return (
    <div className="flex grow">
      <div className="min-h-full w-40 flex flex-col justify-center items-center">
        <h2>Opções</h2>
        <Button>Galeria</Button>
        <Button>Editar</Button>
      </div>
      <div
        className={cn(
          'min-h-full w-full flex justify-center items-center',
          className,
        )}
      >
        {children}
      </div>
    </div>
  )
}

export { LayoutBase }
