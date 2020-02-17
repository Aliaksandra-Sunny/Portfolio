import React from 'react';
import s from "./MySkill.module.css"

function MySkill() {
  return (
    <div className={s.mySkill}>
        <div className={s.photo}>
            <img src="" alt=""/>
        </div>
        <h3>React</h3>
        <div className={s.description}> Подробное описание навыка</div>
    </div>
  );
}

export default MySkill;
