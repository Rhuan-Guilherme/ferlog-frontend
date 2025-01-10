import { Route, Routes, useNavigate } from 'react-router-dom';
import { SessionContainer, SessionContent, SessionForm } from './styled';

import logo from '../../assets/logo.svg';
import { LoginForm } from './Components/Login';
import { RegisterForm } from './Components/register';
import { useContext } from 'react';
import { userContext } from '../../context/UserContext';

export function Session() {
  const navigate = useNavigate();
  const { loged } = useContext(userContext);

  if (loged) {
    navigate('/');
    return null;
  }
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
