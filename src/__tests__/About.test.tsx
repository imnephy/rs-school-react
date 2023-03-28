import { render, screen } from '@testing-library/react';
import About from '../pages/About';

describe('About', () => {
  beforeEach(() => {
    render(<About />);
  });
  it('should render 3 paragrath', async () => {
    const heading = screen.getByText(/about us/i);
    expect(heading).toBeInTheDocument();
  });
});
