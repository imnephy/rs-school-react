import { useRef, SyntheticEvent, FormEvent } from 'react';

import { AppDispatch } from '@/app/store';
import { useAppSelector, useAppDispatch } from './redux';
import { selectSearch, setSearchValue } from '@/features/search/searchSlice';

import { SearchProps } from '@/components/search/Search';

const useSearch = ({ handleSearchBtn }: SearchProps) => {
  const inputSearchRef = useRef<HTMLInputElement>(null);

  const dispatch: AppDispatch = useAppDispatch();
  const searchValue = useAppSelector(selectSearch);

  const handleSearchChange = (e: SyntheticEvent) => {
    dispatch(setSearchValue((e.target as HTMLInputElement).value));
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleSearchBtn(inputSearchRef.current?.value as string);
  };

  return { inputSearchRef, searchValue, handleSearchChange, onSubmit };
};

export default useSearch;
