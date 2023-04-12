import { getMangaSearch } from '@/API/ProductService';

describe('Product service', () => {
  it('should return data', async () => {
    const { data } = await getMangaSearch('');
    expect(data.length).toBe(3);
  });
});
