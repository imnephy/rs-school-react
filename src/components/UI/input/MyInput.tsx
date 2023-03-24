import React from 'react';
import cl from './MyInput.module.scss';

interface Props {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.SyntheticEvent) => void;
  type: string;
  required?: boolean;
  ref?: React.RefObject<HTMLInputElement>;
  role?: string;
}

const MyInput = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
  return <input className={cl.MyInput} ref={ref} {...props} />;
});

export default MyInput;
