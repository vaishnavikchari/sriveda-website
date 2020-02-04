import React from 'react';
import pic04 from '../assets/images/pic04.webp';
import {Link as ScrollLink} from 'react-scroll';
import Fade from 'react-reveal/Fade';

const Three = props => (
  <section
    id="three"
    className="spotlight style3 left inactive"
    style={{backgroundImage: `url(${pic04})`}}
  >
    <span className="image fit main bottom">
      <img src={pic04} alt="" />
    </span>
    <Fade left big>
      <div className="content">
        <header>
          <h2>OUR TEAM</h2>
          <p>
            At Sriveda Technology Solutions, we are a group of inspired individuals who put our heads and heart together, as a team, to partner with our clients to maximize their business value.
            {' '}
          </p>
        </header>
        <p>
          We are your extended team. Whether virtual or co-located, we share your business goals and company ethos. Our experienced consultants bring world-class work to the table and are top-notch in customer service.
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
      to="five"
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

export default Three;
