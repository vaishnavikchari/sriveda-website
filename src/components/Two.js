import React from 'react';
import pic03 from '../assets/images/pic03.webp';
import {Link as ScrollLink} from 'react-scroll';
import Fade from 'react-reveal/Fade';

const Two = props => (
  <section
    id="two"
    className="spotlight style2 right inactive"
    style={{backgroundImage: `url(${pic03})`}}
  >
    <span className="image fit main">
      <img src={pic03} alt="sriveda-brand" />
    </span>
    <Fade right big>
      <div className="content">
        <header>
          <h2>OUR BRAND</h2>
          <p>We are a growing brand with huge aspirations.</p>
        </header>
        <p>
          We are passionate about everything we do and that shows up in the results we deliver. We understand what keeps our customers awake at night. We provide cloud and infrastructure solutions that let our customers focus on their core business. We proactively address potential challenges, given our width and depth of industry exposure.
        </p>
        <ul className="actions">
          <li>
            <ScrollLink
              to="five"
              className="button"
              smooth={true}
              offset={-50}
              duration={1500}
              spy={true}
            >
              Request quote
            </ScrollLink>
          </li>
        </ul>
      </div>
    </Fade>
    <ScrollLink
      to="three"
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

export default Two;
