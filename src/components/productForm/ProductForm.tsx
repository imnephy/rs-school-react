import MyButton from '../UI/button/MyButton';
import MyInput from '../UI/input/MyInput';
import MyRadioButton from '../UI/radioButton/MyRadioButton';
import defaultPic from '../../assets/default.png';
import React from 'react';
import { IProductCard } from '../../pages/Forms';

interface IFormInputState {
  imageUrl?: string;
  imageFile: File | null;
  invalidName?: boolean;
  invalidDate?: boolean;
  invalidCountry?: boolean;
  invalidCheck?: boolean;
}
interface IFormInputProps {
  onAddCard: (newCard: IProductCard) => void;
}
const COUNTRIES = ['Russia', 'Ukraine', 'Belarus', 'Poland', 'China'];
class ProductForm extends React.Component<
  React.PropsWithChildren<IFormInputProps>,
  IFormInputState
> {
  defaultFile: File;
  inputName: React.RefObject<HTMLInputElement> = React.createRef();
  inputDate: React.RefObject<HTMLInputElement> = React.createRef();
  inputCountry: React.RefObject<HTMLSelectElement> = React.createRef();
  inputGenderMale: React.RefObject<HTMLInputElement> = React.createRef();
  inputGenderFemale: React.RefObject<HTMLInputElement> = React.createRef();
  inputFileRef: React.RefObject<HTMLInputElement> = React.createRef();
  inputCheckbox: React.RefObject<HTMLInputElement> = React.createRef();
  defaultURL: string;
  initialState: { imageFile: File };
  constructor(props: React.PropsWithChildren<IFormInputProps>) {
    super(props);
    this.defaultFile = new File([defaultPic], 'default.png', { type: 'image/png' });
    this.defaultURL = defaultPic;
    this.initialState = { imageFile: this.defaultFile };
    this.state = {
      imageFile: this.defaultFile,
    };
  }
  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const name = this.inputName.current?.value as string;
    const date = this.inputDate.current?.value as string;
    const country = this.inputCountry.current?.value as string;
    const gender = this.inputGenderMale.current?.checked ? 'male' : 'femail';

    const image = this.state.imageUrl ? this.state.imageUrl : this.defaultURL;

    const check = this.inputCheckbox.current?.checked as boolean;
    const card: IProductCard = { name, date, country, gender, image, check };
    if (this.checkValidation(card)) {
      return;
    }
    this.props.onAddCard(card);
    this.resetForm();
  };
  resetForm() {
    this.setState({
      imageUrl: undefined,
      imageFile: this.defaultFile,
    });
    (this.inputName.current as HTMLInputElement).value = '';
    (this.inputDate.current as HTMLInputElement).value = '';
    (this.inputCountry.current as HTMLSelectElement).selectedIndex = 0;
    (this.inputGenderMale.current as HTMLInputElement).checked = true;
    (this.inputCheckbox.current as HTMLInputElement).checked = false;
  }
  checkValidation(card: IProductCard) {
    const { name, date, country, check } = card;
    let invalidName, invalidDate, invalidCountry, invalidCheck;
    if (!name || !name.match(/^[a-zA-Z]{4,}$/)) {
      invalidName = true;
    }

    if (
      !date ||
      !date.match(/(20[0-1][0-9]|202[0-3])-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/)
    ) {
      invalidDate = true;
    }
    if (!country || Number(country) === 1) {
      invalidCountry = true;
    }
    if (!check) {
      invalidCheck = true;
    }
    this.setState({
      invalidName,
      invalidDate,
      invalidCountry,
      invalidCheck,
    });

    if (invalidName || invalidDate || invalidCountry || invalidCheck) {
      return true;
    }
  }
  handleImageInput = () => {
    const imageFile = this.inputFileRef.current?.files && this.inputFileRef.current.files[0];
    if (imageFile !== undefined) {
      this.setState({
        imageUrl: URL.createObjectURL?.(imageFile as File),
        imageFile,
      });
    }
  };
  render(): React.ReactNode {
    const { imageFile, imageUrl, invalidName, invalidDate, invalidCountry, invalidCheck } =
      this.state;
    return (
      <div className="form">
        <h2>Fill the form below</h2>
        <form className="form-inputs" onSubmit={this.handleSubmit}>
          <MyInput type="text" placeholder="Your Name" ref={this.inputName} />
          {invalidName && <span>name length should be {'>'} 3, latin characters</span>}
          <div className="form-inputs__short">
            <MyInput role="date" type="date" ref={this.inputDate} />
            {invalidDate && <span>invalid date</span>}
            <select data-testid="country-select" defaultValue="1" ref={this.inputCountry}>
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
              ref={this.inputGenderMale}
            />
            <MyRadioButton
              name="gender"
              id="female-gender"
              text="female"
              ref={this.inputGenderFemale}
            />
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
              onInput={this.handleImageInput}
              ref={this.inputFileRef}
            />
            <div className="file-upload__image-container">
              {imageUrl && (
                <img
                  id="upload-image"
                  src={URL.createObjectURL(this.state.imageFile as File)}
                  alt="Image Preview"
                />
              )}
            </div>
          </div>
          <label htmlFor="checkPersonal">
            <input
              type="checkbox"
              name="checkPersonal"
              id="checkPersonal"
              ref={this.inputCheckbox}
            />
            I consent to my personal data
          </label>
          {invalidCheck && <span>You should check</span>}
          <MyButton>Submit</MyButton>
        </form>
      </div>
    );
  }
}

export default ProductForm;
