import React from 'react'
import '../StylesSheets/ItemCountModule.css';
import { useState } from "react";
import { Link } from 'react-router-dom';

const ItemCount = (onAdd) => {

    const [count, setAdd] = useState(1)

    const addHandler = () => {
        setAdd(count + 1)
    }

    const deductHandler = () => {
        if (count > 1){
            setAdd(count - 1)
        }   
    }

  return (
    <div className='itemCount'>
        <div className='itemCountButtonsContainer'>
            <button className='deductHandler' onClick={deductHandler}>-</button>
            <span><strong>{count}</strong></span>
            <button className='addHandler' onClick={addHandler}>+</button>
        </div>

        <div>
            <button className='addButtonCart' onClick = {() => onAdd(count)}>Agregar al carrito</button>
        </div>
    </div>
  )
}

export default ItemCount 


