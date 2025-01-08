import { Route, Routes } from 'react-router-dom';
import { Session } from './pages/Session';
import { HomePage } from './pages/Home/HomePage';

export function Router() {
  return (
    <Routes>
      <Route path="/user/*" element={<Session />} />
      <Route path='/' element={<HomePage />} />
    </Routes>
  );
}
