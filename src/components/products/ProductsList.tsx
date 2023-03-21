import { Product } from '../../pages/Home';
import ProductItem from './ProductItem';

interface IProductsList {
  products: Product[];
}

const ProductsList = (props: React.PropsWithChildren<IProductsList>): JSX.Element => {
  const productsList = props.products;

  return (
    <div className="products__list">
      {productsList.map((product, index) => {
        return <ProductItem data-testid={`test-${index}`} key={product.id} product={product} />;
      })}
    </div>
  );
};

export default ProductsList;
