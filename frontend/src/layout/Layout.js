import React from "react";

import Routing from "./Routing";
import Header from "./Header";
import NavBar from "./NavBar";
import Footer from "./Footer";

function Layout() {
  return (
    <div>
      <div>
        {localStorage.getItem('surveyComplete') == 'true' ? 
        <div>
          <Header />
          <NavBar />
        </div> 
        :<></>}
        <div>
          <Routing />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Layout;
