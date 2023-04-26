import React from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

const Testimonial = () => {
  return <Box sx={{
    backgroundColor: "#00F2E",
    padding: 3,
    border: "1px solid #00C7FF",
    borderRadius: "10px",
    maxWidth: "500px",
    position: "relative",
    mx: 3
    }}>
        <Typography variant="body1" sx={{color: "white", mb: 2}}>
        I am a curious Web Developer with a hunger for learning and a need
        to problem-solve. I immerse myself into my projects, looking outside the box for lessons that will ultimately provide insights and solutions. I have many hobbies including body building, video games, sports and learning about how the world works!
        </Typography>
        <Typography variant="body2">
        <span style={{color: "#33C7FF", fontWeight: "bold"}}>Christopher Benjamin</span>
        <span style={{color: "#7B89A8"}}> - Full Stack Web Developer</span>
        </Typography>
        <FormatQuoteIcon 
        style={{
            position: "absolute",
            top: "-20px",
            left: "-20px",
            color: "#00C7FF",
            height: "50px",
            width: "50px",
        }}
        />
  </Box>;
};

export default Testimonial;