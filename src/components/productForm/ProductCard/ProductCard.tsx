import { Component } from 'react';
import { IProductCard } from '../../../pages/Forms';

export class ProductCard extends Component<React.PropsWithChildren<IProductCard>> {
  render() {
    const { name, gender, image, date, country } = this.props;
    return (
      <div className="product__item" style={{ background: `url(${image}) 0% 0% / cover` }}>
        <div className="product__item-info">
          <ul className="product__item-info__list">
            <li>Name: {name}</li>
            <li>Country: {country}</li>
            <li>Gender: {gender}</li>
            <li>Date: {date}</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default ProductCard;
