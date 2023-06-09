import 'whatwg-fetch';
import { fireEvent, screen, waitFor } from '@testing-library/react';
import Home from '../pages/Home';
import { renderWithProviders } from '@/utils/test-utils';
import '@testing-library/jest-dom';
describe('Home', () => {
  beforeEach(() => {
    renderWithProviders(<Home />);
  });
  it('should render 20 products per page', async () => {
    await waitFor(() => expect(screen.findAllByTestId(/test-/i)));
    const items = await screen.findAllByText(/details/i);
    expect(items.length).toBe(20);
  });
  it('should render 20 products per page', async () => {
    await waitFor(() => expect(screen.findAllByTestId(/test-/i)));
    const search = await screen.findByPlaceholderText(/search.../i);
    const searchBtn = screen.getByText(/search/i);
    fireEvent.change(search, { target: { value: 'chainsaw man' } });
    fireEvent.click(searchBtn);
    const items = await screen.findAllByText(/details/i);
    expect(items.length).toBe(20);
  });
});
