import { Route, Routes } from 'react-router-dom';
import './App.css';
import FlowerItem from './pages/Flowers/FlowerItem';
import Flowers from './pages/Flowers/Flowers';
import Home from './pages/Home/Home';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/flowers' element={<Flowers />}></Route>
        <Route path='/flowers/:id' element={<FlowerItem />}></Route>

      </Routes>
    </div>
  );
}

export default App;
