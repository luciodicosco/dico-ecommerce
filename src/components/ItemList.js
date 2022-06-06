import React from 'react';
import Item from './Item';

const ItemList = ({listaProductos}) => {
  return (
    <>
      <h3>Lista de productos</h3>
      <div className='d-flex justify-content-between flex-wrap'>
      {listaProductos.map((producto) => <Item key={producto.id} producto={producto}></Item>)}
    </div>
    </>
  )
  }

export default ItemList;