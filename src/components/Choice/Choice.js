import React, { useState } from 'react';

const Choice = (props) => {
    const {choice,removeALL}=props
    let randomChoice;
    // let foodName;
    const [select,setSelect]=useState(" ")
    const chooseRandom=()=>{
        randomChoice=Math.floor(Math.random()*choice.length)
        console.log(randomChoice)
        const randomlyChoosen=choice[randomChoice].name
        setSelect(randomlyChoosen)
        console.log(randomlyChoosen)
        
}





    return (
        <div>
             <div className='choose-container'>
                <h2>Choose your food</h2>
                <h5>selected items:{choice.length}</h5>
               <h5>{
               choice.map(item=><h3>Name:{item.name}</h3>)

               
               }</h5>
               <button onClick={chooseRandom}>Choose one for me</button>
               
               
               <button onClick={removeALL }>Choose again</button>

               <h5>{select}</h5>
    
            


            
            </div>
           
        </div>
    );
};

export default Choice;