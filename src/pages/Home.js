import '../styles/Home.css';
import me from '../assets/IMG_9619.jpg';
import underTheSun from '../assets/UndertheSun.png';
import muzak from '../assets/muzak.png';
import cringe from '../assets/cringe.png';
import Typography from '@mui/material/Typography';



const Home = () => {

    
    return (
<div id="homePage">
<div className="intro">
<img src={me} alt="Kristen"/>
<Typography
              component="h1"
              variant="h2"
              align="center"
              color="#576F72"
              // gutterBottom
            >Kristen Wegner</Typography>
         

         <Typography variant="h5" align="center" color="#576F72" paragraph sx={{marginBottom:0}}>Full-Stack Web Developer</Typography>

         <Typography align="center" color="#576F72" paragraph>MERN & MEAN</Typography>

</div>

<div className="projectCarousel">
<Typography
              component="h1"
              variant="h3"
              align="center"
              color="#576F72"
              gutterBottom
            >My Projects</Typography>
<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
     <a href="https://main--gilded-profiterole-8a135b.netlify.app/">

      <img src={underTheSun} class="d-block w-100" alt="Under the Sun- MERN stack app"/>
      </a>

      <div class="carousel-caption d-none d-md-block opaque-block">
        <h5>Under the Sun</h5>
        <p>
MERN stack app to keep track of places to visit and things to do. Mobile-friendly; full CRUD capability.
        </p>
      </div>
    </div>
    <div class="carousel-item">
     <a href="https://kristenmuzakplayer.netlify.app/">
     <img src={muzak} class="d-block w-100" alt="Muzak (music) player"/>
     </a> 
      <div class="carousel-caption d-none d-md-block opaque-block">
        <h5>Muzak Player</h5>
        <p>Built with React with bootstrap styling.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={cringe} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block opaque-block">
        <h5>Cringe App</h5>
        <p>
        A simple social media app that compiles "cringe" image posts from around the web. Utilizes node, html, handlebars, and css. 
        </p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    {/* <span class="visually-hidden">Previous</span> */}
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    {/* <span class="visually-hidden">Next</span> */}
  </button>
</div>
</div>
</div>

    )
}
export default Home;