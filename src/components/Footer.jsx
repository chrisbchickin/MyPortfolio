import React from "react";
import { Box, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link as MuiLink } from '@mui/material';
import { Link } from "react-scroll";

const Footer = () => {
    return <Box sx={{
        maxWidth: "1100px",
        borderTop: "1px solid #7B89A8",
        mx: "auto",
        padding: 3,
        display: "flex",
        justifyContent: "space-around",
 }}>

    <Box sx={{ display: "flex", flexDirection: "column" }}>
       <Typography 
       varient="body1" 
       sx={{ color: "#7B89A8", flexDirection: "column", textAlign: "center"}}
       >
        PAGES
        </Typography> 

        <Link 
        to="home" 
        className="link" 
        smooth 
        style={{ color: "white", margin: "0.5rem 0" }}>
            Home
        </Link>

        <Link 
        to="experience" 
        className="link" 
        smooth 
        style={{ color: "white", margin: "0.5rem 0" }}>
            Experience
        </Link>

        <Link 
        to="about" 
        smooth 
        style={{ color: "white", margin: "0.5rem 0" }}
        className="link" 
        >
            About
        </Link>
    </Box>

    <Box sx={{ display: "flex", flexDirection: "column"}}>
    <Typography 
       varient="body1" 
       sx={{ color: "#7B89A8", flexDirection: "column", textAlign: "center" }}
       >
        SOCIAL
        </Typography> 

        <Box sx={{ display: "flex", alignItems: "center" }}>
            <GitHubIcon sx={{ mr: 2, color: "white" }}/>
            <Typography 
            component={MuiLink}
            sx={{ color: "white", my: 1 }}  
            className="link"
            href="https://github.com/chrisbchickin"
            underline="none"
            >
                GitHub
            </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center" }}>
            <EmailIcon sx={{ mr: 2, color: "white" }}/>
            <Typography 
            component={MuiLink}
            sx={{ color: "white", my: 1 }}
            className="link"
            href="mailto:chrsbnjmn@gmail.com"
            underline="none"
            >
                Email
            </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
            <LinkedInIcon sx={{ mr: 2, color: "white" }}/>
            <Typography 
            component={MuiLink}
            sx={{ color: "white", my: 1 }}  
            className="link"
            href="https://www.linkedin.com/in/christopher-benjamin-37a440b7/"
            underline="none"
            >
                LinkedIn
            </Typography>
        </Box>
    </Box>

  </Box>;
};

export default Footer;