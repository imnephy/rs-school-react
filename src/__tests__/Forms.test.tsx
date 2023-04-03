import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Forms from '../pages/Forms';
import { fillAllFieldsValid, Inputs } from './ProductForm.test';

describe('Forms', () => {
  let nameInput: HTMLInputElement;
  let dateInput: HTMLInputElement;
  let submitBtn: HTMLInputElement;
  let countrySelectElem: HTMLSelectElement;
  let maleRadioElem: HTMLInputElement;
  let femaleRadioElem: HTMLInputElement;
  let imageInput: HTMLInputElement;
  let check: HTMLInputElement;
  let allFields: Inputs;
  beforeEach(() => {
    render(<Forms />);
    nameInput = screen.getByPlaceholderText('Your Name');
    submitBtn = screen.getByText('Submit');
    imageInput = screen.getByTestId('image-input');
    dateInput = screen.getByTestId('date');
    countrySelectElem = screen.getByTestId('country-select');
    maleRadioElem = screen.getByLabelText('male');
    femaleRadioElem = screen.getByLabelText('female');
    check = screen.getByTestId('checkPersonal');
    allFields = {
      nameInput,
      dateInput,
      countrySelectElem,
      maleRadioElem,
      femaleRadioElem,
      imageInput,
      check,
      submitBtn,
    };
  });
  it('should render card', async () => {
    await fillAllFieldsValid(allFields);
    fireEvent.click(submitBtn);
    const names = await screen.findAllByText(/ivan/i);
    await waitFor(() => {
      expect(names.length).toBe(1);
    });
  });
});
