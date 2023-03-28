import './search.scss';
import { ReactComponent as Logo } from '../../assets/search-glass.svg';
import React from 'react';
import MyInput from '../UI/input/MyInput';
import MyButton from '../UI/button/MyButton';

export interface ISearch {
  onInputChange: (e: React.SyntheticEvent) => void;
}

class Search extends React.Component<ISearch, { value: string }> {
  constructor(props: ISearch) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    const storageSearchValue = localStorage.getItem('searchValue');
    const inpValue = storageSearchValue ? storageSearchValue : '';
    this.state = {
      value: inpValue,
    };
  }
  handleChange(e: React.SyntheticEvent) {
    this.setState({
      value: (e.target as HTMLInputElement).value,
    });
    this.props.onInputChange(e);
  }
  handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
  }
  render(): React.ReactNode {
    return (
      <div className="search">
        <Logo className="search__img" />
        <form onSubmit={this.handleSubmit}>
          <MyInput
            type="text"
            placeholder="Search..."
            value={this.state.value}
            onChange={this.handleChange}
          />
          <MyButton>Search</MyButton>
        </form>
      </div>
    );
  }
}

export default Search;
