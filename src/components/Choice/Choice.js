import React, { useState } from 'react';
import "./Choice.css"

const Choice = (props) => {
    const {choice,setChoice}=props
    let randomChoice;
    
    const [select,setSelect]=useState(" ")
    
    const chooseRandom=()=>{
        randomChoice=Math.floor(Math.random()*choice.length)
        console.log(randomChoice)
        const randomlyChoosen=choice[randomChoice].name
        setSelect(randomlyChoosen)
        console.log(randomlyChoosen)
        
}
const removeALL=()=>{
    setChoice([])
    setSelect(" ")
    
}





    return (
        <div className='choice'>
             <div className='choose-container'>
                <h2 className='choose'>Choose your food</h2>
                <h5>selected items:{choice.length}</h5>
               <h5>{
               choice.map(item=><h3>Name:{item.name}</h3>)

               
               }</h5>
               <button className='btn-random' onClick={chooseRandom}>Choose one for me</button>
               
               
               <button className='btn-remove' onClick={removeALL }>Choose again</button>

               <h2>{select}</h2>
    
            


            
            </div>
           
        </div>
    );
};

export default Choice;