
import { Link } from 'react-router-dom'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

import '../index.css';




const Navbar = (props) => {

    const navigate = useNavigate();
    const navigateVendor=()=>{
        navigate("/vendor/HomePage");
    }

    return (
        <Box sx={{ flexGrow: 1 }} >
            <AppBar position="static" sx={{ backgroundColor: 'green' }}>
                <Toolbar >
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        E - Waste  Central
                    </Typography>
                    <div className='NavBtn-Div centerized'><button className='NavBtn' onClick={navigateVendor}>Become a vendor</button></div>
                    <div className="centerized"><Link to="/profile"><img className='profileIcon' src="./profile2.png" alt="" /></Link></div>

                </Toolbar>
            </AppBar>
        </Box>
    )

}
export default Navbar
