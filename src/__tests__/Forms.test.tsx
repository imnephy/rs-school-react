import 'whatwg-fetch';
import { fireEvent, screen } from '@testing-library/react';
import Forms from '../pages/Forms';
import { fillAllFieldsValid } from './ProductForm.test';
import { renderWithProviders } from '@/utils/test-utils';

describe('Forms', () => {
  let submitBtn: HTMLInputElement;
  beforeEach(() => {
    renderWithProviders(<Forms />);
    submitBtn = screen.getByText('Submit');
  });
  it('should render 2 card with same name', async () => {
    await fillAllFieldsValid();
    fireEvent.click(submitBtn);
    await fillAllFieldsValid();
    fireEvent.click(submitBtn);
    const names = screen.getAllByText(/ivan/i);
    expect(names.length).toBe(2);
  });
});
