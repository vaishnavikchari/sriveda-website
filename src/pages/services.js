import React from 'react';
import {Helmet} from 'react-helmet';
import Layout from '../components/layout';
import Four from '../components/Four';
import Five from '../components/Five';
import servers3 from '../assets/images/servers3.webp';
const Services = props => (
  <Layout>
    <Helmet>
      <title>Sriveda - Services</title>
      <meta name="description" content="Elements Page" />
    </Helmet>
    <div><img height="200" width="1500" src={servers3} alt="" /></div>
    <Four />
    <Five />
  </Layout>
);

export default Services;
