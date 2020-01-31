import React from 'react';
import Fade from 'react-reveal/Fade';
import Iframe from 'react-iframe';

const Six = props => (
  <section id="six-one" className="wrapper style1 special fade-up">
    <div className="row gtr-uniform gtr-50">
      <div className="col-3 col-12-small" />
      <div className="col-3 col-12-small">
        <Fade up>
          <div className="container">
            <h2>Find us at</h2>
            <p>
              our Coordinates
            </p>
            <Iframe
              url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.7343602346364!2d77.7693240145942!3d12.860426320788132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae72ea50612eeb%3A0x8a0c1d91464e0d7a!2sShri%20Diya%20Viola!5e0!3m2!1sen!2sin!4v1571048224119!5m2!1sen!2sin"
              width="300px"
              height="300px"
              id="mapFrame"
              className="mapFrame"
              display="initial"
              position="relative"
            />
          </div>
        </Fade>
      </div>
      <div className="col-3 col-12-small">
        <Fade right>
          <div className="container">
            <h2>Write to us</h2>
            <p>
              sales@srivedatech.com
            </p>
          </div>
        </Fade>
      </div>
    </div>
    <div className="col-3 col-12-small" />
  </section>
);
export default Six;
