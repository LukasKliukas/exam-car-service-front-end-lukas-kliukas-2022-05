import React, { useState } from 'react';
import Input from '../../components/Input/Input';
import Wrapper from '../../components/Wrapper/Wrapper';
import Button from '../../components/Button/Button';
import * as S from './AddCar.style';

const token = localStorage.getItem('token');

const AddCar = (props) => {
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [number, setNumber] = useState('');
  const [owner, setOwner] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  async function sendPostFetch() {
    const newPostObj = {
      brand: brand,
      model: model,
      number: number,
      owner: owner,
      phone: phone,
      year: year,
    };
    const resp = await fetch(`${process.env.REACT_APP_SERVER_URL}/cars`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPostObj),
    });
    const atsInJs = await resp.json();
    console.log('atsInJs ===', atsInJs);

    if (atsInJs.msg) {
      setMessage(atsInJs.msg);
    }
    if (atsInJs.err) {
      setMessage(atsInJs.err);
    }
  }

  function submitHandler(e) {
    e.preventDefault();
    sendPostFetch();
  }

  return (
    <Wrapper>
      <h1>Add a new Car :</h1>
      <form onSubmit={submitHandler}>
        {message && <h2>{message}</h2>}
        <Input
          label='Add a car brand name :'
          name='brand'
          type='text'
          placeholder='Enter here'
          handleChange={(value) => setBrand(value)}
          initialValue={brand}
        />
        <Input
          label='Add a car model :'
          name='model'
          type='text'
          placeholder='Enter here'
          handleChange={(value) => setModel(value)}
          value={model}
        />
        <Input
          label='Add a year of a car :'
          name='year'
          type='text'
          placeholder='Enter here'
          handleChange={(value) => setYear(value)}
          value={year}
        />
        <Input
          label='Add a car number plate :'
          name='number'
          type='text'
          placeholder='Enter here'
          handleChange={(value) => setNumber(value)}
          value={number}
        />
        <Input
          label='Add a car owner name and surname :'
          name='owner'
          type='text'
          placeholder='Enter here'
          handleChange={(value) => setOwner(value)}
          value={owner}
        />
        <Input
          label='Add a car owner phone number :'
          name='phone'
          type='text'
          placeholder='Enter here'
          handleChange={(value) => setPhone(value)}
          value={phone}
        />
        <Button type='submit'>Submit</Button>
      </form>
    </Wrapper>
  );
};

AddCar.propTypes = {};

export default AddCar;
