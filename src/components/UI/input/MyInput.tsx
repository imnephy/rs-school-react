import React from 'react';
import cl from './MyInput.module.scss';
import { IProductCard } from 'pages/Forms';
import { UseFormRegister, Path } from 'react-hook-form';

interface Props {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.SyntheticEvent) => void;
  type: string;
  required?: boolean;
  ref?: React.Ref<HTMLInputElement>;
  role?: string;
}

const MyInput = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
  return <input className={cl.MyInput} ref={ref} {...props} />;
});

export default MyInput;
// --------------------------
export type Pattern = { value: RegExp; message: string };

export type InputProps = {
  label: Path<IProductCard>;
  register: UseFormRegister<IProductCard>;
  required?: boolean | string;
  type?: string;
  placeholder?: string;
  value?: string;
  defaultChecked?: boolean;
  name?: string;
  testId?: string;
  pattern?: Pattern | undefined;
};

export const Input = ({
  label,
  register,
  required,
  type,
  placeholder,
  testId,
  pattern,
}: InputProps) => (
  <>
    <input
      data-testid={testId}
      className={cl.MyInput}
      type={type}
      placeholder={placeholder}
      {...register(label, {
        pattern: pattern,
        required: required,
        minLength: { value: 4, message: 'Min Length is 4' },
      })}
    />
  </>
);
