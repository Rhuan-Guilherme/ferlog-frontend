import { HeaderContainer, NavMenu } from "./styled";
import logo from '../../../../assets/logo-preta.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} />
      <NavMenu>
        <ul>
          <li>Notas</li>
          <li>Usuários</li>
        </ul>
      </NavMenu>
    </HeaderContainer>
  );
}