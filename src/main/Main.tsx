import React from 'react';
import style from './Main.module.css'
import styleContainer from '../common/Container.module.css'
import fox from '../images/fox.png'
import portrait from '../images/portrait.jpg'
import Header from "../header/Header";
import Navigation from "../navigation/Navigation";

const Main = () => {
    const navigation = ['Skills', 'Projects', 'Contact me']
    return (
        <div className={style.mainPage}>
            <Header color={'#FFAA00'} text={'/ web apps development'}/>
            <div className={style.main}>
                <div className={style.navigation}>
                    <Navigation navigationList={navigation}/>
                </div>
                <div className={`${style.mainContainer} ${styleContainer.container}`}>
                    <div className={style.presentation}>
                        <span>Looking for a web-developer?</span>
                        <h1>I am Alexey Kudriashov</h1>
                        <span>a frontend developer living in Batumi, Georgia</span>
                        <span>React</span>
                        <span>Typescript</span>
                        <span>Redux</span>
                        <img src={portrait} className={style.photo}/>
                    </div>
                    <div className={style.photoContainer}>
                        <img src={fox} className={style.image}/>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Main;