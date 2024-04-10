import React from 'react'

import { useState } from "react";
import {
    Box,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import { useNavigate } from 'react-router-dom';

function AdminAuthentication() {
    const [email, setEmail] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [openProgressBar, setOpenProgressBar] = React.useState(false);
    const navigate = useNavigate();

    const Submit = async (event) => {
        setOpenProgressBar(true);
        event.preventDefault();
        

        if ( !email || !userName || !password) {
            setOpenProgressBar(false);
            setError("Please fill all required field");
        }
        else {
        
            setError("");
            const formdata = {
                "email": email,
                "userName": userName,
                "password": password,
            }
            console.log(formdata);
            const response = await fetch("http://localhost:3002/admin/login", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',

                },
                body: JSON.stringify(formdata),

            });
            const result = await response.json();
            setOpenProgressBar(false);
            console.log(result);

            if (result.error) {
                setError(result.error)
            }
            else {
                setEmail(""); setUserName("");setPassword("");
                navigate("/admin/features");

            }



        }
    }

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
                                <div className='FormTitle'><h5>ADMIN LOGIN</h5></div>
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
                                    id="email"
                                    label="Email"
                                    type="phone"
                                    value={email}
                                    variant="outlined"
                                    color='success'
                                    required
                                    onChange={(event) => setEmail(event.target.value)}
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
                                   <button className='FormBtn' onClick={Submit}>Log In</button>
                            </div>
                            <p style={{color:"red"}}>{error}</p>
                    </div>

                </Box>


            </div>

        </div>
    )

}
export default AdminAuthentication;