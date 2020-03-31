import React from 'react';
import s from "./Footer.module.css"
import Network from "./Network/Network";
import Heading from "../Elements/Heading/Heading";

function Footer() {
  return (
    <div className={s.footer}>
      <div className={s.container}>
        <Heading name={"Alexandra"}/>
        <div className={s.networks}>
          <Network/>
          <Network/>
          <Network/>
          <Network/>
        </div>
        
      </div>
    </div>
  );
}

export default Footer;
