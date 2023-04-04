import axios from 'axios';

export default class ProductService {
  static async getAll() {
    // try {
    const { data } = await axios.get('https://dummyjson.com/products?limit=100');
    return data;
    // } catch (error) {
    //   console.log(error);
    // }
  }
}
