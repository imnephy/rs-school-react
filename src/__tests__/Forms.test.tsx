import { fireEvent, render, screen } from '@testing-library/react';
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
    dateInput = screen.getByRole('date');
    countrySelectElem = screen.getByTestId('country-select');
    maleRadioElem = screen.getByLabelText('male');
    femaleRadioElem = screen.getByLabelText('female');
    imageInput = screen.getByTestId('image-input');
    check = screen.getByLabelText(/i consent to my personal data/i);
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
  it('should render 2 card with same name', async () => {
    await fillAllFieldsValid(allFields);
    fireEvent.click(submitBtn);
    await fillAllFieldsValid(allFields);
    fireEvent.click(submitBtn);
    screen.debug();
    const names = screen.getAllByText(/ivan/i);
    expect(names.length).toBe(2);
  });
});
