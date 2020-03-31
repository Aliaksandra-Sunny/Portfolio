import React from 'react';
import s from "./Slogan.module.css"
import Heading from "../Elements/Heading/Heading";
import Button from "../Elements/Button/Button";

function Slogan() {
  return (
    <div className={s.slogan}>
      <div className={s.container}>
          <Heading name={"I am available for Freelancer"}/>
          <Button name={"Hire me"}/>
      </div>
    </div>
  );
}

export default Slogan;
