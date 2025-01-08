import { Route, Routes } from 'react-router-dom';
import { Session } from './pages/Session';
import { HomePage } from './pages/Home/HomePage';
import { HomeLayout } from './pages/layout/HomeLayout';

export function Router() {
  return (
    <Routes>
      <Route path="/user/*" element={<Session />} />

      <Route path='/' element={<HomeLayout />}>
       <Route path='/' element={<HomePage />} /> 
       <Route path='/table' element={<h1>Table</h1>} /> 
      </Route>
    </Routes>
  );
}
