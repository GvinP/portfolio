import React from 'react';
import style from './Skill.module.css'
import styleContainer from '../../common/Container.module.css'

export type SkillPropsType = {
    title: string
    description: string
}

const Skill = (props: SkillPropsType) => {
    return (
        <div className={styleContainer.itemContainer}>
            <div className={style.logo}></div>
            <h3 className={style.title}>{props.title}</h3>
            <p className={style.description}>{props.description}</p>
        </div>
    );
};

export default Skill;