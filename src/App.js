
import './App.css';
import React from 'react'


import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


import HomePage from './component/Layout/HomePage';
import AdminAuthentication from './component/admin/AdminAuthentication';
import ProfessorHomePage from './component/professor/ProfessorHomePage';
import AdminFunction from './component/admin/AdminFunctions';
import StudentRegister from './component/admin/StudentRegister';


 const App =()=> {

 
    return (

      <div>
        <Router>                
          <Routes>
            <Route exact path="/" element={ <HomePage />}/>
            <Route exact path="/admin/authentication" element={<AdminAuthentication/> }/>
            <Route exact path="/professor/authentication" element={<ProfessorHomePage/>}/>
            <Route exact path="/admin/features" element={ <AdminFunction/>}/>
            <Route exact path="/admin/register" element={ <StudentRegister/>}/>
          </Routes>
        </Router>
      </div>
    )
  
}
export default App


