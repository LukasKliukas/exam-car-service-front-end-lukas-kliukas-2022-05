import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import AddCar from './pages/AddCar/AddCar';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

function App() {
  return (
    <div className='App'>
      <Navigation />
      <Routes>
        <Route path='/' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/cars' element={<Home />} />
        <Route path='/addCar' element={<AddCar />} />
      </Routes>
    </div>
  );
}

export default App;
