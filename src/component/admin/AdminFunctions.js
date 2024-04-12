import { Container, Stack } from "@mui/material";
import register from "../../assets/register.png";
import upload from "../../assets/upload.png";
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
          <Icons img={register} name={"Register"} route={"/admin/register"} />
          <Icons img={upload} name={"Upload Notice"} route={"/admin/upload-doc"} />
        </Stack>

      </Container>
    </>
  );
}
