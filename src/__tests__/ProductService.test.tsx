import ProductService from '../API/ProductService';

describe('Product service', () => {
  it('should return data', async () => {
    const data = await ProductService.getAll();
    expect(data.products.length).toBe(3);
  });
});
