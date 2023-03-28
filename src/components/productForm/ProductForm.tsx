import MyButton from '../UI/button/MyButton';
import MyInput from '../UI/input/MyInput';
import MyRadioButton from '../UI/radioButton/MyRadioButton';
import defaultPic from '../../assets/default.png';
import React, { useRef, useState } from 'react';
import { IProductCard } from '../../pages/Forms';

interface IFormInputProps {
  onAddCard: (newCard: IProductCard) => void;
}
const COUNTRIES = ['Russia', 'Ukraine', 'Belarus', 'Poland', 'China'];

const ProductForm = (props: IFormInputProps) => {
  const inputName: React.MutableRefObject<HTMLInputElement | null> = useRef(null);
  const inputDate: React.MutableRefObject<HTMLInputElement | null> = useRef(null);
  const inputCountry: React.MutableRefObject<HTMLSelectElement | null> = useRef(null);
  const inputGenderMale: React.MutableRefObject<HTMLInputElement | null> = useRef(null);
  const inputGenderFemale: React.MutableRefObject<HTMLInputElement | null> = useRef(null);
  const inputFileRef: React.MutableRefObject<HTMLInputElement | null> = useRef(null);
  const inputCheckbox: React.MutableRefObject<HTMLInputElement | null> = useRef(null);
  const defaultFile = new File([defaultPic], 'default.png', { type: 'image/png' });
  const defaultURL = defaultPic;
  const [validInputs, setValidInputs] = useState({
    invalidName: false,
    invalidDate: false,
    invalidCountry: false,
    invalidCheck: false,
    imageFile: defaultFile as File | null,
    imageUrl: null as string | null,
  });
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const name = inputName.current?.value as string;
    const date = inputDate.current?.value as string;
    const country = inputCountry.current?.value as string;
    const gender = inputGenderMale.current?.checked ? 'male' : 'femail';

    const image = validInputs.imageUrl ?? defaultURL;

    const check = inputCheckbox.current?.checked as boolean;
    const card: IProductCard = { name, date, country, gender, image, check };
    if (checkValidation(card)) {
      return;
    }
    props.onAddCard(card);
    resetForm();
  };
  const resetForm = () => {
    setValidInputs({
      ...validInputs,
      imageUrl: null,
      imageFile: defaultFile,
    });
    (inputName.current as HTMLInputElement).value = '';
    (inputDate.current as HTMLInputElement).value = '';
    (inputCountry.current as HTMLSelectElement).selectedIndex = 0;
    (inputGenderMale.current as HTMLInputElement).checked = true;
    (inputCheckbox.current as HTMLInputElement).checked = false;
  };
  const checkValidation = (card: IProductCard) => {
    const { name, date, country, check } = card;
    let invalidName = false;
    let invalidDate = false;
    let invalidCountry = false;
    let invalidCheck = false;
    if (!name || !name.match(/^[a-zA-Z]{4,}$/)) {
      invalidName = true;
    }

    if (!date) {
      invalidDate = true;
    }
    if (!country || Number(country) === 1) {
      invalidCountry = true;
    }
    if (!check) {
      invalidCheck = true;
    }
    setValidInputs({
      ...validInputs,
      invalidName,
      invalidDate,
      invalidCountry,
      invalidCheck,
    });

    if (invalidName || invalidDate || invalidCountry || invalidCheck) {
      return true;
    }
  };
  const handleImageInput = () => {
    const imageFile = inputFileRef.current?.files && inputFileRef.current.files[0];
    if (imageFile !== undefined) {
      setValidInputs({
        ...validInputs,
        imageUrl: URL.createObjectURL?.(imageFile as File),
        imageFile,
      });
    }
  };
  const { imageFile, imageUrl, invalidName, invalidDate, invalidCountry, invalidCheck } =
    validInputs;
  return (
    <div className="form">
      <h2>Fill the form below</h2>
      <form className="form-inputs" onSubmit={handleSubmit}>
        <MyInput type="text" placeholder="Your Name" ref={inputName} />
        {invalidName && <span>name length should be {'>'} 3, latin characters</span>}
        <div className="form-inputs__short">
          <MyInput role="date" type="date" ref={inputDate} />
          {invalidDate && <span>invalid date</span>}
          <select data-testid="country-select" defaultValue="1" ref={inputCountry}>
            <option value="1" disabled>
              Country
            </option>
            {COUNTRIES.map((country, i) => (
              <option key={i + 2} value={country}>
                {country}
              </option>
            ))}
            ;
          </select>
          {invalidCountry && <span>Choose country</span>}
        </div>
        <div className="form-inputs__gender-swither">
          <MyRadioButton
            name="gender"
            id="male-gender"
            defaultChecked
            text="male"
            ref={inputGenderMale}
          />
          <MyRadioButton name="gender" id="female-gender" text="female" ref={inputGenderFemale} />
        </div>
        <div className="file-upload">
          <label htmlFor="image-input">Choose image...</label>
          {imageFile && (
            <span style={{ marginLeft: '15px', color: 'white' }}>{imageFile.name}</span>
          )}
          <input
            data-testid="image-input"
            type="file"
            accept="image/jpeg,image/png,image/gif"
            id="image-input"
            onInput={handleImageInput}
            ref={inputFileRef}
          />
          <div className="file-upload__image-container">
            {imageUrl && (
              <img
                id="upload-image"
                src={URL.createObjectURL(imageFile as File)}
                alt="Image Preview"
              />
            )}
          </div>
        </div>
        <label htmlFor="checkPersonal">
          <input type="checkbox" name="checkPersonal" id="checkPersonal" ref={inputCheckbox} />I
          consent to my personal data
        </label>
        {invalidCheck && <span>You should check</span>}
        <MyButton>Submit</MyButton>
      </form>
    </div>
  );
};

export default ProductForm;
