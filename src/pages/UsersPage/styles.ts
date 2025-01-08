import styled from "styled-components";

export const PageConteiner = styled.main`
  color: ${props => props.theme.gray['700']} ;
  padding: 0 150px;

  display: flex;
  flex-direction: column;
  gap: 2rem;
`

interface TypeButton{
  variant: 'delete' | 'normal';
}

export const DropDonwButtons = styled.button<TypeButton>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  cursor: pointer;
  background-color: transparent;

  &:hover{
    background-color: ${props => {
      if(props.variant !== 'delete'){
         return props.theme.blue['500']
      } else {
         return props.theme.red['500']
      }
    }};
    transition: all 0.1s ease-in-out;
    color: ${props => props.theme.gray['100']};
  }

`