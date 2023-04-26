import React from "react";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";

const Icon = ({ name, src }) => {
  return <Box 
  sx={{ 
    display: "flex", 
    flexDirection: "column", 
    alignItems: "center", 
    mb: 3 
    }}>
      <img src={src} alt="icon" height="40px" />
      <Typography variant="body1" sx={{ color: "white", mt: 1 }}>
        {name}
      </Typography>
  </Box>
};

export default Icon;