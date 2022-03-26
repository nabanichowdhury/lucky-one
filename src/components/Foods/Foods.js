import React, { useEffect, useState } from 'react';
import Food from '../Food/Food';

const Foods = () => {
    const[foods,setFoods]=useState([])
    useEffect(()=>{
        fetch("fakedb.json")
        .then(res=>res.json())
        .then(data=>setFoods(data))
    },[])
    return (
        foods.map(food=><Food key={food.id} food={food}></Food>)
    );
};

export default Foods;