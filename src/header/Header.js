import React from "react";
import style from './Header.module.css';
import {Nav} from "../nav/Nav";

 export const Header = () => {
    return (
        <div className={style.header}>
        <span className={style.headerContainer}>
            <Nav/>
        </span>
        </div>
    );
}


