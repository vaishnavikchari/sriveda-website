import React from 'react';
import {Helmet} from 'react-helmet';
import Layout from '../components/layout';
import Five from '../components/Five';
import Six from '../components/Six';
import servers1 from '../assets/images/servers1.webp';
const Contact = props => (
  <Layout>
    <Helmet>
      <title>Sriveda - Contact</title>
      <meta name="description" content="Elements Page" />
    </Helmet>
    <div>
      <img height="200" width="1500" src={servers1} alt="sriveda-contact" />
    </div>
    <Six />
    <Five />
  </Layout>
);

export default Contact;
