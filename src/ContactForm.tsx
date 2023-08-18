import "./ContactForm.css";
function ContactForm() {
  return (
    <>
      <form>
        <div id="contactFormDiv">
          <div id="formDiv">
            <p id="contactHeading">Contact Us</p>
            <div id="contactNameDiv">
              <input type="text" placeholder="Name" id="contactName"></input>
            </div>
            <div id="contactEmailDiv">
              <input type="email" placeholder="Email" id="contactEmail"></input>
            </div>
            <div id="contactSubjectDiv">
              <input
                type="text"
                placeholder="Subject"
                id="contactSubject"
              ></input>
            </div>
            <div id="contactMessageDiv">
              <input
                type="text"
                placeholder="Your Message"
                id="contactMessage"
              ></input>
            </div>
            <button type="submit" id="contactSubmit">
              Send Message
            </button>
          </div>
          <div id="contactInfoDiv">
            <p id="contactAddressH">Address</p>
            <p id="contactAddress">301-E State Life Housing Society Lahore</p>
            <p id="contactInfoH">Contact Information</p>
            <p id="conactTele">Telephone: 042-35460647</p>
            <p id="contactCell">Cell: +92-3094620689</p>
            <p id="contactMail">Email: muhammadsaadz100@gmail.com</p>
          </div>
        </div>
      </form>
    </>
  );
}
export default ContactForm;
