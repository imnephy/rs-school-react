import { FC, PropsWithChildren } from 'react';
import cl from './MyButton.module.scss';

interface MyButtonProps {
  disabled?: boolean;
  onClick?: () => void;
}
const MyButton: FC<PropsWithChildren<MyButtonProps>> = ({ disabled, onClick, children }) => {
  return (
    <button onClick={onClick} disabled={disabled} className={cl.MyBtn}>
      {children}
    </button>
  );
};

export default MyButton;
