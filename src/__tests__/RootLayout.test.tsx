import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import RootLayout from '../layouts/RootLayout';

describe('Root layout', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <RootLayout />
      </BrowserRouter>
    );
  });
  it('heading', async () => {
    const heading = screen.getByText(/online-store/i);
    expect(heading).toBeInTheDocument();
  });
});
