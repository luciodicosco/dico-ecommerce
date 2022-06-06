import {useState} from 'react';

const ItemCount =({ initial, stock, onAdd }) => {

  const [count, setCount] = useState(initial = 0);

  const increment = () => {
    if (count < stock) setCount(count + 1);
  }

  const decrement = () => {
    if (count > 0) setCount(count - 1);
  };

  return (
    <>
        <p>{count} Unidades</p>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={() => onAdd(count)}>Agregar al carrito</button>
    </>
  );
}


export default ItemCount;



