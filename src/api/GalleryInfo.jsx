import { Component } from 'react';
import React from 'react';
import axios from 'axios';

class GalleryInfo extends Component {
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.galleryInfo !== this.props.imageName) {
      axios(
        `https://pixabay.com/api/?q=${this.props.imageName}&page=1&key=31981261-43107a8c97a37675e78f6a341&image_type=photo&orientation=horizontal&per_page=12`
      );
    }
  }

  render() {
    return <div>Test</div>;
  }
}

export default GalleryInfo;
