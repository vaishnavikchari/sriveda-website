import React from 'react';
import {Helmet} from 'react-helmet';
import Layout from '../components/layout';
import Four from '../components/Four';
import Five from '../components/Five';

const Services = props => (
  <Layout>
    <Helmet>
      <title>Sriveda - Services</title>
      <meta name="description" content="Elements Page" />
    </Helmet>
    <Four />
    <Five />
  </Layout>
);

export default Services;
