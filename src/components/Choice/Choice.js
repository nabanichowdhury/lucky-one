import React from 'react';

const Choice = (props) => {
    const {choice,chooseRandom}=props
    
   

    return (
        <div>
             <div className='choose-container'>
                <h2>Choose your food</h2>
                <h5>selected items:{choice.length}</h5>
               {
                   choice.map(item=><h4>Name:{item.name}</h4>)
               }
               <button onClick={chooseRandom}>Choose one for me</button>
               <button>Choose again</button>
    
            


            
            </div>
           
        </div>
    );
};

export default Choice;