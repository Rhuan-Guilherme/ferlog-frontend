import { HeaderContainer, NavMenu } from "./styled";
import logo from '../../assets/logo-preta.svg'
import { Link } from "react-router-dom";

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} />
      <NavMenu>
        <ul>
          <Link to="/">Notas</Link>
          <Link to="/userspage">Usuários</Link>
        </ul>
      </NavMenu>
    </HeaderContainer>
  );
}