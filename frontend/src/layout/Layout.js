import React from "react";

import Routing from "./Routing";
import NavBar from "./NavBar";
import Footer from "./Footer";

function Layout() {
  return (
    <div>
      <div className="flex flex-col min-h-screen">
        <div>
          
          <NavBar />
        </div> 
        
        <main className="flex-1">
          <Routing />
        </main>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Layout;
