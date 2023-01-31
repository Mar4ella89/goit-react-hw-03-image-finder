import { Component } from 'react';
import PropTypes from 'prop-types';

import css from './Modal.module.css';

class Modal extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className={css.Overlay}>
        <div className={css.Modal}>{children}</div>
      </div>
    );
  }
}

Modal.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Modal;
