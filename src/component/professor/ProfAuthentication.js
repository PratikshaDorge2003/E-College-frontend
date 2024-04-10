import React from 'react'

import { useState } from "react";
import {
    Box,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import {
    CircularProgress,
    Backdrop
} from "@mui/material";


const ProfAuthentication = () => {
    console.log('VendorA is rendering...');
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [section, setSection] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [page, setPage] = useState("SignUp");
    const [error, setError] = useState("");
    const[srID,setID]=useState("");
    const [openProgressBar, setOpenProgressBar] = React.useState(false);

    const Submit = async (event) => {
        setOpenProgressBar(true);
        event.preventDefault();
        

        if (!firstName || !lastName || !email || !phone || !section || !password  || !confirmPassword) {
            setOpenProgressBar(false);
            setError("Please fill all required field");
        }
        else if (password !== confirmPassword) {
            setOpenProgressBar(false);
            setError("Invalid password entry");
        }

        else if (password.length < 8) {
            setOpenProgressBar(false);
            setError("Password is too short");
        }
        else if(phone.length !== 10){
            setOpenProgressBar(false);
            setError("Invalid Mobile number")
        }
        else {
        
            setError("");
            const formdata = {
                "firstName": firstName,
                "lastName": lastName,
                "email": email,
                "phoneNumber": phone,
                "password": password,
                "section": section,
            }

            const response = await fetch("http://localhost:3002/admin/register", {
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
                setError("Successfully registered");
                setfirstName(""); setlastName(""); setSection(""); setEmail(""); setPhone("");
                setConfirmPassword(""); setPassword("");

            }



        }
    }


    const ChangePageFunction2 = () => {
        setPage("LogIn");
        setfirstName('');
        setlastName('');
        setEmail('');
        setPhone('');
        setSection('');
        setConfirmPassword('');


    }

    const ChangePageFunction1 = () => {
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
            <Backdrop
                sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={openProgressBar}
            >
                <CircularProgress color="inherit" />
            </Backdrop>

            <div>
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
                                <div className='FormTitle'><h5>PROFESSOR REGISTRATION</h5></div>
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
                                    type="password"
                                    value={confirmPassword}
                                    variant="outlined"
                                    color='success'
                                    required
                                    onChange={(event) => setConfirmPassword(event.target.value)}
                                />
                                <TextField
                                    style={{ width: "80%" }}
                                    margin="dense"
                                    id="srID"
                                    label="SR ID"
                                    type="srID"
                                    value={srID}
                                    variant="outlined"
                                    color='success'
                                    required
                                    onChange={(event) => setID(event.target.value)}
                                />
                                <TextField
                                    style={{ width: "80%" }}
                                    margin="dense"
                                    id="Section"
                                    label="Department"
                                    type="Section"
                                    value={section}
                                    variant="outlined"
                                    color='success'
                                    required
                                    onChange={(event) => setSection(event.target.value)}
                                />
                                <div className='centerized'><p>Aready had an account ?&nbsp; </p><p className='FormBtn2' onClick={ChangePageFunction2}> Log In</p></div>
                                <button className='FormBtn' onClick={Submit}>Sign Up</button>
                            </div>
                        )}
                        {page === "LogIn" && (

                            <div className='InnerDiv'>
                                <div className='FormTitle'><h5>PROFESSOR LOGIN</h5></div>
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
                                    id="password"
                                    label="Confirm Password"
                                    type="password"
                                    value={confirmPassword}
                                    variant="outlined"
                                    color='success'
                                    required
                                    onChange={(event) => setConfirmPassword(event.target.value)}
                                />
                                <div className='centerized'><p>Create New Account&nbsp;&nbsp; </p><p className='FormBtn2' onClick={ChangePageFunction1}> Sign In</p></div>
                                <button className='FormBtn'>Log In</button>
                            </div>

                        )}
                        <p style={{color:"red"}}>{error}</p>
                    </div>

                </Box>


            </div>

        </div>
    )

}
export default React.memo(ProfAuthentication);