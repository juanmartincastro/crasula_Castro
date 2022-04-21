import React from 'react'
import '../StylesSheets/ItemCountModule.css';
import { useState } from "react";

const ItemCount = () => {

    const [count, setAdd] = useState(0)

    const addHandler = () => {
        setAdd(count + 1)
    }

    const deductHandler = () => {
        if (count > 0){
            setAdd(count - 1)
        }   
    }

  return (
    <div className='itemCount'>ItemCount
        <div className='itemCountButtonsContainer'>
            <button className='deductHandler' onClick={deductHandler}>-</button>
            <span><strong>{count}</strong></span>
            <button className='addHandler' onClick={addHandler}>+</button>
        </div>

        <div>
            <button className='addButtonCart'>Agregar al carrito</button>
        </div>
    </div>
  )
}

export default ItemCount 


