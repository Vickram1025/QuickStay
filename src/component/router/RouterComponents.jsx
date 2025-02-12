import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Home';
import About from '../About';
import Find from '../Find';
import Blog from '../Blog';
import Contact from '../Contact';
import Layout from '../Layout'; 

import Login from '../Login';
import Signup from '../Signup';
import Profile from '../Profile'
import Listing from '../Listing';
import PropertyDetail from '../PropertyDetail'

const RouterComponents = () => {
  return (
    <Routes>

<Route path='/login' element={<Login/>}/>
<Route path='/signup' element={<Signup/>}/>


      <Route path="/" element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/find Room' element={<Find />} />
        <Route path='/Blog' element={<Blog />} />
        <Route path='/Contact' element={<Contact />} />
      
        <Route path ="/Profile"  element = {< Profile/>}/>
        <Route path ="/Listing" element = {<Listing/>}/>
        <Route path = "/PropertyDetail/:name" element = {<PropertyDetail /> } />
       
      </Route>
    </Routes>
  );
};

export default RouterComponents;
