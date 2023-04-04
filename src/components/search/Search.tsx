import './search.scss';
import { ReactComponent as Logo } from '../../assets/search-glass.svg';
import { FormEvent, useEffect, useRef } from 'react';
import MyInput from '../UI/input/MyInput';
import MyButton from '../UI/button/MyButton';
import { FC } from 'react';
import { SyntheticEvent } from 'react';

type SearchBtn = { handleSearchBtn: (value: string) => void };

export interface ISearch {
  onSubmit: SearchBtn;
}

const Search: FC<SearchBtn> = ({ handleSearchBtn }: SearchBtn) => {
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    const inputElem = inputRef.current as HTMLInputElement;
    inputElem.value = localStorage.getItem('searchValue') || '';
  }, []);
  const handleSearchChange = (e: SyntheticEvent) => {
    localStorage.setItem('searchValue', (e.target as HTMLInputElement).value);
  };
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleSearchBtn(inputRef.current?.value as string);
  };
  return (
    <div className="search">
      <Logo className="search__img" />
      <form onSubmit={onSubmit}>
        <MyInput type="text" placeholder="Search..." onChange={handleSearchChange} ref={inputRef} />
        <MyButton>Search</MyButton>
      </form>
    </div>
  );
};

export default Search;
