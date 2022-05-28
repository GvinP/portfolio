import React from 'react';
import style from './Navigation.module.css'

export type NavigationPropsType = {
    navigationList: Array<string>
}

const Navigation = (props: NavigationPropsType) => {
    return (
        <div className={style.navigation}>
            {props.navigationList.map((el, index) => <a className={style.navigationLink} href={'#'} key={index}>{el}</a>)}
        </div>
    );
};

export default Navigation;