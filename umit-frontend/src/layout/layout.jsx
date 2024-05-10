import Topbar from "../home/Topbar"
import Navbar from "../home/Navbar"
import Footer from "../home/Footer"

import React from 'react'

const Layout = ({children}) => {
  return (
    <React.Fragment>
              <Topbar/>
        <Navbar/>
        {children}
        <Footer/>
    </React.Fragment>
  );
};

export default Layout;  