import cl from './MyInput.module.scss';

interface Props {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.SyntheticEvent) => void;
  type: string;
  required?: boolean;
}

const MyInput = (props: React.PropsWithChildren<Props>): JSX.Element => {
  return <input className={cl.MyInput} {...props} />;
};

export default MyInput;
