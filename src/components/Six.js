import React from 'react';
import Fade from 'react-reveal/Fade';
import Iframe from 'react-iframe';

const Six = props => (
  <section id="six-one" className="wrapper style1 special fade-up">
    <div className="row gtr-uniform gtr-50">

      <Fade up>
        <div className="container col-6 col-12-sm">
          <h2>Our Coordinates</h2>
          <h3>
            Head over to our office and let's talk
          </h3>

          <Iframe
            url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.7343602346364!2d77.7693240145942!3d12.860426320788132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae72ea50612eeb%3A0x8a0c1d91464e0d7a!2sShri%20Diya%20Viola!5e0!3m2!1sen!2sin!4v1571048224119!5m2!1sen!2sin"
            width="280px"
            height="320px"
            id="mapFrame"
            className="mapFrame"
            display="initial"
            position="relative"
          />
        </div>
      </Fade>

      <Fade right>
        <div className="container col-6 col-12-sm">
          <h2>Send us an email</h2>
          <h3>and we'll take it from there</h3>
          <p>
            sales@srivedatech.com
          </p>
        </div>
      </Fade>
    </div>

  </section>
);
export default Six;
