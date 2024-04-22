import { Container, Stack } from "@mui/material";
import Icons from "../Layout/Icons";
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import bonafide from "../../assets/bonafide.png";
import professor from "../../assets/professor.png";


export default function StudentFunction() {
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
        <Icons img={professor} name={"Course & Prof"} route={"/student/course-list"} />
          <Icons img={bonafide} name={"Bonafide Request"} route={"/student/bonafide-request"} />

        </Stack>

      </Container>
    </>
  );
}
