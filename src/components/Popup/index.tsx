import React,{FunctionComponent} from 'react';
import style from './style.module.scss';

interface props {
    onClose: Function,
    onSubmit: Function
}

const Popup:FunctionComponent<props> = ({onSubmit,onClose})=>{
    return<div className={style.overlay}>
        <form className={style.form}>
            <label htmlFor="name">please specify your category name: </label>
            <input id="name" type="text"/>
            <button type="submit">OK</button>
        </form>
    </div>
}

export default Popup;