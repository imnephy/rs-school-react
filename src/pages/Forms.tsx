import MyInput from '../components/UI/input/MyInput';
import React from 'react';
import MyButton from '../components/UI/button/MyButton';
import defaultPic from '../assets/defaultPic.jpg';
// interface IFormInputProps {
//   onChangeProduct: (newProduct: IFormCard) => void;
// }

interface IFormInputState {
  imageUrl?: string;
  imageFile: File | null;
  errorMassege?: boolean;
  spanPriceValid?: boolean;
  spanTitleValid?: boolean;
  spanDescriptionValid?: boolean;
  spanDateValid?: boolean;
}

class Forms extends React.Component<React.PropsWithChildren, IFormInputState> {
  defaultFile: File;
  inputFileRef: React.RefObject<HTMLInputElement> = React.createRef();
  constructor(props: React.PropsWithChildren) {
    super(props);
    this.defaultFile = new File([defaultPic], 'default.png', { type: 'image/png' });

    this.state = {
      imageFile: this.defaultFile,
    };
  }
  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  handleImageInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        if (this.inputFileRef.current !== null) {
          const imageFile = this.inputFileRef.current.files && this.inputFileRef.current.files[0];
          if (imageFile !== null) {
            this.setState({
              imageUrl: URL.createObjectURL(imageFile),
              imageFile,
            });
          }
        }
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };
  // URL.createObjectURL(this.yourRef.current!.files![0])
  render(): React.ReactNode {
    const { imageFile } = this.state;
    return (
      <div className="form">
        <h2>Fill the form below</h2>
        <form className="form-inputs" onSubmit={this.handleSubmit}>
          <MyInput type="text" placeholder="Name Surname" />
          <div className="form-inputs__short">
            <MyInput type="date" />
            <select defaultValue="1">
              <option value="1" disabled>
                Country
              </option>
              <option value="2">Russia</option>
              <option value="3">Ukraine</option>
              <option value="4">Belarus</option>
              <option value="5">Poland</option>
              <option value="6">China</option>
            </select>
          </div>
          <div className="form-inputs__sex-swither">
            <label>
              <input type="radio" name="male" id="male-sex" />
              male
            </label>
            <label>
              <input type="radio" name="male" id="female-sex" />
              female
            </label>
          </div>
          <div className="file-upload">
            <label htmlFor="image-input">Image:</label>
            <input
              type="file"
              accept="image/jpeg,image/png,image/gif"
              id="image-input"
              onInput={this.handleImageInput}
              ref={this.inputFileRef}
            />
            {imageFile && <span>{imageFile.name}</span>}
          </div>
          <label>
            <input type="checkbox" name="ga" id="" />
            {'I consent to my personal data'}
          </label>
          <MyButton>Submit</MyButton>
        </form>
        <h2>Result:</h2>
        <div></div>
      </div>
    );
  }
}

export default Forms;
