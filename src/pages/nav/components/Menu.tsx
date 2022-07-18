import React from 'react'
import { Box, Link, IconButton, Menu, MenuItem } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';

export default function MenuHome () {

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
            <MenuItem onClick={handleCloseNavMenu}>
              <Link href='#home' underline="none">Home</Link>
            </MenuItem>
            <MenuItem onClick={handleCloseNavMenu}>
              <Link href='#sobre' underline="none">Sobre</Link>
            </MenuItem>
            <MenuItem onClick={handleCloseNavMenu}>
              <Link href='#projects' underline="none">Projetos</Link>
            </MenuItem>
            <MenuItem onClick={handleCloseNavMenu}>
              <Link href='#contact' underline="none">Contato</Link>
            </MenuItem>
        </Menu>
        </Box>
    </div>
  )
}
