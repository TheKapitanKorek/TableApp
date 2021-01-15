import React, {useState} from 'react';
import style from './style.module.scss';
import Basic from '../CellBasic';
import Multirow from '../CellMultirow'
import Popup from '../Popup';
import {ButtonPlusBig} from '../Buttons';

const startingState = [
{id:1, title:"Age 40+",type:"simple"},
{id:2, title:"Ethnicity",type:"multirow",rows:[{id:1,title:"Black"},{id:2,title:"Hispanic"}]},
{id:3, title:"Income yearly 45k USD+", type:"simple"}
]

const App:React.FunctionComponent = ()=>{

    const [cells,setCells] = useState(startingState);
    const [popup,setPopup] = useState(false);
    
    const deleteCell = (id:number)=>{
        setCells(cells.filter(el=>el.id!==id));
    }

    const addCell = (title:string)=>{
        const highestId = cells.sort((a,b)=>b.id-a.id)[0].id;
        setCells([...cells,{id:highestId+1,title:title, type:"simple"}]);
    }

    const deleteInnerCell = (id:number)=>{
        return((innerId:number)=>{
        const cellindex = cells.findIndex(el=>el.id===id);
        //const innerCellIndex = cells[cellindex].rows?.findIndex(el=>el.id===innerId);
        const newInnerCells = cells[cellindex].rows!.filter(el=>el.id!==innerId);
        const newCells = [...cells]
        newCells[cellindex].rows=newInnerCells
        setCells(newCells);
        })
    }

    const addInnerCell = (id:number)=>{
        return(title:string)=>{
            const cellIndex = cells.findIndex(el=>el.id===id);
            const highestId = cells[cellIndex].rows!.sort((a,b)=>{return (b.id-a.id)})[0].id;
            console.log(highestId);
            const newCells = [...cells]
            newCells[cellIndex].rows!.push({id:highestId+1,title:title});
            setCells(newCells);
        }  
    }

    const openAddInner = ()=>{

    }

    const openAdd = ()=>{

    }

    const renderConctent = ()=>{
        const markups = cells.map(el=>{
            if(el.type==="simple"){
                return<Basic onClick={()=>{deleteCell(el.id)}} title={el.title}/>
            }else if(el.type==="multirow"
            ){
                return(<Multirow 
                onClickAdd={addInnerCell(el.id)}
                onClickDeleteAll={()=>{
                    deleteCell(el.id);
                }}
                onClickDelete={deleteInnerCell(el.id)}
                content={el.rows}
                title={el.title}
                />
                )
            }
        })
        return markups;
    }

    return (
    <div className={style.background}>
        <div className={style.logo_box}>
            <div className={style.logo}/>
            <div className={style.header}/>
        </div>
    <div className={style.appbox}>   
        <div className={style.people}>
            People
        </div>
        <div className={style.content}>
            {renderConctent()}
        </div>  
        <div className={style.buttonbox}>
            <ButtonPlusBig onClick={()=>{console.log("hello")}}/>
        </div>
    </div>
    {popup?<Popup onClose={()=>{console.log("hey")}} onSubmit={()=>{console.log("hello")}}/>:null}
    </div>)
}  

export default App;