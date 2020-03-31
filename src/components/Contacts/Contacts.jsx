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
                        <div className={s.formContainer}>
                            <input placeholder="Name" className={s.formItem}/>
                        </div>
                        <div className={s.formContainer}>
                            <input placeholder="E-mail" className={s.formItem}/>
                        </div>
                        <div className={s.formContainer}>
                            <textarea placeholder="Your message" className={s.formItem}/>
                        </div>
                    </form>
                    <input type="submit"/>
                </div>
            </div>
        </div>
    );
}

export default Contacts;
