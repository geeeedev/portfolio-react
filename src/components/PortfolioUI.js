import React from "react";
import { ProjContainer } from "./StyledPortfolioUI"
import Projects from "../data/Projects.json";
import Project from "./Project";


const PortfolioUI = () => {  
  //This should really be ProjectSection or ProjectList
  return (
    <>
    <ProjContainer id="proj"> 
      {Projects.map((proj, idx) => (
        <Project projDataObj={proj} idx={idx}/>
      ))}
    </ProjContainer> 
    </>
  );
};

export default PortfolioUI;
