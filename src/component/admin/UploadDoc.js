import React, { useEffect, useState } from 'react';
import { message } from 'antd';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

const DocumentUpload = () => {
    const [file, setFile] = useState(null);
    const[doc,setDocuments]=useState([]);
    const [messageApi, contextHolder] = message.useMessage();
    const navigate=useNavigate();

    const success = (response) => {
        messageApi.open({
          type: 'success',
          content: response,
        });
      };

    const handleFileSelect = () => {
        document.getElementById('fileInput').click();
    };


    useEffect(()=>{
       fetchData();
    },[])

    const fetchData=()=>{
        fetch('http://localhost:3002/list-files')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            setDocuments(data)
        })
        .catch(error => {
            console.error('Error fetching files:', error);
        });
    }


    const handleSubmit = async (event) => {
        event.preventDefault();
        if (file == null) {
            alert("select a file to upload");
        }
        const formData = new FormData();
        formData.append('documentPDF', file);

        try {
            const response = await fetch('http://localhost:3002/upload', {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();
            if (data.message === "success") {
                success("Document uploaded successfully");
                fetchData();
                setFile(null);
            }
            else {
                alert("Error in uploading");
            }

        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    const navFunction=()=>{
        console.log("hii");
        navigate("/admin/features");
    }

    const deleteFile = async (filename) => {
        try {
            const response = await fetch(`http://localhost:3002/delete-file/${filename}`, {
                method: 'DELETE',
            });
    
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            fetchData();
            success("Deleted successfully");
            
        } catch (error) {
            console.error('Error deleting file:', error);
        }
    };
    

    return (
        <>
          {contextHolder}
            <div style={{backgroundColor:"#d4cfcfec"}}>
                <button className='exitBtn' onClick={navFunction}><ArrowBackIcon/></button>
                
            </div>
            <div style={{ height: "73vh", flexDirection: "column",backgroundColor:"#d4cfcfec"}} className='centerized'>
                <div className='fileContainer'>
                    <input
                        type="file"
                        id="fileInput"
                        style={{ display: 'none' }}
                        onChange={(e) => setFile(e.target.files[0])}
                    />
                    <button variant="contained" className='fileBtn' onClick={handleFileSelect}>Choose File</button>
                    <div className='centerized'><h6>{file ? file.name : "No file choosen"}</h6></div>
                    <button onClick={handleSubmit} className='fileBtn2'>Upload</button>
                </div>

                <div className='notice centerized'>
                    <p>Note: Uploaded documents are shown as a notice on the HomePage of the Website. Verify and confirm the document content before uploading.</p>
                </div>
            </div>

            <div className='documentsContainer2 centerized'>
                <h4 style={{margin:"20px"}}>UPLOADED DOCUMENTS</h4>
                <ul>
                    {doc.length>0? doc.map(doc => (
                        <li key={doc}>
                           <div style={{display:"flex"}}>
                           <p style={{width:"450px"}}>{doc}</p><h6 style={{ cursor:"pointer"}} onClick={()=>deleteFile(doc)}>DELETE</h6>
                           </div>
                        </li>
                    )) :<p > No current notices and any documents</p>}
                </ul>
            </div>
        </>
    );
};

export default DocumentUpload;
