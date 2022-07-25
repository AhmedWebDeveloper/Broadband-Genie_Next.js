import React from "react";
import Header from "./Home_Page_Comps/header";
import Footer from "./Home_Page_Comps/footer";
import CookiesCard from "./Home_Page_Comps/cookiescard";
import Home from './Home_Page_Comps/home'

import { Route, Switch, Redirect } from "react-router-dom";
const App = () => {
  return (
    <>
      
      <Header />
      <Switch>
       
       <Route exact path="/home" component={Home} />
       <Route exact path="/" component={Home} />
       <Redirect exact to="/" />
     </Switch>
      <Footer />
     <CookiesCard/>
    </>
  );
};

export default App;
