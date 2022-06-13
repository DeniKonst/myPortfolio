import React from "react";
import style from './Skills.module.css';
import styleContainer from '../../src/common/styles/Container.module.css'
import {Skill} from "./skill/Skill";


export const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <div className={style.header}>
                <h2 className={style.title}>My skills</h2>
                </div>
                <div className={style.skills}>
                    <Skill title={'JS'} icon={'111'} description={'description111'}/>
                    <Skill title={'CSS'} icon={'222'} description={'description222'}/>
                    <Skill title={'React'} icon={'333'} description={'description333'}/>
                </div>
            </div>
        </div>
    );
}


