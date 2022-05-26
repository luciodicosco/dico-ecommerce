import React from 'react'
import customFetch from './customFetch';
import { item } from './Item';
import ItemCount from './ItemCount';

const ItemListContainer = ({greeting}) => {

    useEffect(() => {
      customFetch(2000, item)
      .then(result => setDatos(result))
      .catch(err => console.log(err))
    }, []);

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