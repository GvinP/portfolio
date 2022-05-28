import React from 'react';
import style from './Header.module.css'

type HeaderPropsType = {
    color: string
    text: string
}

const Header = (props: HeaderPropsType) => {

    return (
        <div className={style.header}>
            <div className={style.headerBlock} style={{backgroundColor: `${props.color}`}}></div>
            <div className={style.title}><p>alexey kudriashov</p></div>
            <div className={style.title} style={{color: `${props.color}`}}><span>{props.text}</span></div>
            <div></div>
        </div>
    );
};

export default Header;