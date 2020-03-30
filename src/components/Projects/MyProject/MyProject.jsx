import React from 'react';
import s from "./MyProject.module.css"

function MyProject() {
  return (
    <div className={s.myProject}>
      <div className={s.photo}>
        <button>Смотреть</button>
      </div>
      <h3>Project's name</h3>
      <div className={s.description}> Project's description</div>
    </div>
  );
}

export default MyProject;
