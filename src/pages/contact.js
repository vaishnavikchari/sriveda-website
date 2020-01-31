import React from 'react';
import {Helmet} from 'react-helmet';
import Layout from '../components/layout';
import Five from '../components/Five';
import Six from '../components/Six';

const Contact = props => (
  <Layout>
    <Helmet>
      <title>Sriveda - Contact</title>
      <meta name="description" content="Elements Page" />
    </Helmet>
    <Five />
    <Six />
  </Layout>
);

export default Contact;
