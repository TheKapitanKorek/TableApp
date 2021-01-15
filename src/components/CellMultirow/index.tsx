import React from 'react';
import style from './style.module.scss';
import {ButtonMinus,ButtonPlus} from '../Buttons';

interface props {
    onClickAdd:Function,
    onClickDelete:Function,
    onClickDeleteAll:Function,
    content?: {id:number,title:string}[],
    title:string

}

interface cellProps{
    onClickDelete: Function,
    title:string
}

const Cell:React.FunctionComponent<cellProps> = ({onClickDelete,title})=>{
    return (
        <div className={style.row_cell}>
            <div className={style.and}>Or</div>
                <div className={style.innerLineBox}>
                    <div className={style.line}/>
                </div> 
            <div className={style.textbox}>
            {title}
            <div className={style.buttonbox_minus}><ButtonMinus onClick={onClickDelete}/></div>
            </div>
        </div>)
}

const Multirow:React.FunctionComponent<props> = ({onClickAdd,onClickDelete, onClickDeleteAll,content,title})=>{
    
    function renderContent(){
            return content!.map(el=><Cell onClickDelete={()=>{onClickDelete(el.id)}} title={el.title}/>)
    }
    
    return(
            <div className={style.multirow_cell}>
                <div className={style.and}>And</div>
                <div className={style.lineBox}>
                    <div className={style.line}/>
                </div>  
            <div className={style.contents}>
                <div className={style.gradient}/>
                <div className={style.header}>
                    <div className={style.textbox}>{title}</div>
                    <div className={style.buttonbox_minus}><ButtonMinus onClick={onClickDeleteAll}/></div>
                </div>
                <div className={style.content}>
                    {renderContent()}
                </div>  
                <div className={style.buttonbox_plus}>
                    <ButtonPlus onClick={()=>{onClickAdd()}}/>
                </div>
            </div>
            </div>)
}

export default Multirow;