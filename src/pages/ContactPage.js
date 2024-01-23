import ContactMe from "../components/ContactMe";
import '../styles/ContactPage.css';

const ContactPage = () => {
  return (
    <>
      <ContactMe />
      <div className="page">
      <div className="emailForm">
        <h2>For Questions, Queries, and Interests</h2>
        <form
          action="mailto:klwegner@gmail.com"
          method="get"
          enctype="text/plain"
        >
          <div className="nameEmail">
            <label for="name">
              Name:
              </label>
              <input type="text" name="name" id="name" />
          </div>
          <div className="nameEmail" >
            <label for="email">
              Email:
              </label>
              <input type="text" name="email" id="email" />
           
          </div>

          <div className="textAndButtons">

          <div>
            <label>Comments:</label>
            <br />

            <textarea name="comments" rows="12" cols="35">
              Say Hello
            </textarea>
          </div>
          <div className="buttons">
            <input type="submit" name="submit" value="Send" />
            <input type="reset" name="reset" value="Clear Form" />
          </div>
          </div>
        </form>
      </div>
      </div>
    </>
  );
};
export default ContactPage;
