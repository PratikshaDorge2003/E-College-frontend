
import { Link } from 'react-router-dom'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

import '../../index.css';




const Navbar = (props) => {

    const navigate = useNavigate();
    const navigateAdmin=()=>{
        navigate("/admin/authentication");
    }

    const navigateProfessor=()=>{
        navigate("/professor/authentication");
    }

    const navigateStudent=()=>{
        navigate("/student/authentication")
    }

    return (
        <Box sx={{ flexGrow: 1 }} >
            <AppBar position="static" sx={{ backgroundColor: '#0aa8ad' }}>
                <Toolbar >
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                       GECCS
                    </Typography>
                    <div className='NavBtn-Div centerized'><button className='NavBtn' onClick={navigateAdmin}>Admin Login</button></div>
                    <div className='NavBtn-Div centerized'><button className='NavBtn' onClick={navigateProfessor}>Professor Registration</button></div>
                    <div className='NavBtn-Div centerized'><button className='NavBtn' onClick={navigateStudent}>Student Login</button></div>


                </Toolbar>
            </AppBar>
        </Box>
    )

}
export default Navbar
