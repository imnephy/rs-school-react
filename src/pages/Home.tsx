import useHome from '@/hooks/useHome';

import Search from '@/components/search/Search';
import Loader from '@/components/UI/Loader/Loader';
import MangaList from '@/components/products/MangaList';
import Pagination from '@/components/Pagination';
import MangaErrorWrapper from '@/components/products/MangaErrorWrapper';

const Home = () => {
  const { manga, totalPages, searchPage, isLoading, handlePageBtn, handleSearchBtn } = useHome();

  if (isLoading) {
    return (
      <MangaErrorWrapper>
        <Loader />
      </MangaErrorWrapper>
    );
  }

  return (
    <div className="wrapper">
      <Search disabled={isLoading} handleSearchBtn={handleSearchBtn} />
      <h2>Manga</h2>
      {!manga?.data && <div className="center-info">Server error.</div>}
      {manga?.data && manga.data.length === 0 && (
        <div className="center-info">Manga not found.</div>
      )}
      {manga?.data && <MangaList mangaList={manga.data}></MangaList>}
      {totalPages !== 0 && totalPages !== 1 && (
        <Pagination totalPages={totalPages} searchPage={searchPage} onClick={handlePageBtn} />
      )}
    </div>
  );
};

export default Home;
