import React, { useEffect, useState } from 'react';
import * as S from './Home.style';
import CarsList from './../../components/CarsList/CarsList';
import Footer from '../../components/Footer/Footer';

const Home = (props) => {
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/cars`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        },
      });
      const data = await res.json();
      setData(data.data);
      return data.data;
    } catch (err) {
      return err;
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <S.Background>
        <S.Wrapper>
          <S.SectionLeft>
            <CarsList data={data} />
          </S.SectionLeft>
          <S.SectionRight></S.SectionRight>
        </S.Wrapper>
      </S.Background>
      <Footer />
    </>
  );
};

export default Home;
