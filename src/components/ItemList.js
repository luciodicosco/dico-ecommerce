import Item from './Item';
import { ProductsContainer } from "./styledComponents";

const ItemList = ({items}) => {
  return (
    <ProductsContainer>
        {
            items.length > 0
            ? items.map(item => <Item title={item.name} price={item.cost} pictureUrl={item.image})
            : <p>Cargando..</p>
        }
    </ProductsContainer>
  );
}

export default ItemList;