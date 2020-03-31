import React from 'react';
import s from "./Heading.module.css"

function Heading(props) {
  return (
      <div className={s.headerTitle}>
        <h2 className={s.headerTitle}>{props.name}</h2>
        <div className={s.line}></div>
      </div>
  );
}

export default Heading;
