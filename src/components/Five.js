import React from 'react';
import Fade from 'react-reveal/Fade';

const Five = props => (
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
                id="name"
                placeholder="Your First Name"
              />

              <input
                aria-label="Your email"
                type="email"
                name="email"
                id="email"
                placeholder="Your Email Address"
              />

              <textarea
                aria-label="Your message"
                form="usrform"
                rows="4"
                cols="50"
                name="message"
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
            </div>
          </div>
        </form>
      </div>
    </Fade>
  </section>
);
export default Five;
