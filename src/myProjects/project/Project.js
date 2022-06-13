import style from './Project.module.css';
import React from "react";



export const Project = (props) => {
    const aStyle = {'textDecoration': 'none'}
    return (
        <div className={style.project}>
            <div className={style.image}>{props.image}
                <a href={'1'} style={aStyle}>Смотреть</a>
            </div>
            <div className={style.text}>
                <span className={style.title}>{props.title}</span>
                <div className={style.description}>{props.description}</div>
            </div>
        </div>
    );
}
