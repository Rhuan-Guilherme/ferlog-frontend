import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { api } from '../lib/axios';

interface UserProviderProps {
  children: ReactNode;
}

interface User {
  id: string;
  name: string;
  email: string;
}

interface UserProviderTypes {
  authenticateUser: (email: string, password: string) => void;
  loged: boolean;
  user: User | null;
}

export const userContext = createContext({} as UserProviderTypes);

export function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState(null);
  const [loged, setLoged] = useState(false);

  const getUser = useCallback(async (token: string) => {
    try {
      const response = await api.get('/user', {
        headers: { Authorization: 'Bearer ' + token },
      });
      setUser(response.data);
      setLoged(true);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const authenticateUser = useCallback(
    async (email: string, password: string) => {
      try {
        const reponse = await api.post('/user/session', { email, password });
        const token = reponse.data.token;
        localStorage.setItem('@ferlog/token', token);
        getUser(token);
      } catch (error) {
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
    <userContext.Provider value={{ loged, user, authenticateUser }}>
      {children}
    </userContext.Provider>
  );
}
