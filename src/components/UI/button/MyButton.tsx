import cl from './MyButton.module.scss';

// const MyButton = <T,>({ children, ...props }: Props<T>): JSX.Element => {
//   return (
//     <button {...props} className={cl.myBtn}>
//       {children}
//     </button>
//   );
// };
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
