import '../styles/Footer.css';

const Footer = () =>{
const currYear = new Date().getFullYear();

    return (
        <footer>
        <div className="footer1">
        <div>   
                 <p>Created by Kristen Wegner. Updated {currYear} </p>
</div>
          <div>
          <p>Letter K Icon by <a href="https://www.flaticon.com/free-icons/letter-k" title="letter k icons">Roundicons Premium - Flaticon</a></p>.

          </div>
        </div>
        </footer>
    )
}

export default Footer;