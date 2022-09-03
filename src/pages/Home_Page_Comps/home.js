import React from 'react';
import HeroSection from './hero_section';
import Comparing from './comparing';
import Whyus from './whyus';
import Accordion from './accordion';
import HelpAdvice from './helpAdvice';
import Featured from './featured';
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <>
      <Helmet>
        <script
          src='https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js'
          integrity='sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p'
          crossorigin='anonymous'
        ></script>
      </Helmet>

      <HeroSection />
      <Comparing />
      <Whyus />
      <Accordion />
      <HelpAdvice />
      <Featured />
    </>
  );
};

export default Home;
