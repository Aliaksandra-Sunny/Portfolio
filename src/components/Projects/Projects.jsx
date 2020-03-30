import React from 'react';
import s from "./Projects.module.css"
import MyProject from "./MyProject/MyProject";

function Projects() {
  return (
    <div className={s.projects}>
      <div className={s.conteiner}>
        <div className={s.heading}>
          <h3> My projects</h3>
        </div>
        <div className={s.myProjects}>
          <MyProject/>
          <MyProject/>
        </div>
      </div>

    </div>
  );
}

export default Projects;
