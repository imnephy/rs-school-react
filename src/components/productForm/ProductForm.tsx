import useProductForm from '@/hooks/useProductForm';

import MyButton from '@components/UI/button/MyButton';

import FileUploader from './FileUploader';
import UserInfo from './UserInfo';
import Personal from './Personal';

const ProductForm = () => {
  const {
    imageFile,
    imageUrl,
    invalidName,
    invalidDate,
    invalidCountry,
    invalidCheck,
    handleImageInput,
    handleSubmit,
    inputGenderMale,
    inputGenderFemale,
    inputFileRef,
    inputDate,
    inputCountry,
    inputName,
    inputCheckbox,
    domLoaded,
  } = useProductForm();

  return (
    <>
      {domLoaded && (
        <div className="form">
          <h2>Fill the form below</h2>
          <form className="form-inputs" onSubmit={handleSubmit}>
            <UserInfo
              nameRef={inputName}
              dateRef={inputDate}
              countryRef={inputCountry}
              maleRef={inputGenderMale}
              femaleRef={inputGenderFemale}
              isInvalidName={invalidName}
              isInvalidDate={invalidDate}
              isInvalidCountry={invalidCountry}
            />
            <FileUploader
              imageFile={imageFile}
              fileRef={inputFileRef}
              onInput={handleImageInput}
              imageUrl={imageUrl}
            />
            <Personal checkboxRef={inputCheckbox} isInvalidCheck={invalidCheck} />
            <MyButton>Submit</MyButton>
          </form>
        </div>
      )}
    </>
  );
};

export default ProductForm;
