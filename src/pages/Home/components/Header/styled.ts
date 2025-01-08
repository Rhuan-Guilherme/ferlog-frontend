import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 90px;
  background-color: ${props => props.theme.gray['100']};
  border-bottom: 2px solid ${props => props.theme.gray['50']};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 150px;

  img{
    width: 50px;
  }
`

export const NavMenu = styled.nav`
  ul{
    display: flex;
    list-style-type: none;
    gap: 20px;

    li{
      padding: 10px;
      border-radius: 5px;
    }

    li:hover{
      cursor: pointer;
      background-color: ${props => props.theme.blue['400']};
      color: ${props => props.theme.white};
      transition: all 0.2s ease-in-out;
    }
  }
`