import React from 'react';
import PropTypes from 'prop-types';

import css from './Button.module.css';

const Button = ({ text }) => {
  return (
    <button type="button" className={css.Button}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
