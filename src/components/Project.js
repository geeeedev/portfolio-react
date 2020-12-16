import React from "react";
import { Row, Col, ImgProj, Tooltip } from "./StyledProject";
// import projPic from "../img/IMG_4000.JPG";

const Project = ({ projDataObj, idx }) => {

  console.log(`CurrImg`, projDataObj.image);
  return (
    <>
      {/* <Container> */}
      <Row key={idx}>
        <Col idx={idx}>
          {/* image to click to */}
          {projDataObj.links.site && (
            <>
              <a
                className="App-link"
                href={projDataObj.links.site}
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* Check Out Live Project */}
                {/* <ImgProj src={projPic} alt="Proj Main Screenshot"></ImgProj> */}
                <ImgProj
                  src={projDataObj.image}
                  alt="Proj Main Screenshot"
                ></ImgProj>
              </a>
              {/* <Tooltip>Click for Live Project</Tooltip> */}
            </>
          )}

          {/* image to click to */}
          <a
            className="App-link"
            href={projDataObj.links.repo}
            target="_blank"
            rel="noopener noreferrer"
          >
            Source Code TOTORO on GitHub
          </a>

          {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          >click ...</a> */}
        </Col>

        <Col>
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
        </Col>
      </Row>
    </>
  );
};

export default Project;
