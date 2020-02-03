import React, {useState} from 'react';
import Fade from 'react-reveal/Fade';
import emailjs from 'emailjs-com';

function Five () {
  const [name, setName] = useState ('');
  const [email, setEmail] = useState ('');
  const [message, setMessage] = useState ('');
  const [isSent, setIsSent] = useState (false);

  function sendEmail (e) {
    e.preventDefault ();

    emailjs
      .sendForm (
        'gmail_sriveda',
        'template_sriveda',
        e.target,
        'user_u7YCIHfTwT6M9vdlC862P'
      )
      .then (
        result => {
          setIsSent (true);
        },
        error => {}
      );
  }

  const emailForm = (
    <section id="five" className="wrapper style2 special fade inactive">
      <Fade duration={2500}>
        <div className="container">
          <header>
            <h2>Let's get started</h2>
            <p>Message us, now</p>
          </header>
          <form
            method="post"
            action="#"
            onSubmit={sendEmail}
            className="cta"
            id="usrform"
            data-netlify="true"
          >
            <div className="row gtr-uniform gtr-50">
              <div className="col-8 col-12-xsmall">
                <input
                  aria-label="Your name"
                  type="text"
                  name="name"
                  value={name}
                  onChange={e => setName (e.target.value)}
                  id="name"
                  placeholder="Your First Name"
                />

                <input
                  aria-label="Your email"
                  type="email"
                  name="email"
                  value={email}
                  onChange={e => setEmail (e.target.value)}
                  id="email"
                  placeholder="Your Email Address"
                />

                <textarea
                  aria-label="Your message"
                  form="usrform"
                  rows="4"
                  cols="50"
                  name="message"
                  value={message}
                  onChange={e => setMessage (e.target.value)}
                  id="message"
                  placeholder="Your Message"
                />
              </div>
              <div className="col-4 col-12-xsmall">
                <input
                  aria-label="Submit the form"
                  id="submitForm"
                  type="submit"
                  value="Submit"
                  className="fit primary"
                />
                <div style={{color: 'yellow'}}>{}</div>
              </div>
            </div>
          </form>
        </div>
      </Fade>
    </section>
  );

  const thankyouMessage = (
    <section id="five" className="wrapper style2 special fade inactive">
      <Fade duration={2500}>
        <div className="container">
          <header>
            <h2>Let's get started</h2>
            <p>Message us, now</p>
            <hr />
            <br />
            <p>We've received your message</p>
            <h2>Thank you!</h2>
            <p>We will revert to you very soon</p>
          </header>
        </div>
      </Fade>
    </section>
  );

  return isSent ? thankyouMessage : emailForm;
}
export default Five;
