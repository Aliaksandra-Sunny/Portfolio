import React from 'react';
import s from "./Main.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function Main() {
  return (
    <div className={s.main}>
      <div className={s.conteiner}>
        <div className={s.greeting}>
          {/*<FontAwesomeIcon icon={faReact}/>*/}
          {/*<FontAwesomeIcon icon={faEnvelope}/>*/}
          <span>Привет!</span>
          <span>Меня зовут Белявская Александра!</span>
          <span>Blablabla</span>
        </div>
        <div className={s.photo}>
          <img src="" alt=""/>
        </div>
      </div>
    </div>
  );
}

export default Main;
