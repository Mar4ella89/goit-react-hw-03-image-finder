import React from 'react';
import PropTypes from 'prop-types';

const ImageDetails = ({largeImageURL}) => {
    
    return (<img src={largeImageURL} alt="" /> )
    
}

ImageDetails.propTypes = {
        largeImageURL: PropTypes.string.isRequired,
            
  };

export default ImageDetails