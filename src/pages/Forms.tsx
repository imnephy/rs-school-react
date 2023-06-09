import { useEffect } from 'react';

import { useAppSelector } from '@/hooks/redux';
import { selectFormCards } from '@/features/form/formCardSlice';

import ProductForm from '@/components/productForm/ProductForm';
import ProductFormCard from '@/components/productForm/ProductFormCard';

import { PROJECT_TITLE } from '@/utils/variables';

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
    document.title = `Forms | ${PROJECT_TITLE}`;
  }, []);

  return (
    <div className="wrapper">
      <ProductForm />
      <h2>Users:</h2>
      <div className="products__list">
        {formCards.map((product, i) => {
          return <ProductFormCard key={i} {...product} />;
        })}
      </div>
    </div>
  );
};

export default Forms;
