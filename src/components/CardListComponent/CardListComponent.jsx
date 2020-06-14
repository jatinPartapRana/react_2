import React from 'react';
import './CardListComponent.scss';
import CardComponent from '../CardComponent/CardComponent';

const CardListComponent = (props) =>{
    console.log(props);

    return(
        <div className = "listingCard">
            {
                props.products.map((product) =>(
                        <CardComponent key={product.id} cardData = {product} ></CardComponent>
                ))
            }
        </div>
    )
};

export default CardListComponent;