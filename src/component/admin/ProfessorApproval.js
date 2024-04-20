import Button from '@mui/material/Button';
import React, { useEffect, useState } from 'react'
import { message } from 'antd';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import {Typography} from '@mui/material'


export const ProfessorApproval = () => {
  const [data, setData] = useState([]);
  const [messageApi, contextHolder] = message.useMessage();

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
    const response = await fetch("http://localhost:3002/professor/registered");
    const result = await response.json();
    setData(result.data);
    console.log(result.data);
  }

  const approveFunc = async (professor) => {
    const response = await fetch("http://localhost:3002/professor/approve", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(professor)
    })
    const result = await response.json();
    if (result.data.modifiedCount === 1) {
      success(`${professor.firstName + " " + professor.lastName} application approved`);
      fetchData();
    }

  }

  const deleteFunction = async (professor) => {
    const response = await fetch("http://localhost:3002/professor/del", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(professor)
    })
    const result = await response.json();
    if (result.data.modifiedCount === 1) {
      del(`${professor.firstName + " " + professor.lastName} application deleted `);
      fetchData();
    }
  }
  return (
    <div style={{ flexDirection: "column" }} className='centerized'>
      {contextHolder}
      <h2 style={{ color: "red", margin: "20px" }}>PENDING APPLICATIONS</h2>
      <h6 style={{marginBottom:"20px"}}>Total Applications : {data? data.length : 0}</h6>
      {data.length > 0 ? data.map((professor) => (
        <Accordion expanded={true} className='accordian' style={{width:"60%", boxShadow:" rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"}}>
          <AccordionSummary
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className='subHeading'>SR_ID : {professor.SR_ID} </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div key={professor._id} style={{ marginBottom: "30px" }}>
              <div><b>Name : </b>{professor.firstName + " " + professor.lastName}</div>
              <div><b>Mobile No. : </b> {professor.phoneNumber}</div>
              <div><b>Subject : </b> {professor.subject}</div>
              <div><b>Department : </b> {professor.department}</div>
              <div><b>Email : </b> {professor.email}</div>
            </div>
            <Button variant="contained" style={{ marginRight: "20px" }} color="success" onClick={() => approveFunc(professor)}>Approve</Button>
            <Button variant="contained" color="error" onClick={() => deleteFunction(professor)}>Delete</Button>
          </AccordionDetails>
        </Accordion>


      )) : <>No Pending applications</>}


    </div>
  )
}

