import { Route, Routes } from 'react-router-dom';
import { Session } from './pages/Session';
import { HomePage } from './pages/Home/HomePage';
import { HomeLayout } from './pages/_layout/HomeLayout';
import { UsersPage } from './pages/UsersPage/userPage';

export function Router() {
  return (
    <Routes>
      <Route path="/user/*" element={<Session />} />

      <Route path="/" element={<HomeLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/userspage" element={<UsersPage />} />
      </Route>
    </Routes>
  );
}
