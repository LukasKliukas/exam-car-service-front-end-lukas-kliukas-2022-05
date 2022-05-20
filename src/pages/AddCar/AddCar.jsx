import React from 'react';
import PropTypes from 'prop-types';
import Input from '../../components/Input/Input';
import Wrapper from '../../components/Wrapper/Wrapper';

const AddCar = (props) => {
  return (
    <Wrapper>
      <h1>Add a Car :</h1>
      <Input
        label='Add a new task'
        name='input'
        type='text'
        placeholder='Text...'
        handleChange={() => {
          console.log('labas');
        }}
      />
    </Wrapper>
  );
};

AddCar.propTypes = {};

export default AddCar;
