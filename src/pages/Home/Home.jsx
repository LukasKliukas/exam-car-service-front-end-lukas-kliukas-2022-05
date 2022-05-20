import React, { useEffect, useState } from 'react';
import * as S from './Home.style';
import CarsList from './../../components/CarsList/CarsList';

const getData = async () => {
  try {
    const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/cars`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    const data = await res.json();
    console.log(data.data);
    return data.data;
  } catch (err) {
    return err;
  }
};

const Home = (props) => {
  const [data, setData] = useState([]);

  useEffect(
    () => async () => {
      setData(await getData());
    },
    []
  );

  return (
    <>
      <S.Wrapper>
        <S.SectionLeft>
          <CarsList data={data} />
        </S.SectionLeft>
        <S.SectionRight>Right</S.SectionRight>
      </S.Wrapper>
      ;
    </>
  );
};

export default Home;
