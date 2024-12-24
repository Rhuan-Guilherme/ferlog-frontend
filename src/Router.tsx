import { Route, Routes } from 'react-router-dom';
import { Session } from './pages/Session';

export function Router() {
  return (
    <Routes>
      <Route path="/user/*" element={<Session />} />
    </Routes>
  );
}
