import React, { useState } from 'react';
import Input from '../../components/Input/Input';
import Wrapper from '../../components/Wrapper/Wrapper';
import Button from '../../components/Button/Button';
import * as S from './AddCar.style';
import Title from '../../components/Title/Title';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';

const token = localStorage.getItem('token');

const AddCar = (props) => {
  let navigate = useNavigate();

  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [number, setNumber] = useState('');
  const [owner, setOwner] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [popUpInfo, setPopUpInfo] = useState('');

  async function sendPostFetch() {
    const newPostObj = {
      brand: brand,
      model: model,
      number: number,
      owner: owner,
      phone: phone,
      year: year,
    };
    if (isThereErrors(newPostObj)) {
      alert('All fields are required to fill !');
      setBrand('');
      setModel('');
      setYear('');
      setNumber('');
      setOwner('');
      setPhone('');
      return;
    }
    const resp = await fetch(`${process.env.REACT_APP_SERVER_URL}/cars`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPostObj),
    });
    const atsInJs = await resp.json();
    console.log(atsInJs);
    if (atsInJs.affectedRows > 0) {
      setMessage(atsInJs.msg);
      setTimeout(function () {
        navigate('/cars');
      }, 2000);
    }
    if (atsInJs.err) {
      setMessage(atsInJs.err);
    }
    setPopUpInfo('Car was succesefully created !');
  }
  function submitHandler(e) {
    e.preventDefault();
    sendPostFetch();

    // window.location.reload();
  }

  function isThereErrors(dataToCheck) {
    const mustBeKeys = ['brand', 'model', 'number', 'owner', 'phone', 'year'];
    const values = Object.values(dataToCheck);
    const valuesBool = values
      .map((val) => !!val)
      .filter((val) => val === false);
    const ourKeys = Object.keys(dataToCheck);
    const allKeys = mustBeKeys.filter((mustKey) => !ourKeys.includes(mustKey));
    if (valuesBool.length > 0 || allKeys.length > 0) {
      return true;
    }
    return false;
  }

  return (
    <>
      <S.Background>
        <Wrapper>
          <Title>Add a new Car :</Title>
          {popUpInfo.length > 0 ? <S.InfoPopUp>{popUpInfo}</S.InfoPopUp> : ''}
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
      </S.Background>
      <Footer />
    </>
  );
};

AddCar.propTypes = {};

export default AddCar;
