import React,{useState, useEffect} from 'react';
import customFetch from './customFetch';
import ItemCount from './ItemCount';
import ItemList from './ItemList';

const ItemListContainer = ({greeting}) => {

const [listaProductos, setListaProductos] = useState([])
const productos = [
  {name: "Air Max Dawn", description: "zapatilla moderna y cómoda", cost: 26499, image: "https://www.moov.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw5ecbea5c/products/NI_DH4656-001/NI_DH4656-001-1.JPG"}
]

    useEffect(() => {
      customFetch(2000, productos)
      .then(result => setListaProductos(result))
      .catch(err => console.log(err))
    }, []);

    const onAdd = (count) =>{
      alert("se agregaron" + count + "items al carrito")
    }

  return (
    <div>
    <h1>{greeting}</h1>
    <ItemCount stock={10} initial={1} onAdd={onAdd}></ItemCount>
    <ItemList listaProductos={listaProductos}></ItemList>
    </div>
  );
}

export default ItemListContainer;