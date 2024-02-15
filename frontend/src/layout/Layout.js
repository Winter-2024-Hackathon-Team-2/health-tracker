import React from "react";

import Routing from "./Routing";
import Header from "./Header";
import NavBar from "./NavBar";


function Layout() {
  return (
    <div>
      <div>
      <Header />
      <NavBar />
        <div>
          <Routing />
        </div>
      </div>
    </div>
  )
}

export default Layout