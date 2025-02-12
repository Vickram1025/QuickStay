import React from 'react';
import { Outlet } from 'react-router-dom';
import {Navbar} from '../component/Navbar';
import Footer from '../component/router/Footer';

const Layout = () => {
  return (
    <div>
      <Navbar/>
      <div className="w-full min-h-100vh absolute top-[55px]">
        <Outlet />
        <Footer/>
      </div>
    
    </div>
  );
};

export default Layout;
