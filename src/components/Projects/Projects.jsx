import React from 'react';
import s from "./Projects.module.css"
import MyProject from "./MyProject/MyProject";
import Heading from "../Elements/Heading/Heading";

function Projects() {
  return (
    <div className={s.projects}>
      <div className={s.container}>
        <Heading name={"My projects"}/>
        <div className={s.myProjects}>
          <MyProject/>
          <MyProject/>
        </div>
      </div>

    </div>
  );
}

export default Projects;
