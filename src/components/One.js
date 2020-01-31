import React from 'react';
import pic02 from '../assets/images/pic02.jpg';
import {Link as ScrollLink} from 'react-scroll';
import Fade from 'react-reveal/Fade';

const One = props => (
  <section
    id="one"
    className="spotlight style1 bottom inactive"
    style={{backgroundImage: `url(${pic02})`}}
  >
    <span className="image fit main">
      <img src={pic02} alt="" />
    </span>
    <Fade bottom big>
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-4 col-12-medium">
              <header>
                <h2>OUR VISION</h2>
                <p>
                  At Sriveda Technology Solutions, we give our absolute best to our customers and earn their delight.
                  {' '}
                  {' '}
                  {' '}
                </p>
              </header>
            </div>
            <div className="col-4 col-12-medium">
              <p>
                We are in the business of “keeping lights on” for our customers, so they succeed in what they set out to do. To set our sights on high grounds, we aspire to serve fortune 500 clients. We’d love to be part of the journey of small and medium business who are on similar growth trajectory as us.
                {' '}
              </p>
            </div>
            <div className="col-4 col-12-medium">
              <p />
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
          </div>
        </div>
      </div>
    </Fade>
    <ScrollLink
      to="two"
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
export default One;
