import React from 'react'
import Site from './src'
import { CustomThemeProvider } from './src/context'

export default function App() {
  return (
      <CustomThemeProvider>
        <Site/>
      </CustomThemeProvider>
    )
}
