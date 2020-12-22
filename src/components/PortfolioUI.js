import React from "react";
import { ProjContainer } from "./StyledPortfolioUI"
import Projects from "../data/Projects.json";
import Project from "./Project";


// import SocialMediaIconList from "./SocialMediaIconList";

const PortfolioUI = () => {  
  //This should really be ProjectSection or ProjectListing
  return (
    <>
    <ProjContainer> 
      {Projects.map((proj, idx) => (
        <Project projDataObj={proj} idx={idx}/>
      ))}
    </ProjContainer> 
    </>
  );
};

export default PortfolioUI;
