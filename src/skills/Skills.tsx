import React from 'react';
import style from './Skills.module.css'
import styleContainer from '../common/Container.module.css'
import Skill from "./skill/Skill";
import Header from "../header/Header";
import react from '../icons/react.svg'
import typescript from '../icons/typescript.svg'
import redux from '../icons/redux.svg'
import css from '../icons/css.svg'
import html from '../icons/html.svg'
import javascript from '../icons/javascript.svg'

const Skills = () => {
    const skills = [
        {
            title: 'React',
            description: 'JavaScript is the programming language of the Web',
            logo: react

        },
        {
            title: 'Redux',
            description: 'CSS is a style sheet language used for describing the presentation of a document written in a markup language such as HTML',
            logo: redux
        },
        {
            title: 'TypeScript',
            description: 'React is a free and open-source front-end JavaScript library[3] for building user interfaces based on UI components.',
            logo: typescript
        },
        {
            title: 'HTML',
            description: 'JavaScript is the programming language of the Web',
            logo: html
        },
        {
            title: 'CSS',
            description: 'CSS is a style sheet language used for describing the presentation of a document written in a markup language such as HTML',
            logo: css
        },
        {
            title: 'JavaScript',
            description: 'React is a free and open-source front-end JavaScript library[3] for building user interfaces based on UI components.',
            logo: javascript
        }
    ]
    return (
        <div>
            <Header color={'#27B016'} text={' / skills'} displayIcons={'none'}/>
            <div className={`${style.skills} ${styleContainer.page}`}>
                <div className={`${styleContainer.container} ${styleContainer.listContainer}`}>
                    <h2>Мои скилы</h2>
                    <div className={styleContainer.list}>
                        {skills.map((el,index)=><Skill title={el.title} description={el.description} logo={el.logo}/>)}
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Skills;