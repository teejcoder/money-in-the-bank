import './App.css';
import {Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login'
import Signup from './pages/Signup'

const App = () => {
  return (
    <section className='wrapper'>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
      </Routes>
    </section>
  );
};

export default App;
