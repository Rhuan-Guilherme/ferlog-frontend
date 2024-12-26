import styled from 'styled-components';

export const SessionContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 100vh;
  padding: 10px;

  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
`;

export const SessionContent = styled.section`
  background: linear-gradient(
    180deg,
    rgba(79, 164, 255, 1) 0%,
    rgba(33, 122, 255, 1) 35%,
    rgba(0, 86, 179, 1) 100%
  );
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1000px) {
    flex: 1;
    width: auto;
    img {
      width: 100px;
      height: 100px;
    }
  }
`;

export const SessionForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 30px;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 350px;

  h1 {
    font-size: 4.3rem;
    font-weight: 400;
    margin-bottom: 2rem;
  }
`;

export const InputContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  input {
    border: 1px solid ${(props) => props.theme.gray[500]};
    background-color: ${(props) => props.theme.gray[100]};
    padding: 1rem 0.5rem;
    border-radius: 6px;
  }
`;

export const ButtonLogin = styled.button`
  padding: 1rem 2rem;
  border-radius: 6px;
  font-weight: 700;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme.blue[500]};
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${(props) => props.theme.blue[700]};
  }
`;
