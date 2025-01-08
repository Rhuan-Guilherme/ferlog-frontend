/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { api } from '../lib/axios';
import { useNavigate } from 'react-router-dom';

interface UserProviderProps {
  children: ReactNode;
}

interface User {
  id: string;
  name: string;
  email: string;
  role: 'ADMIN' | 'MEMBER';
}

interface UserProviderTypes {
  authenticateUser: (email: string, password: string) => void;
  loged: boolean;
  user: User | null;
  error: string 
}

export const userContext = createContext({} as UserProviderTypes);

export function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState(null);
  const [loged, setLoged] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate()
  

  const getUser = useCallback(async (token: string) => {
    try {
      const response = await api.get('/user', {
        headers: { Authorization: 'Bearer ' + token },
      });
      setUser(response.data);
      setLoged(true);
      navigate('/')
    } catch (error) {
      console.error(error);
    }
  }, [navigate]);

  const authenticateUser = useCallback(
    async (email: string, password: string) => {
      try {
        const reponse = await api.post('/user/session', { email, password });
        const token = reponse.data.token;
        localStorage.setItem('@ferlog/token', token);
        getUser(token);
      } catch (error: any) {
        setError(error.response.data.message);
        console.error(error);
      }
    },
    [getUser]
  );

  useEffect(() => {
    const token = localStorage.getItem('@ferlog/token');
    if (token) {
      getUser(token);
    } else {
      localStorage.removeItem('@ferlog/token');
      setLoged(false);
      setUser(null);
    }
  }, [getUser]);

  return (
    <userContext.Provider value={{ loged, user, error, authenticateUser }}>
      {children}
    </userContext.Provider>
  );
}
