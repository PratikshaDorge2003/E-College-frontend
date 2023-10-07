
import './App.css';
import React from 'react'


import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


import HomePage from './component/HomePage';
import VendorHomePage from './component/VendorHomePage';
import UserLogin from './component/UserAuthentication'


 const App =()=> {

 
    return (

      <div>
     
        <Router>
        
                 
          <Routes>
            <Route exact path="/" element={ <HomePage />}/>
            <Route exact path="/vendor/HomePage" element={ <VendorHomePage/>}/>
            <Route exact path="/profile" element={ <UserLogin/>}/>
          </Routes>
        </Router>
      </div>
    )
  
}
export default App


