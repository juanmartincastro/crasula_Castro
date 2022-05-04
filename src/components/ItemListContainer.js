import React, { useEffect, useState } from 'react';
import '../StylesSheets/ItemListContainerModule.css';
import ItemCount from './ItemCount';
import {AiOutlineHeart} from 'react-icons/ai';
import ItemList from './ItemList'
import { useParams } from 'react-router-dom';
import { plantsData } from '../Data/Data';
import ItemCard from './ItemCard';

const ItemListContainer = (prop) => {
    // const {plantaId} = useParams()
   
    // const [planta, setPlanta] = useState({})
  
    // useEffect(() => {
    //     setPlanta(plantsData.find( p => p.id == plantaId))
    // }, [plantaId])

    
    // return (
    //     <div className='itemListContainer'>
            
    //         <ItemList/>
    //     </div>
    // )

    const [itemList, setItemList] = useState([])

    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        const getDataPromise = new Promise ((resolve, reject) => {
            setTimeout(() => {
                resolve(plantsData)
            }, 2000);
        })
        getDataPromise.then( data => {setItemList(data)})
    }


    return (
        <div className="ItemList">
            <ItemList itemList={itemList}/>
        </div>

    )
}

export default ItemListContainer