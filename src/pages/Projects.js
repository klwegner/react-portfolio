import '../styles/Projects.css'

const Projects = () => {
  return (
    <>
      <h1>Projects</h1>
      <div className="links">
        <div className="square">
          <div className="square2">
            <h2><a href="https://klwegner.github.io/The-Juniper-Tree/?fbclid=IwAR1euVrSYVqywGA2NIvYLnzGSb0I_gH8R6kCNGnMkxled4jVAXDkXOM45D4">
              The Juniper Tree
            </a></h2>
            <p className='description'>
              A simple game that combines vanilla JS with one of my other loves,
              literature.
              <br />
              <br /> Inspired by the classic Brothers Grimm fairytale "The
              Juniper Tree," you must avenge your death at the hands of your
              twisted stepmother.
              <br />
              <br />
              Warning: not optimized for small screens.
            </p>
          </div>
        </div>

        <div className="square">
          <div className="square2">
          <h2>
            <a href="https://cringeapp.herokuapp.com/">Cringe App</a>
            </h2>
            <p className='description'>
              {" "}
              Cringe is a social media-style app dedicated to compiling "cringe"
              pictures. <br />
              <br />
              Cringe is made with HTML, CSS, Handlebars, and NodeJs and features
              CRUD capabilities.
              <br />
              <br />
              Finding ridiculous posts on social media is a common pastime. I
              wanted to build a site that could host a slew of them for easy
              access!
              <br />
            </p>
          </div>
        </div>

        <div className="square">
          <div className="square2">
          <h2>
            <a href="https://main--gilded-profiterole-8a135b.netlify.app/">
              Under the Sun
            </a>
</h2>
            <p className='description'>
              {" "}
              Under the Sun is made with the MERN stack and experiments with the
              Google Maps API.
              <br />
              <br />
              With it, users list and update places to go and things to do while
              visiting.
            </p>
          </div>
        </div>

        <div className="square">
          <div className="square2">
          <h2>
            <a href="https://63190e9225a5880008a0aad6--singular-puffpuff-40df06.netlify.app/">
              Muzak Player
            </a>
            </h2>
            <p className='description'>
              {" "}
              A simple React music player with audio controls. <br />
              <br />I utilized both Bootstrap 4 and MUI when styling this site
              and experimented with animate css.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
