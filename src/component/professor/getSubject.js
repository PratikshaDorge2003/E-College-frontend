import Button from '@mui/material/Button';
import React, { useEffect, useState } from 'react'
import Checkbox from '@mui/material/Checkbox';
import { message } from 'antd';

function GetSubject() {
    const [detail, setDetail] = useState("");
    const [subject1, setSubject] = useState("");
    const [subject2, set2Subject] = useState("");
    const [subject3, set3Subject] = useState("");
    const [subject4, set4Subject] = useState("");
    const [subject5, set5Subject] = useState("");
    const [error, setError] = useState("");
    const [messageApi, contextHolder] = message.useMessage();



    const success = (response) => {
        messageApi.open({
            type: 'success',
            content: response,
        });
    };

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const formData = {
            userName: localStorage.getItem('professor')
        }
        const response = await fetch("http://localhost:3002/professor/getSubject", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        })

        const data = await response.json();
        setDetail(data.data);
        console.log(data.data);
    }


    const setSubject2 = () => {
        if (subject2 === "") {
            set2Subject(detail.subject2.name);
        }
        else {
            set2Subject("");
        }
    }

    const setSubject3 = () => {
        if (subject3 === "") {
            set3Subject(detail.subject3.name);
        }
        else {
            set3Subject("");
        }
    }

    const setSubject4 = () => {
        if (subject4 === "") {
            set4Subject(detail.subject4.name);
        }
        else {
            set4Subject("");
        }
    }

    const setSubject5 = () => {
        if (subject5 === "") {
            set5Subject(detail.subject5.name);
        }
        else {
            set5Subject("");
        }
    }


    const setSubject1 = () => {
        if (subject1 === "") {
            setSubject(detail.subject1.name);
        }
        else {
            setSubject("");
        }
    }


    const Submit = async () => {
        if (!subject1 && !subject2 && !subject3 && !subject4 && !subject5) {
            setError("Select a subject to registration");
        }

        else {
            setError("");
            let subjects = "";
            if (subject1) {
                subjects = subjects + subject1 + ",";
            }
            if (subject2) {
                subjects = subjects + subject2 + ",";
            }
            if (subject3) {
                subjects = subjects + subject3 + ",";
            }
            if (subject4) {
                subjects = subjects + subject4 + ",";
            }
            if (subject5) {
                subjects = subjects + subject5 + ",";
            }



            const formData = {
                subjects: subjects,
                userName: localStorage.getItem('professor')
            }
            const response = await fetch("http://localhost:3002/professor/assign-Subject", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',

                },
                body: JSON.stringify(formData),

            });
            
            const result = await response.json();
            console.log(result);
            fetchData();
            success("Subject registered successfully");

        }

    }


    return (
        <div className='centerized' style={{ marginTop: "50px", flexDirection: "column" }} >
            {contextHolder}
            <h5 style={{ marginBottom: "50px", color: "green" }}> SUBJECT REGISTRATION </h5>
            <p>Note : Please make sure to select subject which are alloted</p>
            <div style={{ padding: "50px", width: "50%", border: "1px solid black" }}>
                {detail ?
                    <div >
                        <div style={{ display: "flex", margin: "20px" }}>
                            <div className='subjectName'>{detail.subject1.name} </div>
                            <div className='statusName'>{detail.subject1.status}</div>
                            {detail.subject1.status === "Assigned" ? <div className='selectButton'><Checkbox disabled /></div>
                                : <div className='selectButton'> <Checkbox onChange={setSubject1} /> </div>}

                        </div>
                        <div style={{ display: "flex", margin: "20px" }}>
                            <div className='subjectName'>{detail.subject2.name} </div>
                            <div className='statusName'>{detail.subject2.status}</div>
                            {detail.subject2.status === "Assigned" ? <div className='selectButton'><Checkbox disabled /></div>
                                : <div className='selectButton'> <Checkbox onChange={setSubject2} /> </div>}
                        </div>
                        <div style={{ display: "flex", margin: "20px" }}>
                            <div className='subjectName'>{detail.subject3.name} </div>
                            <div className='statusName'>{detail.subject3.status}</div>
                            {detail.subject3.status === "Assigned" ? <div className='selectButton'><Checkbox disabled /></div>
                                : <div className='selectButton'> <Checkbox onChange={setSubject3} /> </div>}
                        </div>
                        <div style={{ display: "flex", margin: "20px" }}>
                            <div className='subjectName'>{detail.subject4.name} </div>
                            <div className='statusName'>{detail.subject4.status}</div>
                            {detail.subject4.status === "Assigned" ? <div className='selectButton'><Checkbox disabled /></div>
                                : <div className='selectButton'> <Checkbox onChange={setSubject4} /> </div>}
                        </div>
                        <div style={{ display: "flex", margin: "20px" }}>
                            <div className='subjectName'>{detail.subject5.name} </div>
                            <div className='statusName'>{detail.subject5.status}</div>
                            {detail.subject5.status === "Assigned" ? <div className='selectButton'><Checkbox disabled /></div>
                                : <div className='selectButton'> <Checkbox onChange={setSubject5} /> </div>}
                        </div>
                        <div className='centerized' style={{ marginTop: "50px" }}><Button variant="contained" style={{ backgroundColor: "green", width: "60%" }} onClick={(Submit)}>Submit</Button> </div>
                        <p style={{ color: "red" }} className='centerized'>{error}</p>

                    </div>

                    :
                    <></>}

            </div>

        </div>
    )
}

export default GetSubject