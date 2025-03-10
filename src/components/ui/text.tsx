import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const textVariants = cva(
  'text-base text-left text-slate-500 font-normal leading-none',
  {
    variants: {
      size: {
        small: 'text-xs',
        regular: 'text-base',
        big: 'text-xl',
        bigger: 'text-3xl',
      },
      weight: {
        thin: 'font-light',
        regular: 'text-normal',
        medium: 'text-medium',
        bold: 'text-bold',
      },
      color: {
        sl500: 'text-slate-500',
        sl700: 'text-slate-700',
        st500: 'text-stone-500',
        am400: 'text-amber-400',
        or600: 'text-orange-600',
        lm400: 'text-lime-400',
        cy400: 'text-cyan-400',
        white: 'text-slate-50',
      },
      align: {
        left: 'text-left',
        right: 'text-right',
        center: 'text-center',
      },
    },
    defaultVariants: {
      size: 'regular',
      weight: 'regular',
      color: 'sl500',
      align: 'left',
    },
  },
)

interface TextProps {
  text: string
  className?: string
  tag?: keyof React.JSX.IntrinsicElements
}

const Text = ({
  tag = 'h1',
  text,
  size,
  weight,
  color,
  align,
  className,
}: VariantProps<typeof textVariants> & TextProps) => {
  const Tag = tag || ('h1' as keyof React.JSX.IntrinsicElements)
  return (
    <Tag
      className={cn(textVariants({ size, weight, color, align }), className)}
    >
      {text}
    </Tag>
  )
}

export { Text, textVariants }
