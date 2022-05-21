import React from 'react';
import PropTypes from 'prop-types';
import * as S from './CarsCard.style';
import Button from './../Button/Button';

const CarsCard = (props) => {
  return (
    <S.CarWrapper>
      <S.CarBrand>{props.brand}</S.CarBrand>
      <S.CarModel>{props.model}</S.CarModel>
      <S.CarYear>{props.year}</S.CarYear>
      <S.CarNumber>{props.number}</S.CarNumber>
      <S.CarOwner>{props.owner}</S.CarOwner>
      <S.CarPhone>{props.phone}</S.CarPhone>
      <Button>X</Button>
    </S.CarWrapper>
  );
};

CarsCard.propTypes = {};

export default CarsCard;
