import { FC } from 'react';

import { ReactComponent as Logo } from '../../assets/search-glass.svg';

import useSearch from '@/hooks/useSearch';

import MyInput from '../UI/input/MyInput';
import MyButton from '../UI/button/MyButton';

export interface SearchProps {
  handleSearchBtn: (value: string) => void;
  disabled?: boolean;
}

const Search: FC<SearchProps> = ({ handleSearchBtn, disabled }) => {
  const { inputSearchRef, searchValue, handleSearchChange, onSubmit } = useSearch({
    handleSearchBtn,
  });

  return (
    <div className="search">
      <Logo className="search__img" />
      <form onSubmit={onSubmit}>
        <MyInput
          type="text"
          placeholder="Search..."
          onChange={handleSearchChange}
          ref={inputSearchRef}
          value={searchValue}
        />
        <MyButton disabled={disabled}>Search</MyButton>
      </form>
    </div>
  );
};

export default Search;
