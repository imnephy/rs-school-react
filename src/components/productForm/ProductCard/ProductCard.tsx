import { IProductCard } from '../../../pages/Forms';

const ProductCard = (props: IProductCard) => {
  const { firstName, gender, image, date, country } = props;
  return (
    <div className="product__item" style={{ background: `url(${image}) 0% 0% / cover` }}>
      <div className="product__item-info">
        <ul className="product__item-info__list">
          <li>Name: {firstName}</li>
          <li>Country: {country}</li>
          <li>Gender: {gender}</li>
          <li>Date: {date}</li>
        </ul>
      </div>
    </div>
  );
};

export default ProductCard;
