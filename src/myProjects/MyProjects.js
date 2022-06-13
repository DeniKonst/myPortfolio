import React from "react";
import style from './MyProjects.module.css';
import styleContainer from "../common/styles/Container.module.css";
import {Project} from "./project/Project";
// import styleContainer from '../../src/common/styles/Container.module.css'


export const MyProjects = () => {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <div className={style.header}>

                    <h2 className={style.title}>My projects</h2>
                </div>
                <div className={style.projects}>
                    <Project title={'project-1'} image={''} description={'description-1'}/>
                    <Project title={'project-2'} image={''} description={'description-2'}/>
                </div>
            </div>
        </div>
    );
}


