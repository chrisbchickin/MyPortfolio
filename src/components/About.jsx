import React from "react";
import { Box, Button, Typography, styled } from "@mui/material";
import Testimonial from "./Testimonial";

const About = () => {
    const CustomBox = styled(Box)(({theme}) => ({
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
        [theme.breakpoints.down("md")]: {
            flexDirection: "column",
            alignItems: "center",
            gap: "2rem",
        },
    }));
    const CustomTitleBox = styled(Box)(({ theme }) => ({
        width: "100%",
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.down("md")]: {
          flexDirection: "column",
          alignItems: "center",
          gap: "2rem",
        },
      }));
    const CustomButton = styled(Button)(({theme}) => ({
        border: "3px solid #00C7FF",
        borderRadius: "25px",
        color: "white",
        width: "15%",
        display: "block",
        "&:hover": {
            border: "3px solid #00C7FF",
        },
        [theme.breakpoints.down("md")]: {
            width: "50%",
        },
        [theme.breakpoints.down("sm")]: {
            width: "75%",
        },
    }));
    
  return <Box sx={{ maxWidth: "1300px", my: 10, padding: 3, mx: "auto"}} id="about">
    <CustomTitleBox sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem"
        }}>
        <Typography variant="h4" sx={{color: "white", textAlign: "center"}}>
            A little bit about me
        </Typography>
        <div
          style={{
            height: "5px",
            backgroundColor: "#00C7FF",
            width: "50%",
            border: 0,
            borderRadius: "25px",
          }}
        ></div>
    </CustomTitleBox>
    <CustomBox sx={{ my: 7 }}>
        <Testimonial />
    </CustomBox>
    <div style={{
            height: "5px",
            backgroundColor: "#00C7FF",
            width: "100%",
            border: 0,
            borderRadius: "25px",
        }}>
        </div>
        <Typography variant="h5" sx={{ color: "white", mt: 12, textAlign: "center" }}>
        Interested in Working Together?
        </Typography>
        <CustomButton href="mailto:chrsbnjmn@gmail.com" variant="outlined" sx={{ textAlign:"center" ,mx: "auto", mt: 3, mb: 8 }}>
            Get in Touch
        </CustomButton>
  </Box>
  
};

export default About;