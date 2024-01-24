import '../styles/Contact.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const ContactMe = () => {
    return(
        <>
        <div className="contactInfo">
        <h2>
        <a href="mailto:klwegner@gmail.com?subject=Interested in Your Portfolio"><EmailIcon sx={{color:'white'}}/></a>
        </h2>
        <h2>
        <a href="https://www.linkedin.com/in/kristenwegner/"><LinkedInIcon sx={{color:'white'}}/></a>
        </h2>
        <h2>
        <a href="https://github.com/klwegner"><GitHubIcon sx={{color:'white'}}/></a>
        </h2>
</div>
</>
    )
}

export default ContactMe;