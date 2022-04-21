import '../StylesSheets/ItemListContainerModule.css';
import ItemCount from './ItemCount';

const ItemListContainer = (prop) => {
    return (
        <div className='itemListContainer'>
            <h1>{prop.msg}</h1>
            <ItemCount/>
        </div>  
    )
}

export default ItemListContainer