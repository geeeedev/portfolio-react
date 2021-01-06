import React from "react";
import { ProjContainer } from "./StyledProjectList"
import Projects from "../data/Projects.json";
import Project from "./Project";


const ProjectList = () => {  
  return (
    <>
    <ProjContainer id="proj"> 
      {Projects.map((proj, idx) => (
        <Project projDataObj={proj} idx={idx} key={idx}/>
      ))}
    </ProjContainer> 
    </>
  );
};

export default ProjectList;
