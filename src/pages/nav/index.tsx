import React from 'react'
import { AppBar, Grow, Icon, IconButton, Link, Menu, MenuItem, Stack, Toolbar, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import MenuIcon from '@mui/icons-material/Menu';

const pages = ['Home', 'Sobre', 'Projetos', 'Contato'];

export default function Nav() {
  
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div>
      <AppBar  color='transparent'>
        <Container maxWidth="xl">
          <Toolbar>
            <Stack spacing={4} direction="row" sx={{ flexGrow: 1, justifyContent: 'center', display: { xs: 'none', md: 'flex'} }} >
              <Link href="#" underline="none">Home</Link>
              <Link href="#" underline="none">Sobre</Link>
              <Link href="#" underline="none">Projetos</Link>
              <Link href="#" underline="none">Contato</Link>
              <Link href='#'><LinkedInIcon/></Link>
              <Link href='#'><GitHubIcon/></Link>
              <Link href='#'><TwitterIcon /></Link>
              <Link href='#'><InstagramIcon /></Link>
            </Stack>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  )
}
