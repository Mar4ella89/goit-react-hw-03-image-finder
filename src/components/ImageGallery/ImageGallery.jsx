import Loader from 'components/Loader/Loader';
// import { toast } from 'react-toastify';
// import axios from 'axios';

import searchQueryImg from 'services/gallery-api';

import { Component } from 'react';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Button from 'components/Button/Button';

import css from './ImageGallery.module.css';

class ImageGallery extends Component {
  state = {
    searchQuery: '',
    items: [],
    loading: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevSearchQuery = prevProps.searchQuery;
    const nextSearchQuery = this.props.searchQuery;
    if (prevSearchQuery !== nextSearchQuery) {
      this.setState({ loading: true });

      // axios
      //   .get(
      //     `https://pixabay.com/api/?q=${nextSearchQuery}&page=1&key=31981261-43107a8c97a37675e78f6a341&image_type=photo&orientation=horizontal&per_page=12`
      //   )

      searchQueryImg(nextSearchQuery)
        .then(data => {
          this.setState({ items: data.hits });
        })
        .catch(error => {
          this.setState({ error: error.message });
        })
        .finally(() => this.setState({ loading: false }));
    }
  }

  render() {
    const { items, loading, error } = this.state;
    const elements = items.map(({ id, webformatURL }) => (
      <ImageGalleryItem key={id} srcImg={webformatURL} />
    ));
    return (
      <>
        <ul className={css.ImageGallery}>{elements}</ul>

        {loading && <Loader />}
        {error && <p>An error has occurred. Please try again later...</p>}
        {Boolean(items.length) && <Button text={'Load more'} />}
      </>
    );
  }
}

export default ImageGallery;
