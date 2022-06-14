import React from "react";
import Header from "./Home_Page_Comps/header";
import HeroSection from "./Home_Page_Comps/hero_section";
import Comparing from "./Home_Page_Comps/comparing";
import Whyus from "./Home_Page_Comps/whyus";
import Accordion from "./Home_Page_Comps/accordion";
import HelpAdvice from "./Home_Page_Comps/helpAdvice";
import Featured from "./Home_Page_Comps/featured";
import Footer from "./Home_Page_Comps/footer";
import CookiesCard from "./Home_Page_Comps/cookiescard";
import Helmet from "react-helmet";
const App = () => {
  return (
    <>
      <Helmet>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
          crossorigin="anonymous"
        ></script>
      </Helmet>
      <Header />
      <HeroSection />
      <Comparing />
      <Whyus />
      <Accordion />
      <HelpAdvice />
      <Featured />
      <Footer />
      <CookiesCard />
    </>
  );
};

export default App;
