import React from 'react';
import style from './style.module.scss';

interface Props{
    onClick:Function;
}

export const ButtonMinus:React.FunctionComponent<Props> = ({onClick})=>{
    return <button className={style.red} onClick={(e)=>{onClick()}}><span className={style.symbol}>-</span></button>
}
export const ButtonPlus:React.FunctionComponent<Props> = ({onClick})=>{
    return <button className={style.green} onClick={(e)=>{onClick()}}><span className={style.symbol}>+</span></button>
}
export const ButtonPlusBig:React.FunctionComponent<Props> = ({onClick})=>{
    return <button className={style.green_big} onClick={(e)=>{onClick()}}><span className={style.symbol}>+</span></button>
}