import React from 'react';
import style from './Header.module.css'
import styleContainer from '../common/Container.module.css'
import Navigation from "../navigation/Navigation";

const Header = () => {
    const navigation = ['Главная', 'Скилы', 'Работа', 'Контакты']
    return (
        <div className={style.header}>
            <div className={styleContainer.container}>
                <div className={style.headerNavigation}>
                    <Navigation navigationList={navigation}/>
                </div>
            </div>
        </div>
    );
};

export default Header;