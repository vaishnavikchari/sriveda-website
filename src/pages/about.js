import React from 'react';
import {Helmet} from 'react-helmet';
import Layout from '../components/layout';
import Fade from 'react-reveal/Fade';

const About = props => (
  <Layout>
    <Helmet>
      <title>Sriveda - About</title>
      <meta name="description" content="Elements Page" />
    </Helmet>
    <Fade up>
      <div id="main" className="wrapper style1 special fade-up">
        <div className="container">
          <header className="major">
            <h2>About us</h2>
            <p>
              Let’s transform your IT infrastructure with our deep expertise
            </p>
          </header>

          <section>

            <header>
              <h3>
                At Sriveda Technology Solutions, we provide infrastructure consulting and services across industries and horizontals to our global clientele.
              </h3>
              <p>
                We enable businesses to become more responsive and scalable, thriving in the ever-changing digital era. Our solutions to our clients are aimed at reducing their total cost of investment.
              </p>
            </header>
            <p>
              We build robust infrastructure that facilitates companies to enhance their robustness and manage their operations. We use automation and analytics to intelligently manage our customers’ infrastructure.
            </p>
          </section>

          <section>
            <div className="row">
              <h4>We provide a broad spectrum of services such as:</h4>
              <div className="col-6 col-12-xsmall">

                <ul>
                  <li>Datacenter management</li>
                  <li>End-user computing</li>
                  <li>IT service desk</li>
                  <li>Cloud services</li>
                  <li>Strategic consulting and staffing solutions</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Fade>
  </Layout>
);

export default About;
