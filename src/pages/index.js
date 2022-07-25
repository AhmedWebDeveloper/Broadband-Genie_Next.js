import * as React from "react";
import App from './App'
import { BrowserRouter } from "react-router-dom";

// markup
const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
      <BrowserRouter>
     <App/>
     </BrowserRouter>
    </main>
  );
};

export default IndexPage;
