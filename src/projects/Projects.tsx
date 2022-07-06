import React from 'react';
import style from './Projects.module.css'
import styleContainer from '../common/Container.module.css'
import Project from "./project/Project";
import rm_background from '../images/rm-thumb.jpeg'
import todo_background from '../images/todo-thumb.png'
import social_background from '../images/social-thumb.png'
import Header from "../header/Header";

const Projects = () => {
    const projects = [
        {
            title: 'Social Network',
            link: 'https://github.com/GvinP/SocialNetwork',
            image: social_background
        },
        {
            title: 'Todo list',
            link: 'https://gvinp.github.io/todolist/',
            image: todo_background
        },
        {
            title: 'Rick and Morty database',
            link: 'https://gvinp.github.io/Rick-and-Morty-database/',
            image: rm_background
        }
    ]
    return (
        <div id={'Projects'}>
            <Header color={'#27B016'} text={' / projects'} displayIcons={'none'}/>
            <div className={`${style.projects} ${styleContainer.page}`}>
                <div className={`${styleContainer.container} ${styleContainer.listContainer}`}>
                    <h2>My projects</h2>
                    <div className={styleContainer.list}>
                        {projects.map((el, index) =>
                            <Project title={el.title}
                                     link={el.link}
                                     image={el.image}
                                     key={el.title}
                            />)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;