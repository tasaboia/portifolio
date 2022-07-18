import React, { createContext, useContext, useState } from 'react'

interface IThemeMode{
  dark?: boolean
  setDark: (dark: boolean) => void
}


export const ThemeModeContext = createContext<IThemeMode>(
  {} as  IThemeMode,
)

interface CustomThemeProvider{
  children?: React.ReactNode | React.ReactNode [];
}

export function CustomThemeProvider ({ children } : CustomThemeProvider ){
  const [dark, setDark] = useState(false)

  return(
    <>
      <ThemeModeContext.Provider value={{ dark, setDark }}> 
        {children}
      </ThemeModeContext.Provider>
    </>
  )
}

export function useCustomTheme(){
  const context = useContext(ThemeModeContext)
  return context
}