import MyButton from '../UI/button/MyButton';
import { Input } from '../UI/input/MyInput';
import { Radio } from '../UI/radioButton/MyRadioButton';
import defaultPic from '../../assets/default.png';
import { IProductCard } from '../../pages/Forms';
import { SubmitHandler, useForm } from 'react-hook-form';

interface IFormInputProps {
  onAddCard: (newCard: IProductCard) => void;
}
const COUNTRIES = ['Russia', 'Ukraine', 'Belarus', 'Poland', 'China'];

const ProductForm = (props: IFormInputProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IProductCard>({
    defaultValues: {
      firstName: '',
      country: '',
      gender: '',
      image: undefined,
      date: undefined,
      checkPersonal: false,
    },
  });

  const onSubmit: SubmitHandler<IProductCard> = (data) => {
    // const message = confirm('Are you want to create new Card?');
    // if (message) {
    handleImageInput(data);
    props.onAddCard(data);
    reset();
    // }
  };

  // image input handler
  const handleImageInput = (data: IProductCard) => {
    const imageFile = data.image[0];
    if (imageFile !== undefined) {
      const url = URL.createObjectURL?.(imageFile as File);
      data.image = url;
    } else {
      data.image = defaultPic;
    }
  };

  return (
    <div className="form">
      <h2>Fill the form below</h2>
      <form className="form-inputs" onSubmit={handleSubmit(onSubmit)}>
        <Input
          pattern={{ message: 'invalid input', value: /^[A-Z][a-z]*$/ }}
          label="firstName"
          register={register}
          required={'Name is required'}
          placeholder="Your Name"
        />
        {errors.firstName && <span>{errors.firstName?.message}</span>}
        <div className="form-inputs__short">
          <Input
            label="date"
            type="date"
            register={register}
            required={'Date is required'}
            testId="date"
          />
          {errors.date && <span>{errors.date?.message}</span>}
          <select
            data-testid="country-select"
            {...register('country', { required: 'Country is required' })}
          >
            <option value="" disabled>
              Country
            </option>
            {COUNTRIES.map((country, i) => (
              <option key={i + 2} value={country}>
                {country}
              </option>
            ))}
            ;
          </select>
          {errors.country && <span>{errors.country?.message}</span>}
        </div>
        <div className="form-inputs__gender-switcher">
          <Radio register={register} label="gender" value="male" />
          <Radio register={register} label="gender" value="female" />
        </div>
        {errors.gender && <div style={{ color: '#bc4123' }}>{errors.gender?.message}</div>}
        <div className="file-upload">
          <label htmlFor="image-input">Choose Image...</label>
          <input
            data-testid="image-input"
            type="file"
            accept="image/jpeg,image/png,image/gif"
            id="image-input"
            {...register('image', { required: 'Image is required' })}
          />
        </div>
        {errors.image && <span>{errors.image?.message}</span>}
        <label htmlFor="checkPersonal" className="form-check">
          <Input
            register={register}
            label="checkPersonal"
            type="checkbox"
            name="checkPersonal"
            value="consent to my personal data"
            required="This is required"
            testId="checkPersonal"
          />
          I consent to my personal data
        </label>
        {errors.checkPersonal && <span>{errors.checkPersonal?.message}</span>}
        <MyButton type="submit">Submit</MyButton>
      </form>
    </div>
  );
};

export default ProductForm;
