import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import * as S from './Navigation.style';
import logo from './../../assets/images/Logo-croped.png';
import AuthContext from '../../store/authContext';

const Navigation = (props) => {
  const tokenFromProps = props.token;
  const authCtx = useContext(AuthContext);

  function logout() {
    localStorage.setItem('token', '');
    authCtx.logout();
  }

  return (
    <S.NavigationHolder>
      <S.NavWrap>
        <img src={logo} alt='logo'></img>
        {!tokenFromProps && <Link to='/'>Register</Link>}
        {!tokenFromProps && <Link to='/login'>Login</Link>}
        {tokenFromProps && <Link to='/cars'>All Cars</Link>}
        {tokenFromProps && <Link to='/addCar'>Add A Car</Link>}
        {tokenFromProps && (
          <Link onClick={logout} to='/login'>
            Logout
          </Link>
        )}
      </S.NavWrap>
    </S.NavigationHolder>
  );
};

export default Navigation;
