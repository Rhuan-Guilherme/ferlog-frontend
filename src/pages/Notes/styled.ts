import styled from "styled-components";

export const PageConteiner = styled.main`
  color: ${props => props.theme.gray['700']} ;
  padding: 0 150px;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 1200px) {
    padding: 0 100px;
  }

  @media (max-width: 1000px) {
    padding: 0 60px;
  }

  @media (max-width: 800px) {
    padding: 0 20px;
  }
`

export const SectionContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;

  button{
    cursor: pointer;
  }
`