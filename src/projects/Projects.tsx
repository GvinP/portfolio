import React from 'react';
import style from './Projects.module.css'
import styleContainer from '../common/Container.module.css'
import Project from "./project/Project";

const Projects = () => {
    const projects = [
        {
            title: 'Social Network',
            description: 'Social Network description'
        },
        {
            title: 'To do list',
            description: 'To do list description'
        }
    ]
    return (
        <div className={`${style.projects} ${styleContainer.page}`}>
            <div className={`${styleContainer.container} ${styleContainer.listContainer}`}>
                <h2>Мои работы</h2>
                <div className={styleContainer.list}>
                    {projects.map((el,index)=><Project title={el.title} description={el.description}/>)}
                </div>
            </div>
        </div>
    );
};

export default Projects;