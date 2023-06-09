import 'whatwg-fetch';
import { getMangaSearch } from '@/API/ProductService';

describe('Product service', () => {
  it('should return data equal 20', async () => {
    const { data } = await getMangaSearch('');
    expect(data.length).toBe(20);
  });
});
