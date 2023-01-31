import React from 'react';
import PropTypes from 'prop-types';

const ImageDetails = ({items}) => {
    <img src={items.largeImageURL} alt="" /> 
}



ImageDetails.propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.exact({
        largeImageURL: PropTypes.string.isRequired,
        
      })
    ),
  };

export default ImageDetails