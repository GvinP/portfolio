import React from 'react';
import style from './Main.module.css'
import styleContainer from '../common/Container.module.css'
import fox from '../images/fox.png'
import portrait from '../images/portrait.jpg'
import Header from "../header/Header";
import Navigation from "../navigation/Navigation";
import Skills from "../skills/Skills";

const Main = () => {
    const navigation = ['Projects', 'Contact me']
    return (
        <div className={style.mainPage}>
            <Header color={'#FFAA00'} text={'/ web apps development'}/>
            <div className={style.main}>
                <div className={style.navigation}>
                    <Navigation navigationList={navigation}/>
                </div>
                <div className={`${style.mainContainer} ${styleContainer.container}`}>
                    <div className={style.presentation}>
                        <span className={style.title}>Looking for a web-developer?</span>
                        <h1 className={style.name}>I am Alexey Kudriashov</h1>
                        <span className={style.description}>a frontend developer living in Batumi, Georgia.</span>
                        {/*<div className={style.photoContainer}>*/}
                        {/*    <span className={style.react}>React</span>*/}
                        {/*    <span className={style.typescript}>Typescript</span>*/}
                        {/*    <span className={style.redux}>Redux</span>*/}
                        {/*    <img src={portrait} className={style.photo}/>*/}
                        {/*</div>*/}
                        <Skills/>
                    </div>
                    <div className={style.imageContainer}>
                        <img src={fox} className={style.image}/>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Main;