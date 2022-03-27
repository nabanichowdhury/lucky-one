import React from 'react'; 
import "./Food.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Food = (props) => {

    const{food,addToChoice}=props
    const {image,name,price,id}=props.food
    
    return (
        <div className='food'>
            <div><img src={image} alt="" /></div>
            <div>
                <p className='food-name'>Name:{name}</p>
                <p>Price:{price}</p>
                <p><small>Food Id:{id}</small></p>
                <button className='btn-add' onClick={()=>addToChoice(food)}>Choose your favourite
                <FontAwesomeIcon icon={faShoppingCart} /></button>
                
            </div>
        </div>
    );
};

export default Food;