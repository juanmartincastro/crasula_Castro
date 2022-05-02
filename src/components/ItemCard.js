import React from 'react';
import ItemCount from './ItemCount';
import '../StylesSheets/ItemCardModule.css';


const ItemCard = (props) => {

    const {title, description, price, pictureUrl} = props.ItemProps 

    return (
        <div className='itemCardContainer'>
            <h2 className='itemCard_title'>{title}</h2>
            <img src={pictureUrl} className='itemCard_img'/>
            <div className='itemCard_description'>
                <p>{description}</p>
            </div>
            <p className='itemCard_price'><strong>${price}</strong></p>

            <ItemCount />
        </div>
    )
}

export default ItemCard


     
    
   
   
