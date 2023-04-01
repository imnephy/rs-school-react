import { render, screen } from '@testing-library/react';
import About from '../pages/About';

describe('About', () => {
  beforeEach(() => {
    render(<About />);
  });
  it('should render 3 paragraph', async () => {
    const heading = screen.getByText(/about us/i);
    expect(heading).toBeInTheDocument();
  });
});
