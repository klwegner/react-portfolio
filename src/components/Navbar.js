import { Link } from "react-router-dom";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import CodeIcon from '@mui/icons-material/Code';
import CodeOffIcon from '@mui/icons-material/CodeOff';
// import Logo from '../assets/letter-k.png';
import '../styles/Navbar.css';



const pages = [
    {
        name: 'About',
        linkTo: '/about'
    },
    {
        name: 'Projects',
        linkTo: "/projects"
    },
    {
        name: 'Education',
        linkTo: '/education'
    },
    {        
        name: 'Contact',
        linkTo: '/contact'
},
    {
        name: 'Experience',
        linkTo: '/experience'
    }
];


const Navbar = () => {


return (
  <AppBar position="static">
    <Container maxWidth="xl">
      <Toolbar disableGutters>
        <CodeIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
        <Typography
          variant="h6"
          noWrap
          component="a"
          href='/'
          sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          Kristen Wegner
        </Typography>
        <CodeOffIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />


        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            // onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}

            sx={{
              display: { xs: 'block', md: 'none' },
            }}
          >
            {pages.map((page) => (
              <MenuItem key={page.name}>
<Link to={page.linkTo}>
                <Typography textAlign="center">{page.name}</Typography>
                </Link>
              </MenuItem>
            ))}
          </Menu>
        </Box>
        <CodeIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
        <Typography
          variant="h5"
          noWrap
          component="a"
          href="#app-bar-with-responsive-menu"
          sx={{
            mr: 2,
            display: { xs: 'flex', md: 'none' },
            flexGrow: 1,
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          Kristen Wegner
        </Typography>
        <CodeOffIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />

        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          {pages.map((page) => (
            <Link to={page.linkTo}>

            <Button
              key={page.name}
            //   onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              {page.name}
            </Button>
</Link>
          ))}
        </Box>
      </Toolbar>
    </Container>
  </AppBar>
);

          };


export default Navbar;