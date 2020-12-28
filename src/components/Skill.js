import React from "react";
import skillDataObj from "../data/Skills.json";
import {
  DescSkill,
  Hr,
  Tech,
  TechDtlSkill,
  Github,
  TechHeader,
  TechHeaderSub,
} from "./StyledTech";
import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";

const githubDark = {
  background: "transparent",
  text: "#ddd",
  grade4: "hsl(203, 78%, 30%)",
  grade3: "hsl(203, 78%, 44%)",
  grade2: "hsl(203, 78%, 58%)",
  grade1: "hsl(203, 78%, 72%)",
  grade0: "#666",
};

const githubLight = {
  background: "transparent",
  text: "#555",
  grade4: "hsl(25, 78%, 30%)",
  grade3: "hsl(25, 78%, 44%)",
  grade2: "hsl(25, 78%, 58%)",
  grade1: "hsl(25, 78%, 72%)",
  grade0: "#ddd",
};

// const Skill = ({ skillDataObj }) => {
  const Skill = ({dkMode}) => {

  return (
    <DescSkill id="skill">
      <h2>Skills</h2>
      <Hr />
      <Tech>
        <TechDtlSkill>
          {" "}
          {/* ul */}
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
          {skillDataObj.tool.others.map((each) => (
            <div>{each}</div>
          ))}
          <TechHeaderSub>Deployment:</TechHeaderSub>
          {skillDataObj.tool.deployment.map((each) => (
            <div>{each}</div>
          ))}
          <TechHeaderSub>Version Control:</TechHeaderSub>
          {skillDataObj.tool.versionControl.map((each) => (
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
      {/* <h2>GitHub Contributions</h2> */}
      {/* <Hr /> */}
      <Github>
        <GitHubCalendar
          username="geeeedev"
          theme={(dkMode && githubDark) || githubLight}
          blockSize={16}
          blockMargin={3}
          fontSize={16}
          showTotalCount={true}
          // fullYear={false}
        >
          <ReactTooltip delayShow={50} html />
        </GitHubCalendar>
      </Github>
    </DescSkill>
  );
};

export default Skill;
