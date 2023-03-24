import { render, screen } from '@testing-library/react';
import NotFound from '../pages/NotFound';
import { BrowserRouter } from 'react-router-dom';
const MockNotFound = () => {
  return (
    <BrowserRouter>
      <NotFound />
    </BrowserRouter>
  );
};

describe('Not found', () => {
  beforeEach(() => {
    render(<MockNotFound />);
  });
  it('should render not found header', async () => {
    const heading = screen.getByText(/Page not found (.*)/i);
    expect(heading).toBeInTheDocument();
  });

  it('should not be after link click', async () => {
    const link = screen.getByText(/Go home/i);
    expect(link).toBeInTheDocument();
  });
});
