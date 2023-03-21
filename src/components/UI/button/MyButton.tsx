import cl from './MyButton.module.scss';

interface Props {
  disabled?: boolean;
}
const MyButton = <T,>(props: React.PropsWithChildren<T | Props>): JSX.Element => {
  return (
    <button {...props} className={cl.MyBtn}>
      {props.children}
    </button>
  );
};

export default MyButton;
