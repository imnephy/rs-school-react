import ProductCard from '@/components/productForm/ProductCard/ProductCard';
import { useEffect } from 'react';
import ProductForm from '@/components/productForm/ProductForm';
import projectTitle from '@/utils/projectTitle';
import { selectFormCards } from '@/features/form/formCardSlice';
import { useAppSelector } from '@/hooks/redux';

export interface IProductCard {
  name: string;
  country: string;
  gender: string;
  image: string;
  date: string;
  check: boolean;
}

const Forms = () => {
  const formCards = useAppSelector(selectFormCards) as IProductCard[];
  useEffect(() => {
    document.title = `Forms | ${projectTitle}`;
  }, []);

  return (
    <div className="wrapper">
      <ProductForm />
      <h2>Users:</h2>
      <div className="products__list">
        {formCards.map((product, i) => {
          return <ProductCard key={i} {...product} />;
        })}
      </div>
    </div>
  );
};

export default Forms;
