import './globals.css'
import { Inter } from 'next/font/google'
import React from 'react'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
  display: 'swap'
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${inter.className} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
