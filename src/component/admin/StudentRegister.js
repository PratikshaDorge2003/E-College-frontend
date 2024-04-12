
import { React, useState } from 'react';
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
import { Typography, Box, FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import profile from "../../assets/Profile2.png";
import Alert from '@mui/material/Alert';
import dayjs from 'dayjs';


const StudentRegister = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [file, setFile] = useState("");
  const [error, setError] = useState(null);
  const[open, setOpen]=useState(false);
  const today = dayjs();

  const [formValues, setFormValues] = useState({ 
    RegistrationId: {
      value: '',
      error: false,
      errorMessage: 'Enter ID'
    },
    SR_ID: {
      value: '',
      error: false,
      errorMessage: 'Enter SR ID'
    },

    firstName: {
      value: '',
      error: false,
      errorMessage: 'Enter first name'
    },
    DOB: {
      value: null,
      formattedValue: " ",
    },
    mobile: {
      value: '',
      error: false,
      errorMessage: 'Enter mobile number'
    },
    FatherFirstName: {
      value: '',
      error: false,
      errorMessage: 'Enter father name'
    },
    MotherFirstName: {
      value: '',
      error: false,
      errorMessage: 'Enter mother name'
    },
    GovtId: {
      value: '',
      error: false,
      errorMessage: 'Enter Govt ID'

    },
    AdmissionDate: {
      value: today,
      formattedValue: today.format('DD/MM/YYYY'),
      error: false
    },

    LastName: {
      value: '',
    },
    Email: {
      value: '',
    },
    FatherLastName: {
      value: '',
    },
    FatherOccupation: {
      value: '',
    },
    MotherLastName: {
      value: '',
    },
    FamilyIncome: {
      value: '0',
    },
    AddressLine: {
      value: '',
    },
    place: {
      value: '',
    },
    PinCode: {
      value: '',
    },
    RegistrationId: {
      value: '',
    },
    Gender: {
      value: 'Male',
    },
    MarriageStatus: {
      value: 'Single',
    },
    PhysicalDisability: {
      value: 'No',
    },
    Caste: {
      value: 'General',
    },
    Religion: {
      value: 'Hindu',
    },
    GovtIdType: {
      value: 'Aadhaar Card',
    },
  })

  
  const [intialState, setIntialState] = useState(formValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: {
        ...formValues[name],
        value,
        error: false
      }
    })
  }

  const handleFileSelect = () => {
    document.getElementById('fileInput').click();
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setSelectedImage(URL.createObjectURL(selectedFile));
    setFile(selectedFile.name);

  };



  const resetFunction=()=>{
    setFormValues(intialState);
  }

  const isDateValid = (date) => {
    return date !== null && dayjs(date).isValid();
  };

  const Submit=async(event)=>{
    event.preventDefault();

    if (!formValues.firstName.value || !formValues. RegistrationId.value ||  !formValues.SR_ID.value || !formValues.mobile.value || !formValues.FatherFirstName.value
      || !formValues.MotherFirstName.value || !formValues.GovtId.value ||
      !isDateValid(formValues.AdmissionDate.formattedValue)) {
      const formFields = Object.keys(formValues);
      let newFormValues = { ...formValues }

      for (let index = 0; index < formFields.length; index++) {
        const currentField = formFields[index];

        const currentValue = formValues[currentField].value;

        if (currentValue === '' || currentValue === null || currentValue === undefined || (currentField === 'DOB' && !isDateValid(currentValue))) {
          console.log(currentValue)
          newFormValues = {
            ...newFormValues,
            [currentField]: {
              ...newFormValues[currentField],
              error: true
            }
          }
        }

      }
      setFormValues(newFormValues)
      console.log(formValues)
    }
    else {
      const formData = {
        email: formValues.Email.value,
        registrationID: formValues.RegistrationId.value,
        srID: formValues.SR_ID.value,
        firstName: formValues.firstName.value,
        DOB: formValues.DOB.formattedValue,
        phoneNumber: formValues.mobile.value,
        fatherFirstName: formValues.FatherFirstName.value,
        motherFirstName: formValues.MotherFirstName.value,
        govtID: formValues.GovtId.value,
        admissionDate: formValues.AdmissionDate.formattedValue,
        lastName: formValues.LastName.value,
        fatherLastName: formValues.FatherLastName.value,
        FatherOccupation: formValues.FatherOccupation.value,
        motherLastName: formValues.MotherLastName.value,
        familyIncome: formValues.FamilyIncome.value,
        addressLine: formValues.AddressLine.value,
        place: formValues.place.value,
        pinCode: formValues.PinCode.value,
        gender: formValues.Gender.value,
        marriageStatus: formValues.MarriageStatus.value,
        physicalDisability: formValues.PhysicalDisability.value,
        caste: formValues.Caste.value,
        religion: formValues.Religion.value,
        govtIDType: formValues.GovtIdType.value,
      };

      console.log(formData);

      const response = await fetch("http://localhost:3002/student/register",{
        method:'POST',
        headers:{
          'Content-Type': 'application/json',
        },
        body:JSON.stringify(formData)  
      })
        const responseData = await response.json(); 
        if(!responseData.error){
          setOpen(true)
        }
        setTimeout(() => {
          setOpen(false);
      }, 3000);
      
        setFormValues(intialState);

    }
  }


  return (
    <>
      <div className='heading centerized'>
        <h2>
          Student Details
        </h2>
      </div>
    
      <Grid container mt={5}>
        <Grid container justifyContent="center" alignItems="center" item xs={16} sm={9} order={{ xs: 2, sm: 1 }}>
          <Box
            component="form"
            width="95%"
            sx={{

              "& .MuiTextField-root": { m: 1, width: "30%" },

              '@media (max-width: 600px)': {
                "& .MuiTextField-root": {
                  width: "90%",

                },
              },
            }}

            noValidate
            autoComplete="off"
            container justifyContent="center" alignItems="center"
          >
            <Accordion expanded={true} className='accordian'>
              <AccordionSummary
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className='subHeading'>  Admission Information </Typography>
              </AccordionSummary>
              <AccordionDetails>
                < TextField
                  type="text"
                  label="Registration ID"
                  name="RegistrationId"
                  required
                  value={formValues.RegistrationId.value}
                  error={formValues.RegistrationId.error}
                  helperText={formValues.RegistrationId.error && formValues.RegistrationId.errorMessage}
                  variant="outlined"
                  margin="dense"
                  onChange={handleChange}
                />

                <TextField
                  margin="dense"
                  label="SR ID"
                  name="SR_ID"
                  value={formValues.SR_ID.value}
                  error={formValues.SR_ID.error}
                  helperText={formValues.SR_ID.error && formValues.SR_ID.errorMessage}
                  type="text"
                  variant="outlined"
                  required
                  onChange={handleChange}
                />

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    value={formValues.AdmissionDate.value}
                    label="Admission Date"
                    onError={(newError) => setError(newError)}
                    slotProps={{
                      textField: {
                        error: error === 'invalidDate' || !formValues.AdmissionDate.value,
                      },
                    }}
                    format='DD/MM/YYYY'
                  onChange={(date) => {
                    setFormValues((prevValues) => ({
                      ...prevValues,
                      AdmissionDate: {
                        value: date ? date : '',
                        formattedValue: date ? date.format('DD/MM/YYYY') : '',
                      },
                    }));
                  }}

                  />
                </LocalizationProvider>

              </AccordionDetails>
            </Accordion>
            <Accordion expanded={true} className='accordian'>
              <AccordionSummary
                aria-controls="panel1a-content"
                id="panel1a-header"

              >
                <Typography className='subHeading'>Personal Information</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <TextField
                  type="text"
                  label="First Name"
                  name="firstName"
                  value={formValues.firstName.value}
                  error={formValues.firstName.error}
                  helperText={formValues.firstName.error && formValues.firstName.errorMessage}
                  variant="outlined"
                  margin="dense"
                  required
                  onChange={handleChange}
                />
                <TextField
                  margin="dense"
                  label="Last Name"
                  value={formValues.LastName.value}
                  name="LastName"
                  type="text"
                    onChange={handleChange}
                  variant="outlined"
                />

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    value={formValues.DOB.value}
                    label="DOB"
                    onError={(newError) => setError(newError)}
                    slotProps={{
                      textField: {
                        error: error === 'invalidDate' || !formValues.AdmissionDate.value,
                      },
                    }}
                    format='DD/MM/YYYY'
                  onChange={(date) => {
                    setFormValues((prevValues) => ({
                      ...prevValues,
                      AdmissionDate: {
                        value: date ? date : '',
                        formattedValue: date ? date.format('DD/MM/YYYY') : '',
                      },
                    }));
                  }}

                  />
                </LocalizationProvider>

                <FormControl sx={{
                  m: 1, width: "30%",
                  '@media (max-width: 600px)': { width: "90%" },
                }}>
                  <InputLabel id="location-label">
                    Gender
                  </InputLabel>
                  <Select
                    margin="dense"
                    label="Gender"
                    name="Gender"
                    type="text"
                    variant="outlined"
                    value={formValues.Gender.value}
                    onChange={handleChange}
                    required
                    sx={{ textAlign: 'left' }}
                  >
                    <MenuItem value={"Male"}>Male</MenuItem>
                    <MenuItem value={"Female"}>Female</MenuItem>
                  </Select>
                </FormControl>
                <FormControl sx={{
                  m: 1, width: "30%",
                  '@media (max-width: 600px)': { width: "90%" },
                }}>
                  <InputLabel id="location-label">
                    Marriage Status *
                  </InputLabel>
                  <Select
                    margin="dense"
                    name="MarriageStatus"
                    label="Marriage Status"
                    type="text"
                    variant="outlined"
                    value={formValues.MarriageStatus.value}
                    onChange={handleChange}
                    sx={{ textAlign: 'left' }}
                    required
                  >
                    <MenuItem value={"Single"}>Single</MenuItem>
                    <MenuItem value={"Married"}>Married</MenuItem>
                  </Select>
                </FormControl>

                <FormControl sx={{
                  m: 1, width: "30%",
                  '@media (max-width: 600px)': { width: "90%" },
                }}>
                  <InputLabel id="location-label">
                    Physical disability *
                  </InputLabel>
                  <Select
                    margin="dense"
                    name="PhysicalDisability"
                    label="Physical disability"
                    type="text"
                    variant="outlined"
                    value={formValues.PhysicalDisability.value}
                    onChange={handleChange}
                    required
                    sx={{ textAlign: 'left' }}

                  >
                    <MenuItem value={"No"}>No</MenuItem>
                    <MenuItem value={"Yes"}>Yes</MenuItem>
                  </Select>
                </FormControl>

                <TextField
                  margin="dense"
                  id="Email"
                  name="Email"
                    value={formValues.Email.value}
                  type="text"
                  label="Email"
                  variant="outlined"
                  onChange={handleChange}
                />
                <TextField
                  margin="dense"
                  name="mobile"
                  label="Mobile"
                    value={formValues.mobile.value}
                    error={formValues.mobile.error}
                    helperText={formValues.mobile.error && formValues.mobile.errorMessage}
                  type="text"
                  variant="outlined"
                    onChange={handleChange}
                  required
                />
                <TextField
                  type="text"
                  label="Father first name"
                  name="FatherFirstName"
                    value={formValues.FatherFirstName.value}
                    error={formValues.FatherFirstName.error}
                    helperText={formValues.FatherFirstName.error && formValues.FatherFirstName.errorMessage}
                  variant="outlined"
                  margin="dense"
                  onChange={handleChange}
                />
                <TextField
                  margin="dense"
                  label="Father last name"
                  name="FatherLastName"
                    value={formValues.FatherLastName.value}
                  type="text"
                  variant="outlined"
                  onChange={handleChange}
                />
                <TextField
                  margin="dense"
                  id="Father occupation"
                  name="FatherOccupation"
                    value={formValues.FatherOccupation.value}
                  type="text"
                  label="Father occupation"
                  variant="outlined"
                  onChange={handleChange}
                />
                <TextField
                  type="text"
                  label="Mother first Name"
                  name="MotherFirstName"
                    value={formValues.MotherFirstName.value}
                    error={formValues.MotherFirstName.error}
                    helperText={formValues.MotherFirstName.error && formValues.MotherFirstName.errorMessage}
                  variant="outlined"
                  margin="dense"
                  required
                  onChange={handleChange}
                />
                <TextField
                  margin="dense"
                  label="Mother last Name"
                    value={formValues.MotherLastName.value}
                  name="MotherLastName"
                  type="text"
                  variant="outlined"
                  onChange={handleChange}
                />
                <TextField
                  margin="dense"
                  label="Family income"
                  name="FamilyIncome"
                    value={formValues.FamilyIncome.value}
                  type="text"
                  variant="outlined"
                  defaultValue={"0"}
                    onChange={handleChange}
                  required
                />
                <FormControl sx={{ m: 1, width: "30%", '@media (max-width: 600px)': { width: "90%" } }}>
                  <InputLabel id="location-label">
                    Caste category
                  </InputLabel>
                  <Select
                    margin="dense"
                    name="Caste"
                    label="Caste category"
                    type="text"
                    variant="outlined"
                    value={formValues.Caste.value}
                    sx={{ textAlign: 'left' }}
                    onChange={handleChange}
                    required
                  >
                    <MenuItem value={"General"}>General</MenuItem>
                    <MenuItem value={"OBC"}>OBC</MenuItem>
                    <MenuItem value={"SC"}>SC</MenuItem>
                    <MenuItem value={"ST"}>ST</MenuItem>
                    <MenuItem value={"SBC"}>SBC</MenuItem>
                  </Select>
                </FormControl>

                <FormControl sx={{ m: 1, minWidth: "30%", '@media (max-width: 600px)': { width: "90%" } }}>
                  <InputLabel id="location-label">
                    Religion
                  </InputLabel>
                  <Select
                    margin="dense"
                    name="Religion"
                    label=" Religion"
                    value={formValues.Religion.value}
                    type="text"
                    variant="outlined"
                    onChange={handleChange}
                    required
                    sx={{ textAlign: 'left' }}

                  >
                    <MenuItem value={"Hindu"}>Hindu</MenuItem>
                    <MenuItem value={"Sikh"}>Sikh</MenuItem>
                    <MenuItem value={"Muslim"}>Muslim</MenuItem>
                    <MenuItem value={"Christian"}>Christian</MenuItem>
                    <MenuItem value={"Buddhist"}>Buddhist</MenuItem>
                    <MenuItem value={"Parsi"}>Parsi</MenuItem>
                    <MenuItem value={"Jain"}>Jain</MenuItem>
                    <MenuItem value={"Others"}>Others</MenuItem>
                  </Select>
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: "30%", '@media (max-width: 600px)': { width: "90%" } }}>
                  <InputLabel id="location-label">
                    Govt ID Type *
                  </InputLabel>
                  <Select
                    margin="dense"
                    name="GovtIdType"
                    label=" Govt ID Type"
                    type="text"
                    variant="outlined"
                    value={formValues.GovtIdType.value}
                    onChange={handleChange}
                    sx={{ textAlign: 'left' }}
                    required
                  >
                    <MenuItem value={"Aadhaar Card"}>Aadhaar Card</MenuItem>
                    <MenuItem value={"Pan Card"}>Pan Card</MenuItem>
                    <MenuItem value={"Voter Card"}>Voter Card</MenuItem>
                    <MenuItem value={"Driving License"}>Driving License</MenuItem>
                    <MenuItem value={"Other"}>Other</MenuItem>
                  </Select>
                </FormControl>
                <TextField
                  margin="dense"
                  label="Govt ID"
                  name="GovtId"
                    value={formValues.GovtId.value}
                    error={formValues.GovtId.error}
                    helperText={formValues.GovtId.error && formValues.GovtId.errorMessage}
                  type="text"
                  variant="outlined"
                    onChange={handleChange}
                  required
                />

              </AccordionDetails>
            </Accordion>

            <Accordion expanded={true} className='accordian'>
              <AccordionSummary
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className='subHeading'> Address Information</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <TextField
                  margin="dense"
                  name="AddressLine"
                  value={formValues.AddressLine.value}
                  label="Address Line"
                  type="text"
                  variant="outlined"
                onChange={handleChange}
                />
                <TextField
                  type="text"
                  label="Village / City"
                  value={formValues.place.value}
                  name="Village"
                  variant="outlined"
                  margin="dense"
                onChange={handleChange}
                />
                <TextField
                  type="text"
                  label="Pin Code"
                  value={formValues.PinCode.value}
                  name="PinCode"
                  variant="outlined"
                  margin="dense"
                  required
                onChange={handleChange}
                />
              </AccordionDetails>
            </Accordion>
          </Box>
        </Grid>
        <Grid className='container' item xs={12} sm={3} mt={8} order={{ xs: 1, sm: 2 }}>
          <div className='Profile'>
            <img
              src={selectedImage || profile}
              width={180}
              height={180}
            />
            <input
              type="file"
              id="fileInput"
              accept="image/*"
              style={{ display: 'none' }}
              onChange={handleFileChange}
            />
            <div className='centerized' style={{ marginTop: "15px" }}><h6>{file || "No file choosen"}</h6></div>
            <Button variant="contained" style={{ margin: "15px" }} onClick={handleFileSelect}>Choose File</Button>
          </div>

        </Grid>
      </Grid>
       
     <div style={{ margin: "2%" }}>{open ?<Alert severity="success"> Successfully registered</Alert> : <></>}</div> 
      <div style={{ margin: "2%" }}>
        <Button variant="contained" style={{ margin: "0px 10px" }} onClick={Submit}>Save</Button>
        <Button variant="contained" color="error" onClick={resetFunction}>Reset</Button>
      </div>
    </>
  );
};

export default StudentRegister;


