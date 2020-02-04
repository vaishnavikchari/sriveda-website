import React from 'react';
import pic01 from '../assets/images/pic01.webp';
import {Link as ScrollLink} from 'react-scroll';

const Banner = props => (
  <section id="banner">
    <div className="content">
      <header>
        <h2>Infrastructure services and consulting</h2>
        <p>
          We've built and scaled Infrastructure for 20 years...
        </p>
        <p>
          Our industry experience spans the entire cloud era!
        </p>
        <p>
          Now, let us bring all of that to your business.
        </p>

      </header>
      <span className="image">
        <img src={pic01} alt="intro" />
      </span>

    </div>

    <ScrollLink
      to="one"
      className="goto-next"
      activeClass="active"
      smooth={true}
      offset={50}
      duration={1500}
      spy={true}
    >
      Next
    </ScrollLink>
  </section>
);

export default Banner;
