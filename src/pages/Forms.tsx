import ProductCard from '../components/productForm/ProductCard/ProductCard';
import { useEffect, useState } from 'react';
import ProductForm from '../components/productForm/ProductForm';

export interface IProductCard {
  name: string;
  country: string;
  gender: string;
  image: string;
  date: string;
  check: boolean;
}

const Forms = () => {
  const [products, setProducts] = useState<IProductCard[]>([]);
  useEffect(() => {
    document.title = `Forms | Online-store`;
  }, []);
  const onAddCard = (newProduct: IProductCard) => {
    setProducts([...products, newProduct]);
  };
  return (
    <>
      <ProductForm onAddCard={onAddCard} />
      <h2>Users:</h2>
      <div className="products__list">
        {products.map((product, i) => {
          return <ProductCard key={i} {...product} />;
        })}
      </div>
    </>
  );
};

export default Forms;
