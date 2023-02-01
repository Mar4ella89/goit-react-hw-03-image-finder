import React from 'react';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';

import css from './ImageGallery.module.css';

const ImageGallery = ({ items, showImage }) => {
  console.log(items)
  const elements = items.map(({ id, webformatURL, largeImageURL }) => (
    <ImageGalleryItem key={id} srcImg={webformatURL} largeImg={largeImageURL} showImage={()=>{showImage({largeImageURL})}}/>
  ));
  return <ul className={css.ImageGallery}>{elements}</ul>;
};

ImageGallery.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ),
};

export default ImageGallery;
