import axios from 'axios';
import PropTypes from 'prop-types';

const instance = axios.create({
  baseURL: 'https://pixabay.com/api',
  params: {
    key: '31981261-43107a8c97a37675e78f6a341',
    per_page: 12,
    image_type: 'photo',
    orientation: 'horizontal',
  },
});

export const searchQueryImg = async searchQuery => {
  const { data } = await instance.get('/', {
    params: {
      q: searchQuery,
    },
  });
  return data;
};

searchQueryImg.propTypes = {
  searchQuery: PropTypes.string.isRequired,
};

export default searchQueryImg;
