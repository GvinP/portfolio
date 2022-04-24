import React from 'react';
import style from './Footer.module.css'
import styleContainer from '../common/Container.module.css'
import Social from "./social/Social";

const Footer = () => {
    const social = [
        {
            icon: '',
            link: ''
        },
        {
            icon: '',
            link: ''
        },
        {
            icon: '',
            link: ''
        },
        {
            icon: '',
            link: ''
        }
    ]
    return (
        <div className={`${style.footer}`}>
            <div className={`${styleContainer.container} ${styleContainer.listContainer}`}>
                <h2>Алексей Кудряшов</h2>
                <div className={`${styleContainer.list} ${style.list}`}>
                    {social.map((el, index) => <Social icon={el.icon} link={el.link}/>)}
                </div>
                <p>&#169; 2022 Все права защищены</p>
            </div>
        </div>
    );
};

export default Footer;