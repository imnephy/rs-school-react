import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { IProductCard } from '../pages/Forms';
import ProductForm from '../components/productForm/ProductForm';
import userEvent from '@testing-library/user-event';

export interface Inputs {
  nameInput: HTMLInputElement;
  dateInput: HTMLInputElement;
  submitBtn: HTMLInputElement;
  countrySelectElem: HTMLSelectElement;
  maleRadioElem: HTMLInputElement;
  femaleRadioElem: HTMLInputElement;
  imageInput: HTMLInputElement;
  check: HTMLInputElement;
}

export const fillAllFieldsValid = async (allFields: Inputs): Promise<IProductCard> => {
  fireEvent.change(allFields.nameInput, { target: { value: 'Ivan' } });
  fireEvent.change(allFields.dateInput, { target: { value: '2023-04-15' } });
  fireEvent.change(allFields.countrySelectElem, { target: { value: 'Russia' } });
  fireEvent.click(allFields.femaleRadioElem);
  const file = new File(['hello'], 'hello.png', { type: 'image/png' });
  await waitFor(() => userEvent.upload(allFields.imageInput, file));
  fireEvent.click(allFields.check);
  return {
    firstName: 'Ivan',
    date: '2023-04-15',
    country: 'Russia',
    gender: 'female',
    image: 'hello.png',
    checkPersonal: true,
  };
};

const onAddCardIntoList = (): void => {};

describe('ProductForm', () => {
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
    render(<ProductForm onAddCard={onAddCardIntoList} />);
    nameInput = screen.getByPlaceholderText('Your Name');
    submitBtn = screen.getByText('Submit');
    dateInput = screen.getByTestId('date');
    countrySelectElem = screen.getByTestId('country-select');
    maleRadioElem = screen.getByLabelText('male');
    femaleRadioElem = screen.getByLabelText('female');
    imageInput = screen.getByTestId('image-input');
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

  it('should render heading in form element', async () => {
    const form = screen.getByText('Fill the form below');
    expect(form).toBeInTheDocument();
  });

  describe('Name input', () => {
    it('should show error message in name input', async () => {
      fireEvent.change(nameInput, { target: { value: 'van' } });
      fireEvent.click(submitBtn);
      const errorElem = await screen.findByText(/Min Length is 4/i);
      expect(errorElem).toBeInTheDocument();
    });

    it('should show error message when number in name input', async () => {
      fireEvent.change(nameInput, { target: { value: '654654' } });
      fireEvent.click(submitBtn);
      const errorElem = await screen.findByText(/invalid input/i);
      expect(errorElem).toBeInTheDocument();
    });

    it("shouldn't show error message in name input", async () => {
      fireEvent.change(nameInput, { target: { value: 'Ivan' } });
      fireEvent.click(submitBtn);
      const errorElem = screen.queryByText(/invalid input/i);
      expect(errorElem).toBe(null);
    });
  });

  describe('date input', () => {
    it('should show error message when date was not chosen', async () => {
      fireEvent.click(submitBtn);
      const errorElem = await screen.findByText(/Country is required/i);
      expect(errorElem).toBeInTheDocument();
    });

    it('should show error message when date was not chosen', async () => {
      fireEvent.click(submitBtn);
      const errorElem = await screen.findByText(/Country is required/i);
      expect(errorElem).toBeInTheDocument();
    });

    it("shouldn't show error message when date invalid", async () => {
      fireEvent.change(dateInput, { target: { value: '2023-04-15' } });
      fireEvent.click(submitBtn);
      const errorElem = screen.queryByText(/Country is required/i);
      expect(errorElem).not.toBeInTheDocument();
    });
  });
  describe('country input', () => {
    it("shouldn't show error message when country was chosen", async () => {
      fireEvent.change(countrySelectElem, { target: { value: 'Russia' } });
      fireEvent.click(submitBtn);
      const errorElem = screen.queryByText(/Country is required/i);
      expect(errorElem).toBe(null);
    });

    it("should show error message when country wasn't chosen", async () => {
      fireEvent.click(submitBtn);
      const errorElem = await screen.findByText(/Country is required/i);
      expect(errorElem).toBeInTheDocument();
    });
  });

  describe('gender input', () => {
    it('nothing checked by default', async () => {
      expect(maleRadioElem.checked).toBeFalsy();
      expect(femaleRadioElem.checked).toBeFalsy();
    });

    it("after click on female, male shouldn't be checked", async () => {
      fireEvent.click(femaleRadioElem);
      expect(femaleRadioElem.checked).toBeTruthy();
      expect(maleRadioElem.checked).toBeFalsy();
    });
  });

  describe('file upload', () => {
    it('file upload check', async () => {
      const file = new File(['hello'], 'hello.png', { type: 'image/png' });

      await waitFor(() => userEvent.upload(imageInput, file));

      expect(imageInput.files![0]).toStrictEqual(file);
      expect(imageInput.files![0]).toStrictEqual(file);
      expect(imageInput.files!.item(0)).toStrictEqual(file);
      expect(imageInput.files).toHaveLength(1);
    });
  });

  it("shouldn't show error message if not checked", async () => {
    fireEvent.click(check);
    expect(check).toBeInTheDocument();
    const errorMessage = screen.queryByText(/This is required/i);
    expect(errorMessage).not.toBeInTheDocument();
  });

  it('should clear form if all fields valid', async () => {
    const values: IProductCard = await fillAllFieldsValid(allFields);
    fireEvent.click(submitBtn);
    await waitFor(() => {
      expect(nameInput.value).toBe('');
      expect(dateInput.value).not.toBe(values.date);
      expect(countrySelectElem.value).not.toBe(values.country);
      expect(imageInput.files![0]).not.toBe(values.image);
      expect(check.checked).toBeFalsy();
    });
  });
});
