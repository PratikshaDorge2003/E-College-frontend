
import './App.css';
import React from 'react'
import { useState } from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


import HomePage from './component/HomePage';
import Navbar from './component/Navbar1';
import VendorLogin from './component/VendorAuthentication';
import UserLogin from './component/UserAuthentication'


 const App =()=> {

  const[displayContent,SetdisplayContent]=useState({
    display:"block"
   })
    return (

      <div>
     
        <Router>
        
                 
          <Routes>
            <Route exact path="/" element={ <HomePage SetdisplayContent={SetdisplayContent}/>}/>
            <Route exact path="/vendor-Authenctication" element={ <VendorLogin/>}/>
            <Route exact path="/profile" element={ <UserLogin/>}/>
          </Routes>
        </Router>
      </div>
    )
  
}
export default App


