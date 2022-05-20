import React from 'react';
import PropTypes from 'prop-types';

const CarsCard = (props) => {
  return (
    <div>
      <h2>{props.brand}</h2>
      <h2>{props.model}</h2>
      <h3>{props.number}</h3>
      <h4>{props.year}</h4>
      <h5>{props.owner}</h5>
      <h5>{props.phone}</h5>
    </div>
  );
};

CarsCard.propTypes = {};

export default CarsCard;
