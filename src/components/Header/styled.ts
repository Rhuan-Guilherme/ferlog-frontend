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
  margin-bottom: 40px;

  img{
    width: 50px;
  }
`

export const NavMenu = styled.nav`
  display: flex;
  gap: 10px;

  ul{
    display: flex;
    list-style-type: none;
    gap: 10px;

    li{
      padding: 10px;
      border-radius: 5px;
      transition: all 0.2s ease-in-out;


       a {
        text-decoration: none;
        color: ${props => props.theme.gray['700']};
        font-weight: 700;
      }
    }

    li:hover{
      cursor: pointer;
      background-color: ${props => props.theme.blue['400']};

      a{
        color: ${props => props.theme.white};
      }
    }
  }
`

export const DropDonwButtons = styled.button`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 5px;
  cursor: pointer;
  background-color: transparent;
  padding: 10px;
  border-radius: 4px ;

  &:hover{
    background-color: ${props => props.theme.red['500']};
    transition: all 0.1s ease-in-out;
    color: ${props => props.theme.gray['100']};
  }

`

export const UserProfileButton = styled.button`
  cursor: pointer;
`