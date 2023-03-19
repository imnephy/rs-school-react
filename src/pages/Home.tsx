import ProductService from '../API/ProductService';
import Search from '../components/search/Search';
import ProductsList from '../components/products/ProductsList';
import React from 'react';

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

type HomeState = {
  products: Product[];
};

class Home extends React.Component<React.PropsWithChildren, HomeState> {
  products!: Product[];
  constructor(props: React.PropsWithChildren<Product[]>) {
    super(props);
    this.state = {
      products: [],
    };
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }
  componentDidMount(): void {
    document.title = `Home | React-store`;
    this.fetchProducts();
  }
  async fetchProducts() {
    const posts = await ProductService.getAll();
    const products: Product[] = posts.products;
    this.products = products;
    const storageSearchValue = localStorage.getItem('searchValue');
    let filtredProducts;
    /* c8 ignore next 4 */
    if (storageSearchValue) {
      filtredProducts = this.products.filter((pr) => {
        return pr.title.toLowerCase().includes(storageSearchValue.toLowerCase());
      });
    } else {
      filtredProducts = this.products;
    }
    this.setState({
      products: filtredProducts,
    });
  }
  handleSearchChange(e: React.SyntheticEvent) {
    localStorage.setItem('searchValue', (e.target as HTMLInputElement).value);
    const filterProducts = this.products.filter((pr) => {
      return pr.title.toLowerCase().includes((e.target as HTMLInputElement).value.toLowerCase());
    });

    this.setState({
      products: filterProducts,
    });
  }
  render(): React.ReactNode {
    return (
      <div className="wrapper">
        <Search onInputChange={this.handleSearchChange} />
        <h2>Products</h2>
        <ProductsList products={this.state.products}></ProductsList>
      </div>
    );
  }
}
export default Home;
