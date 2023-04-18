import './search.scss';
import { ReactComponent as Logo } from '../../assets/search-glass.svg';
import { FormEvent, useRef } from 'react';
import MyInput from '../UI/input/MyInput';
import MyButton from '../UI/button/MyButton';
import { FC } from 'react';
import { SyntheticEvent } from 'react';
import { selectSearch, setSearchValue } from '@/features/search/searchSlice';
import { useAppSelector, useAppDispatch } from '@/hooks/redux';
import { AppDispatch } from '@/app/store';

type SearchBtn = { handleSearchBtn: (value: string) => void };

export interface ISearch {
  onSubmit: SearchBtn;
}

const Search: FC<SearchBtn> = ({ handleSearchBtn }: SearchBtn) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const searchValue = useAppSelector(selectSearch);
  const dispatch: AppDispatch = useAppDispatch();

  const handleSearchChange = (e: SyntheticEvent) => {
    dispatch(setSearchValue((e.target as HTMLInputElement).value));
  };
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleSearchBtn(inputRef.current?.value as string);
  };
  return (
    <div className="search">
      <Logo className="search__img" />
      <form onSubmit={onSubmit}>
        <MyInput
          type="text"
          placeholder="Search..."
          onChange={handleSearchChange}
          ref={inputRef}
          value={searchValue}
        />
        <MyButton>Search</MyButton>
      </form>
    </div>
  );
};

export default Search;
