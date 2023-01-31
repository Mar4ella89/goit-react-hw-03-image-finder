import React from 'react';
import PropTypes from 'prop-types';

import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ srcImg }) => {
  return (
    <li className={css.galleryItem}>
      <img src={srcImg} alt="" className={css.ImageGalleryItemImage} />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  srcImg: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
