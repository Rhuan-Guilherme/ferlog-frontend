import {
  DropDonwButtons,
  HeaderContainer,
  NavMenu,
  UserProfileButton,
} from './styled';
import logo from '../../assets/logo-preta.svg';
import { Link } from 'react-router-dom';
import { Avatar, DropdownMenu, Flex } from '@radix-ui/themes';
import { useContext } from 'react';
import { userContext } from '../../context/UserContext';
import { SignOut } from 'phosphor-react';

export function Header() {
  const { user, logoffUser } = useContext(userContext);

  return (
    <HeaderContainer>
      <img src={logo} />
      <NavMenu>
        <ul>
          <li>
            <Link to="/">Notas</Link>
          </li>
          <li>
            <Link to="/userspage">Usuários</Link>
          </li>
        </ul>

        <Flex gap="2">
          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
              <UserProfileButton>
                <Avatar fallback={user ? user.name.charAt(0) : 'A'} />
              </UserProfileButton>
            </DropdownMenu.Trigger>

            <DropdownMenu.Content align="center">
              <DropdownMenu.Item
                hidden={false}
                style={{ fontWeight: 'bold', fontSize: '16px' }}
              >
                {user && user.name}
              </DropdownMenu.Item>
              <DropdownMenu.Item>{user && user.email}</DropdownMenu.Item>
              <DropdownMenu.Item>{user && user.cargo}</DropdownMenu.Item>
              <DropDonwButtons onClick={logoffUser}>
                <SignOut size={15} />
                Sair
              </DropDonwButtons>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </Flex>
      </NavMenu>
    </HeaderContainer>
  );
}
