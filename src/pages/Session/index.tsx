import { Route, Routes } from 'react-router-dom';
import { SessionContainer, SessionContent, SessionForm } from './styled';

import logo from '../../assets/logo.svg';
import { Login } from './Components/Login';

export function Session() {
  return (
    <SessionContainer>
      <SessionForm>
        <Routes>
          <Route path="/create" element={<SessionForm>Create</SessionForm>} />
          <Route path="/" element={<Login />} />
        </Routes>
      </SessionForm>

      <SessionContent>
        <img src={logo} />
      </SessionContent>
    </SessionContainer>
  );
}
