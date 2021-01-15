import React,{FunctionComponent,useState} from 'react';
import style from './style.module.scss';

interface props {
    onSubmit: Function;
    onCancel: Function;
}

const Popup:FunctionComponent<props> = ({onSubmit,onCancel})=>{

    const [title,setTitle] = useState("");

    return<div id={"bg"} className={style.overlay} onClick={(e)=>{
        onCancel();
    }}>
        <button className={style.cancel} onClick={()=>{onCancel()}}><span>+</span></button>

        <form className={style.form} onSubmit={(e)=>{
            e.preventDefault();
            onSubmit(title);
        }}
        onClick={(e)=>{e.stopPropagation()}}
        >
            <label htmlFor="name">please specify your category name: </label>
            <input id="name" type="text" onChange={(e)=>{setTitle(e.target.value)}} value={title} required/>
            <button type="submit">+</button>
        </form>
    </div>
}

export default Popup;