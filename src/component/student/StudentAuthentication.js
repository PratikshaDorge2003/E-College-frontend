import React, { useState } from 'react'
import {
    Box,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import { useNavigate } from 'react-router-dom';

const StudentAuthentication = () => {
    const[userName,setUserName]=useState("");
    const[password,setPassword]=useState("");
  return (
    <div>

    <div className='Container centerized'>
        <Box
            component="form"
            sx={{
                "& .MuiTextField-root": { m: 1, width: "20ch" },
            }}
            noValidate
            autoComplete="off"
        >
            <div className='FormDiv'>
                    <div className='InnerDiv'>
                        <div className='FormTitle'><h5>STUDENT LOGIN</h5></div>
                        <TextField
                            style={{ width: "85%" }}
                            margin="dense"
                            id="userName"
                            label="UserName"
                            type="userName"
                            value={userName}
                            variant="outlined"
                            color='success'
                            required
                            onChange={(event) => setUserName(event.target.value)}
                        />
                        <TextField
                            style={{ width: "85%" }}
                            margin="dense"
                            id="password"
                            label="Password"
                            type="password"
                            value={password}
                            variant="outlined"
                            color='success'
                            required
                            onChange={(event) => setPassword(event.target.value)}
                        />
                           <button className='FormBtn'>Log In</button>
                    </div>
                   
            </div>

        </Box>


    </div>

</div>
  )
}

export default StudentAuthentication