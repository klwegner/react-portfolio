import * as React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import juniperTree from '../assets/theJuniperTree.png';
import muzak from '../assets/muzak.png';
import underTheSun from '../assets/UndertheSun.png';
import cringe from '../assets/cringe.png';
import realEstateAoo from '../assets/realEstateApp.png';




const cards = [
    {
        id: 1,
        name: "The Juniper Tree",
        description: "A simple game that combines vanilla JS with my love, literature. Inspired by the classic Brothers Grimm fairytale \"The Juniper Tree,\" you must avenge your death at the hands of your twisted stepmother. Warning: not optimized for small screens.",
        imageSrc: juniperTree,
        link: "https://klwegner.github.io/The-Juniper-Tree/"
    },
    {
        id:2,
        name: "Cringe App",
        description: "Cringe is a social media-style app dedicated to compiling \"cringe\" pictures. Cringe is made with HTML, CSS, Handlebars, and NodeJs and features CRUD capabilities. Finding ridiculous posts on social media is a common pastime. I wanted to build a site that could host a slew of them for easy access!",
        imageSrc: cringe,
        link: ""

    },
    {
        id:3,
        name: "Under the Sun",
        description: "Under the Sun is made with the MERN stack and experiments with the Google Maps API. With it, users list and update places to go and things to do while visiting.",
        imageSrc: underTheSun,
        link: "https://main--gilded-profiterole-8a135b.netlify.app/"

    },
    {
        id:4,
        name: "Muzak Player",
        description: "A simple React music player with audio controls. I utilized both Bootstrap 4 and MUI when styling this site and experimented with animate css.",
        imageSrc: muzak,
        link: "https://kristenmuzakplayer.netlify.app/"

    },
    {
      id:5,
      name: "Unlock Tampa Bay",
      description:"A site to help people seeking housing find the best rental or property to purchase in Tampa Bay. Allows users to upload details of the property and handle image upload through Cloudinary. Users can edit and delete their own postings. This site was built with next.js, styled with Chakra-UI, and hosted on Vercel (front-end) and Render (back-end)." ,
      imgSrc: realEstateAoo,
      link: "https://real-estate-app-project-v2-i2wr6gn2r-klwegners-projects.vercel.app/"
   }
]

const ProjectsPage = () => {
    const navigate = useNavigate();

  return (
    <>
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
My Projects
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph
                    sx={{
        display: { xs: 'none'}
      }}
            >
              JavaScript is my first language, and the one used in these projects. 
              You will find that several utilize React and various libraries for styling.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
                        

                        <Button variant="contained" sx={{bgcolor:'#576F72'}} onClick={() =>{
                            navigate('/contact')
                        }} >Contact Information</Button>
                        <Button variant="outlined" sx={{bgcolor:'#7D9D9C', color:'white'}} onClick = {() =>{
                            navigate('/experience')
                            }}>My Work Experience</Button>
            </Stack>
          </Container>
        </Box>


        {/* START CARDS */}

        <Container sx={{ py: 8,     marginBottom: {
      xs: '20vw', // for screens smaller than 600px
      sm: '10vw', // for screens 600px and larger
    }}} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column', backgroundColor:'#E4DCCF' }}
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
                    <Typography gutterBottom variant="h5" component="h2" color="#576F72">
                      {card.name}
                    </Typography>
                    <Typography>
                  {card.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                   <a href = {card.link}> <Button size="small" sx={{color:'#576F72'}}>View Project</Button> </a>
                    {/* <Button size="small">Edit</Button> */}
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    {/* </ThemeProvider> */}

    </>
  );
};

export default ProjectsPage;