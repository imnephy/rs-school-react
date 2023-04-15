import Search from '@/components/search/Search';
import { useEffect, useState } from 'react';
import Loader from '@/components/UI/Loader/Loader';
import MyButton from '@/components/UI/button/MyButton';
import classNames from 'classnames';
import projectTitle from '@/utils/projectTitle';
import { useListMangaQuery } from '@/app/services/manga';
import { selectPage, selectSearch, setSearchPage } from '@/features/search/searchSlice';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import MangaList from '@/components/products/MangaList';
import { AppDispatch } from '@/app/store';

const Home = () => {
  const searchPage = useAppSelector(selectPage);
  const dispatch: AppDispatch = useAppDispatch();

  const searchValue = useAppSelector(selectSearch);
  const [inputValue, setInputValue] = useState(searchValue);
  const { data: manga, isLoading } = useListMangaQuery({ query: inputValue, page: searchPage });

  const totalPages = manga?.pagination.last_visible_page ?? 1;

  useEffect(() => {
    document.title = `Home | ${projectTitle}`;
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
  if (isLoading) {
    return (
      <div className="wrapper">
        <div className="center-info" style={{ marginTop: '150px' }}>
          <Loader />
        </div>
      </div>
    );
  }
  if (!manga?.data) {
    return <div className="wrapper">Server error.</div>;
  }

  return (
    <div className="wrapper">
      <Search handleSearchBtn={handleSearchBtn} />
      <h2>Manga</h2>
      <div className="center-info">{isLoading && <Loader />}</div>
      <div className="center-info">{manga.data.length === 0 && 'Manga not found.'}</div>
      <MangaList mangaList={manga.data}></MangaList>
      {totalPages !== 0 && !isLoading && totalPages !== 1 && (
        <div className={classNames('center-info', 'pagination')}>
          <MyButton
            data-testid="prev-page-button"
            onClick={(e: React.SyntheticEvent) => handlePageBtn(e, true)}
          >
            {'<'}
          </MyButton>
          <span>{`${searchPage} / ${totalPages}`}</span>
          <MyButton
            data-testid="next-page-button"
            onClick={(e: React.SyntheticEvent) => handlePageBtn(e, false)}
          >
            {'>'}
          </MyButton>
        </div>
      )}
    </div>
  );
};

export default Home;
