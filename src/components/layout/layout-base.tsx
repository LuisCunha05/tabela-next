import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Text } from '@/components/ui/text'
import React from 'react'

interface LayoutBaseProps {
  className?: string
  children?: React.ReactNode
}

const LayoutBase = ({ children, className }: LayoutBaseProps) => {
  return (
    <div className="flex grow">
      <div className="min-h-full w-64 flex flex-col justify-center items-center bg-cyan-900">
        <Text
          align="center"
          color="white"
          size="bigger"
          weight="medium"
          tag="h2"
          text="Opcoes"
        />
        <Button>Galeria</Button>
        <Button>Editar</Button>
      </div>
      <div
        className={cn(
          'min-h-full w-full flex justify-center items-center bg-slate-800',
          className,
        )}
      >
        {children}
      </div>
    </div>
  )
}

export { LayoutBase }
