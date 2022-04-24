import React from 'react';
import style from './Social.module.css'

export type SocialPropsType = {
    icon: string,
    link: string
}

const Social = (props: SocialPropsType) => {
    return (
        <div className={style.icon}>
            <a></a>
        </div>
    );
};

export default Social;