import React, { useContext } from 'react';
import * as S from './CarsCard.style';
import Button from './../Button/Button';
import Title from '../Title/Title';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../store/authContext';

const CarsCard = (props) => {
  const authCtx = useContext(AuthContext);
  let navigate = useNavigate();

  function handleDelete(id) {
    deleteFetch(id);
    window.location.reload();
    authCtx.login();
  }

  async function deleteFetch(id) {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_SERVER_URL}/cars/${id}`,
        {
          method: 'DELETE',
        }
      );
      const data = await res.json();
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
        <Button handleClick={() => handleDelete(props.id)}>
          <i className='icon fa fa-trash-o' aria-hidden='true'></i>
        </Button>
      </S.CarWrapper>
    );
  } else {
    return <Title>No data from database</Title>;
  }
};

CarsCard.propTypes = {};

export default CarsCard;
