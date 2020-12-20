import React from "react";
import {
  Row,
  Col,
  Img,
  A,
  Desc,
  Hr,
  Tech,
  TechDtl,
  TechHeader,
  RepoButton,
  Tooltip,
  // RotateDiv
} from "./StyledProject";
import projPic from "../img/Freeze-or-Spoil_35Port.png";
// npm i react-animate-on-scroll
import ScrollAnimation from 'react-animate-on-scroll';


const Project = ({ projDataObj, idx }) => {
  console.log(`CurrImg`, projDataObj.image);

  return (
    <>
    {/* <RotateDiv> &lt; 💅🏾 &gt; </RotateDiv> */}
    <ScrollAnimation animateIn="fadeInUp" duration={3} delay={2} animateOnce={true}>
      <Row key={idx}>
        <Col idx={idx}>
          {/* Click for Live Proj or GitHub Repo Instead */}
          {projDataObj.links.site ? (
            <A href={projDataObj.links.site}>
              <Img src={projPic} />
              {/* <Img src={projDataObj.image} /> */}
            </A>
          ) : (
            <A href={projDataObj.links.repo}>
              <Img src={projPic} />
              {/* <Img src={projDataObj.image} /> */}
            </A>
          )}
        </Col>

        <Col>
          <Desc>
            {/* <span>{idx}</span> */}
            <h2>
              {projDataObj.name}{" "}
              {projDataObj.status && `~ ${projDataObj.status}`}
            </h2>
            <Hr />
            <h4>{projDataObj.description}</h4>

            <Tech>
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

              {/* {projDataObj.database && ( //not needed for now
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
            </Tech>

            {/* GitHub Click */}
            {projDataObj.links.repo && (
              <RepoButton as="a" href={projDataObj.links.repo}>
                View Source Code
              </RepoButton>
            )}
          </Desc>
        </Col>
      </Row>
      </ScrollAnimation>
    </>
  );
};

export default Project;
