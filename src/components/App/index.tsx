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
    const [id,setId] = useState(-1);
    
    const deleteCell = (id:number)=>{
        setCells(cells.filter(el=>el.id!==id));
    }

    const addCell = (title:string)=>{
        if(cells.length>1){
        const highestId = cells.sort((a,b)=>b.id-a.id)[0].id;
        setCells([...cells,{id:highestId+1,title:title, type:"simple"}]);
        }
        else{
            setCells([{id:1,title:title,type:"simple"}]);
        }
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

    const addInnerCell = (id:number,title:string)=>{
            const cellIndex = cells.findIndex(el=>el.id===id);
            const newCells = [...cells]
            if(cells[cellIndex].rows!.length>0){
            const highestId = cells[cellIndex].rows!.sort((a,b)=>{return (b.id-a.id)})[0].id;
            newCells[cellIndex].rows!.push({id:highestId+1,title:title});
            }else{
            newCells[cellIndex].rows!.push({id:1,title:title});
            }
            setCells(newCells);
    }

    const renderConctent = ()=>{
        const markups = cells.map(el=>{
            if(el.type==="simple"){
                return<Basic onClick={()=>{deleteCell(el.id)}} title={el.title}/>
            }else if(el.type==="multirow"
            ){
                return(<Multirow 
                onClickAdd={()=>{
                    setId(el.id);
                    setPopup(true);
                }}
                onClickDeleteAll={()=>{
                    deleteCell(el.id);
                }}
                onClickDelete={deleteInnerCell(el.id)}
                content={el.rows}
                title={el.title}
                />
                )
            }
            else{
                return undefined;
            }
        }
        )
        return markups;
    }

    return (
    <div className={style.background}>
        <div className={style.logo}/>
    <div className={style.appbox}>   
        <div className={style.people}>
            People
        </div>
        <div className={style.content}>
            {renderConctent()}
        </div>  
        <div className={style.buttonbox}>
            <ButtonPlusBig onClick={()=>{setPopup(true)}}/>
        </div>
    </div>
    {popup?<Popup onSubmit={(title:string)=>{
        if(id>-1){
            addInnerCell(id,title);
        }else{
            addCell(title);
        }
        setId(-1);
        setPopup(false);
    }}
    onCancel={()=>{
        setId(-1);
        setPopup(false);
    }}
    />:null}
    </div>)
}  

export default App;