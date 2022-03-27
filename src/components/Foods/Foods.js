import React, { useEffect, useState } from 'react';
import Choice from '../Choice/Choice';
import Food from '../Food/Food';
import "./Foods.css"

const Foods = () => {
    const[foods,setFoods]=useState([])
    let[choice,setChoice]=useState([])
    useEffect(()=>{
        fetch("fakedb.json")
        .then(res=>res.json())
        .then(data=>setFoods(data))
    },[])

    
        const addToChoice =(food)=>{
            console.log("clicked",food)
            let newChoice=[...choice,food]
            setChoice(newChoice)}

       
    
    

   
    
    return (
        <div className='container'>
            <div className='food-container'>
            {
            foods.map(food=><Food 
                key={food.id}
                food={food}
                addToChoice={addToChoice}
                
                ></Food>)
            }
            </div>

           <Choice
           addToChoice={addToChoice}
           choice={choice}
           ></Choice> 
           
        </div>
    );
};

export default Foods;