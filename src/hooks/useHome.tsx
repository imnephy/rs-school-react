import { useState, useMemo, useEffect } from 'react';

import { AppDispatch } from '@/app/store';
import { selectPage, selectSearch, setSearchPage } from '@/features/search/searchSlice';

import { useAppDispatch, useAppSelector } from './redux';
import { useListMangaQuery } from '@/app/services/manga';

import { PROJECT_TITLE } from '@/utils/variables';

const useHome = () => {
  const dispatch: AppDispatch = useAppDispatch();
  const searchPage = useAppSelector(selectPage);
  const searchValue = useAppSelector(selectSearch);

  const [inputValue, setInputValue] = useState(searchValue);
  const { data: manga, isLoading } = useListMangaQuery({ query: inputValue, page: searchPage });

  const totalPages = useMemo(
    () => manga?.pagination.last_visible_page ?? 1,
    [manga?.pagination.last_visible_page]
  );

  useEffect(() => {
    document.title = `Home | ${PROJECT_TITLE}`;
  }, []);

  const handleSearchBtn = async (value: string) => {
    setInputValue(() => value);
    dispatch(setSearchPage(1));
  };

  const handlePageBtn = async (e: React.SyntheticEvent, isLeft: boolean) => {
    switch (isLeft) {
      case true:
        if (searchPage === 1) {
          dispatch(setSearchPage(totalPages));
        } else {
          dispatch(setSearchPage(searchPage - 1));
        }
        break;
      default:
        if (searchPage === totalPages) {
          dispatch(setSearchPage(1));
        } else {
          dispatch(setSearchPage(searchPage + 1));
        }
        break;
    }
  };
  return { isLoading, handlePageBtn, handleSearchBtn, manga, totalPages, searchPage };
};

export default useHome;
