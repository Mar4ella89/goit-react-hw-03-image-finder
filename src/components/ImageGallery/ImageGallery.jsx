import React from 'react';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';

import css from './ImageGallery.module.css';

const ImageGallery = ({ items }) => {
  const elements = items.map(({ id, webformatURL, showImage }) => (
    <ImageGalleryItem key={id} srcImg={webformatURL} onClick={showImage}/>
  ));
  return <ul className={css.ImageGallery}>{elements}</ul>;
};

ImageGallery.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ),
};

export default ImageGallery;
