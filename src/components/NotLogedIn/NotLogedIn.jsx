import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import Wrapper from '../Wrapper/Wrapper';
import * as S from './NotLogedIn.style';

const NotLogedIn = () => {
  return (
    <Wrapper>
      <S.H2Info>You are not logged in !</S.H2Info>
      <p>Please login to see the content</p>
      <Link to='/login'>
        <Button>Login</Button>
      </Link>
    </Wrapper>
  );
};

export default NotLogedIn;
