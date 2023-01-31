import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import Loader from 'components/Loader/Loader';
import { toast } from 'react-toastify';

import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import searchQueryImg from 'services/gallery-api';
import Button from 'components/Button/Button';

import 'react-toastify/dist/ReactToastify.css';
import css from './App.module.css';

export class App extends Component {
  state = {
    searchQuery: '',
    items: [],
    loading: false,
    error: null,
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    const { searchQuery, page } = this.state;
    const prevSearchQuery = prevState.searchQuery;
    const prevPage = prevState.page;

    if (prevSearchQuery !== searchQuery || prevPage !== page) {
      this.fetchImg();
    }
  }

  async fetchImg() {
    try {
      this.setState({ loading: true });
      const { searchQuery, page } = this.state;
      const data = await searchQueryImg(searchQuery, page);
      if (data.hits.length === 0) {
        toast.info(
          'The search has not given any results. Try to find something else'
        );
      }
      this.setState(({ items }) => ({ items: [...items, ...data.hits] }));
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ loading: false });
    }
  }

  loadMore = () => {
    this.setState(({ page }) => ({ page: page + 1 }));
  };

  handleFormSubmit = searchQuery => {
    this.setState({ searchQuery, items: [], page: 1 });
  };

  render() {
    const { items, loading, error } = this.state;
    return (
      <div className={css.App}>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ToastContainer autoClose={3000} />
        <ImageGallery items={items} />

        {loading && <Loader />}
        {error && <p>An error has occurred. Please try again later...</p>}

        {Boolean(items.length) && (
          <Button text={'Load more'} onClick={this.loadMore} />
        )}
      </div>
    );
  }
}
