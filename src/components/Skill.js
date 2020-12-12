import React from "react";

const Skill = ({ skillDataObj }) => {
  return (
    <>
      <h5>Frontend:</h5>
      {skillDataObj.frontend.map((each) => (
        <p>{each}</p>
      ))}
      <h5>Backend:</h5>
      {skillDataObj.backend.map((each) => (
        <p>{each}</p>
      ))}

      <h5>Framework:</h5>
      {skillDataObj.framework.map((each) => (
        <p>{each}</p>
      ))}

      <h5>Database:</h5>
      {skillDataObj.database.map((each) => (
        <p>{each}</p>
      ))}

      <h5>Deployment:</h5>
      {skillDataObj.deployment.map((each) => (
        <p>{each}</p>
      ))}

      <h5>Tool:</h5>
      {skillDataObj.tool.map((each) => (
        <p>{each}</p>
      ))}

      <h5>Version Control:</h5>
      {skillDataObj.versionControl.map((each) => (
        <p>{each}</p>
      ))}
    </>
  );
};

export default Skill;
