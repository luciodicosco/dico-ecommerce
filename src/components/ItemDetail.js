import Item from './Item';
import ItemCount from './ItemCount';

const ItemDetail = ({ productos }) => {
    const onAdd = (count) => {
        alert("se agregaron " + count + " items al carrito");
    }

    return (
        <>
        <div className='card' style={{width:"18rem", margin:".5rem"}}>
        <img src={image}className="card-img-top" alt={Item}></img>
        <div className='card-body'>
            <p className='card-text'>{Item}</p>
            <p className='card-text'>{stock}</p>
            <p className='card-text'>{description}</p>
        </div>
        </div>
        <ItemCount stock={productos.stock} initial={1} onAdd={onAdd}></ItemCount>
        </>
    );
}

export default ItemDetail;
