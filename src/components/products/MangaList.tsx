import { FC, useCallback, useState } from 'react';

import { MangaSearchData } from '@/API/ProductService';

import ModalMangaItem from '@/components/modal/ModalMangaItem';
import ProductItem from './ProductItem';

interface MangaListProps {
  mangaList: MangaSearchData[];
}

const MangaList: FC<MangaListProps> = ({ mangaList }) => {
  const [modalActive, setModalActive] = useState(false);
  const [activeProduct, setActiveProduct] = useState<MangaSearchData | null>(null);

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
