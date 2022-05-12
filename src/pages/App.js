import React from "react";
import Header from "./Home_Page_Comps/header";
import Hero_Section from "./Home_Page_Comps/hero_section";
import Land_Page_1 from "./Home_Page_Comps/landpage_1";
import Land_Page_2 from "./Home_Page_Comps/landpage_2";
import Land_Page_3 from "./Home_Page_Comps/landpage_3";
import Land_Page_4 from "./Home_Page_Comps/landpage_4";
import Land_Page_5 from "./Home_Page_Comps/landpage_5";
import Footer from "./Home_Page_Comps/footer";
import Cookies_Card from "./Home_Page_Comps/cookiescard";
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
      <Hero_Section />
      <Land_Page_1 />
      <Land_Page_2 />
      <Land_Page_3 />
      <Land_Page_4 />
      <Land_Page_5 />
      <Footer />
      <Cookies_Card />
    </>
  );
};

export default App;
