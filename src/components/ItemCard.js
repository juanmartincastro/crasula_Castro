import React from 'react';
import ItemCount from './ItemCount';
import '../StylesSheets/ItemCardModule.css';
import { Link } from 'react-router-dom';

const ItemCard = (props) => {

    const {id, title, price, pictureUrl} = props.ItemProps 

    return (
        <div className='itemCardContainer'>
            <h2 className='itemCard_title'>{title}</h2>
            <img src={pictureUrl} className='itemCard_img'/>
            {/* <div className='itemCard_description'>
                <p>{description}</p>
            </div> */} 
            <p className='itemCard_price'><strong>${price}</strong></p>

            <div className='productView'>
            <Link to={`/planta/${id}`} className='productView_Link'>Ver producto</Link>
            </div>

            <ItemCount />
        </div>
    )
}

export default ItemCard


     
    
   
   
