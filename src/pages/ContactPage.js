import * as React from "react";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import ContactMe from "../components/ContactMe";
import "../styles/ContactPage.css";
import { Message } from "@mui/icons-material";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import List from "@mui/material/List";

const ContactPage = () => {
  const [message, setMessage] = React.useState("");

  const style = {
    py: 0,
    width: "100%",
    maxWidth: "90%",
    borderRadius: 2,
    border: "1px solid",
    borderColor: "divider",
    backgroundColor: "#F0EBE3", //main color
  };

  const style2 = {
    p: 2,
    backgroundColor: "#E4DCCF", //creamish green
    display: "flex",
    justifyContent: "center",
    width: "100%",
    height:'auto',
    marginBottom: {
      xs: "20vw", // for screens smaller than 600px
      sm: "10vw", // for screens 600px and larger
    },
  };

  const handleSubmit = (event) => {
    let subjectLine = "Let's Connect!";
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
            bgcolor: "#E4DCCF",
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
              Queries/Interest
            </Typography>
            <Typography variant="h5" align="center" color="#576F72" paragraph>
              Feel inspired to reach out? Please do so below.
            </Typography>
          </Container>
        </Box>

        <Container sx={{ py: 8, maxWidth: "80vw" }}>
          <Box sx={style2}>
            <List sx={style}>
              <form onSubmit={handleSubmit}>
                <div className="nameEmail">
                  <TextField
                    label="Your Name"
                    id="outlined-start-adornment"
                    sx={{
                      m: 1,
                      width: {
                        xs: "50vw", // for screens smaller than 600px
                        md: "25vw", // for screens 600px and larger
                      },
                    }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start"> Name</InputAdornment>
                      ),
                    }}
                  />

                  <TextField
                    label="Your Name"
                    id="outlined-start-adornment"
                    sx={{
                      m: 1,
                      width: {
                        xs: "50vw", // for screens smaller than 600px
                        md: "25vw", // for screens 600px and larger
                      },
                    }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">Email</InputAdornment>
                      ),
                    }}
                  />
                </div>
                <div className="nameEmail">
                  <TextField
                    id="outlined-textarea"
                    label="message"
                    placeholder="Message"
                    multiline
                    rows="5"
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    sx={{
                      m: 1,
                      width: '50vw'
                    }}
                  />
                </div>

                <Stack
                  direction="row"
                  spacing={2}
                  justifyContent="center"
                  sx={{
                    m: 2,
                    p: 0                  }}
                >
                  <Button
                    variant="contained"
                    endIcon={<SendIcon />}
                    type="submit"
                    name="submit"
                  >
                    Send
                  </Button>

                  <Button
                    variant="outlined"
                    startIcon={<DeleteIcon />}
                    type="reset"
                    name="reset"
                    onClick={() => setMessage("")}
                  >
                    Clear Form
                  </Button>
                </Stack>
              </form>
            </List>
          </Box>
        </Container>
      </main>
    </>
  );
};
export default ContactPage;
