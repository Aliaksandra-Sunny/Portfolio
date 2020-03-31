import React from 'react';
import s from "./Slogan.module.css"
import Heading from "../Elements/Heading/Heading";

function Slogan() {
  return (
    <div className={s.slogan}>
      <div className={s.container}>
          <Heading name={"I am available for Freelancer"}/>
        <button>Нанять меня</button>
      </div>
    </div>
  );
}

export default Slogan;
