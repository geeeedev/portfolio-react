import React from "react";
import {
  Row,
  Col,
  A,
  RepoButton,
  TooltipDiv,
  Tooltip,
} from "./StyledProject";
import { DescProj, Hr, Tech, TechDtlProj, TechHeader } from "./StyledTech";
// import projPic from "../img/Freeze-or-Spoil_35.png";  //placeholder
import ImgProject from "./ImgProject";
// npm i react-animate-on-scroll
import ScrollAnimation from "react-animate-on-scroll";

const Project = ({ projDataObj, idx }) => {
  // console.log(`CurrImg`, projDataObj.image);
  return (
    <>
      {/* <RotateDiv> &lt; 💅🏾 &gt; </RotateDiv> */}
      <ScrollAnimation
        animateIn="fadeInUp"
        duration={5}
        delay={300}
        animateOnce={true}
      >
        <Row>
          <Col idx={idx}>
            {/* Click for Live Proj or GitHub Repo Instead */}
            {projDataObj.links.site ? (
              <TooltipDiv>
                <A href={projDataObj.links.site}>
                  <ImgProject idx={idx} />
                  {/* <Img src={projDataObj.image} /> */}
                  {/* <Img src={projPic} /> */}
                  <Tooltip>Live Project</Tooltip>
                </A>
              </TooltipDiv>
            ) : (
              <A href={`${projDataObj.links.repo}/blob/master/ReadMe.md`}>
                <ImgProject idx={idx} />
              </A>
            )}
          </Col>

          <Col>
            <DescProj idx={idx}>
              <h2>
                {projDataObj.name}
                {/*{" "} {projDataObj.status && `~ ${projDataObj.status}`} */}
              </h2>
              <Hr />
              <h4>{projDataObj.description}</h4>

              <Tech idx={idx}>
                {projDataObj.frontend && (
                  <TechDtlProj>
                    <TechHeader>Frontend: </TechHeader>
                    {projDataObj.frontend.map((each, i) => (
                      <div key={i}>{each}</div>
                    ))}
                  </TechDtlProj>
                )}

                {projDataObj.backend && (
                  <TechDtlProj>
                    <TechHeader>Backend: </TechHeader>
                    {projDataObj.backend.map((each, i) => (
                      <div key={i}>{each}</div>
                    ))}
                  </TechDtlProj>
                )}

                {/* {projDataObj.database && ( //not needed for now
                <TechDtlProj>
                  <TechHeader>Database: </TechHeader>
                  <div>{projDataObj.database} </div>
                </TechDtlProj>
              )} */}

                {projDataObj.deployment && (
                  <TechDtlProj>
                    <TechHeader>Deployment: </TechHeader>
                    <div>{projDataObj.deployment} </div>
                  </TechDtlProj>
                )}
              </Tech>

              {projDataObj.links.repo && (
                <RepoButton as="a" href={projDataObj.links.repo}>
                  View Source Code
                </RepoButton>
              )}
            </DescProj>
          </Col>
        </Row>
      </ScrollAnimation>
    </>
  );
};

export default Project;
