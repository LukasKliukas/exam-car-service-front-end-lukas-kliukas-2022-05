import React from 'react';
import CarsCard from './../CarsCard/CarsCard';
import * as S from './CarsList.style';

const CarsList = ({ data }) => {
  console.log(data);
  if (data.length > 0) {
    return (
      <S.CarsGrid>
        {data.length > 0 &&
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
      </S.CarsGrid>
    );
  } else {
    return <h2>No cars created, please create some in add a car page !</h2>;
  }
};

export default CarsList;
