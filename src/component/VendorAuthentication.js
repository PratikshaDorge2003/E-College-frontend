import React from 'react'

import { useState } from "react";
import {
    Box,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import { Link } from 'react-router-dom';

function VendorAuthentication() {
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [organization, setOrganization] = useState("");
    const [location, setLocation] = useState("");
    const [password, setPassword] = useState("");
    const [license, setLicense] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [page, setPage] = useState("SignUp")

    const Submit = () => {

    }

    const handleClose = () => {

    }

    const LogInFunction = () => {
        setPage("LogIn");
        setfirstName('');
        setlastName('');
        setEmail('');
        setPhone('');
        setLocation('');
       setOrganization('');
       setConfirmPassword('');
       setPassword('');
       setLicense('');


    }

    const SIGNUPFunction = () => {
        setPage("SignUp");
        setfirstName('');
        setlastName('');
        setEmail('');
        setPhone('');
        setConfirmPassword('');
       setPassword('');
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
                        {page === "SignUp" && (
                            <div className='InnerDiv'>
                                <div className='FormTitle'><h5>VENDOR REGISTRATION</h5></div>
                                <TextField
                                    margin="dense"
                                    id="firstname"
                                    label="First Name"
                                    type="firstname"
                                    value={firstName}
                                    variant="outlined"
                                    color='success'
                                    required
                                    onChange={(event) => setfirstName(event.target.value)}
                                />
                                <TextField
                                    margin="dense"
                                    id="Last Name"
                                    label="Last Name"
                                    type="Last Name"
                                    value={lastName}
                                    variant="outlined"
                                    color='success'
                                    required
                                    onChange={(event) => setlastName(event.target.value)}
                                />
                                <TextField
                                    margin="dense"
                                    id="phone"
                                    label="Mobile No"
                                    type="phone"
                                    value={phone}
                                    variant="outlined"
                                    color='success'
                                    required
                                    onChange={(event) => setPhone(event.target.value)}
                                />
                                <TextField

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
                                <TextField
                                    margin="dense"
                                    id="confirmPassword"
                                    label="Confirm Password"
                                    type="confirmPassword"
                                    value={confirmPassword}
                                    variant="outlined"
                                    color='success'
                                    required
                                    onChange={(event) => setConfirmPassword(event.target.value)}
                                />
                                <TextField

                                    margin="dense"
                                    id="license"
                                    label="License"
                                    type="license"
                                    value={license}
                                    variant="outlined"
                                    color='success'
                                    required
                                    onChange={(event) => setLicense(event.target.value)}
                                />
                                <TextField

                                    margin="dense"
                                    id="organization"
                                    label="Organization"
                                    type="organization"
                                    value={organization}
                                    variant="outlined"
                                    color='success'
                                    required
                                    onChange={(event) => setOrganization(event.target.value)}
                                />
                                <TextField
                                    style={{ width: "80%" }}
                                    margin="dense"
                                    id="location"
                                    label="Location"
                                    type="location"
                                    value={location}
                                    variant="outlined"
                                    color='success'
                                    required
                                    onChange={(event) => setLocation(event.target.value)}
                                />
                                <div className='centerized'><p>Aready had an account ?&nbsp; </p><p className='FormBtn2' onClick={LogInFunction}> Log In</p></div>
                                <button className='FormBtn'>Sign Up</button>
                            </div>
                        )}
                        {page === "LogIn" && (

                            <div className='InnerDiv'>
                                <div className='FormTitle'><h5>VENDOR LOGIN</h5></div>
                                <TextField
                                    style={{ width: "80%" }}
                                    margin="dense"
                                    id="phone"
                                    label="Mobile No"
                                    type="phone"
                                    value={phone}
                                    variant="outlined"
                                    color='success'
                                    required
                                    onChange={(event) => setPhone(event.target.value)}
                                />
                                <TextField
                                    style={{ width: "80%" }}
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
                                    style={{ width: "80%" }}
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
                                <TextField
                                    style={{ width: "80%" }}
                                    margin="dense"
                                    id="confirmPassword"
                                    label="Confirm Password"
                                    type="confirmPassword"
                                    value={confirmPassword}
                                    variant="outlined"
                                    color='success'
                                    required
                                    onChange={(event) => setConfirmPassword(event.target.value)}
                                />
                                <div className='centerized'><p>Create New Account&nbsp;&nbsp; </p><p className='FormBtn2' onClick={SIGNUPFunction}> Sign In</p></div>
                                <button className='FormBtn'>Log In</button>
                            </div>

                        )}
                    </div>

                </Box>


            </div>

        </div>
    )

}
export default VendorAuthentication;