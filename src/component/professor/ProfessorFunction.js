import { Container, Stack } from "@mui/material";
import Icons from "../Layout/Icons";
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import student from "../../assets/studentList.png";


export default function ProfessorFunction() {
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
          <Icons img={student} name={"Student List"} route={"/professor/student-list"} />
        </Stack>

      </Container>
    </>
  );
}
