import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Wrapper from './components/Wrapper/Wrapper';
import AddCar from './pages/AddCar/AddCar';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import AuthContext from './store/authContext';

function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  function login() {
    setIsUserLoggedIn(true);
  }

  function logout() {
    setIsUserLoggedIn(false);
  }

  const ctxValue = {
    isUserLoggedIn,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={ctxValue}>
      <div className='App'>
        <Navigation />
        <Routes>
          <Route path='/' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/cars' element={<Home />} />
          <Route path='/addCar' element={<AddCar />} />
          <Route
            path='*'
            element={
              <Wrapper>
                <h2>Page not found 404 error...</h2>
              </Wrapper>
            }
          />
        </Routes>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
