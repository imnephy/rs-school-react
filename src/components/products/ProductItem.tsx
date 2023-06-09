import { FC } from 'react';

import { MangaSearchData } from '@/API/ProductService';
import getStrFromArray, { getCorrectLength } from '@/utils/mangaDataHandler';

import MyButton from '../UI/button/MyButton';

interface ProductItemProps {
  product: MangaSearchData;
  setModalActiveFunc: (pr: MangaSearchData) => void;
}

const ProductItem: FC<ProductItemProps> = ({ product, setModalActiveFunc }) => {
  const {
    authors,
    title,
    images: {
      jpg: { image_url },
    },
    genres,
  } = product;

  const _title = getCorrectLength(title);
  const genresStr = getStrFromArray(genres);
  const authorsStr = getStrFromArray(authors);

  return (
    <div className="product__item" style={{ background: `url(${image_url}) 0% 0% / cover` }}>
      <div className="product__item-info">
        <ul className="product__item-info__list">
          <li>{_title}</li>
          <li>{authors.length ? authorsStr : `no author`}</li>
          <li>{genresStr}</li>
        </ul>
      </div>
      <div className="product__item-btns">
        <MyButton>Add To Cart</MyButton>
        <MyButton onClick={() => setModalActiveFunc(product)}>Details</MyButton>
      </div>
    </div>
  );
};

export default ProductItem;
