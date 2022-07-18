import React from 'react'
import { AppBar, Grow, Icon, IconButton, Link, Menu, MenuItem, Stack, Toolbar, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import MenuHome from './components/Menu';
import SwitchMode from '../../components/SwitchMode';
import { useCustomTheme } from '../../context';

export default function Nav() {
  const { dark } = useCustomTheme()
    return (
    <div>
      <AppBar color='transparent'>
        <Container maxWidth="xl">
          <Toolbar>
            <Stack spacing={4} direction="row" sx={{ flexGrow: 1, justifyContent: 'center', display: { xs: 'none', md: 'flex'} }} >
              <Link color={ dark ? '#59C8D4' : "#000"} href="#home" underline="none">Home</Link>
              <Link color={ dark ? '#59C8D4' : "#000"} href="#sobre" underline="none">Sobre</Link>
              <Link color={ dark ? '#59C8D4' : "#000"} href="#projects" underline="none">Projetos</Link>
              <Link color={ dark ? '#59C8D4' : "#000"} href="#contact" underline="none">Contato</Link>
              <Link color={ dark ? '#59C8D4' : "#000"} href='https://www.linkedin.com/in/tainasaboia/' target="_blank" rel="noopener noreferrer"><LinkedInIcon/></Link>
              <Link color={ dark ? '#59C8D4' : "#000"} href='https://github.com/tasaboia' target="_blank" rel="noopener noreferrer"><GitHubIcon/></Link>
              <Link color={ dark ? '#59C8D4' : "#000"} href='https://twitter.com/tainasaboia' target="_blank" rel="noopener noreferrer"><TwitterIcon /></Link>
              <Link color={ dark ? '#59C8D4' : "#000"} href='https://www.instagram.com/tasaboia/' target="_blank" rel="noopener noreferrer"><InstagramIcon /></Link>
            </Stack>
            <MenuHome/>
            <Stack direction='column' alignSelf='flex-end'>
              <SwitchMode/>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  )
}
