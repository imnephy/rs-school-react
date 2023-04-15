import 'whatwg-fetch';
import { render, screen } from '@testing-library/react';
import ProductCard from '../components/productForm/ProductCard/ProductCard';
import { IProductCard } from '../pages/Forms';
import defaultPic from '../assets/default.png';

const newCard: IProductCard = {
  name: 'Ivan Ivanov',
  country: 'Russia',
  gender: 'male',
  image: defaultPic,
  date: '2023-04-25',
  check: true,
};

describe('ProductCard', () => {
  beforeEach(() => {
    render(<ProductCard {...newCard} />);
  });

  it('should render Card', async () => {
    const nameElem = screen.getByText(`Name: ${newCard.name}`);
    const countryElem = screen.getByText(`Country: ${newCard.country}`);
    const genderElem = screen.getByText(`Gender: ${newCard.gender}`);
    const dateElem = screen.getByText(`Date: ${newCard.date}`);
    expect(nameElem).toBeInTheDocument();
    expect(countryElem).toBeInTheDocument();
    expect(genderElem).toBeInTheDocument();
    expect(dateElem).toBeInTheDocument();
  });
});
