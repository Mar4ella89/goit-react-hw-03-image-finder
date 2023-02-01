import { Component } from 'react';
import PropTypes from 'prop-types';

import css from './Modal.module.css';

class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.closeModal);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.closeModal);
  }

  closeModal = ({ target, currentTarget, code }) => {
    if (target === currentTarget || code === 'Escape') {
      this.props.close();
    }
  };

  render() {
    const { children } = this.props;
    return (
      <div className={css.Overlay} onClick={this.closeModal}>
        <div className={css.Modal}>{children}</div>
      </div>
    );
  }
}

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  close: PropTypes.func.isRequired,
};

export default Modal;
