import { Route, Routes } from 'react-router-dom';
import { Session } from './pages/Session';

export function Router() {
  return (
    <Routes>
      <Route path="/user/*" element={<Session />} />
      <Route path='/' element={<h1>Home page</h1>} />
    </Routes>
  );
}
