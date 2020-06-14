import React from 'react';
import classes from '../CardComponent/CardComponent.module.css';

const CardComponent = (props) =>{
    console.log('card'+JSON.stringify(props.cardData.image));
    return(
        <div className= {classes.card}>
            <img src={props.cardData.image} alt = 'GreenKart'> 
            </img>
            <button onClick={()=> alert('Added To Cart')}>ADD TO CART</button>
            <div >
                    <span>{props.cardData.productName}</span>
                    <span>${props.cardData.price}</span>
            </div>
        </div>
    )
};

export default CardComponent;