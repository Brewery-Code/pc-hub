import { Route, Routes, Navigate } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import styles from './Main.module.css';

export default function Main() {
  return (
    <div className='main'>
      <Routes>
        <Route path='/' element={<Navigate to='/home' />}></Route>
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}