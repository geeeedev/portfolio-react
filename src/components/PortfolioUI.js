import React from "react";
import Projects from "../data/Projects.json";
import Project from "./Project";
import Skills from "../data/Skills.json";
import Skill from "./Skill";

import SocialMediaIconList from "./SocialMediaIconList";

const PortfolioUI = () => {
  return (
    <>
      <Skill skillDataObj={Skills} />
      {Projects.map((proj) => (
        <Project projDataObj={proj} />
      ))}
      <SocialMediaIconList />
    </>
  );
};

export default PortfolioUI;
