import 'whatwg-fetch';
import { screen, waitFor } from '@testing-library/react';
import Home from '../pages/Home';
import { renderWithProviders } from '@/utils/test-utils';

describe('Home', () => {
  beforeEach(() => {
    renderWithProviders(<Home />);
  });
  it('should render 3 products on initialization', async () => {
    await waitFor(() => expect(screen.findAllByTestId(/test-/i)));
    const items = await screen.findAllByText(/details/i);
    expect(items.length).toBe(20);
  });
});
