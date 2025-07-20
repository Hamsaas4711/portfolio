import './ContactForm.css';

function ContactForm() {
  return (
    <form
      className="contact-form fade-in"
      action="https://formsubmit.co/hamsaas471@gmail.com"
      method="POST"
    >
      <p className="small-heading">Contact Us</p>
      <h1 className="main-heading">Get in touch with us</h1>
      <p className="description">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br />
        Lorem Ipsum has been the industry's standard dummy text.
      </p>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="name">Your Name</label>
          <input type="text" name="name" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Your Email</label>
          <input type="email" name="email" required />
        </div>
      </div>

      <div className="form-group full-width">
        <label htmlFor="message">Message</label>
        <textarea name="message" rows="6" required></textarea>
      </div>

      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="box" />

      <button type="submit" className="submit-btn">Send Message</button>
    </form>
  );
}

export default ContactForm;
