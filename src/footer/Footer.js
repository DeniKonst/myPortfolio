import React from "react";
import style from './Footer.module.css';
import {LinkItem} from "./link/Link";


export const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={style.footerContainer}>
                <h2  className={style.title}> Denis Pleshak</h2>
                <div className={style.links}>
                    <LinkItem link={'link1'}/>
                    <LinkItem link={'link2'}/>
                    <LinkItem link={'link3'}/>
                    <LinkItem link={'link4'}/>
                </div>
                <div className={style.footer}>2022 Все права защищены</div>
            </div>
        </div>
    );
}


