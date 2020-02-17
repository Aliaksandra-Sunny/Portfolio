import React from 'react';
import s from "./Main.module.css"

function Main() {
  return (
    <div className={s.main}>
      <div className={s.conteiner}>
        <div className={s.greeting}>
          <span>Привет!</span>
          <span>Меня зовут Белявская Александра!</span>
          <span>Я front-end разработчик.</span>
        </div>
        <div className={s.photo}>
          <img src="" alt=""/>
        </div>
      </div>
    </div>
  );
}

export default Main;
