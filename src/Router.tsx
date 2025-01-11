import { Route, Routes } from 'react-router-dom';
import { Session } from './pages/Session';
import { HomeLayout } from './pages/_layout/HomeLayout';
import { UsersPage } from './pages/UsersPage/userPage';
import { NotesPage } from './pages/Notes/NotesPage';

export function Router() {
  return (
    <Routes>
      <Route path="/user/*" element={<Session />} />

      <Route path="/" element={<HomeLayout />}>
        <Route path="/" element={<NotesPage />} />
        <Route path="/userspage" element={<UsersPage />} />
      </Route>
    </Routes>
  );
}
