import React from "react";
import { Box, Button, styled, Typography } from "@mui/material";
import reactImg from "../media/react_svg.svg";

const CustomButton = styled(Button)(({ theme }) => ({
    border: "3px solid transparent",
    backgroundColor: "#00C7FF",
    color: "white",
    width: "20%",
    borderRadius: "25px",
    "&:hover": {
        border: "3px solid white",
        backgroundColor: "transparent",
    },
    [theme.breakpoints.down("md")]: {
        width: "35%",
    },
    [theme.breakpoints.down("sm")]: {
        width: "50%",
    },
}));

const CustomTitle = styled(Typography)(({ theme }) => ({
    color: "white",
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
        fontSize: "3.5rem"
    },
    [theme.breakpoints.down("sm")]: {
        fontSize: "2.5rem",
    },
}));

const Hero = () => {
    return <Box sx={{ mt: 8, mb: 12, p: 2, maxWidth: "1200px", mx: "auto", }} id="home">
        <Typography sx={{color: "white", textAlign: "center", mb: 2}} variant="h4">
            Hello I'm <span style={{color: "rgba(0,199,255,255)"}}>Chris</span>
        </Typography>
        <CustomTitle variant="h1">
            I enjoy <span style={{color: "rgba(0,199,255,255)"}}>building</span>{" "}
            and <span style={{color: "rgba(0,199,255,255)"}}>designing</span> for the web.
        </CustomTitle>
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "1rem" }}>
        <Box component="img" sx={{width: "150px", height: "150px", mx: 4}} src={reactImg} />
        <CustomButton href="mailto:chrsbnjmn@gmail.com">Contact Me</CustomButton>
        </Box>
    </Box>;
};

export default Hero;