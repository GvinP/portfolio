import React from 'react';
import style from './Contacts.module.css'
import styleContainer from '../common/Container.module.css'

const Contacts = () => {
    return (
        <div className={`${style.contacts} ${styleContainer.page}`}>
            <div className={`${styleContainer.container} ${styleContainer.listContainer}`}>
                <h2>Контакты</h2>
                <form className={style.form}>
                    <input/>
                    <input/>
                    <textarea/>
                </form>
                <button>Отправить</button>
            </div>
        </div>
    );
};

export default Contacts;