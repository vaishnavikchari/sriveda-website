import React from 'react';
import {Helmet} from 'react-helmet';
import servers2 from '../assets/images/servers2.webp';
import Layout from '../components/layout';
import Fade from 'react-reveal/Fade';

const Whyus = props => (
  <Layout>
    <Helmet>
      <title>Sriveda - Why us</title>
      <meta name="description" content="Elements Page" />
    </Helmet>
    <Fade left>
      <div><img height="200" width="2000" src={servers2} alt="" /></div>
      <div id="main" className="wrapper style1 left inactive">
        <div className="container">
          <header className="major">
            <h2>Why us</h2>
            <p />
          </header>

          <section>

            <header>
              <h3>
                Access to world-class experts that care about your success
              </h3>
              <p>
                Sriveda projects are built for you with deep integration to your business. When you choose us as your inhouse or virtual infrastructure partner, we act as a part of your team and ensure seamless service to your own customers.
              </p>
              <div className="row">
                <h4>We stand out in our:</h4>
                <div className="col-6 col-12-xsmall">
                  <ul>
                    <li>
                      Ability to align with your own business goals while eliminating any roadblocks from your infrastructure
                    </li>
                    <li>
                      Lean solutions that minimize waste and scale, as your business scales
                    </li>
                    <li>
                      Absolute commitment to agreed upon service levels and costs
                    </li>
                  </ul>
                </div>
              </div>

            </header>
            <h3>We have a rich experience in the domain</h3>
            <p>
              We are experts with a rich experience of over 20 years in the domain. We’ve worked on infrastructure projects in various industry verticals. Our portfolio spans infrastructure services, cloud adoption and consulting, AMC contracts, servers and laptop rentals, consulting and bespoke solutions in the infrastructure space. We bring a thorough understanding of challenges and opportunities in the space.
            </p>
            <p>
              With our deep knowledge and experience we help you develop and maintain customized, configurable, scalable infrastructure – on-prem, cloud, or hybrid and manage change for you, as your business needs evolve.
            </p>
          </section>
        </div>
      </div>
    </Fade>
  </Layout>
);

export default Whyus;
