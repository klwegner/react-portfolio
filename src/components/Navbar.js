import Logo from '../assets/letter-k.png';
import '../styles/Navbar.css';

const Navbar = () =>
{
    return(
        <nav>
        <div className='LogoAndName'>
            <img src={Logo} alt="Logo"/>
            <h1>Kristen Wegner</h1>

        </div>
        <div className='navLinks'>
            <p>About</p>
            <p>Projects</p>
            <p>Education</p>
            <p>Contact</p>
        </div>

        </nav>
    )
}
export default Navbar;