import ContactMe from "../components/ContactMe";

const ContactPage = () => {
  return (
    <>
      <ContactMe />
      <div className="emailForm">
        <h2>For Questions, Queries, and Interests</h2>
        <form
          action="mailto:klwegner@gmail.com"
          method="get"
          enctype="text/plain"
        >
          <div>
            <label for="name">
              Name:
              <input type="text" name="name" id="name" />
            </label>
          </div>
          <div>
            <label for="email">
              Email:
              <input type="text" name="email" id="email" />
            </label>
          </div>
          <div>
            <label>Comments:</label>
            <br />
            <textarea name="comments" rows="12" cols="35">
              Say Hello
            </textarea>
          </div>
          <div>
            <input type="submit" name="submit" value="Send" />
            <input type="reset" name="reset" value="Clear Form" />
          </div>
        </form>
      </div>
    </>
  );
};
export default ContactPage;
