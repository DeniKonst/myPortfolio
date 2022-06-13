import React from "react";
import style from './Main.module.css';
import styleContainer from '../../src/common/styles/Container.module.css'


export const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.mainText}>
                    <span>Hi There</span>
                    <h1>I am Denis Pleshak</h1>
                    <p> Frontend Developer </p>
                </div>
                <div className={style.mainFoto}></div>

            </div>
        </div>
    );
}


