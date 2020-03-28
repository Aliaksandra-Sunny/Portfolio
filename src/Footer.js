import React from 'react';
import s from "./Footer.module.css"
import Network from "./Network";

function Footer() {
  return (
    <div className={s.footer}>
      <div className={s.conteiner}>
        <h3> Белявская Александра</h3>
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
