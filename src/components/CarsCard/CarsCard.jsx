import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import * as S from './CarsCard.style';
import Button from './../Button/Button';
import Title from '../Title/Title';
import { useNavigate } from 'react-router-dom';

const CarsCard = (props) => {
  let navigate = useNavigate();

  function handleDelete(id) {
    deleteFetch(id);
    window.location.reload();
  }

  async function deleteFetch(id) {
    console.log('Button was clicked');
    try {
      const res = await fetch(
        `${process.env.REACT_APP_SERVER_URL}/cars/${id}`,
        {
          method: 'DELETE',
        }
      );
      const data = await res.json();
      console.log(data);
      return data;
    } catch (err) {
      return err;
    }
  }

  if (props) {
    return (
      <S.CarWrapper>
        <S.CarBrand>{props.brand}</S.CarBrand>
        <S.CarModel>{props.model}</S.CarModel>
        <S.CarYear>{props.year}</S.CarYear>
        <S.CarNumber>{props.number}</S.CarNumber>
        <S.CarOwner>{props.owner}</S.CarOwner>
        <S.CarPhone>{props.phone}</S.CarPhone>
        <Button handleClick={() => handleDelete(props.id)}>X</Button>
      </S.CarWrapper>
    );
  } else {
    return <Title>No data from database</Title>;
  }
};

CarsCard.propTypes = {};

export default CarsCard;
