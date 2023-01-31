import React from 'react';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';


import css from './ImageGallery.module.css';

  const ImageGallery = ({items})=> {
    // const { items, loading, error } = this.state;
    const elements = items.map(({ id, webformatURL }) => (
      <ImageGalleryItem key={id} srcImg={webformatURL} />
    ));
    return (
     
        <ul className={css.ImageGallery}>{elements}</ul>
        
    );
  }

 
export default ImageGallery;
