import { fireEvent, render, screen } from '@testing-library/react';
import Search from '../components/search/Search';

describe('Search', () => {
  beforeEach(() => render(<Search onInputChange={() => {}} />));

  render(<Search onInputChange={() => {}} />);
  const search = screen.getByPlaceholderText('Search...');
  const searchBtn = screen.getByRole('button');

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
