import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import customFetch from "./customFetch";
import ItemDetail from "./ItemDetail";
const {productos} = require("./ItemListContainer");

const ItemDetailContainer = () => {
    const [listaProductos, setListaProductos] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        customFetch(2000, productos[1])
        .then(result => setListaProductos(result))
        .catch(err => console.log(err))
    }, []);
    
    return (
        <ItemDetail productos={listaProductos}></ItemDetail>
    );
}

export default ItemDetailContainer;

