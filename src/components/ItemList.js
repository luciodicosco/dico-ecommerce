import React from 'react';
import Item from './Item';

const ItemList = ({listaProductos}) => {
  return (
    <div>
      <h3>Lista de productos</h3>
      {listaProductos.map((producto) => <Item key={producto.id} producto={producto}></Item>)}
    </div>
  )
  }

export default ItemList;