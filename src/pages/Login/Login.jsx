import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Footer from '../../components/Footer/Footer';
import Input from '../../components/Input/Input';
import Title from '../../components/Title/Title';
import Wrapper from '../../components/Wrapper/Wrapper';
import AuthContext from '../../store/authContext';
import * as S from './Login.style';

const loginUrl = `${process.env.REACT_APP_SERVER_URL}/auth/login `;

const Login = () => {
  const authCtx = useContext(AuthContext);
  let navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  async function sendLoginFetch() {
    const registerObj = {
      email: email,
      password: password,
    };
    if (isThereErrors(registerObj)) {
      setErrorMsg('All fields are required !');
      return;
    }
    const resp = await fetch(loginUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(registerObj),
    });
    const atsInJs = await resp.json();

    if (atsInJs.success) {
      localStorage.setItem('token', atsInJs.data);
      authCtx.login();
      navigate('/cars');
    }
    if (atsInJs.success === false) {
      setIsError(true);
    }
  }
  function submitHandler(e) {
    e.preventDefault();
    sendLoginFetch();
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
    <>
      <S.Background>
        <Wrapper>
          <Title>Login with your created user :</Title>
          {isError && (
            <S.ErrorMsg>
              Incorrect email or password send to server ! Please check the data
              !
            </S.ErrorMsg>
          )}
          {errorMsg.length > 0 ? (
            <S.ErrorMsg>
              Please check the form ! No email or password is entered !
            </S.ErrorMsg>
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
      </S.Background>
      <Footer />
    </>
  );
};

export default Login;
