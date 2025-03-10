import React from 'react'
import { Page, Text, View, Document } from '@react-pdf/renderer'
import { tableStyle } from '@/table-style/cell'

// Create Document Component
const PdfExample = () => (
  <Document>
    <Page size="A4" style={tableStyle.page}>
      <View style={tableStyle.cell}>
        <Text>Texto 1</Text>
      </View>
      <View debug style={tableStyle.cell}>
        <Text debug>Texto 2</Text>
      </View>
    </Page>
  </Document>
)
export { PdfExample }
