import React from "react";
import {
  Row,
  Col,
  ImgProj,
  DescProj,
  RepoButton,
  Hr,
  TechProj,
  TechDtl,
  TechHeader,
  Tooltip,
} from "./StyledProject";
import projPic from "../img/Freeze-or-Spoil_35Port.png";

const Project = ({ projDataObj, idx }) => {
  console.log(`CurrImg`, projDataObj.image);
  return (
    <>
      <Row key={idx}>
        <Col idx={idx}>
          {/* Click for Live Proj or GitHub Repo Instead */}
          {projDataObj.links.site ? (
            <a
              href={projDataObj.links.site}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ImgProj src={projPic} alt="Proj Main Screenshot" />
              {/* <ImgProj
                  src={projDataObj.image}
                  alt="Proj Main Screenshot" /> */}
            </a>
          ) : (
            <a
              href={projDataObj.links.repo}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ImgProj src={projPic} alt="Proj Main Screenshot" />
              {/* <ImgProj
                  src={projDataObj.image}
                  alt="Proj Main Screenshot" /> */}
            </a>
          )}
        </Col>

        <Col>
           <DescProj>  {/* Detail */}
            {/* <span>{idx}</span> */}
            <h3>
              {projDataObj.name} {projDataObj.status && (`~ ${projDataObj.status}`)}
            </h3>
            <Hr />
            <h4>{projDataObj.description}</h4>
            
            <TechProj> {/* TechDtl */}
              {projDataObj.frontendAry && (
                <TechDtl>
                  <TechHeader>Frontend: </TechHeader>
                  {projDataObj.frontendAry.map((each) => (
                    <div>{each}</div>
                  ))}
                </TechDtl>
              )}

              {projDataObj.backend && (
                <TechDtl>
                  <TechHeader>Backend: </TechHeader>
                  {projDataObj.backend.map((each) => (
                    <div>{each}</div>
                  ))}
                </TechDtl>
              )}

              {/* {projDataObj.database && (
                <TechDtl>
                  <TechHeader>Database: </TechHeader>
                  <div>{projDataObj.database} </div>
                </TechDtl>
              )} */}

              {projDataObj.deployment && (
                <TechDtl>
                  <TechHeader>Deployment: </TechHeader>
                  <div>{projDataObj.deployment} </div>
                </TechDtl>
              )}
            </TechProj>

            {/* GitHub Click */}
            {projDataObj.links.repo && (
              <RepoButton
                className="App-link"
                href={projDataObj.links.repo}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Source Code
              </RepoButton>
            )}
          </DescProj>
        </Col>
      </Row>
    </>
  );
};

export default Project;
