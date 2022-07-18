import React from 'react'
import { AppBar, Grow, Icon, IconButton, Link, Menu, MenuItem, Stack, Toolbar, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import MenuHome from './components/Menu';


export default function Nav() {
  
    return (
    <div>
      <AppBar color='transparent'>
        <Container maxWidth="xl">
          <Toolbar>
            <Stack spacing={4} direction="row" sx={{ flexGrow: 1, justifyContent: 'center', display: { xs: 'none', md: 'flex'} }} >
              <Link href="#home" underline="none">Home</Link>
              <Link href="#sobre" underline="none">Sobre</Link>
              <Link href="#projects" underline="none">Projetos</Link>
              <Link href="#ontact" underline="none">Contato</Link>
              <Link href='#'><LinkedInIcon/></Link>
              <Link href='#'><GitHubIcon/></Link>
              <Link href='#'><TwitterIcon /></Link>
              <Link href='#'><InstagramIcon /></Link>
            </Stack>
            <MenuHome/>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  )
}
