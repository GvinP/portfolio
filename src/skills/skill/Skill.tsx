import React from 'react';
import style from '../Skills.module.css'
import styleContainer from '../../common/Container.module.css'

export type SkillPropsType = {
    title: string
    description: string
    logo: string
}

const Skill = (props: SkillPropsType) => {
    return (
        <div className={`${styleContainer.itemContainer} ${style.skillContainer}`}>
            <img src={props.logo} className={style.logo}/>
            <h3 className={style.title}>{props.title}</h3>
            <p className={style.description}>{props.description}</p>
        </div>
    );
};

export default Skill;