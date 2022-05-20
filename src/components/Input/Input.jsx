import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as S from './Input.style';

const Input = ({ name, label, type, placeholder, handleChange }) => {
  const [value, setValue] = useState('');

  const onChange = (event) => {
    setValue(event.target.value);
    handleChange(event.target.value);
  };

  return (
    <S.InputControl>
      <S.Label htmlFor={name}>{label}</S.Label>
      <S.Input
        type={type}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </S.InputControl>
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  type: PropTypes.oneOf(['text', 'email', 'number', 'password']),
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  label: '',
  type: 'text',
  placeholder: '',
};

export default Input;
