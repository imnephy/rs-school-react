import { getMangaSearch, MangaSearchData } from '@/API/ProductService';
import Search from '@/components/search/Search';
import MangaList from '@/components/products/MangaList';
import { useEffect, useState } from 'react';
import Loader from '@/components/UI/Loader/Loader';
import useFetching from '@/hooks/useFetching';
import MyButton from '@/components/UI/button/MyButton';
import classNames from 'classnames';

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

const Home = () => {
  const [currMangaList, setCurrMangaList] = useState<MangaSearchData[]>([]);
  const [notFound, setNotFound] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [fetchManga, isLoading, mangaError] = useFetching(async (value: string) => {
    setNotFound(false);
    const res = await getMangaSearch(value, page);
    console.log(res);
    setTotalPages(() => res.pagination.last_visible_page);
    if (res.data.length) {
      const mangaList: MangaSearchData[] = res.data;
      setNotFound(false);
      setCurrMangaList(() => mangaList);
    } else {
      setNotFound(true);
    }
  });

  useEffect(() => {
    document.title = `Home | Online-store`;
    fetchManga(inputValue);
    return setCurrMangaList(() => []);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, inputValue]);

  const handleSearchBtn = async (value: string) => {
    setInputValue(() => value);
    setPage(() => 1);
  };

  const handlePageBtn = async (e: React.SyntheticEvent, isLeft: boolean) => {
    switch (isLeft) {
      case true:
        if (page === 1) {
          setPage(() => totalPages);
        } else {
          setPage((page) => page - 1);
        }
        break;
      default:
        if (page === totalPages) {
          setPage(1);
        } else {
          setPage((page) => page + 1);
        }
        break;
    }
  };

  return (
    <div className="wrapper">
      <Search handleSearchBtn={handleSearchBtn} />
      <h2>Manga</h2>
      <MangaList mangaList={currMangaList}></MangaList>
      <div className="center-info">{isLoading && <Loader />}</div>
      <div className="center-info">{notFound && 'Manga not found.'}</div>
      <div className="center-info">{mangaError && `Server error: ${mangaError}`}</div>
      {totalPages !== 0 && !isLoading && !notFound && totalPages !== 1 && (
        <div className={classNames('center-info', 'pagination')}>
          <MyButton onClick={(e: React.SyntheticEvent) => handlePageBtn(e, true)}>{'<'}</MyButton>
          <span>{`${page} / ${totalPages}`}</span>
          <MyButton onClick={(e: React.SyntheticEvent) => handlePageBtn(e, false)}>{'>'}</MyButton>
        </div>
      )}
    </div>
  );
};

export default Home;
