import React from 'react';
import CarsCard from './../CarsCard/CarsCard';
import * as S from './CarsList.style';

const CarsList = ({ data }) => {
  return (
    <S.CarsGrid>
      {data &&
        data.map((car) => (
          <CarsCard
            key={car.id}
            brand={car.brand}
            model={car.model}
            year={car.year}
            number={car.number}
            owner={car.owner}
            phone={car.phone}
          />
        ))}
      {!data && <h2>No cars created, please create some in add car page !</h2>}
    </S.CarsGrid>
  );
};

export default CarsList;
