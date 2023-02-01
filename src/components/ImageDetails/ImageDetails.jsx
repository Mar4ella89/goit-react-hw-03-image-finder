import React from 'react';
import PropTypes from 'prop-types';

const ImageDetails = ({largeImageURL}) => {
    console.log(largeImageURL)
    return (<img src={largeImageURL} alt="" /> )
    
}

ImageDetails.propTypes = {
    // items: PropTypes.arrayOf(
    //   PropTypes.exact({
        largeImageURL: PropTypes.string.isRequired,
        
    //   })
    // ),
  };

export default ImageDetails