import React from "react";
import style from './Skill.module.css';
// import styleContainer from '../../src/common/styles/Container.module.css'


export const Skill = (props) => {
    return (
        <div className={style.skill}>
<div className={style.icon}>{props.icon}</div>
<h3 className={style.title}>{props.title}</h3>
<span className={style.description}>{props.description}</span>

        </div>
    );
}


