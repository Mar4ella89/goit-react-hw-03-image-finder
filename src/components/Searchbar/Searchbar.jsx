import { ImSearch } from 'react-icons/im';
import { toast } from 'react-toastify';

import { Component } from 'react';
import PropTypes from 'prop-types';

import css from './Searchbar.module.css';

class Searchbar extends Component {
  state = {
    searchQuery: '',
  };

  handleNameChange = event => {
    this.setState({ searchQuery: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.searchQuery.trim() === '') {
      return toast.warn('Please enter a search term in the search box');
    }
    this.props.onSubmit(this.state.searchQuery);
    this.reset();
  };

  reset() {
    this.setState({ searchQuery: '' });
  }

  render() {
    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={css.SearchFormButton}>
            <ImSearch style={{ marginTop: 4 }} />
            <span className={css.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={css.SearchFormInput}
            type="text"
            name="searchQuery"
            value={this.state.searchQuery}
            onChange={this.handleNameChange}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
