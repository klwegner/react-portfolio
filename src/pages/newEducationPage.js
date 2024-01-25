import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import Card from '@mui/material/Card';
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
    backgroundColor: 'background.paper',
  };

  const style2= {
     p: 2,
    // width: '80%',
    display: 'flex',
    justifyContent: 'center',
  }


const NewEducationPage = () => {

  return (
    // <ThemeProvider theme={defaultTheme}>
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
Education            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              My education has been very eclectic and helped shape my flexibility as a developer today. Studying English taught me how to communicate effectively and efficiently; studying coding taught me how to craft the apps and integrations I do today!
            </Typography>
          </Container>
        </Box>

        <Container sx={{ py: 8 }} maxWidth="md">

        <Box sx={style2}>

<List sx={style}>
  <ListItem>
  <ListItemText primary={<Typography variant="h4">A.S. in Computer Science, Hillsborough Community College, in progress</Typography>} />
  </ListItem>
  <Typography variant="h5"><ul> Programming Logic, Java, AI</ul></Typography>

  <Divider variant="inset" component="li" />


  <ListItem>
    <ListItemText  primary={<Typography variant="h4">EdX Certificate, Completed Jul. 2023</Typography>} />
  </ListItem>
  <Typography variant="h5"><ul> Introduction to Python</ul></Typography>

  <Divider variant="inset" component="li" />

  <ListItem>
    <ListItemText primary={<Typography variant="h4">Full-Stack Web Development Bootcamp, Ironhack, Completed Aug. 2022</Typography>} />
   
  </ListItem>
  <Typography variant="h5"> <ul> React, Node, Express, MongoDB, HTML, CSS</ul></Typography>

  <Divider variant="inset" component="li" />
  <ListItem>
    <ListItemText primary={<Typography variant="h4">B.A. in English Literature, University of South Florida, Completed Dec. 2016</Typography>} />
  </ListItem>
  <Divider variant="inset" component="li" />
</List>
</Box>



        </Container>
      </main>




    </>
  );
};

export default NewEducationPage;