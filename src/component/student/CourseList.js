import React from 'react'
import { useState, useEffect } from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';


function CourseList() {
    const [detail, setDetail] = useState("");
    const [professor, setProfessor] = useState("");
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };


    useEffect(() => {
        fetchData();
   

    }, [])

  


    const fetchData = async () => {
        const formData = {
            userName: localStorage.getItem('username')
        }
        const response = await fetch("http://localhost:3002/student/getSubject", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        })

        const data = await response.json();
        setDetail(data.data);
    }

    // const professorData = async () => {
    //     const formData = {
    //         userName: localStorage.getItem('username')
    //     }
    //     const response = await fetch("http://localhost:3002/student/getSubject", {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(formData)
    //     })

    //     const data = await response.json();
    //     setDetail(data.data);
    // }

    return (
        <div className='centerized' style={{ flexDirection: "column" }}>
            <Button onClick={toggleDrawer(true)} style={{margin:"50px"}}>Get Subject List</Button>
            <Drawer open={open} onClose={toggleDrawer(false)}>
                <h5 style={{margin:"30px 60px"}}>Subject Names</h5>
                {detail? <div>
                    <div style={{margin:"30px 60px"}}>1. {detail.subject1.name}</div>
                    <div style={{margin:"30px 60px"}}>2. {detail.subject2.name}</div>
                    <div style={{margin:"30px 60px"}}>3. {detail.subject3.name}</div>
                    <div style={{margin:"30px 60px"}}>4. {detail.subject4.name}</div>
                    <div style={{margin:"30px 60px"}}>5. {detail.subject5.name}</div>
                </div>:<></>}
            </Drawer>
            <h5>ProfessorList</h5>




        </div>
    )
}

export default CourseList