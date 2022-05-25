import React from 'react'
import ItemCount from './ItemCount';

const ItemListContainer = ({greeting}) => {

    const onAdd = (count) =>{
      alert("se agregaron" + count + "items al carrito")
    }

  return (
    <div>
    <h1>{greeting}</h1>
    <ItemCount stock={10} initial={1} onAdd={onAdd}></ItemCount>
    </div>
  );
}

export default ItemListContainer;