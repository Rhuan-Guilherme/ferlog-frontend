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

export const BoxNotes = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
`


export const CardsNotes = styled.div`
  min-width: 300px;
  border: 1px solid ${props => props.theme.gray['200']};
  padding: 1rem;
  border-radius: 8px;

  h3{
    margin-bottom: 10px;
  }

  p{
    margin-bottom: 10px;
    color: ${props => props.theme.gray['500']};


    span{
      color: ${props => props.theme.gray['900']};
      font-weight: 500;
    }

    &:last-child{
      margin-bottom: 0;
    }

  }

  div {
    display: flex;
    gap: 10px;
  }
`