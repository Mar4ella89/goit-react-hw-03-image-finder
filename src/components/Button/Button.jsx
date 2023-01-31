import React from 'react';
import PropTypes from 'prop-types';

import css from './Button.module.css';

const Button = ({ text, onClick }) => {
  return (
    <button type="button" className={css.Button} onClick={onClick}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
