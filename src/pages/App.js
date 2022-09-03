import React from 'react';
import Header from './Home_Page_Comps/header';
import Footer from './Home_Page_Comps/footer';
import CookiesCard from './Home_Page_Comps/cookiescard';
import Home from './Home_Page_Comps/home';

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Footer />
      <CookiesCard />
    </>
  );
};

export default App;
