import React from "react";
import { ProjContainer } from "./StyledPortfolioUI"
import Projects from "../data/Projects.json";
import Project from "./Project";
import Skills from "../data/Skills.json";
import Skill from "./Skill";

// import SocialMediaIconList from "./SocialMediaIconList";

const PortfolioUI = () => {  
  //This should really be ProjectSection
  return (
    <>
      {/* <Skill skillDataObj={Skills} /> */}
    <ProjContainer> 
      {Projects.map((proj, idx) => (
        <Project projDataObj={proj} idx={idx}/>
      ))}
    </ProjContainer> 
      {/* <SocialMediaIconList /> */}
    </>
  );
};

export default PortfolioUI;
