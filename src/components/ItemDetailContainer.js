import React, { useEffect, useState } from "react";
import {plantsData} from '../Data/Data';
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {

    const [itemContainer, setItemContainer] = useState([])

    useEffect(() => {
        getItem()
    }, [])

    const getItem = () => {
        const getSelfApiPromise = new Promise ((resolve) =>{
            setTimeout(() => {
                resolve(plantsData)
            },2000);
        })
        getSelfApiPromise.then(data => {
            setItemContainer(data)
        })
    }
    
    return (
        <div className="itemDetailContainer">
            {itemContainer.filter(i => i.id === 1).map( i => <ItemDetail key={i.id} productDetail={i}/>)}
        </div>
    )

}

export default ItemDetailContainer



