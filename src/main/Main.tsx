import React from 'react';
import style from './Main.module.css'
import styleContainer from '../common/Container.module.css'

const Main = () => {
    return (
        <div className={style.main}>
            <div className={`${styleContainer.container} ${style.mainContainer}`}>
                <div className={style.presentation}>
                    <span>Привет</span>
                    <h1>Меня зовут Алексей Кудряшов</h1>
                    <p>Я front-end разработчик</p>
                </div>
                <div>
                    <img className={style.photo}/>
                </div>
            </div>
        </div>
    );
};

export default Main;