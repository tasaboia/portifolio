import React from "react"
import { BrowserRouter } from "react-router-dom";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material"
import Wrapper from "./src/components/Wrapper"
import Contact from "./src/pages/contact"
import Footer from "./src/pages/footer"
import Home from "./src/pages/home"
import Nav from "./src/pages/nav"
import Projects from "./src/pages/projects"
import Skills from "./src/pages/skills"
import Router from "./src/routes";


const theme = createTheme({
  palette: {
    primary: {
      main: '#000',
    },
  },
  typography: {
    fontFamily: [
      'Oswald',
      'sans-serif',
    ].join(','),
  }
});

export default function App() {
  
  return (
    <>
      <CssBaseline>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Wrapper>
              <Nav/>    
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