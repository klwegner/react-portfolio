import { Link } from "react-router-dom";
import Logo from '../assets/letter-k.png';
import '../styles/Navbar.css';

const Navbar = () =>
{
    return(
        <nav>
        <div className='LogoAndName'>
            <Link to={'/'}><img src={Logo} alt="Logo"/>
            <h1>Kristen Wegner</h1></Link>

        </div>
        <div className='navLinks'>
            <Link to={'/about'}>About</Link>
            <Link to={'/projects'}>Projects</Link>
            <Link to={'/education'}>Education</Link>
            <Link to={'/contact'}>Contact</Link>
        </div>

        </nav>
    )
}
export default Navbar;