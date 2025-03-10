import { StyleSheet } from '@react-pdf/renderer'

const tableStyle = StyleSheet.create({
  page: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: '8px',
    backgroundColor: '#e4e4e4',
  },
  cell: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '4px',
    backgroundColor: '#c8c8c8',
    borderColor: '#7b7b7b',
    borderWidth: 2,
    borderStyle: 'solid',
    flexGrow: 1,
    maxHeight: '48px',
    maxWidth: '96px',
    borderRadius: '4px',
  },
})

export { tableStyle }
