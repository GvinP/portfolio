import React from 'react';
import style from './Project.module.css'
import styleContainer from '../../common/Container.module.css'

export type ProjectPropsType = {
    title: string
    description: string
}

const Project = (props: ProjectPropsType) => {
    return (
        <div className={`${styleContainer.itemContainer} ${style.project}`}>
            <div className={style.img}>
                <a className={style.link}>Посмотреть</a>
            </div>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    );
};

export default Project;