import React from 'react';
import {Helmet} from 'react-helmet';
import Layout from '../components/layout';
import Banner from '../components/Banner';
import One from '../components/One';
import Two from '../components/Two';
import Three from '../components/Three';
import Five from '../components/Five';

class Home extends React.Component {
  render () {
    return (
      <Layout location="/">
        <Helmet
          htmlAttributes={{lang: 'en'}}
          title="Sriveda Technologies"
          meta={[
            {name: 'description', content: 'Sriveda Technologies'},
            {name: 'keywords', content: 'sample, something'},
          ]}
        />
        <Banner />
        <One />
        <Two />
        <Three />
        <Five />
      </Layout>
    );
  }
}

export default Home;
