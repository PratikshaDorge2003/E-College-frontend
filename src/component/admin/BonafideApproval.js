import React from 'react'
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react'
import { message } from 'antd';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import TextField from "@mui/material/TextField";

const BonafideApproval = () => {
    const [data, setData] = useState([]);
    const [messageApi, contextHolder] = message.useMessage();
    const[disapproval,setDisapproval]=useState("");

    const success = (response) => {
        messageApi.open({
            type: 'success',
            content: response,
        });
    };

    const del = (response) => {
        messageApi.open({
            type: 'error',
            content: response,
        });
    };

    useEffect(() => {

        fetchData();
    }, [])

    const fetchData = async () => {
        const response = await fetch("http://localhost:3002/student/getBonafide");
        console.log(response);
        const result = await response.json();
        setData(result.data);
        console.log(result.data);
    }

    const approveFunc = async (data) => {
        const formData={
            userName: data.userName
        }
        const response = await fetch("http://localhost:3002/student/bonafide-approval", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        })
        const result = await response.json();
        if (result.data.modifiedCount === 1) {
            success(`${data.name} bonafide application approved`);
            fetchData();
        }

    }

    const delFunction = async (data) => {
        if (!disapproval) {
            del("Mention reason of disapproval")
        }
        else {
            const formData={
                userName: data.userName,
                disapproval:disapproval
            }
            console.log(formData)
            const response = await fetch("http://localhost:3002/student/bonafide-disapproval", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            })
            const result = await response.json();
            console.log(result);
            if (result.data.modifiedCount === 1) {
                del(`${data.name} application disapproved `);
                fetchData();
            }
        }
    }
    return (
        <div style={{ flexDirection: "column" }} className='centerized'>
            {contextHolder}
            <h2 style={{ margin: "20px" }}>PENDING BONAFIDE APPLICATIONS</h2>
            <h6 style={{ marginBottom: "20px" }}>Total Applications : {data ? data.length : 0}</h6>
            {data.length > 0 ? data.map((bonafide) => (
                <Accordion expanded={true} className='accordian' style={{ width: "60%", boxShadow: " rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" }}>
                    <AccordionSummary
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                    </AccordionSummary>
                    <AccordionDetails>
                        <div key={bonafide._id} style={{ marginBottom: "30px" }}>
                            <div><b>Name : </b>{bonafide.name}</div>
                            <div><b>Enrollment Number. : </b> {bonafide.enrollment}</div>
                            <div><b>Department and Year : </b> {bonafide.course}</div>
                            <div><b>Semester : </b> {bonafide.semester}</div>
                            <div><b>Reason : </b> {bonafide.reason}</div>
                            <div><b>Email : </b> {bonafide.email}</div>
                        </div>
                        <Button variant="contained" style={{ marginRight: "20px" }} color="success" onClick={() => approveFunc(bonafide)}>APPROVE</Button>
                        <Button variant="contained" color="error" onClick={() => delFunction(bonafide)}>DISAPPROVE</Button>
                        < TextField
                            type="text"
                            style={{ width: "80%" }}
                            label="Disapproval Reason"
                            value={disapproval}
                            name="disapproval"
                            variant="outlined"
                            onChange={(event) => setDisapproval(event.target.value)}
                            margin="dense"
                        />
                    </AccordionDetails>
                </Accordion>


            )) : <>No Pending applications</>}
        </div>
    )
}

export default BonafideApproval