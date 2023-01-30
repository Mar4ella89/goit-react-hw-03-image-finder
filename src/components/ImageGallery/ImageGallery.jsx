import { Component } from 'react';
import axios from 'axios';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';

import css from './ImageGallery.module.css';

class ImageGallery extends Component {
  state = {
    searchQuery: '',
    items: [],
  };

  componentDidUpdate(prevProps, prevState) {
        const prevSearchQuery = prevProps.searchQuery;
        const nextSearchQuery = this.props.searchQuery;
        if (prevSearchQuery !== nextSearchQuery) {
    axios.get(
          `https://pixabay.com/api/?q=${nextSearchQuery}&page=1&key=31981261-43107a8c97a37675e78f6a341&image_type=photo&orientation=horizontal&per_page=12`
        )
        .then(({ data }) => {
          this.setState({ items: data.hits });
          console.log(data.hits);
        
        });
  }
}

  render() {
    const { items } = this.state;
    const elements = items.map(({ id, webformatURL }) => (
      <ImageGalleryItem key={id} srcImg={webformatURL} />
    ));
    return (
        <ul className={css.ImageGallery}>
            {elements}
        </ul>
    );
  }
}

export default ImageGallery;
