import * as React from 'react';
import List from '@mui/material/List';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';




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

const ExperiencePage = () => {
    return (

            <>
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
Experience            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              My education has been very eclectic and helped shape my flexibility as a developer today. Studying English taught me how to communicate effectively and efficiently; studying coding taught me how to craft the apps and integrations I do today!
            </Typography>
          </Container>
        </Box>

        <Container sx={{ py: 8 }} maxWidth="md">

             <Box sx={style2}>
        
            <List sx={style}>
              <ListItem>
                <ListItemText primary={<Typography variant="h4">Application Developer/Web Analyst, Hillsborough Community College</Typography>}/>
              </ListItem>
              <Typography variant="h5"><ul> 12/2022 - Present</ul></Typography>
              <Typography variant="h5"><ul> Angular, Apex, REST APIs, Azure Services, SharePoint</ul></Typography>

              <Divider variant="inset" component="li" />
            </List>
            </Box>
            </Container>
            </main>
            </>
    )
}

export default ExperiencePage;