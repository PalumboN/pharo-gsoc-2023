import React from "react";
import logo from '../../img/logo-big.png';

export default function IdeaCard({
  projectName,
  projectDescription,
  projectLogo,
  link,
  onClick,
  children,
}) {
  return (
    <div id={projectName.replace(/\W/g, '_')} className={"ideaCard"} onClick={onClick}>
      <div className={"header"}>
        <div className={"projectLogo"}>
          <a href={link} target="_blank" rel="noopener noreferrer">
            <img
              src={projectLogo || logo}
              alt={projectName}
              className={"projectLogo"}
            />
          </a>
        </div>
        <div className={"projectName"}>
          <a href={link} target="_blank" rel="noopener noreferrer">
            {projectName}
          </a>
        </div>
      </div>
      <p className={"projectDescription"}>{projectDescription}</p>
      <div className={"projectDescription"}>{children}</div>
    </div>
  );
}