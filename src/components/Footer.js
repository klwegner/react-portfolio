import '../styles/Footer.css';
import ContactMe from './ContactMe';
import AppBar from '@mui/material/AppBar';


const Footer = () =>{
const currYear = new Date().getFullYear();

    return (
        <div className='center'>

<AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0, bgcolor:'#7D9D9C'}}>
         <ContactMe/>
                 <p>Created by Kristen Wegner. Updated {currYear} </p>
        </AppBar>
        </div>
    )
}

export default Footer;