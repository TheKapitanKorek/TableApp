import React,{FunctionComponent,useState} from 'react';
import style from './style.module.scss';

interface props {
    onSubmit: Function;
}

const Popup:FunctionComponent<props> = ({onSubmit})=>{

    const [title,setTitle] = useState("");

    return<div className={style.overlay}>
        <form className={style.form} onSubmit={(e)=>{
            e.preventDefault();
            onSubmit(title);
        }}>
            <label htmlFor="name">please specify your category name: </label>
            <input id="name" type="text" onChange={(e)=>{setTitle(e.target.value)}} value={title}/>
            <button type="submit">+</button>
        </form>
    </div>
}

export default Popup;