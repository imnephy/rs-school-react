import MyButton from '../../components/UI/button/MyButton';
import { Product } from '../../pages/Home';

interface IProduct {
  product: Product;
}

const ProductItem = (props: IProduct) => {
  const product = props.product;
  return (
    <div
      className="product__item"
      key={product.id}
      style={{ background: `url(${product.images[0]}) 0% 0% / cover` }}
    >
      <div className="product__item-info">
        <ul className="product__item-info__list">
          <li>Category: {product.category}</li>
          <li>Brand: {product.brand}</li>
          <li>Price: ${product.price}</li>
          <li>Discount: {product.discountPercentage}%</li>
          <li>Rating: {product.rating}</li>
          <li>Stock: {product.stock}</li>
        </ul>
      </div>
      <div className="product__item-btns">
        <MyButton>Add To Cart</MyButton>
        <MyButton>Details</MyButton>
      </div>
    </div>
  );
};

export default ProductItem;
