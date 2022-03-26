import React from 'react'; 
import "./Food.css"

const Food = (props) => {
    const {image}=props.food
    return (
        <div className='food'>
            <img src={image} alt="" />
        </div>
    );
};

export default Food;