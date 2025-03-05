'use client'
import { useState } from 'react'
import { LayoutBase } from '@/components/layout/layout-base'
import { PdfExample } from '@/components/ui/pdf-example'
import { Button } from '@/components/ui/button'
import { PDFViewer } from '@react-pdf/renderer'

export default function Home(){
  const [ view, setView ] = useState(false)
  return (
    <LayoutBase className="flex-col gap-4">
      <Button onClick={() => setView(prev => !prev)}>
        Abri PDF
      </Button>
      {view && (
        <PDFViewer className="w-[50vw] h-[70vh]">
          <PdfExample />
        </PDFViewer>
      )}
    </LayoutBase>
  )
}
