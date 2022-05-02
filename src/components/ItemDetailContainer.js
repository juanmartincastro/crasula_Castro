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
            // setTimeout(() => {
            //     resolve(plantsData)
            // }, 1500);
            resolve(plantsData)
        })
        getSelfApiPromise.then( data => {
            setItemContainer(data)
            console.log(data)
        })
    }
    
    return (
        <div className="itemDetailContainer">
            {itemContainer.filter(i => i.id === 1).map( item => <ItemDetail key={item.id} productDetail={item}/>)}
        </div>
    )

}

export default ItemDetailContainer



