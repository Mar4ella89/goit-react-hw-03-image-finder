import React from 'react';
import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({id, webformatURL}) => {
  return (
    <li key={id} className={css.galleryItem}>
      <img src={webformatURL} alt="" className={css.ImageGalleryItemImage}/>
    </li>
  );
};

export default ImageGalleryItem;
