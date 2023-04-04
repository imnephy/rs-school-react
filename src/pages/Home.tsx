import ProductService from '../API/ProductService';
import Search from '../components/search/Search';
import ProductsList from '../components/products/ProductsList';
import { useEffect, useState } from 'react';

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

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  useEffect(() => {
    document.title = `Home | Online-store`;
    const fetchProducts = async () => {
      const posts = await ProductService.getAll();
      const products: Product[] = posts.products;
      setProducts(products);
      setAllProducts(products);
      const searchVal = localStorage.getItem('searchValue');
      if (searchVal) {
        const filtredProducts = products.filter((pr) => {
          return pr.title.toLowerCase().includes(searchVal.toLowerCase());
        });
        setProducts(filtredProducts);
      }
    };
    fetchProducts();
  }, []);

  const handleSearchBtn = (value: string) => {
    const filtredProducts = allProducts.filter((pr) => {
      return pr.title.toLowerCase().includes(value.toLowerCase());
    });
    setProducts(filtredProducts);
  };
  return (
    <div className="wrapper">
      <Search handleSearchBtn={handleSearchBtn} />
      <h2>Products</h2>
      <ProductsList products={products}></ProductsList>
    </div>
  );
};

export default Home;
