import "../styles/AboutMe.css"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
//import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import juniperTree from '../assets/theJuniperTree.png';
import muzak from '../assets/muzak.png';
import underTheSun from '../assets/UndertheSun.png';
import cringe from '../assets/cringe.png';

const AboutMe = () => {

  return (
    <>
      {/* <CssBaseline /> */}
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
About Me
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>


        I believe in the power that coding holds to make our lives richer,
        healthier, and happier. Working in higher education, I see 
        how quality web development and skillful integrations between
        SaaS providers makes clear the way to focus on what really matters: learning.  


            </Typography>
          </Container>
        </Box>
             
      </main>

    </>
  );
};

export default AboutMe;
