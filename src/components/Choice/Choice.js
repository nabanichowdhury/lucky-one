import React from 'react';

const Choice = (props) => {
    const {choice}=props
    let randomChoice;
    const chooseRandom=()=>{
        randomChoice=Math.floor(Math.random()*choice.length)
        console.log(randomChoice)
        const randomlyChoosen=choice[randomChoice].name
        console.log(randomlyChoosen)
        
}

   const removeAll=()=>{
         while(choice.length){
             choice.pop()
         }
    

   }
     
    
   

    return (
        <div>
             <div className='choose-container'>
                <h2>Choose your food</h2>
                <h5>selected items:{choice.length}</h5>
                
               {
                   
                   choice.map(item=><h4 id='favourite-foods'>Name:{item.name}</h4>)
               }
               <button onClick={chooseRandom}>Choose one for me</button>
               
               <button onClick={removeAll}>Choose again</button>
    
            


            
            </div>
           
        </div>
    );
};

export default Choice;