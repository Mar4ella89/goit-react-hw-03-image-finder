import React from 'react';
import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({srcImg}) => {
  return (
    <li className={css.galleryItem}>
      <img src={srcImg} alt="" className={css.ImageGalleryItemImage}/>
    </li>
  );
};

export default ImageGalleryItem;
