import { Container, Stack } from "@mui/material";
import register from "../../assets/register.png";
import upload from "../../assets/upload.png";
import verification from "../../assets/verification.png";
import searchStudent from "../../assets/searchStudent.png";
import Icons from "../Layout/Icons";
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function AdminFunction() {
  const navigate=useNavigate();
  const navFunction=()=>{
    console.log("hii");
    navigate("/");
}
  return (
    <>
      <div>
        <button className='exitBtn' onClick={navFunction}><ArrowBackIcon /></button>

      </div>
      <Container sx={{ marginTop: 10 }}>
        <Stack spacing={10} direction={"row"} >
          <Icons img={upload} name={"Upload Notice"} route={"/admin/upload-doc"} />
          <Icons img={verification} name={"Professor Approval"} route={"/admin/prof-approval"} />
          <Icons img={register} name={"Student Register"} route={"/admin/register"} />
          <Icons img={searchStudent} name={"Search Student"} route={"/admin/search-student"} />
        </Stack>

      </Container>
    </>
  );
}
