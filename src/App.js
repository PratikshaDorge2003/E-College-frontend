
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
import DocumentUpload from './component/admin/UploadDoc';
import StudentAuthentication from './component/student/StudentAuthentication';
import { ProfessorApproval } from './component/admin/ProfessorApproval';
import SearchStudent from './component/admin/SearchStudent';


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
            <Route exact path="/admin/upload-doc" element={ <DocumentUpload/>}/>
            <Route exact path="/admin/prof-approval" element={ <ProfessorApproval/>}/>
            <Route exact path="/admin/search-student" element={ <SearchStudent/>}/>
            <Route exact path="/student/authentication" element={ <StudentAuthentication/>}/>
          </Routes>
        </Router>
      </div>
    )
  
}
export default App


