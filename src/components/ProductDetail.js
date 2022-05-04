import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {plantsData} from '../Data/Data';
import ItemCount from "./ItemCount";
import {AiOutlineHeart} from 'react-icons/ai';
import '../StylesSheets/ItemDetailModule.css'

const ProductDetail = () => {

    const {plantaId} = useParams()
   
    const [planta, setPlanta] = useState({})
  
    useEffect(() => {
        setPlanta(plantsData.find( p => p.id == plantaId))
    }, [plantaId])

    return(
        <>
        <div className='itemDetailContainer'>
            <div className='itemDetail'>
                <div className='itemDetail_imgButtonContainer'>
                    <div className='itemDetail_img'>
                        <img src={planta.pictureUrl} className='itemDetail_img'/>
                    </div>
                
                    <button>Comprar ahora</button>
                </div>

                <div className='itemDetail_descriptionContainer'>
                    <h2 className='itemDetail_title'>{planta.title} <AiOutlineHeart className='heartIcon'/></h2>
                    
                    <span className='itemDetail_price'>$ {planta.price}</span>
                    <div className='itemDetail_divP'>
                        <p >{planta.description}</p>
                        <p>{planta.detail}</p>
                    </div>

                    <ItemCount />
                    
                </div>
            </div>
         
        </div>
        </>
    )
}

export default ProductDetail