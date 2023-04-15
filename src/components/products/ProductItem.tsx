import MyButton from '../UI/button/MyButton';
import { MangaSearchData } from '@/API/ProductService';
import getStrFromArray, { getCorrectLength } from '@/utils/mangaDataHandler';

interface IProductItem {
  product: MangaSearchData;
  setModalActiveFunc: (pr: MangaSearchData) => void;
}

const ProductItem = (props: IProductItem) => {
  const {
    authors,
    title,
    images: {
      jpg: { image_url },
    },
    genres,
  } = props.product;

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
        <MyButton onClick={() => props.setModalActiveFunc(props.product)}>Details</MyButton>
      </div>
    </div>
  );
};

export default ProductItem;
