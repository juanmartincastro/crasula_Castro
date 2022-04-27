import '../StylesSheets/ItemListContainerModule.css';
import ItemCount from './ItemCount';
import ItemList from './ItemList'

const ItemListContainer = (prop) => {
    return (
        <div className='itemListContainer'>
            <h1>{prop.message}</h1>
            <ItemList/>
        </div>  
    )
}

export default ItemListContainer