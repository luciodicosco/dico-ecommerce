import React,{useState, useEffect} from 'react';
import customFetch from './customFetch';
import ItemCount from './ItemCount';
import ItemList from './ItemList';

const ItemListContainer = ({greeting}) => {

const [listaProductos, setListaProductos] = useState([])
const productos = [
  {name: "Nike Air Max Dawn", description: "Las Zapatillas Nike Air Max Dawn son ideales para tus tardes de running y tu vida diaria. Posee una cámara de aire con una estética llamativa y visible que te dará una mejor amortiguación en cada paso y mejor tracción cuando corres o caminas. Super cómodas a primera vista y a primera pisada. Con una estética cuidada y clásica que destacará cualquier look y mejorará tu confort en un 100%", cost: 26499, image: "https://www.moov.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw5ecbea5c/products/NI_DH4656-001/NI_DH4656-001-1.JPG"},
  {name: "Nike Air Force 1 07 Lv8", description: "Las zapatillas Nike Air Force 1 ´07 Lv8 forman parte del equipo ficticio de atletismo . Traen la inspiración de los 70 a los elementos básicos de la moda urbana. Están combinadas con la diversión del estilo retro del básquetbol ofreciendo un remaster de lo que ya conocés: superposiciones cosidas, colores llamativos, el logo Swoosh en grande y combinaciones en gamuza para dar mayor resalte y sensación de suavidad. El toque final se lo da el parche letterman del talón que suman un estilo universitario. Este es tu calzado favorito para dentro y fuera de la cancha sin dudas ¿no?", cost: 22999, image: "https://www.moov.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwbc424bee/products/NI_DH7568-002/NI_DH7568-002-1.JPG"},
  {name: "Nike Air Max 90 Premium", description: "Las Zapatillas Nike Air Max 90 Premium son un ícono reversionado para traerte un estilo inigualable. Sus cadenas colgantes son extraíbles y su capellada de terciopelo te da un look difícil de superar. La amortiguación Max Air ofrece el soporte que necesitas para atravesar tu día y la suela tipo waffle de goma sigue con una tradición de antaño de Nike. La entresuela de espuma mejora tus pisadas para traerte un calzado que se adapta perfectamente a tu vida urbana.", cost: 28999, image: "https://www.moov.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw688143fa/products/NI_DO2194-001/NI_DO2194-001-1.JPG"},
  {name: "Nike Air Max 90 Se", description: "Las zapatillas Nike Air Max 90 SE son la nueva generación del ícono. Diseñada con líneas impecables, versátiles y atemporales, mantienen la misma suela icónica, revestimientos cosidos y detalles clásicos que iniciaron la revolución. No es una nueva versión, es un recordatorio.", cost: 25999, image: "https://www.moov.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwef4657a3/products/NI_DD0384-800/NI_DD0384-800-1.JPG"},
  {name: "Adidas Multix", description: "Para tus días de relax y para acompañar tus looks informales con todo el estilo. Las Zapatillas adidas Multix se inspiran en los clásicos estilos deportivos de adidas y se readaptan a tu rutina diaria. Las tres rayas a los costados te dan el toque de originalidad que buscabas y el diseño liviano te permite combinarlas con todas las prendas de tu ropero.", cost: 16999, image: "https://www.moov.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw67a31f87/products/AD_FZ3438/AD_FZ3438-1.JPG"},
  {name: "Adidas Superstar", description: "Las Zapatillas adidas Superstar, con sus tres rayas a cuadros, se inspiran en la capital ingles con un diseño de HER Studio London, que imprime su estilo en un clásico de adidas. El exterior en cuero es durable y fácil de limpiar y la suela de caucho aporta tracción a tus pisadas para que disfrutes de tu día a día con la máxima comodidad posible.", cost: 22999, image: "https://www.moov.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwee815d11/products/AD_H04077/AD_H04077-1.JPG"}
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