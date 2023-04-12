import { MangaSearchData } from '@/API/ProductService';
import ModalMangaItem from '@/components/modal/ModalMangaItem';
import { useCallback, useState } from 'react';
import ProductItem from './ProductItem';

interface IMangaList {
  mangaList: MangaSearchData[];
}

const MangaList = (props: React.PropsWithChildren<IMangaList>): JSX.Element => {
  const [modalActive, setModalActive] = useState(false);
  const [activeProduct, setActiveProduct] = useState<MangaSearchData | null>(null);

  const mangaList = props.mangaList;
  const setModalActiveFunc = useCallback((product: MangaSearchData) => {
    setActiveProduct(product);
    setModalActive(true);
  }, []);
  return (
    <>
      <div className="products__list">
        {mangaList.map((product, index) => {
          return (
            <ProductItem
              data-testid={`test-${index}`}
              key={product.mal_id}
              product={product}
              setModalActiveFunc={setModalActiveFunc}
            />
          );
        })}
      </div>
      <ModalMangaItem active={modalActive} setActive={setModalActive} product={activeProduct} />
    </>
  );
};

export default MangaList;
