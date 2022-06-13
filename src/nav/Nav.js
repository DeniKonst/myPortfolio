import React from "react";
import style from './Nav.module.css';

export const Nav = () => {
    const aStyle = {'textDecoration': 'none'}
    return (
        <div className={style.nav}>
            <a href="1"style={aStyle}>Главная</a>
            <a href="2"style={aStyle}>Скиллы</a>
            <a href="3"style={aStyle}>Проекты</a>
            <a href="4"style={aStyle}>Контакты</a>
        </div>

    );
}


