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

const Project = ({ projDataObj }) => {
  return (
    <>
      {/* have a main image? 
      onClick opens a new tab 
      takes to live site, or 
      takes to GitHub if cannot be live */}
      {/* <Container> */}
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

      {/* image to click to */}
      {projDataObj.links.site && (
        <p>
          <a
            className="App-link"
            href={projDataObj.links.site}
            target="_blank"
            rel="noopener noreferrer"
          >
            Check Out Live Project
          </a>
        </p>
      )}

      {/* image to click to */}
      <p>
        <a
          className="App-link"
          href={projDataObj.links.repo}
          target="_blank"
          rel="noopener noreferrer"
        >
          Source Code on GitHub
        </a>
      </p>
    </>
  );
};

export default Project;
