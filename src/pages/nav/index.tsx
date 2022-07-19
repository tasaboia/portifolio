import React from 'react'
import { AppBar, Stack, Toolbar, Typography, Link} from '@mui/material'
import { Container } from '@mui/system'
import MenuHome from './components/Menu';
import SwitchMode from '../../components/SwitchMode';
import { useCustomTheme } from '../../context';

const links = [
  {
    title: 'Home',
    link: '#home',
  },
  {
    title: 'Sobre',
    link: '#sobre',
  },
  {
    title: 'Projetos',
    link: '#projetos',
  },
  {
    title: 'Contato',
    link: '#contato',
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
                <Link key={key} style={{textDecoration: 'none'}} href={item.link}>
                  <Typography key={key+'text'}  color={dark? '#9093D8' : '#000'}>
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
