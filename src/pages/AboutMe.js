import ContactMe from "../components/ContactMe";

const AboutMe = () => {
  return (
    <>
      <h1>About Me</h1>
      <p className="para">
        <em>I have always held a wild desire to learn and use what I know to help
        others.</em> Working as an educator and freelance content writer in the 21st
        century allowed me plenty of opportunity for both, using technology,
        but...
      </p>

      <p className="para">
        I wanted to learn how to create the technology I relied upon. Thus,
        learning web development was a natural next step. I enrolled in
        Ironhack's web development course, dove into the world of web dev, and
        haven't looked back!
      </p>

      <p className="para">
        <em>I believe in the power that coding holds to make our lives richer,
        healthier, and happier.</em> With coding bootcamp behind me, I continue to
        channel my thirst for knowledge into study and practice with React,
        Node, and other JavaScript frameworks. I'm eager to begin my career as a
        full-stack developer and craft code that does its part to make our world
        a better place.
      </p>

      <div className="section">
        <h2>Experience With:</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>NodeJS</li>
          <li>ReactJS</li>
          <li>Handlebars</li>
          <li>Bootstrap</li>
          <li>Material UI</li>
        </ul>
      </div>
      <div className="section">
        <h2>Skilled In:</h2>
        <ul>
          <li>Collaboration</li>
          <li>Customer Service</li>
          <li>Conflict Resolution</li>
          <li>Verbal and Written Communication</li>
          <li>Problem-Solving</li>
        </ul>
      </div>

      <ContactMe/>
    </>
  );
};

export default AboutMe;
