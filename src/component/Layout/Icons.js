import { Paper, Stack, Typography } from "@mui/material";
import React from "react";


export default function Icons({ img, name, route }) {
  return (
    <>
    <a
      href={route}
      style={{ maxWidth: 100, maxHeight: 100, textDecoration: "none" }}
    >
      <Paper elevation={3} style={{ width: "150px", padding: "5px" }}>
        <Stack
          alignItems={"center"}
          justifyContent={"center"}
          direction={"column"}
          gap={2}
        >
          <img
            alt={name}
            src={img}
            width={100}
            height={100}
            objectFit="contain"
          />
          <Typography>{name}</Typography>
        </Stack>
      </Paper>
   </a>
    </>
  );
}
