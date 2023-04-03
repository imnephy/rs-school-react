import React from 'react';
import cl from './MyRadioButton.module.scss';
import { InputProps } from '../input/MyInput';

interface Props {
  name?: string;
  checked?: boolean;
  text?: string;
  id?: string;
  defaultChecked?: boolean;
}

const RadioButton = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { id, text } = props;
  return (
    <label htmlFor={id} className={cl.radioLabel}>
      <input className={cl.radioInput} type="radio" ref={ref} {...props} />
      <span className={cl.customRadio} />
      {text}
    </label>
  );
});

export const Radio = ({ label, register, value }: InputProps) => {
  return (
    <label className={cl.radioLabel}>
      <input
        className={cl.radioInput}
        type="radio"
        value={value}
        {...register(label, { required: 'Gender is required' })}
      />
      <span className={cl.customRadio} />
      {value}
    </label>
  );
};

export default RadioButton;
