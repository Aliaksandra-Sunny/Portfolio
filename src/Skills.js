import React from 'react';
import s from "./Skills.module.css"
import MySkill from "./MySkill";

function Skills() {
  return (
    <div className={s.skills}>
      <div className={s.conteiner}>
        <div className={s.heading}>
          <h3> My skills</h3>
        </div>
        <div className={s.mySkills}>
          <MySkill/>
          <MySkill/>
          <MySkill/>
        </div>
      </div>
    </div>
  );
}

export default Skills;
