import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Home.style';

const Home = (props) => {
  return (
    <>
      <S.Wrapper>
        <S.SectionLeft>Left</S.SectionLeft>
        <S.SectionRight>Right</S.SectionRight>
      </S.Wrapper>
      ;
    </>
  );
};

Home.propTypes = {};

export default Home;
