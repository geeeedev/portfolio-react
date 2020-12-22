import React from "react";
import skillDataObj from "../data/Skills.json";
import { DescSkill, Hr, Tech, TechDtlSkill, TechHeader } from "./StyledTech";

// const Skill = ({ skillDataObj }) => {
const Skill = () => {
  return (
    <DescSkill>
      <h2>Skills</h2>
      <Hr />
      <Tech>
        <TechDtlSkill>  {/* ul */} 
          <TechHeader>Frontend:</TechHeader>
          {skillDataObj.frontend.map((each) => (
            <div>{each}</div>
          ))}
        </TechDtlSkill>
        <TechDtlSkill>
          <TechHeader>Backend:</TechHeader>
          {skillDataObj.backend.map((each) => (
            <div>{each}</div>
          ))}
        </TechDtlSkill>
        <TechDtlSkill>
          <TechHeader>Framework:</TechHeader>
          {skillDataObj.framework.map((each) => (
            <div>{each}</div>
          ))}
        </TechDtlSkill>
        <TechDtlSkill>
          <TechHeader>Database:</TechHeader>
          {skillDataObj.database.map((each) => (
            <div>{each}</div>
          ))}
        </TechDtlSkill>
        <TechDtlSkill>
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
        </TechDtlSkill>
        {/* <TechDtlSkill>
          <TechHeader>Deployment:</TechHeader>
          {skillDataObj.deployment.map((each) => (
            <div>{each}</div>
          ))}
        </TechDtlSkill>
        
        <TechDtlSkill>
          <TechHeader>Version Control:</TechHeader>
          {skillDataObj.versionControl.map((each) => (
            <div>{each}</div>
          ))}
        </TechDtlSkill> */}
      </Tech>
    </DescSkill>
  );
};

export default Skill;
