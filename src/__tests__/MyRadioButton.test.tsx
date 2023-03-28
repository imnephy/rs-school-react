import { render, screen } from '@testing-library/react';
import RadioButton from '../components/UI/radioButton/MyRadioButton';

describe('RadioButton', () => {
  render(<RadioButton text="radio-text" />);
  const radioBtn = screen.getByRole('radio');

  it('should render radio elem', async () => {
    expect(radioBtn).toBeInTheDocument();
  });
});
