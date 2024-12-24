import { Route, Routes } from 'react-router-dom';
import { SessionContainer, SessionContent, SessionForm } from './styled';

import logo from '../../assets/logo.svg';
import { LoginForm } from './Components/Login';
import { RegisterForm } from './Components/register';

export function Session() {
  return (
    <SessionContainer>
      <SessionForm>
        <Routes>
          <Route path="/create" element={<RegisterForm />} />
          <Route path="/" element={<LoginForm />} />
        </Routes>
      </SessionForm>

      <SessionContent>
        <img src={logo} />
      </SessionContent>
    </SessionContainer>
  );
}
