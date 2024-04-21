import React, { useEffect, useState } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import TextField from "@mui/material/TextField";
import { Typography } from '@mui/material'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Button from '@mui/material/Button';
import dayjs from 'dayjs';
import { message } from 'antd';


const BonafideRequest = () => {
  const today = dayjs();
  const [name, setName] = useState("");
  const [enrollment, setEnrollment] = useState("");
  const [course, setCourse] = useState("");
  const [semester, setSemester] = useState("");
  const [reason, setReason] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [messageApi, contextHolder] = message.useMessage();
  const [disapprovalReason,setDisapprovalReason]=useState("");
  const[approval,setapprovalReason]=useState("");
  const[status,setStatus]=useState("");



  const success = (response) => {
    messageApi.open({
      type: 'success',
      content: response,
    });
  };

  useEffect(()=>{
      fetchData();
  },[])

  const fetchData=async()=>{
    const formData={
      userName : localStorage.getItem('username')
    }
    const response = await fetch("http://localhost:3002/student/bonafide-status", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })
      const responseData = await response.json();
      if(responseData.data.length<=0){
        setStatus("Not applied for Bonafide Certificate")
      }
      else{
        setStatus(responseData.data[0].status);
        setDisapprovalReason("");
        if(responseData.data[0].status==="disapproved"){
          setDisapprovalReason(responseData.data[0].
            disapprovedReason)
        }
        if(responseData.data[0].status==="approved"){
          setapprovalReason("Mail for bonafide certificate")
        }
      }
      
     
  }

  const Submit = async () => {
    if (!name || !enrollment || !course || !semester || !reason || !email) {
      setError("Fill all the fields");
    }
    else {
      setError("");
      const formData = {
        name: name,
        enrollment: enrollment,
        course: course,
        semester: semester,
        reason: reason,
        email: email,
        userName: localStorage.getItem('username')
      }
      console.log(formData);
      const response = await fetch("http://localhost:3002/student/bonafide-request", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })
      const responseData=await response.json();
      console.log(responseData);
      if (!responseData.error) {
        success(responseData.data);
        fetchData();
        setCourse("");
        setEnrollment("");
        setName("");
        setReason("");
        setSemester("");
        setEmail("");
        setError("");

      }
      else {
        alert(responseData.error);
      }

      
     

    }

  }

  const resetFunction = () => {
    setCourse("");
    setEnrollment("");
    setName("");
    setReason("");
    setSemester("");
    setEmail("");
    setError("");

  }

  return (
    <div style={{ flexDirection: "column" }} className='centerized'>
       <div style={{margin:"20px",width:"60%", flexDirection:"column", border:"1px solid green"}} className='centerized'>
         <h5 style={{color:"green"}}>Application Status : {status}</h5>
         {disapprovalReason? <h6>Reason : {disapprovalReason}</h6>:<></>}
         {approval? <h6>{approval}</h6>:<></>}

      </div>
      <h6 style={{ marginTop: "20px" }}>Note : Fill the correct information for bonafide certificate approval </h6>
      <h6>If you submit multiple application it will be replaced with previous one</h6>
        <h6 style={{marginTop:"0px"}}>On approval certificate will be sended on submitted email</h6>
      {contextHolder}
      <Accordion expanded={true} className='accordian' style={{ width: "60%", marginTop: "20px" }}>
        <AccordionSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className='subHeading'>  Bonafide Application </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p style={{ color: "red" }}>{error}</p>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              value={today}
              style={{ width: "80%" }}
              label="Application Date"
              disabled
              format='DD/MM/YYYY'
            />
          </LocalizationProvider>
          < TextField
            type="text"
            style={{ width: "80%" }}
            label="Full Name of Applicant"
            value={name}
            name="FullName"
            variant="outlined"
            margin="dense"
            onChange={(event) => setName(event.target.value)}
          />



          <TextField
            margin="dense"
            label="Enrollment Number"
            name="EnrollmentNumber"
            value={enrollment}
            style={{ width: "80%" }}
            type="text"
            variant="outlined"
            onChange={(event) => setEnrollment(event.target.value)}
            required
          />

          < TextField
            type="text"
            style={{ width: "80%" }}
            label="Department and Year"
            name="Department/Year"
            value={course}
            variant="outlined"
            onChange={(event) => setCourse(event.target.value)}
            margin="dense"
          />

          < TextField
            type="text"
            style={{ width: "80%" }}
            label="Current Semester"
            value={semester}
            name="Semester"
            variant="outlined"
            onChange={(event) => setSemester(event.target.value)}
            margin="dense"
          />
          < TextField
            type="text"
            style={{ width: "80%" }}
            label="Reason for application"
            value={reason}
            name="Reason"
            variant="outlined"
            onChange={(event) => setReason(event.target.value)}
            margin="dense"
          />
          < TextField
            type="text"
            style={{ width: "80%" }}
            label="Email"
            value={email}
            name="email"
            variant="outlined"
            onChange={(event) => setEmail(event.target.value)}
            margin="dense"
          />
        </AccordionDetails>
        <div style={{ margin: "20px" }}>

          <Button variant="contained" style={{ margin: "0px 10px", backgroundColor: "green" }} onClick={Submit}>Submit</Button>
          <Button variant="contained" color="error" onClick={resetFunction}>Reset</Button>
        </div>
      </Accordion>
     

    </div>
  )
}


export default BonafideRequest;