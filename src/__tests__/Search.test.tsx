import 'whatwg-fetch';
import { fireEvent, screen } from '@testing-library/react';
import Search from '../components/search/Search';
import { renderWithProviders } from '@/utils/test-utils';

describe('Search', () => {
  let search: HTMLInputElement;
  let searchBtn: HTMLButtonElement;
  beforeEach(() => {
    renderWithProviders(<Search handleSearchBtn={() => {}} />);
    search = screen.getByPlaceholderText('Search...');
    searchBtn = screen.getByRole('button');
  });

  it('should render search elem', async () => {
    expect(search).toBeInTheDocument();
  });

  it('should change value inside', async () => {
    fireEvent.change(search, { target: { value: 'iphone 9' } });
    expect((search as HTMLInputElement).value).toBe('iphone 9');
  });

  it('should not default submit', async () => {
    fireEvent.change(search, { target: { value: 'iphone 9' } });
    fireEvent.click(searchBtn);
    expect((search as HTMLInputElement).value).toBe('iphone 9');
  });
});
