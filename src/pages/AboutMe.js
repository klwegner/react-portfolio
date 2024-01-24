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


        {/* START CARDS */}

        {/* <Container sx={{ py: 8 }} maxWidth="md">

          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image={card.imageSrc}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.name}
                    </Typography>
                    <Typography>
                  {card.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                   <a href = {card.link}> <Button size="small">View Project</Button> </a>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container> */}
      </main>

    </>
  );








  return (
    <div className="aboutMe">
    <div className="uberSection">

<div className="section">
      <h2>About Me</h2>
      <p className="para">
        <em>I have always held a wild desire to learn and use what I know to help
        others.</em> Working as an educator and freelance content writer in the 21st
        century allowed me plenty of opportunity to utilize technology to do both,
        but...
      </p>

      <p className="para">
        I soon found that I wanted to learn how to <em>create</em> the technology I relied upon. Thus,
        learning web development became a natural next step. I enrolled in
        Ironhack's web development course and, months later, got my first job in web development in higher education,
        and never looked back.
      </p>

      <p className="para">
        <em>I believe in the power that coding holds to make our lives richer,
        healthier, and happier.</em> Working in higher education, I see 
        how quality web development and skillful integrations between
        SaaS providers enriches and betters our lives. 
      </p>

      <p className="para">And I intend to keep building the breadth and depth of my knowledge to do even more!</p>
</div>


      <div className="section">
        <h2>Experience With:</h2>
        <ul className="indent">
          <li>HTML</li>
          <li>CSS</li>
          <li>NodeJS</li>
          <li>React</li>
          <li>Handlebars</li>
          <li>Bootstrap</li>
          <li>Material UI</li>
          <li>Angular</li>
          <li>Apex</li>
        </ul>
      </div>
      <div className="section">
        <h2>Skilled In:</h2>
        <ul className="indent">
          <li>Collaboration</li>
          <li>Customer Service</li>
          <li>Conflict Resolution</li>
          <li>Verbal and Written Communication</li>
          <li>Problem-Solving</li>
          <li>Instructing and Presenting</li>
          <li>Content Writing</li>
        </ul>
      </div>
</div>
    </div>

  );
};

export default AboutMe;
