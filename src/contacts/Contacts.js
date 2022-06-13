import React from "react";
import style from './Contacts.module.css';
import styleContainer from "../common/styles/Container.module.css";
// import styleContainer from '../../src/common/styles/Container.module.css'


export const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.remoteContacts}`}>
                <h2 className={style.title}>Contacts</h2>
                                   <form className={style.form} action="1">
                            <input className={style.input} type="text"/>
                            <input className={style.input} type="text"/>
                            <textarea className={style.textArea}></textarea>
                    </form>
                    <button className={style.button}><h4>Submit</h4></button>
                          </div>
            <div>

        </div>
</div>

)
    ;
}


