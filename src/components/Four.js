import React from 'react';
import Fade from 'react-reveal/Fade';
import {Link as ScrollLink} from 'react-scroll';

const Four = props => (
  <Fade right>
    <section id="four" className="wrapper style1 right inactive">
      <div className="container">
        <header className="major">
          <h2>OUR WORK</h2>
          <p>
            Our work for our past customers stands testimony to our future projects. We’ve always delivered to ensure customer success. We are performers at work and our results are nothing short of amazing. We enable businesses get upto speed with their core business functions, by providing underlying infrastructure solutions, cloud adoption services, servers & laptops on rentals and IT resources on demand. Our world-class consulting services makes it possible for businesses to scale seamlessly as their business grows.
            {' '}
          </p>
        </header>
        <div className="box alt">
          <h2>OUR SERVICES</h2>
          <div className="row gtr-uniform">

            <section className="col-4 col-6-medium col-12-xsmall">
              <span className="icon solid alt major fa-server" />
              <h3>IT infrastructure solutions</h3>
              <p>
                We manage your company’s hardware, software, networks, data centers and related equipment used to develop, test, operate, monitor, manage and/or support your information technology needs.
              </p>
            </section>
            <section className="col-4 col-6-medium col-12-xsmall">
              <span className="icon solid alt major fa-cloud-upload-alt" />
              <h3>Cloud adoption services</h3>
              <p>
                We help clients build robust and secure cloud solutions, cloud migration, readiness assessments and run longer-term design, implementation and maintenance projects.
              </p>
            </section>
            <section className="col-4 col-6-medium col-12-xsmall">
              <span className="icon solid alt major fa-calendar-alt" />
              <h3>AMC services</h3>
              <p>
                We provide Annual Maintenance Contracts – comprehensive IT Hardware support for Servers (including OS), Storage Devices and Networking Devices with stringent SLAs, cost effectively.
              </p>
            </section>
            <section className="col-4 col-6-medium col-12-xsmall">
              <span className="icon solid alt major fa-laptop" />
              <h3>Rental Services for Laptops and Servers</h3>
              <p>
                We offer leased infrastructure to reduce wait times for procurement, set up and maintenance of office infrastructure. Our IT rentals makes it possible among a large array of options for laptops, desktops and printers, to set up new businesses or to facilitate growing businesses.
              </p>
            </section>
            <section className="col-4 col-6-medium col-12-xsmall">
              <span className="icon solid alt major fa-users" />
              <h3>IT resources on demand</h3>
              <p>
                Our resources-on-demand service is meant to overcome the common challenge of being able to meet your fluctuating business demands efficiently. With the ability to scale resources up or down on-demand, we take your challenge upon us.
              </p>
            </section>
            <section className="col-4 col-6-medium col-12-xsmall">
              <span className="icon solid alt major fa-briefcase" />
              <h3>Consulting and bespoke solutions</h3>
              <p>
                We perform IT infrastructure discovery, assessments, audits, analysis of process efficiency, optimization recommendations, availability management and allied consulting engagements. If you have a specific infrastructure challenge, we are happy to help you solve.
              </p>
            </section>
          </div>
        </div>
        <footer className="major">
          <ul className="actions special">
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
        </footer>
      </div>
    </section>
  </Fade>
);

export default Four;
