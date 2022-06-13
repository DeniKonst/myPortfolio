import React from "react";
import style from './RemoteWork.module.css';
import styleContainer from "../common/styles/Container.module.css";

export const RemoteWork = () => {
    return (
        <div className={style.remoteWorkBlock}>
            <div className={`${styleContainer.container} ${style.remoteContainer}`}>
                <h2 className={style.title}>Рассматриваю варианты удаленной работы</h2>
                <div>
                <button className={style.button}> <h4>Нанять меня</h4>  </button>
                </div>
            </div>
        </div>
    );
}


