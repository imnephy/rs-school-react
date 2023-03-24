import ProductCard from '../components/productForm/ProductCard/ProductCard';
import React from 'react';
import ProductForm from '../components/productForm/ProductForm';

type ProductState = {
  products: IProductCard[];
};

export interface IProductCard {
  name: string;
  country: string;
  gender: string;
  image: string;
  date: string;
  check: boolean;
}

class Forms extends React.Component<React.PropsWithChildren, ProductState> {
  constructor(props: React.PropsWithChildren) {
    super(props);
    this.state = {
      products: [],
    };
    this.onAddCard = this.onAddCard.bind(this);
  }

  onAddCard(newProduct: IProductCard) {
    const products = this.state.products;
    this.setState({
      products: [...products, newProduct],
    });
  }

  render(): React.ReactNode {
    const products = this.state.products;
    return (
      <>
        <ProductForm onAddCard={this.onAddCard} />
        <h2>Users:</h2>
        <div className="products__list">
          {products.map((product, i) => {
            return <ProductCard key={i} {...product} />;
          })}
        </div>
      </>
    );
  }
}

export default Forms;
