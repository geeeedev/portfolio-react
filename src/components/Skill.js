import React from "react";
import skillDataObj from "../data/Skills.json";
import { Desc, Hr, Tech, TechDtl, TechHeader } from "./StyledProject";

// const Skill = ({ skillDataObj }) => {
const Skill = () => {
  return (
    <Desc>
      <h2>Skills</h2>
      <Tech>
        <TechDtl>  {/* ul */} 
          <TechHeader>Frontend:</TechHeader>
          {skillDataObj.frontend.map((each) => (
            <div>{each}</div>
          ))}
        </TechDtl>
        <TechDtl>
          <TechHeader>Backend:</TechHeader>
          {skillDataObj.backend.map((each) => (
            <div>{each}</div>
          ))}
        </TechDtl>
        <TechDtl>
          <TechHeader>Framework:</TechHeader>
          {skillDataObj.framework.map((each) => (
            <div>{each}</div>
          ))}
        </TechDtl>
        <TechDtl>
          <TechHeader>Database:</TechHeader>
          {skillDataObj.database.map((each) => (
            <div>{each}</div>
          ))}
        </TechDtl>
        <TechDtl>
          <TechHeader>Tool:</TechHeader>
          <h5>Deployment:</h5>
          {skillDataObj.tool.deployment.map((each) => (
            <div>{each}</div>
          ))}
          <h5>Version Control:</h5>
          {skillDataObj.tool.versionControl.map((each) => (
            <div>{each}</div>
          ))}
          {skillDataObj.tool.others.map((each) => (
            <div>{each}</div>
          ))}
        </TechDtl>
        {/* <TechDtl>
          <TechHeader>Deployment:</TechHeader>
          {skillDataObj.deployment.map((each) => (
            <div>{each}</div>
          ))}
        </TechDtl>
        
        <TechDtl>
          <TechHeader>Version Control:</TechHeader>
          {skillDataObj.versionControl.map((each) => (
            <div>{each}</div>
          ))}
        </TechDtl> */}
      </Tech>
    </Desc>
  );
};

export default Skill;
