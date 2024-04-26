import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';


const style = {
  py: 0,
  width: '100%',
  maxWidth: '90%',
  borderRadius: 2,
  border: '1px solid',
  borderColor: 'divider',
  backgroundColor: '#F0EBE3', //main color
  };

  const style2= {
     p: 2,
backgroundColor:'#E4DCCF', //creamish green
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    marginBottom: {
      xs: '20vw', // for screens smaller than 600px
      sm: '10vw', // for screens 600px and larger
    }
  }


const EducationPage = () => {

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
Education            </Typography>
            <Typography variant="h5" align="center" color="#576F72" paragraph>
              My eclectic education has shaped my flexibility as a developer today: skilled in communication and adept in crafting applications and integrations. 

            </Typography>
          </Container>
        </Box>

        <Container sx={{ py: 8, maxWidth:'80vw'}}>

        <Box sx={style2}>

<List sx={style}>
  <ListItem>
  <ListItemText primary={<Typography variant="h4">A.S. in Computer Science, Hillsborough Community College</Typography>} />
  </ListItem>
  <Typography variant="h5" sx={{ fontStyle: 'italic' }}><ul>In progress</ul></Typography>

  <Typography variant="h5"><ul> Programming Logic
  <br/>
 Java
 <br/>
 AI
 <br/>
 Python
 <br/>
 Web Development</ul></Typography>

  <Divider variant="inset" component="li" />


  <ListItem>
    <ListItemText  primary={<Typography variant="h4">EdX Certificate</Typography>} />
  </ListItem>
  <Typography variant="h5" sx={{ fontStyle: 'italic' }}><ul>Completed Jul. 2023</ul></Typography>

  <Typography variant="h5"><ul> Introduction to Python</ul></Typography>

  <Divider variant="inset" component="li" />

  <ListItem>
    <ListItemText primary={<Typography variant="h4">Full-Stack Web Development Bootcamp, Ironhack</Typography>} />
   
  </ListItem>
  <Typography variant="h5" sx={{ fontStyle: 'italic' }}><ul>Completed Aug. 2022</ul></Typography>

  <Typography variant="h5"> <ul> React
  <br/>
 Node
 <br/>
 Express
 <br/>
 MongoDB
 <br/>
 HTML
 <br/>
 CSS</ul></Typography>

  <Divider variant="inset" component="li" />
  <ListItem>
    <ListItemText primary={<Typography variant="h4">B.A. in English Literature, University of South Florida</Typography>} />
  </ListItem>
  <Typography variant="h5" sx={{ fontStyle: 'italic' }}><ul>Completed Dec. 2016</ul></Typography>

  <Divider variant="inset" component="li" />
</List>
</Box>



        </Container>
      </main>




    </>
  );
};

export default EducationPage;