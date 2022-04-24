import React from 'react';
import style from './Skills.module.css'
import styleContainer from '../common/Container.module.css'
import Skill from "./skill/Skill";

const Skills = () => {
    const skills = [
        {
            title: 'JS',
            description: 'JavaScript is the programming language of the Web'
        },
        {
            title: 'CSS',
            description: 'CSS is a style sheet language used for describing the presentation of a document written in a markup language such as HTML'
        },
        {
            title: 'React',
            description: 'React is a free and open-source front-end JavaScript library[3] for building user interfaces based on UI components.'
        }
    ]
    return (
        <div className={`${style.skills} ${styleContainer.page}`}>
            <div className={`${styleContainer.container} ${styleContainer.listContainer}`}>
                <h2>Мои скилы</h2>
                <div className={styleContainer.list}>
                    {skills.map((el,index)=><Skill title={el.title} description={el.description}/>)}
                </div>
            </div>
        </div>
    );
};

export default Skills;