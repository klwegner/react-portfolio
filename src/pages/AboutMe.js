import ContactMe from "../components/ContactMe";
import "../styles/AboutMe.css"

const AboutMe = () => {
  return (
    <div className="aboutMe">
    <div className="uberSection">

<div className="section">
      <h2>About Me</h2>
      <p className="para">
        <em>I have always held a wild desire to learn and use what I know to help
        others.</em> Working as an educator and freelance content writer in the 21st
        century allowed me plenty of opportunity to utilize technology to do both,
        but...
      </p>

      <p className="para">
        I soon found that I wanted to learn how to <em>create</em> the technology I relied upon. Thus,
        learning web development became a natural next step. I enrolled in
        Ironhack's web development course and, months later, got my first job in web development in higher education,
        and never looked back.
      </p>

      <p className="para">
        <em>I believe in the power that coding holds to make our lives richer,
        healthier, and happier.</em> Working in higher education, I see 
        how quality web development and skillful integrations between
        SaaS providers enriches and betters our lives. 
      </p>

      <p className="para">And I intend to keep building the breadth and depth of my knowledge to do even more!</p>
</div>


      <div className="section">
        <h2>Experience With:</h2>
        <ul className="indent">
          <li>HTML</li>
          <li>CSS</li>
          <li>NodeJS</li>
          <li>React</li>
          <li>Handlebars</li>
          <li>Bootstrap</li>
          <li>Material UI</li>
          <li>Angular</li>
          <li>Apex</li>
        </ul>
      </div>
      <div className="section">
        <h2>Skilled In:</h2>
        <ul className="indent">
          <li>Collaboration</li>
          <li>Customer Service</li>
          <li>Conflict Resolution</li>
          <li>Verbal and Written Communication</li>
          <li>Problem-Solving</li>
          <li>Instructing and Presenting</li>
          <li>Content Writing</li>
        </ul>
      </div>
</div>
      <ContactMe/>

    </div>

  );
};

export default AboutMe;
