import React from 'react';
import s from "./Skills.module.css"
import MySkill from "./MySkill/MySkill";
import Heading from "../Elements/Heading/Heading";

function Skills() {
  return (
    <div className={s.skills}>
      <div className={s.container}>
        <Heading name={"My skills"}/>
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
