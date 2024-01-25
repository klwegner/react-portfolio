import "../styles/AboutMe.css"
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const AboutMe = () => {

  return (
    <>
      {/* <CssBaseline /> */}
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: '#E4DCCF',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="#576F72"
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
