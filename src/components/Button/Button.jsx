import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Button.style';

const Button = ({ handleClick, children, color, type }) => {
  return (
    <S.Button color={color} type={type} onClick={handleClick}>
      {children}
    </S.Button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  handleClick: PropTypes.func,
  children: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

Button.defaultProps = {
  type: 'button',
  color: '#64686c',
};
export default Button;
