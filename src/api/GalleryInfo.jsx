import { Component } from 'react';
import React from 'react';
import axios from 'axios';

class GalleryInfo extends Component {
  state = {
    searchQuery: '',
    items: [],
  };

  componentDidUpdate(prevProps, prevState) {
    const prevSearchQuery = prevProps.searchQuery;
    const nextSearchQuery = this.props.searchQuery;
    if (prevSearchQuery !== nextSearchQuery) {
      axios
        .get(
          `https://pixabay.com/api/?q=${nextSearchQuery}&page=1&key=31981261-43107a8c97a37675e78f6a341&image_type=photo&orientation=horizontal&per_page=12`
        )
        .then(({ data }) => {
          this.setState({ items: data.hits });
          console.log(data.hits);
        });
    }
  }

  render() {
    return <div>Test</div>;
  }
}

export default GalleryInfo;
