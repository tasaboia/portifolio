import React from 'react'
import { AppBar, IconButton, Stack, Toolbar, Typography } from '@mui/material'
import { Container } from '@mui/system'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import MenuHome from './components/Menu';
import SwitchMode from '../../components/SwitchMode';
import { useCustomTheme } from '../../context';
import { Link } from "react-router-dom";

const links = [
  {
    title: 'Home',
    link: '/',
  },
  {
    title: 'Sobre',
    link: '/sobre',
  },
  {
    title: 'Projetos',
    link: '/projetos',
  },
  {
    title: 'Contato',
    link: '/contato',
  }
]

export default function Nav() {
  const { dark } = useCustomTheme()
    return (
    <div>
      <AppBar color='transparent'>
        <Container maxWidth="xl">
          <Toolbar>
            
            <Stack spacing={4} direction="row" sx={{ flexGrow: 1, justifyContent: 'center', display: { xs: 'none', md: 'flex'} }} >
              {links.map((item, key) => (
                <Link key={key} style={{textDecoration: 'none'}} to={item.link}>
                  <Typography key={key+'text'}  color={dark? '#05C5DF' : '#000'}>
                    {item.title}
                  </Typography>
                </Link>
              ))}
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
