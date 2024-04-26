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
import CodeIcon from '@mui/icons-material/Code';
import CodeOffIcon from '@mui/icons-material/CodeOff';

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

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

return (
  <AppBar position="static" sx={{bgcolor:'#7D9D9C'}}>
    <Container maxWidth="100%" sx={{display:'flex'}} >
    <Toolbar disableGutters sx={{ display: 'flex', width: '100vw', margin: 0, justifyContent: 'space-between'}}>

    {/* shown at large size */}

        <CodeIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
        <Typography
          variant="h6"
          noWrap
          component="a"
          href='/'
          sx={{
       mr:0,
            display: { xs: 'none', md: 'flex' },
            // fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          Kristen Wegner
        </Typography>
        <CodeOffIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />

{/* hidden at large size */}

        <Box sx={{ border: '2px solid black', display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
             onClick={handleOpenNavMenu}
            color="inherit"
            sx={{margin:0}}
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
              <MenuItem key={page.name}>
              <Link to={page.linkTo}>
                <Typography textAlign="center" >{page.name}</Typography>
                </Link>
              </MenuItem>
            ))}
          </Menu>
        </Box>
        
        {/* also hidden at large size */}

        <CodeIcon sx={{ display: 'none', mr: 1 }} />
        <Typography
          variant="h5"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: { xs: 'flex', md: 'none' },
            // flexGrow: 1,
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
            width:'fit-content'
          }}
        >
          Kristen Wegner
        </Typography>
        <CodeOffIcon sx={{ display: 'none', mr: 1 }} />

{/* shown at large size */}
        <Box sx={{ flexGrow: 1, justifyContent:'flex-end', display: { xs: 'none', md: 'flex' } }}>
          {pages.map((page) => (
            <Link to={page.linkTo}>

            <Button
              key={page.name}
            onClick={handleCloseNavMenu}
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