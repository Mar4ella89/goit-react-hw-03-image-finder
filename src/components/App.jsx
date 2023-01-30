import { Component } from 'react';
import { ToastContainer } from 'react-toastify';

import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';

import 'react-toastify/dist/ReactToastify.css';
import css from './App.module.css';

export class App extends Component {
  state = {
    searchQuery: '',
  };

  handleFormSubmit = searchQuery => {
    this.setState({ searchQuery });
  };

  render() {
    return (
      <div className={css.App}>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ToastContainer autoClose={3000} />
        <ImageGallery searchQuery={this.state.searchQuery} />
      </div>
    );
  }
}
