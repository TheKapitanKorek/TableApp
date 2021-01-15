import React from 'react';
import style from './style.module.scss';
import {ButtonMinus} from '../Buttons';

interface Props {
    onClick: Function;
    title:string
}

const Basic: React.FunctionComponent<Props> = ({onClick,title})=>{
    return(
    <div className={style.basic_cell}>
        <div className={style.and}>And</div>
        <div className={style.lineBox}>
            <div className={style.line}/>
        </div>
        <div className={style.contents}>
            <div className={style.gradient}/>
            <span className={style.title}>{title}</span>
            <div className={style.buttonbox}><ButtonMinus onClick={onClick}/></div>
        </div>
    </div>)
}

export default Basic;