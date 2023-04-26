import React from "react";
import { Box, Typography } from "@mui/material";
import { projects } from "../constants/project";
import Project from "./Project";
import Stack from "./Stack";


const Experience = () => {
    console.log(projects);
  return <Box sx={{maxWidth: "1300px", mx: "auto", my: 12}} id="experience">
    <Typography variant="h4" sx={{color: "white", mb: 2, textAlign: "center"}}>
        Let's take a look at some of what I've{" "}
        <span style={{color: "rgba(0,199,255,255)"}}>built</span> so far
    </Typography>
    <Box sx={{display: "flex", justifyContent: "center", flexWrap: "wrap"}}>
        {
            projects.map((project) => (
                <Project 
                key={project.id}
                title={project.title} 
                description={project.description} 
                tags={project.tags}
                img={project.image}
                source={project.source}
                live={project.liveVersion}
                />
            ))
        }
    </Box>

    <Stack />
  </Box>;
};

export default Experience;