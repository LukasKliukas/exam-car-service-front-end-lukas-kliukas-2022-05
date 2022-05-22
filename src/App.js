import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import AddCar from './pages/AddCar/AddCar';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className='App'>
      <Navigation />
      <Routes>
        <Route path='/' element={<h1>Home</h1>} />
        <Route path='/cars' element={<Home />} />
        <Route path='/addCar' element={<AddCar />} />
      </Routes>
    </div>
  );
}

export default App;
