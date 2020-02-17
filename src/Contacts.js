import React from 'react';
import s from "./Contacts.module.css"

function Contacts() {
  return (
    <div className={s.contacts}>
      <div className={s.conteiner}>
        <h3> Контакты</h3>
        <form>
          <input/>
          <input/>
          <textarea>
          </textarea>
        </form>
        <input type="submit"/>
      </div>
    </div>
  );
}

export default Contacts;
