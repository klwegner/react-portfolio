import "../styles/AboutMe.css"
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import List from '@mui/material/List';


const AboutMe = () => {



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
  


  return (
    <>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: '#E4DCCF',
            pt: 8,
            pb: 6,
            marginBottom: {
      xs: '0' // for screens smaller than 600px
    }}}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="#576F72"
            >
About Me
            </Typography>

          </Container>
        </Box>





        <Container sx={{ py: 8, maxWidth:'80vw'}}>


<Box sx={style2}>
        
        <List sx={style}>

        <Typography variant="h5" align="center" color="#576F72" paragraph>


        My name is Kristen Wegner, and I believe in the power that coding holds: the power to make our lives richer,
        healthier, and happier. 
        
        <br/>
        <br/>

        Working as a web developer in higher education, I see 
        how quality web development and skillful integrations between
        SaaS providers makes clear the way to focus on what really matters: learning.  


</Typography>



        </List>
        </Box>
        </Container>












             
      </main>

    </>
  );
};

export default AboutMe;
