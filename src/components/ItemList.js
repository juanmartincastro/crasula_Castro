import React, { useEffect, useState } from "react"
import ItemCard from "./ItemCard"
import {plantsData} from '../Data/Data'
import '../StylesSheets/ItemListModule.css'

const ItemList = () => {

    const [itemList, setitemList] = useState([])

    // useEffect para solicitar la data a una falsa API
    useEffect(() => {

        getData()

    }, [])

    // Esta variable almacena la promesa con el setTimeout para simular un retraso
    const getData = () => {
        const getDataPromise = new Promise ((resolve, reject) => {
            setTimeout(() => {
                resolve(plantsData)
            }, 2000);
        })
        // La promesa se resuelve trayendo la informacion del array de objetos
        getDataPromise.then( data => {setitemList(data)})
    }
    
    return (
        <div className="ItemList">
            {itemList.map( item => <ItemCard key={item.id} ItemList={item}/>)}
        </div>
    )
} 

export default ItemList