import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import * as S from './Navigation.style';
import logo from './../../assets/images/Logo-croped.png';
import AuthContext from '../../store/authContext';

const Navigation = () => {
  const gotToken = localStorage.getItem('token');
  const authCtx = useContext(AuthContext);

  function logout() {
    localStorage.setItem('token', '');
    authCtx.logout();
  }

  return (
    <S.NavigationHolder>
      <S.NavWrap>
        <img src={logo} alt='logo'></img>
        {!gotToken && <Link to='/'>Register</Link>}
        {!gotToken && <Link to='/login'>Login</Link>}
        {gotToken && <Link to='/cars'>All Cars</Link>}
        {gotToken && <Link to='/addCar'>Add A Car</Link>}
        {gotToken && (
          <Link onClick={logout} to='/login'>
            Logout
          </Link>
        )}
      </S.NavWrap>
    </S.NavigationHolder>
  );
};

export default Navigation;
