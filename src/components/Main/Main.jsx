import React from 'react';
import s from "./Main.module.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faReact} from '@fortawesome/free-brands-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'

function Main() {
    return (
        <div className={s.main}>
            <div className={s.container}>
                <div className={s.greeting}>
                    {/*<FontAwesomeIcon icon={faReact}/>*/}
                    {/*<FontAwesomeIcon icon={faEnvelope}/>*/}
                    <span>Hello!</span>
                    <span>I'm <span>Belyavskaya</span></span>
                    <span>Alexandra</span>
                    <h1>A front-end developer</h1>
                </div>
                <div className={s.photo}>
                    <div className={s.image}></div>
                </div>
            </div>
        </div>
    );
}

export default Main;
