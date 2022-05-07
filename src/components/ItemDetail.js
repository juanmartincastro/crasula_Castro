import React, { useEffect, useState } from "react";
import '../StylesSheets/ItemDetailModule.css'
import ItemCount from "./ItemCount";
import {AiOutlineHeart} from 'react-icons/ai';

const ItemDetail = (props) => {

    const {title, description, detail, price, pictureUrl} = props.productDetail

    const [finishBuy,setFinishBuy] = useState(false)

    const onAdd = (count) => {
        setFinishBuy(true)
        console.log(count)
    }

    return (
        <div className='itemDetailContainer'>
            <div className='itemDetail'>
                <div className='itemDetail_imgButtonContainer'>
                    <div className='itemDetail_img'>
                        <img src={pictureUrl} className='itemDetail_img'/>
                    </div>
                
                    <button>Comprar ahora</button>
                </div>

                <div className='itemDetail_descriptionContainer'>
                    <h2 className='itemDetail_title'>{title} <AiOutlineHeart className='heartIcon'/></h2>
                    
                    <span className='itemDetail_price'>$ {price}</span>
                    <div className='itemDetail_divP'>
                        <p >{description}</p>
                        <p>{detail}</p>
                    </div>

                    {finishBuy ? (
                        <div>
                            <button className='addButtonCart'>
                                Terminar compra
                            </button>
                        </div>
                    )
                    : (
                    <ItemCount onAdd={onAdd}/>)
                    }

                    
                </div>
            </div>
         
        </div>
    )
}

export default ItemDetail