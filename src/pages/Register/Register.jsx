import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import Title from '../../components/Title/Title';
import Wrapper from '../../components/Wrapper/Wrapper';

const regUrl = `${process.env.REACT_APP_SERVER_URL}/auth/register `;

const Register = () => {
  let navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  async function sendRegisterFetch() {
    const registerObj = {
      email: email,
      password: password,
    };

    if (isThereErrors(registerObj)) {
      setErrorMsg('All fields are required !');
      return;
    }

    const resp = await fetch(regUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(registerObj),
    });
    const atsInJs = await resp.json();

    if (atsInJs.success) {
      navigate('/login');
    }
    if (atsInJs.success === false) {
      setIsError(true);
    }
  }
  function submitHandler(e) {
    e.preventDefault();
    sendRegisterFetch();
  }
  function isThereErrors(dataToCheck) {
    const mustBeKeys = ['email', 'password'];
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
    <Wrapper>
      <Title>Create your user here :</Title>
      {isError && <h3>Please check the form ! Incorrect data sent</h3>}
      {errorMsg.length > 0 ? (
        <h3>Please check the form ! Incorrect data sent</h3>
      ) : (
        ''
      )}
      <form onSubmit={submitHandler}>
        <Input
          label='Add your email :'
          name='email'
          type='email'
          placeholder='Enter here'
          handleChange={(value) => setEmail(value)}
          initialValue={email}
        />
        <Input
          label='Add your password :'
          name='password'
          type='password'
          placeholder='Enter here'
          handleChange={(value) => setPassword(value)}
          initialValue={password}
        />
        <Button type='submit'>Submit</Button>
      </form>
    </Wrapper>
  );
};

export default Register;
