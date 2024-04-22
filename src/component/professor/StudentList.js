import React, { useEffect, useState } from 'react'

const StudentList = () => {
    const [detail, setDetail] = useState([]);
    useEffect(()=>{
        fetchData();
    })
    const fetchData=async()=>{
        const formData={
            userName: localStorage.getItem('professor')
        }
        const response = await fetch("http://localhost:3002/professor/getStudent", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        })

        const data = await response.json();
        if (Array.isArray(data.data)) {
            setDetail(data.data);
        } else {
            setDetail([]);
        }
    }

    
  return (
    <div className="centerized" style={{flexDirection:"column", margin:"20px"}}>
        <h5>STUDENT LIST</h5>
        <table className="table">
            <tr className="table">
                <th className='column'>firstName</th>
                <th className="column">LastName</th>
                <th className="column">Gender</th>
                <th className="column">Enrollment Number</th>
                <th className="column">Phone Number</th>
            </tr>
        {detail.length > 0 ? detail.map((student) =>

            <tr className="table">
                <td className="column">{student.firstName}</td>
                <td className="column">{student.lastName}</td>
                <td className="column">{student.gender}</td>
                <td className="column">{student.srID}</td>
                <td className="column">{student.phoneNumber}</td>
            </tr>

        )
      
         :<></>
        }
    </table>
    </div>
  )
}

export default StudentList