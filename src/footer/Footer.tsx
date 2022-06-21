import React from 'react';
import style from './Footer.module.css'
import styleContainer from '../common/Container.module.css'
import {ReactComponent as Tg} from '../icons/tg.svg'
import {ReactComponent as Github} from '../icons/github.svg'
import {ReactComponent as Linkedin} from '../icons/linkedin.svg'
const Footer = () => {
    return (
        <div className={`${style.footer}`}>
                    <a href={'https://www.linkedin.com/in/alexey-kudriashov-44b534236/'}>
                        <Linkedin  className={style.icon}/>
                    </a>
                    <a href={'https://t.me/Gvinpin2'}>
                        <Tg className={style.icon}/>
                    </a>
                    <a href={'https://github.com/GvinP'}>
                        <Github className={style.icon}/>
                    </a>
        </div>
    );
};

export default Footer;