import '../styles/Contact.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { LinkedIn } from '@mui/icons-material';

const ContactMe = () => {

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


    return(
        <>
        <h1>Reach Out</h1>
        <div className="contactInfo">
        <h2>

        <a href="mailto:klwegner@gmail.com?subject=Interested in Your Portfolio"><EmailIcon/></a>
        </h2>
        <h2>
        <a href="https://www.linkedin.com/in/kristenwegner/"><LinkedIn/></a>
        </h2>
        <h2>
        <a href="https://github.com/klwegner"><GitHubIcon/></a>
        </h2>
</div>
</>
    )
}

export default ContactMe;