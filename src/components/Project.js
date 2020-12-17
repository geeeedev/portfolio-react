import React from "react";
import { Row, Col, ImgProj, DescProj, Tooltip } from "./StyledProject";
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
              className="App-link"
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
              className="App-link"
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

        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          >click ...</a> */}

        <Col>
          <DescProj>
            <h1>{idx}</h1>
            <h3>{projDataObj.name}</h3>
            <h4>{projDataObj.description}</h4>
            <p>{projDataObj.status}</p>
            <ul>
              <h5>Frontend: </h5>
              {projDataObj.frontendAry.map((each) => (
                <li>{each}</li>
              ))}
            </ul>
            <ul>
              {projDataObj.backend ? <h5>Backend: </h5> : ""}
              {projDataObj.backend
                ? projDataObj.backend.map((each) => <li>{each}</li>)
                : ""}
            </ul>
            <ul>
              {projDataObj.database ? (
                <>
                  <h5>Database: </h5> <p>{projDataObj.database} </p>
                </>
              ) : (
                ""
              )}
            </ul>
            <ul>
              {projDataObj.deployment && (
                <>
                  <h5>Deployment: </h5> <p>{projDataObj.deployment} </p>
                </>
              )}
            </ul>

            {/* GitHub Click */}
            {projDataObj.links.repo && (
              <a
                className="App-link"
                href={projDataObj.links.repo}
                target="_blank"
                rel="noopener noreferrer"
              >
                Source Code TOTORO on GitHub
              </a>
            )}
          </DescProj>
        </Col>
      </Row>
    </>
  );
};

export default Project;
