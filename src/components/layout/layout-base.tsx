import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface LayoutBaseProps {
  className?: string
  children?: React.ReactNode;
}

const LayoutBase = ({children, className}: LayoutBaseProps) =>{
  return (
    <div className="flex">
      <div className="h-full w-40 flex flex-col justify-center items-center">
        <h2>Opções</h2>
        <Button>
          Galeria
        </Button>
        <Button>
          Editar
        </Button>
      </div>
      <div className={cn('h-full w-full flex justify-center items-center', className)}>
        {children}
      </div>
    </div>
  )
}

export { LayoutBase }