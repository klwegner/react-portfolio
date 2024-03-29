import * as React from 'react';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import ContactMe from "../components/ContactMe";
import '../styles/ContactPage.css';
import { Message } from '@mui/icons-material';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';



const ContactPage = () => {

 const [message, setMessage] = React.useState('');


  const handleSubmit = (event) => {
let subjectLine = "Let's Connect!"
    event.preventDefault();

    // const { message } = event.target.elements;
    alert(message);
    const mailtoLink = `mailto:klwegner@gmail.com?subject=${subjectLine}&body=${message.value}`;
    window.location.href = mailtoLink;
  };

  return (
    <>

<main>

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
For Questions, Queries, and Interest           
 </Typography>
    <Typography variant="h5" align="center" color="#576F72" paragraph>
Feel inspired to reach out? Please do so below.             </Typography>
  </Container>
</Box>


        <form
          onSubmit={handleSubmit}
        >
          <div className="nameEmail">
            
          <TextField
          label="Your Name"
          id="outlined-start-adornment"
          sx={{ m: 1, width: {
      xs: '50vw', // for screens smaller than 600px
      sm: '25vw' // for screens 600px and larger
    }}}
          InputProps={{
            startAdornment: <InputAdornment position="start"> Name</InputAdornment>,
          }}
        />
            
          </div>
          <div className="nameEmail" >
            
          <TextField
          label="Your Name"
          id="outlined-start-adornment"
          sx={{ m: 1, width: {
      xs: '50vw', // for screens smaller than 600px
      sm: '25vw' // for screens 600px and larger
    }}}
          InputProps={{
            startAdornment: <InputAdornment position="start">Email</InputAdornment>,
          }}
        />

          </div>
          <div className="nameEmail" >

          <TextField
          id="outlined-textarea"
          label="message"
          placeholder="Message"
          multiline
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          sx={{ m: 2, width: {
      xs: '80vw', // for screens smaller than 600px
      sm: '50vw' // for screens 600px and larger
    }}}
        />
        </div>

          <Stack direction="row" spacing={2} justifyContent= "center" sx={{ m:2,   paddingBottom: {
    xs: '20vw', // for screens smaller than 600px
    sm: '10vw', // for screens 600px and larger
  }}}>
<Button variant="contained" endIcon={<SendIcon />} type="submit" name="submit">
  Send
</Button>

<Button variant="outlined" startIcon={<DeleteIcon />} type="reset" name="reset" onClick={()=> setMessage('')}>
  Clear Form
</Button>
</Stack>
        </form>

</main>
    </>
  );
};
export default ContactPage;
