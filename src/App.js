
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
import StudentFunction from './component/student/StudentFunction';
import BonafideRequest from './component/student/BonafideRequest';
import BonafideApproval from './component/admin/BonafideApproval';
import ProfessorFunction from './component/professor/ProfessorFunction';
import StudentList from './component/professor/StudentList';
import GetSubject from './component/professor/getSubject';
import CourseList from './component/student/CourseList';



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
            <Route exact path="/student/features" element={ <StudentFunction/>}/>
            <Route exact path="/student/bonafide-request" element={ <BonafideRequest/>}/>
            <Route exact path="/admin/bonafide-approval" element={ <BonafideApproval/>}/>
            <Route exact path="/professor/features" element={ <ProfessorFunction/>}/>
            <Route exact path="/professor/student-list" element={ <StudentList/>}/>
            <Route exact path="/professor/select-subject" element={<GetSubject/>}/>
            <Route exact path="/student/course-list" element={<CourseList/>}/>
          
          </Routes>
        </Router>
      </div>
    )
  
}
export default App


