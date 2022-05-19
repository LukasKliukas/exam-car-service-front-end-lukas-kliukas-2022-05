import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation/Navigation';

function App() {
  return (
    <div className='App'>
      <Navigation />
      <Routes>
        <Route path='/' element={<h1>Home page</h1>} />
        <Route path='/cars' element={<h1>All cars</h1>} />
      </Routes>
    </div>
  );
}

export default App;
