import React, { useState } from "react"
import { BrowserRouter } from "react-router-dom";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material"
import { PaletteMode } from '@mui/material';
import { amber, deepOrange, grey } from '@mui/material/colors';
import { useCustomTheme } from "./context";
import Wrapper from "./components/Wrapper";
import Home from "./pages/home";
import Skills from "./pages/skills";
import Projects from "./pages/projects";
import Contact from "./pages/contact";

const getDesignTokens = (dark : boolean | undefined) => ({
  palette: {
    text: {
        primary: dark ? '#00FFF0' : '#000',
        secondary: dark ? '#00FFF0' : '#000',
    },
  },
  
});


export default function Site() {
  
const {dark} = useCustomTheme()
const theme = createTheme(getDesignTokens(dark));
  return (
    <>
      <CssBaseline>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
              <Wrapper>
                <Home/>
                <Skills/>
                <Projects/>
                <Contact/>
              </Wrapper>
          </BrowserRouter>
        </ThemeProvider>
      </CssBaseline>
    </>
  )
}