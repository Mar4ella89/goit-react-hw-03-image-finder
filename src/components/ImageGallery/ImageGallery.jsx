import React from 'react';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';

import css from './ImageGallery.module.css';

const ImageGallery = ({ items, showImage }) => {
  const elements = items.map(({ id, webformatURL, largeImageURL }) => (
    <ImageGalleryItem
      key={id}
      srcImg={webformatURL}
      largeImg={largeImageURL}
      showImg={() => showImage({ largeImageURL })}
    />
  ));
  return <ul className={css.ImageGallery}>{elements}</ul>;
};

ImageGallery.propTypes = {
  showImage: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ImageGallery;
