import ProductCard from '@/components/productForm/ProductCard/ProductCard';
import { useEffect, useState } from 'react';
import ProductForm from '@/components/productForm/ProductForm';
import projectTitle from '@/utils/projectTitle';

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
    document.title = `Forms | ${projectTitle}`;
  }, []);
  const onAddCard = (newProduct: IProductCard) => {
    setProducts([...products, newProduct]);
  };
  return (
    <div className="wrapper">
      <ProductForm onAddCard={onAddCard} />
      <h2>Users:</h2>
      <div className="products__list">
        {products.map((product, i) => {
          return <ProductCard key={i} {...product} />;
        })}
      </div>
    </div>
  );
};

export default Forms;
