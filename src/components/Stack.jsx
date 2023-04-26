import React from "react";
import { Typography, Box, styled } from "@mui/material";
import { icons } from "../constants/icons";
import Icon from "./Icon";



const Stack = () => {
  const CustomBox = styled(Box)(({theme}) => ({
    maxWidth: "1300px",
    display: "flex",
    justifyContent: "space-between",
    mx: "auto",
    [theme.breakpoints.down("md")]: {
        flexDirection: "column",
    },
}));

const StackBox = styled(Box)(({theme}) => ({
  marginRight: "1.5rem",
  display: "flex",
  flex: 1,
  justifyContent: "space-around",
  [theme.breakpoints.down("md")]: {
      marginTop: "3rem",
      marginLeft: "0",
  },
}));
  return<CustomBox sx={{ my: 5, padding: 2 }}>
    <Box sx={{ flex: 1 }}>
      <Typography variant="h4" sx={{ color: "white", textAlign: "center", mb: 3 }}>
        Versitility is key
      </Typography>

      <Typography varient="h4" sx={{ color: "white", textAlign: "center" }}>
        Here's what I can help you with.
      </Typography>
    </Box>

    <StackBox>
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center"}}>
          {icons.map((icon, i) => {
            if (i < 2) {
              return <Icon key={icon.id} name={icon.name} src={icon.src}/>;
            } else {
              return "";
            }
          })}
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center"}}>
          {icons.map((icon, i) => {
            if (i >= 2 && i < 4) {
              return <Icon key={icon.id} name={icon.name} src={icon.src}/>;
            } else {
              return "";
            }
          })}
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center"}}>
          {icons.map((icon, i) => {
            if (i >= 4 && i < 6) {
              return <Icon key={icon.id} name={icon.name} src={icon.src}/>;
            } else {
              return "";
            }
          })}
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center"}}>
          {icons.map((icon, i) => {
            if (i >= 6) {
              return <Icon key={icon.id} name={icon.name} src={icon.src}/>;
            } else {
              return "";
            }
          })}
      </Box>
    </StackBox>
  </CustomBox>;
};

export default Stack;