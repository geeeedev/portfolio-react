/** build project compoment template
 *  per project {} only
 * [
 *  {   
        "name": "Freeze-Or-Spoil",
        "description":"A freezer food storage tracking Single Page App in MERN",
        "status": "GitHub/Live/InDev",
        "category": ["Utility","Kitchen"],
        "date":"(MMMYYYY)",
        "frontend-Array":["React","Material UI","Material Table","Axios","Reach/Route","Moment","JavaScript","CSS3","HTML5"],
        "frontend-String":"React, Material UI, Material Table, Axios, Reach/Route, Moment, JavaScript, JSX, CSS3, HTML5",
        "backend":["Node","Express","Mongoose"],
        "database":"MongoDB",
        "deployment":"GitHub & AWS",
        "Links":{
            "repo":"https://github.com/geeeedev/....",
            "site":""
        }
    },
 * ]
 */

import React from "react";
import { Row, Col, ImgProj, Tooltip } from "./StyledProject";
import projPic from "../img/IMG_4000.JPG";

const Project = ({ projDataObj, idx }) => {
  return (
    <>
      {/* have a main image? 
      onClick opens a new tab 
      takes to live site, or 
      takes to GitHub if cannot be live */}
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
                <ImgProj src={projPic} alt="Proj Main Screenshot"></ImgProj>
              </a>
              <Tooltip>Click for Live Project</Tooltip>
            </>
          )}

          {/* image to click to */}
          {/* <p> */}
          <a
            className="App-link"
            href={projDataObj.links.repo}
            target="_blank"
            rel="noopener noreferrer"
          >
            Source Code on GitHub
          </a>

          {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >click ...</a> */}
          {/* </p> */}
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
