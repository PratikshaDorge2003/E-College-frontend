import { Container, Stack } from "@mui/material";
import register from "../../assets/register.png";
import Icons from "../Layout/Icons";


export default function AdminFunction() {
  return (
    <>
      <Container sx={{ marginTop: 10 }}>
        <Stack spacing={10} direction={"row"} >
          <Icons img={register} name={"Register"} route={"/admin/register"}/>
        </Stack>

      </Container>
    </>
  );
}
