import React from 'react';
import s from "./Contacts.module.css"
import Heading from "../Elements/Heading/Heading";

function Contacts() {
  return (
    <div className={s.contacts}>
      <div className={s.container}>
        <Heading name={"Contact"}/>
        <div className={s.form}>
          <form>
            <input/>
            <input/>
            <textarea>
          </textarea>
          </form>
          <input type="submit"/>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
