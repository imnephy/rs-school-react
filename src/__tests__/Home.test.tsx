import { render, screen, waitFor } from '@testing-library/react';
import Home from '../pages/Home';

describe('Home', () => {
  beforeEach(() => {
    render(<Home />);
  });
  it('should render 3 products on initialization', async () => {
    await waitFor(() => expect(screen.findAllByTestId(/test-/i)));
    const items = screen.getAllByText(/details/i);
    expect(items.length).toBe(3);
  });
});
