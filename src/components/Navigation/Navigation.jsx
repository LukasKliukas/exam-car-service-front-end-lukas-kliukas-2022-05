import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './Navigation.style';
import logo from './../../assets/images/Logo-croped.png';

const Navigation = () => {
  return (
    <S.NavWrap>
      <img src={logo} alt='logo'></img>
      <Link to='/'>Home</Link>
      <Link to='/cars'>All Cars</Link>
      <Link to='/addCar'>Add a car</Link>
    </S.NavWrap>
  );
};

export default Navigation;
